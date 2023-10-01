<?php
namespace app\controllers;
use Phalcon\Mvc\Controller;
use app\models\user;

class EnterController extends Controller
{
	public function indexAction()
	{

		
	}
	private function _registerSession($user)
	{
		$this->session->set('auth', $user);
	}
	private function _dispath($auth)
	{
			
		if($auth->role == 'Admin')
		{
			return $this->dispatcher->forward(
				[
					'controller' => 'admingbr',
					'action'     => 'index',    
				]
			);	
		}
		return false;
	}

	public function startAction()
	{	
	//Раскоментировать!
		if(null !== $this->session->get('auth'))
		{
			if($this->_dispath($this->session->get('auth')) !== false)
			{
				return;
			}
		}
		
		if(true === $this->request->isPost())
		{$user =(object)array();
			$email = $this->request->getPost('login');
			$password = $this->request->getPost('password');
			$item = user::findFirst(["login = '$email' AND hashpassword='$password'"]);
			if(null !== $item)
			{
				echo $item->id;
				$user->id = $item->id;
				$user->login = $item->login;
				$user->role = $item->role;

				if($user->role === 'Admin')
				{
					$adm = user::findFirst(["id=$user->id"]);
					$user->APCN = $adm->apcn;
				}

			}

			// echo("$user->id"."___"."$user->login"."___"."$user->role");
			// throw new Exception("new ex");
		}
		if(null !==$user)
		{
			$this->_registerSession($user);
			if($this->_dispath($user) !== false)
			{
				return;
			}
			
			$this->flash->error('Something wrong');
		}
		return $this->dispatcher->forward(
            [
                'controller' => 'enter',
                'action'     => 'index',
            ]
        );

	}


	

	
}