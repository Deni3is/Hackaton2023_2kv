<?php

$db = [
    'host' => 'postgresql',
    'username' => 'postgres',
    'password' => 'postgres',
    'dbname' => 'postgres',
    'schema' => 'public'
];

if ( $_SERVER['SERVER_NAME'] != 'localhost' ) {
    $db = array_merge( $db, [
    ] );
}

return new \Phalcon\Config( ['db' => $db ] );
