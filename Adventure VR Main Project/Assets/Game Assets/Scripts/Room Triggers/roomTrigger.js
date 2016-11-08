#pragma strict

var yellowKey : boolean;
var blackKey : boolean;
var whiteKey : boolean;

var creatureYellow : boolean;
var creatureGreen : boolean;
var creatureRed : boolean;

var player : boolean;

var sword : boolean;
var bridge : boolean;
var magnet : boolean;
var chalice : boolean;

var roomNumber : int;

var yellowKeyObject : Transform;
var blackKeyObject : Transform;
var whiteKeyObject : Transform;

var creatureYellowObject : Transform;
var creatureGreenObject : Transform;
var creatureRedObject : Transform;

var playerObject : Transform;

var swordObject : Transform;
var bridgeObject : Transform;
var magnetObject : Transform;
var chaliceObject : Transform;

function Start () {
	
}

function Update () {
	
}

function OnTriggerEnter (other : Collider) {
	
	switch (other.tag) {
		case "Yellow Key":
			yellowKey = true;
			yellowKeyObject = other.transform;
			
		break;
		
		case "Black Key":
			blackKey = true;
			blackKeyObject = other.transform;
		break;
		
		case "White Key":
			whiteKey = true;
			whiteKeyObject = other.transform;
		break;
		
		case "Yellow Creature":
			creatureYellow = true;
			creatureYellowObject = other.transform;
		break;
		
		case "Green Creature":
			creatureGreen = true;
			creatureGreenObject = other.transform;
		break;
		
		case "Red Creature":
			creatureRed = true;
			creatureRedObject = other.transform;
		break;
		
		case "Player":
			player = true;
			playerObject = other.transform;
		break;
		
		case "Sword":
			sword = true;
			swordObject = other.transform;
		break;
		
		case "Bridge":
			bridge = true;
			bridgeObject = other.transform;
		break;
		
		case "Magnet":
			magnet = true;
			magnetObject = other.transform;
		break;
		
		case "Chalice":
			chalice = true;
			chaliceObject = other.transform;
		break;
	}
	
}

function OnTriggerExit (other : Collider) {
	
	switch (other.tag) {
		case "Yellow Key":
			yellowKey = false;
			yellowKeyObject = null;
		break;
		
		case "Black Key":
			blackKey = false;
			blackKeyObject = null;
		break;
		
		case "White Key":
			whiteKey = false;
			whiteKeyObject = null;
		break;
		
		case "Yellow Creature":
			creatureYellow = false;
			creatureYellowObject = null;
		break;
		
		case "Green Creature":
			creatureGreen = false;
			creatureGreenObject = null;
		break;
		
		case "Red Creature":
			creatureRed = false;
			creatureRedObject = null;
		break;
		
		case "Player":
			player = false;
			playerObject = null;
		break;
		
		case "Sword":
			sword = false;
			swordObject = null;
		break;
		
		case "Bridge":
			bridge = false;
			bridgeObject = null;
		break;
		
		case "Magnet":
			magnet = false;
			magnetObject = null;
		break;
		
		case "Chalice":
			chalice = false;
			chaliceObject  = null;
		break;
	}
	
}