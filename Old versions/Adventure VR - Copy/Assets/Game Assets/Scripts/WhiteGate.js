#pragma strict

var gateTimer : float;
var startTimer : boolean;

var startPos : Vector3;
var endPos : Vector3;

function Start () {
	gateTimer = 0;
	startTimer = false;
	startPos = transform.position;
	endPos = startPos + endPos;
}

function Update () {
	if (startTimer == true) {
		gateTimer += Time.deltaTime;
		transform.position = Vector3.Lerp(startPos, endPos, gateTimer);
	}
}

function OnTriggerEnter (other : Collider) {
	
	Debug.Log("Hit: " + other);
	
	if (other.tag == "White Key") {
		
		startTimer = true; 
		
	}
	
}