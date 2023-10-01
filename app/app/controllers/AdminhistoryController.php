<?php 
namespace app\controllers;

use Phalcon\Mvc\Controller;
use app\models\user;

class AdminhistoryController extends Controller
{
    public function indexAction()
    {
        $this->view->user = json_encode(user::find());

    }


    public function DateInitAction()
    {

        if(true === $this->request->isPost())
        {
            $hi = user::find();
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


    public function err404Action()
    {
        $this->response->setStatusCode( 404 );
        $this->tag->appendTitle( 'Error 404' );
    }

    public function exitFromAccountAction()
    {
        $this->session->set('auth', null);

        header('Location: Http://'.$_SERVER['HTTP_HOST'].'/');
        
    }
}