#pragma strict

var target : Transform;

private var targetStartPosition : Vector3;

private var horizontalDistance : Vector3;
//var verticalDistance : Vector3;

private var finalPosition : Vector3;

var horizontalUnits : int;
var verticalUnits : int;

var leftToRight : boolean;
var upperToLower : boolean;

var customDistance : boolean;
var Distance : Vector3;

var padding : Vector3;

function Start () {

	if (upperToLower) {
		verticalUnits *= 1;
	} else {
		verticalUnits *= -1;
	}
	
	if (customDistance == true) {
		
		horizontalDistance = Vector3(Distance.x, 0, Distance.z);
		
	} else {
		
		horizontalDistance = Vector3(23.16719*horizontalUnits, 0, 13.972709*verticalUnits);
		
	}
	
}

function Update () {
	
}

function OnTriggerEnter (other : Collider) {
	
	if (other.tag == "Yellow Creature" ||
		other.tag == "Green Creature" ||
		other.tag == "Red Creature" ||
		other.tag == "Bat") {
		
		target = other.transform;
		
		targetStartPosition = target.transform.position;
		
		if (leftToRight) {
			finalPosition = targetStartPosition + horizontalDistance;
			finalPosition -= padding;
		} else {
			finalPosition = targetStartPosition - horizontalDistance;
			finalPosition += padding;
		}
	
		target.transform.position = finalPosition;
		
	}
}