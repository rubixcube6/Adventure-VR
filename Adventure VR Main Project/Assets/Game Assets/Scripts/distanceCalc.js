#pragma strict

var pointB : Transform;

var rounderNumber : String;

var distance : Vector3;

function Start () {

}

function Update () {

	distance.x = (float.Parse(transform.position.x.ToString(rounderNumber))) - 
	(float.Parse(pointB.position.x.ToString(rounderNumber)));
	
	distance.y = (float.Parse(transform.position.y.ToString(rounderNumber))) - 
	(float.Parse(pointB.position.y.ToString(rounderNumber)));
	
	distance.z = (float.Parse(transform.position.z.ToString(rounderNumber))) - 
	(float.Parse(pointB.position.z.ToString(rounderNumber)));
	
}