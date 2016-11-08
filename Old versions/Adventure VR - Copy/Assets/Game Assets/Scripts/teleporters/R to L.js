#pragma strict
var player : Transform;

var playerStartPosition : Vector3;

var horizontalDistance : Vector3;
//var verticalDistance : Vector3;

function Start () {
	horizontalDistance = Vector3(23.16719*2,0,0);
}

function Update () {
	
}

function OnTriggerEnter (other : Collider) {
	
	if (other.tag == "Player") {
		playerStartPosition = player.transform.position;
		player.transform.position = playerStartPosition - horizontalDistance;
	}
}