<?php
namespace app\models;

use Phalcon\Mvc\Model;

class fund extends Model
{
	public $id;
	public $name;
	public $description;
	public $bankAccount;
}

