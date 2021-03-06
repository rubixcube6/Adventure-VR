﻿#pragma strict
var player : Transform;

var playerStartPosition : Vector3;

var horizontalDistance : Vector3;
//var verticalDistance : Vector3;

var finalPosition : Vector3;

var leftToRight : boolean;

function Start () {
	
	horizontalDistance = Vector3(154.31838,0,0);
	
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