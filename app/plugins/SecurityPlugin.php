<?php

use Phalcon\Di\Injectable;
use Phalcon\Events\Event;
use Phalcon\Mvc\Dispatcher;
use Phalcon\Acl\Component;
use Phalcon\Acl\Enum;
use Phalcon\Acl\Role;
use Phalcon\Acl\Adapter\Memory;
class SecurityPlugin extends Injectable
{
    private function getAcl()
    {
        $acl = new Phalcon\Acl\Adapter\Memory();
        $acl->setDefaultAction(Enum::DENY);
        $roles= array(
        'Admin'=> new Role('Admin'),
        'Guest'=> new Role('Guest'),
        );
        foreach ($roles as $role)
        {
            $acl->addRole($role);
        };

        $privateResAdmin = array(
            'admin'=> array('testact','index'),
            'admingbr'=> array('index','DateCompany','DateFond'),
            'adminhistory'=> array('index','DateSort','DateInit','exitFromAccount'),
        );

        foreach($privateResAdmin as $resource => $actions)
        {
            $acl->addComponent(new Component($resource), $actions);
        }

        //Разрешить доступ админу для всех приватных элементов
        foreach($privateResAdmin as $resource => $actions)
        {
            foreach($actions as $action)
            {
                $acl->allow('Admin',$resource,$action); 
            }
        }

        $publicRes = array(
            'index'=>array('index','register'),
            'enter'=> array('start','register','index'),
            'andrew'=>array('index','testact'),
        );
        foreach($publicRes as $resource => $actions)
        {
            $acl->addComponent(new Component($resource), $actions);
        }

        //Разрешить доступ всем для всех публичных элементов
        foreach ($roles as $role)
        {
            foreach($publicRes as $resource => $actions)
            {
                $acl->allow($role->getName(),$resource,'*');
            }
        }

        return $acl;
    }

    public function beforeExecuteRoute(
        Event $event, 
        Dispatcher $containerspatcher
    ) {
        $auth = $this->session->get('auth'); 
        // print_r($auth);
        // throw new Exception("new ex");
        $role = $auth->role;
        if($role === null)
        {
             $role = 'Guest';
        }

        $controller = $containerspatcher->getControllerName();
        $action     = $containerspatcher->getActionName();

        $acl = $this->getAcl();
        $allowed = $acl->isAllowed($role, $controller, $action);
        
        if (true !== $allowed) {
            $this->flash->error("You do not have access to this module");
            $containerspatcher->forward(
                [
                    'controller' => 'enter',
                    'action'     => 'start',
                ]
            );
            return false;
        }
    }
}