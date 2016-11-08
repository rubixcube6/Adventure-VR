#pragma strict

var hit : RaycastHit;

function Start () {
	
}

function Update () {

	Debug.DrawLine(transform.position, hit.point, Color.green);

	if (Physics.Raycast(transform.position, transform.forward, hit, 10)) {
		
		
		
	}
}