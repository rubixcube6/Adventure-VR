#pragma strict

function Start () {

}

function Update () {

}

function OnTriggerEnter (other : Collider) {
	//Debug.Log(other.tag);
	if (other.tag == "Bridge Wall Collider") {
		collider.isTrigger = true;
		renderer.enabled = false;
	}
}

function OnTriggerExit (other : Collider) {
	
	if (other.tag == "Bridge Wall Collider") {
		renderer.enabled = true;
		collider.isTrigger = false;
	}
	
}