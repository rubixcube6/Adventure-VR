#pragma strict

var target : Transform;
var lookAtPosition : Vector3;

function Start () {

}

function Update () {
	
	if (target != null) {
		lookAtPosition = Vector3(target.position.x,transform.position.y,target.position.z);
		transform.LookAt(lookAtPosition);
	}
	
}