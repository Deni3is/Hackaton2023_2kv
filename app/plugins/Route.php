<?php
return array(
        'secondRout'=>array(
            'way'=>'/',
            'controllerPath'=>array(
                'namespace' => 'app\\controllers',
                'controller' => 'enter',
                'action' => 'start',
            ),
        ),
        'notFound'=>array(
            // 'way'=>'/',
            'controllerPath'=>array(
                'namespace' => 'app\\controllers',
                'controller' => 'index',
                'action' => 'err404',
            ),
        ),
        'session'=>array( 
            'way'=>'/session',
            'controllerPath'=>array(
                'namespace' => 'app\\controllers',
                'controller' => 'enter',
                'action' => 'start',
            ),
        ),
        'adminhistory'=>array( 
            'way'=>'/adminhistory',
            'controllerPath'=>array(
                'namespace' => 'app\\controllers',
                'controller' => 'adminhistory',
                'action' => 'index',
            ),
        ),
        'admingbr'=>array( 
            'way'=>'/admingbr',
            'controllerPath'=>array(
                'namespace' => 'app\\controllers',
                'controller' => 'admingbr',
                'action' => 'index',
            ),
        ),
        'adminmaps'=>array( 
            'way'=>'/adminmaps',
            'controllerPath'=>array(
                'namespace' => 'app\\controllers',
                'controller' => 'adminmaps',
                'action' => 'index',
            ),
        ),
        'adminpcn'=>array( 
            'way'=>'/adminpcn',
            'controllerPath'=>array(
                'namespace' => 'app\\controllers',
                'controller' => 'adminpcn',
                'action' => 'index',
            ),
        ),
        'admints'=>array( 
            'way'=>'/admints',
            'controllerPath'=>array(
                'namespace' => 'app\\controllers',
                'controller' => 'admints',
                'action' => 'index',
            ),
        ),
        'adminhistoryexit'=>array( 
            'way'=>'/exitFromAccount',
            'controllerPath'=>array(
                'namespace' => 'app\\controllers',
                'controller' => 'adminhistory',
                'action' => 'exitFromAccount',
            ),
        ),
        'testglob'=>array(
            'way'=>'/:controller/:action/:params',
            'controllerPath'=>array(
            'namespace' => 'app\\controllers',
            'controller' => 1 ,
            'action'     => 2 ,
            'params'     => 3 ,
            ),
        ),

);