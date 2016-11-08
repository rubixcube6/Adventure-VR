#pragma strict

var item : Transform;

var magnet : Transform;

var targetPosition : Vector3;
var distance : float;
var minDistance : float;

var movementSpeed : float;

function Start () {
	
}

function Update () {

	if (Input.GetKeyDown(KeyCode.Space)) {
		//enable item collider
		item.collider.enabled = true;
	}
    
}

function OnTriggerStay (other : Collider) {
	
	if (other.tag == "Magnet") {
		
		//magnet is detected
		
		magnet = other.transform;
		
		targetPosition = magnet.transform.position;
    	targetPosition.y = transform.position.y;
    	item.transform.LookAt(targetPosition);
    	
    	distance = Vector3.Distance(magnet.position, item.transform.position);
    	
    	if (distance >= minDistance) {
    		item.transform.Translate(0,0,movementSpeed * Time.deltaTime);
    	}
		
	}
	
	if (other.tag == "Player Magnet") {
		
		//player magnet is detected
		
		//disable item collider
		item.collider.enabled = false;
		
		magnet = other.transform;
		
		targetPosition = magnet.transform.position;
    	targetPosition.y = transform.position.y;
    	item.transform.LookAt(targetPosition);
    	
    	distance = Vector3.Distance(magnet.position, item.transform.position);
    	
    	if (distance >= minDistance) {
    		item.transform.Translate(0,0,movementSpeed * Time.deltaTime);
    	}
		
	}
	
}