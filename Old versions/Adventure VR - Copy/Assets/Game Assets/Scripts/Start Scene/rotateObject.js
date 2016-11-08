#pragma strict

var x : float;
var y : float;
var z : float;

function Start () {
	
}

function Update () {
	transform.Rotate(x * Time.deltaTime,y * Time.deltaTime,z * Time.deltaTime);
}