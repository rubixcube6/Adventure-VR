#pragma strict

var greenRoom : GameObject;
var mazeSegment : GameObject;

function Start () {

}

function Update () {

}

function OnTriggerEnter (other : Collider) {
	
	if (other.tag == "Player") {
		greenRoom.SetActive(true);
		mazeSegment.SetActive(false);
	}
	
}