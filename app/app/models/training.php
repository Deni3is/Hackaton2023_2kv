<?php
namespace app\models;

use Phalcon\Mvc\Model;

class training extends Model
{
	public $id;
	public $activityKindId;
	public $totalScore;
	public $userId;
	public $startActivityDateTime;
	public $endActivityDateTime;
}
