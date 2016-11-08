#pragma strict
var player : Transform;

var playerStartPosition : Vector3;

var horizontalDistance : Vector3;
//var verticalDistance : Vector3;

var finalPosition : Vector3;

var horizontalUnits : int;
var verticalUnits : int;

var leftToRight : boolean;
var upperToLower : boolean;

function Start () {

	if (upperToLower) {
		verticalUnits *= -1;
	} else {
		verticalUnits *= 1;
	}
	
	horizontalDistance = Vector3(23.16719*horizontalUnits,0,13.972709*verticalUnits);
	
}

function Update () {
	
}

function OnTriggerEnter (other : Collider) {
	
	if (other.tag == "Player") {
		playerStartPosition = player.transform.position;
		
	if (leftToRight) {
		finalPosition = playerStartPosition + horizontalDistance;
	} else {
		finalPosition = playerStartPosition - horizontalDistance;
	}
	
		player.transform.position = finalPosition;
	}
}