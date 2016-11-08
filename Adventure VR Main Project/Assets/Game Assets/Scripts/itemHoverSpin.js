#pragma strict

var xSpeed : float;
var ySpeed : float;
var zSpeed : float;

function Start () {
	
}

function Update () {

	transform.Rotate(xSpeed * Time.deltaTime,ySpeed * Time.deltaTime,zSpeed * Time.deltaTime);

}