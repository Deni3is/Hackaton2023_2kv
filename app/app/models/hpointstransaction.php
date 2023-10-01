<?php
namespace app\models;

use Phalcon\Mvc\Model;

class hpointstransaction extends Model
{
	public $id;
	public $amount;
	public $referralId;
	public $userId;
}
