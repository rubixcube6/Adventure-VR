#pragma strict

var magnet : Transform;

function Start () {
	
}

function Update () {
	
}

function OnTriggerEnter (other : Collider) {
	
	if (other.tag == "Player") {
		magnet.active = true;
	}
	
}