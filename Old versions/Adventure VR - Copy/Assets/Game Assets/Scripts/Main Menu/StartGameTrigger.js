#pragma strict

var player : Transform;

function Start () {

}

function Update () {

}

function OnTriggerEnter (other : Collider) {
	
	if (other.tag == "Player") {
		player.GetComponent(playerDeath).fade = true;
	}
	
}