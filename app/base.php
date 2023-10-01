<?php

use Phalcon\Loader;
use Phalcon\Tag;
use Phalcon\Mvc\Url;
use Phalcon\Mvc\Router;
use Phalcon\Mvc\View;
use Phalcon\Events\Manager;
use Phalcon\Events\Event;
use Phalcon\Dispatcher\Exception;
use Phalcon\Mvc\Dispatcher;
use Phalcon\Di\FactoryDefault;
use Phalcon\Db\Adapter\Pdo\Postgresql;
use Phalcon\Mvc\Model\Metadata\Stream;
use Phalcon\Mvc\Application;

define( 'BASE_PATH', __DIR__ );
define( 'APP_PATH', BASE_PATH . '/app' );

$loader = new Loader();
$loader->registerNamespaces( [ 'app' => APP_PATH ] );
$loader->registerDirs([
        APP_PATH . '/controllers/',
        APP_PATH . '/models/',

    ]);
$loader->register();

$di = new FactoryDefault();

$di->setShared( 'config', function () {
    return include BASE_PATH . '/config.php';
} );

$di->setShared( 'db', function () {
    $db = $this->getConfig()->db;
    return new Postgresql( [
        'host' => $db->host,
        'username' => $db->username,
        'password' => $db->password,
        'dbname' => $db->dbname,
        'schema'=>$db->schema

    ] );
} );

$di->setShared ( 'tag' , function () {
    Tag::setTitleSeparator ( ' | ' );
    return new Tag;
} );

$di->setShared ( 'view' , function () {
        $view = new View();
        $view->setViewsDir ( APP_PATH . '/views/' );
        $view->setPartialsDir ( '/assets/' );
        $view->setLayoutsDir ( '/layouts/' );
        
        return $view;
    } );

$di->setShared( 'url', function () {
    $url = new Url();
    $url->setBaseUri( '/' );
    return $url;
} );

$di->setShared( 'router', function () {
    
    $rtr = new Router;
    $manRout = include_once 'plugins/Route.php';
    foreach($manRout as $Rout=>$value)
    {
           if(null !==$value['way'])
            {
                $rtr->add($value['way'],$value['controllerPath']);
            }
            else
            {
                $rtr->notFound( $value['controllerPath'] );
            }
    }  
    return $rtr;
} );

$di->setShared('session',function()
{
    $session = new Phalcon\Session\Manager();
    $files   = new Phalcon\Session\Adapter\Stream(
        [
            'savePath' => '/tmp',
        ]
    );
    $session->setAdapter($files);
    $session->start();
    return $session;
});


$di->setShared( 'dispatcher', function() {
    $em = new Manager();
    $em->attach(
        'dispatch:beforeException',
        function ( Event $ev, $dp, \Exception $ex ) {
            if ( $ex instanceof Exception ) {
                $dp->forward( [
                    'namespace' => 'app\\controllers',
                    'controller' => 'index',
                    'action' => 'err404',
                ] );
                return false;
            }
        }
    );
    include __DIR__ . '/plugins/SecurityPlugin.php';
    $em->attach(
        'dispatch:beforeExecuteRoute',
        new SecurityPlugin()
    );
    $dp = new Dispatcher();
    $dp->setEventsManager( $em );
    return $dp;
} );

$di->setShared( 'modelsMetadata', function () {
    $md = APP_PATH . '/tmp/metadata/';
    if ( !is_dir( $md ) ) mkdir( $md, 0777, true );
    return new Stream( [ 'metaDataDir' => $md ] );
} );
