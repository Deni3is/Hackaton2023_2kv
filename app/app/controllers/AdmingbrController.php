<?php 
namespace app\controllers;

use Phalcon\Mvc\Controller;
use app\models\company;
use app\models\fund;


class AdmingbrController extends Controller
{
    public function indexAction()
    {
    }



    public function DateFondAction()
    {

        if(true === $this->request->isPost())
        {
            $hi = fund::find();
            $response = new \Phalcon\Http\Response();
            if(count($hi) >0)
            {
                $response->setContent(json_encode($hi));
            }
            else
            {
                $response->setContent(""); 
            }
            return $response;
        }
    }  
    public function DateCompanyAction()
    {

        if(true === $this->request->isPost())
        {
            $hi = company::find();
            $response = new \Phalcon\Http\Response();
            if(count($hi) >0)
            {
                $response->setContent(json_encode($hi));
            }
            else
            {
                $response->setContent(""); 
            }
            return $response;
        }
    }

 
}