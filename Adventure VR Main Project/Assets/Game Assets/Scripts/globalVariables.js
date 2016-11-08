#pragma strict

static var playerDead : boolean;
static var creaturesDead : int;
static var creaturesTotal : int;

var creaturesDeadLocal : int;
var creaturesTotalLocal : int;

//static var fade : boolean;

function Start () {
	playerDead = false;
	creaturesDead = creaturesDeadLocal;
	creaturesTotal = creaturesTotalLocal;
	Application.targetFrameRate = 75;
}

function Update () {
	
}