#pragma strict
var player : Transform;

var playerStartPosition : Vector3;

var horizontalDistance : Vector3;
//var verticalDistance : Vector3;

function Start () {
	horizontalDistance = Vector3(0,0,-13.97272*2);
}

function Update () {
	
}

function OnTriggerEnter (other : Collider) {
	
	if (other.tag == "Player") {
		playerStartPosition = player.transform.position;
		player.transform.position = playerStartPosition + horizontalDistance;
	}
}