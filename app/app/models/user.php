<?php
namespace app\models;

use Phalcon\Mvc\Model;

class user extends Model
{
	public $id;
	public $fio;
	public $divisionId;
	public $login;
	public $hashPassword;
	public $role;
}
