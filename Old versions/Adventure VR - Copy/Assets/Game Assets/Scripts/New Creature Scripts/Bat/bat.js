#pragma strict

var hand : Transform;

var creatureBody : Transform;
var bat1 : Transform;
var bat2 : Transform;

var target : Transform;

var forwardSpeed : float;
var diagonalSpeed : float;
var diagonalSpeedStart : float;
var forwardSpeedStart : float;
var forwardPadding : float;

var currentRoom : Transform;
var CurrentRoomNumber : int;
var emptyRoom : boolean;
var run : boolean;

var boundaryHit : boolean;

var notPaused : boolean;

var flapping : boolean;

function Start () {
	
	diagonalSpeedStart = diagonalSpeed;
	forwardSpeedStart = forwardSpeed;
	
	notPaused = true;
	run = false;
	
	flapping = false;
	
}

function Update () {
    
    if (boundaryHit) {
		target = null;
		emptyRoom = true;
		boundaryHit = false;
	} else {
		ScanRoom();
	}

	MoveCreature();
	
	creatureBody.GetComponent(batLookAt).target = target;
	
	if (flapping == false) {
		flapping = true;
		FlapWings();
	}
    
}

function FlapWings () {
	
	bat1.gameObject.SetActive(false);
	bat2.gameObject.SetActive(true);
	
	yield WaitForSeconds(0.25);
	
	bat1.gameObject.SetActive(true);
	bat2.gameObject.SetActive(false);
	
	yield WaitForSeconds(0.25);
	
	flapping = false;
}

function OnTriggerEnter (other : Collider) {
	
	if (other.tag == "Room Trigger") {
		currentRoom = other.transform;
		CurrentRoomNumber = currentRoom.GetComponent(roomTrigger).roomNumber;
		
	}
	
	if (other.tag == "Room Boundary") {
		
		boundaryHit = true;
		
	}
	
}

function ScanRoom () {
	
	if (currentRoom.GetComponent(roomTrigger).chalice == true &&
		hand.GetComponent(batPickupObjects).currentlyHolding != "Chalice") {
		
		target = currentRoom.GetComponent(roomTrigger).chaliceObject;
		emptyRoom = false;
		
	} else if (currentRoom.GetComponent(roomTrigger).bridge == true &&
		hand.GetComponent(batPickupObjects).currentlyHolding != "Bridge") {
		
		target = currentRoom.GetComponent(roomTrigger).bridgeObject;
		emptyRoom = false;
		
	} else if (currentRoom.GetComponent(roomTrigger).sword == true &&
		hand.GetComponent(batPickupObjects).currentlyHolding != "Sword") {
		
		target = currentRoom.GetComponent(roomTrigger).swordObject;
		emptyRoom = false;
		
	} else if (currentRoom.GetComponent(roomTrigger).yellowKey == true &&
		hand.GetComponent(batPickupObjects).currentlyHolding != "Yellow Key") {
		
		target = currentRoom.GetComponent(roomTrigger).yellowKeyObject;
		emptyRoom = false;
		
	} else if (currentRoom.GetComponent(roomTrigger).whiteKey == true &&
		hand.GetComponent(batPickupObjects).currentlyHolding != "White Key") {
		
		target = currentRoom.GetComponent(roomTrigger).whiteKeyObject;
		emptyRoom = false;
		
	} else if (currentRoom.GetComponent(roomTrigger).blackKey == true &&
		hand.GetComponent(batPickupObjects).currentlyHolding != "Black Key") {
		
		target = currentRoom.GetComponent(roomTrigger).blackKeyObject;
		emptyRoom = false;
		
	} else if (currentRoom.GetComponent(roomTrigger).magnet == true &&
		hand.GetComponent(batPickupObjects).currentlyHolding != "Magnet") {
		
		target = currentRoom.GetComponent(roomTrigger).magnetObject;
		emptyRoom = false;
		
	} else {
		//room is empty
		emptyRoom = true;
		target = null;
	}
	
	if (hand.GetComponent(batPickupObjects).timerPaused == true) {
		//ignore objects in room
		emptyRoom = true;
		target = null;
	}
}

function MoveCreature () {
	
	if (emptyRoom) {
		//Continue moving in the same direction
	} else {
		
		if (transform.position.z + forwardPadding <= target.position.z) {
			//Debug.Log("Left");
			diagonalSpeed = diagonalSpeedStart;
			if (diagonalSpeed < 0) {
				diagonalSpeed *= -1;
			}
			
		} else if (transform.position.z - forwardPadding >= target.position.z) {
			//Debug.Log("Right");
			diagonalSpeed = diagonalSpeedStart;
			if (diagonalSpeed > 0) {
				diagonalSpeed *= -1;
			}
		} else {
			diagonalSpeed = 0;
		}
		
		if (transform.position.x + forwardPadding <= target.position.x) {
			//Debug.Log("Front");
			forwardSpeed = forwardSpeedStart;
			if (forwardSpeed < 0) {
				forwardSpeed *= -1;
			}
			
		} else if (transform.position.x - forwardPadding >= target.position.x) {
			//Debug.Log("Behind");
			forwardSpeed = forwardSpeedStart;
			if (forwardSpeed > 0) {
				forwardSpeed *= -1;
			}
		} else {
			forwardSpeed = 0;
		}
	}
	
	//if (closedMouth.gameObject.active == true) {
		if (run == true) {
			transform.Translate(-forwardSpeed * Time.deltaTime,0,-diagonalSpeed * Time.deltaTime);
		} else {
			transform.Translate(forwardSpeed * Time.deltaTime,0,diagonalSpeed * Time.deltaTime);
		}
	//}
}