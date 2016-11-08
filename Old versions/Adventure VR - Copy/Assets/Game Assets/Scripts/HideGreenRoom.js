#pragma strict

var greenRoom : GameObject;
var mazeSegment : GameObject;

function Start () {

}

function Update () {

}

function OnTriggerEnter (other : Collider) {
	
	if (other.tag == "Player") {
		greenRoom.SetActive(false);
		mazeSegment.SetActive(true);
	}
	
}