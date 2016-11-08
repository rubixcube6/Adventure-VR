#pragma strict

var lightObject : Transform;

function Start () {

}

function Update () {

}

function OnTriggerEnter (other : Collider) {
	
	if (other.tag == "Dark Zone") {
		TurnLightOn();
	}
	
	if (other.tag == "Light Off Zone") {
		TurnLightOff();
	}
	
}

function OnTriggerExit (other : Collider) {
	
//	if (other.tag == "Dark Zone") {
//		TurnLightOff();
//	}
	
}

function TurnLightOff () {
	
	//yield WaitForSeconds (0.5);
	lightObject.light.intensity = 0;
	
}

function TurnLightOn () {
	
	//yield WaitForSeconds (0.5);
	lightObject.light.intensity = 1;
	
}