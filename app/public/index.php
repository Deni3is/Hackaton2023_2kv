<?php

use Phalcon\Mvc\Application;

try {
    include __DIR__ . '/../base.php';
    $app = new Application( $di );
    $_ru = $_SERVER["REQUEST_URI"];
    $app->handle( $_ru )->send();
} catch ( \Exception $e ) {
    echo "<b>Exception:</b>{$e->getMessage()}";
    echo "<pre>{$e->getTraceAsString()}</pre>";
}
