<?php

use Phalcon\Db\Adapter\Pdo\Postgresql;

function load_sql_file($db, $sf ) {
    if ( !file_exists( $sf ) ) return;
    echo "Load SQL file: $sf\n";
    $sa = [ '--', '/*', '//' ];
    $sql = '';
#изменен запуск транзакции beginTransaction()
    $db->begin();
    foreach ( file( $sf ) as $fl ) {
        try {
            $fl = trim( $fl );
            if ( empty( $fl ) ) continue;
            $sw = substr( $fl, 0, 2 );
            $ew = substr( $fl, -1, 1 );
            if ( in_array( $sw, $sa ) ) continue;
            $sql = "$sql $fl";
            if ( $ew != ';' ) continue;
#Замена
            $db->query( $sql );
            $sql = '';
        } catch ( Exception $e ) {
            $db->rollBack();
            echo( $e->getMessage() );
            exit( 1 );
        }
    }
    $db->commit();
}

try{
    chdir( __DIR__ );

#Подключение к БД
    require_once 'config.php';
    $dc = [
    '0'=>$db['host'],
    '1'=>$db['username'],
    '2'=>$db['password'],
    '3'=>$db['dbname']];
#host username passw 
    $db = new Postgresql( [
        'host' => $dc[0],
        'username' => $dc[1],
        'password' => $dc[2],
        'dbname' => $dc[3]
    ] );
    $opt = array_slice( $argv, 1 );
    @list($env ) = $opt;
    $tn = 'migrations';
    echo "Connection: host: $dc[0] user: $dc[1] db name/migrations name:$dc[3]/$tn\n";


############################################################################

#Создание таблиц, которых нет

//Если нет таблицы миграций 
    $sf = "./schema/schemamigration.sql";
    if ( !file_exists( $sf ) ) die("Schema Migrations Error");
    if ( !$db->tableExists( "migrations" ) ) load_sql_file( $db, $sf );
   
//Если нет таблицы логер
    $sf = "./schema/schemalog.sql";
    if ( !file_exists( $sf ) ) die("Schema Loger Error");
    if ( !$db->tableExists( "log" ) ) load_sql_file( $db, $sf );

#код сюда

#

############################################################################


    $last = false;
    $r = $db->query( "select * from $tn order by ts desc limit 1" );
    if ($r->execute()) {
        $last = (int) $r->fetchAll( 2 )[ 0 ][ 'ts' ];  
        echo "Last Update:{$last}\n";
    }
    $update = [];
    foreach ( glob( './schema/update/*.sql' ) as $uf ) {
#Разбивает файл на части
        $k = basename( $uf, 'update.sql' );
        $dt = (int) $k ;
        if ( $last  && $dt <= $last ) continue;
        $update[ $dt ] = [ $uf, $k ];
    }
    if ( !empty( $update ) ) {
#Удаление метаданных
        foreach ( glob( './app/tmp/metadata/*' ) as $f ) {
            if ( unlink( $f ) ) continue;
            echo "Unlink $f Failed\n";
        }
#Сортируем файлы миграций 
        ksort( $update );
#Для всех файлов производим выполнение функции считывание из них данных и запуск скриптов
        foreach ( $update as $dat ) {
            list( $uf, $k ) = $dat;
            load_sql_file( $db, $uf );
            $r = $db->prepare( "insert into $tn (code,ts) values(?,?)")->execute([   
                'update', $k
            ]);
            if ( !$r ) die( "Update Error: $uf" );
        }
    }
    if ( strpos( $env, 'demo' ) !== false ) {
        load_sql_file( $db, './schema/demo.sql' );
        echo "demo is compleate";
    }
    die( "Migration Finished\n" );

}catch(Exception $e){

    $m = $e->getMessage();
    $t = $e->getTraceAsString();
    die( "Exception: $m\n$t\n" );
}