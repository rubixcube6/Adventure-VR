#pragma strict

var playerDeadSound : AudioClip;
var deadSoundPlayed : boolean;
var chompSound : AudioClip;

var player : Transform;

var creatureBody : Transform;
var closedMouth : Transform;
var openMouth : Transform;
var dead : Transform;

var targetPosition : Vector3;
var distance : float;
var minDistance : float;

var target : Transform;

var forwardSpeed : float;
var diagonalSpeed : float;
var diagonalSpeedStart : float;
var forwardSpeedStart : float;
var forwardPadding : float;

var deathTimer : float;
var timeLimit : float;

var currentRoom : Transform;
var CurrentRoomNumber : int;
var emptyRoom : boolean;
var startMoving : boolean;
var run : boolean;

var boundaryHit : boolean;

var notPaused : boolean;

function Start () {
	
	deadSoundPlayed = false;
	
	startMoving = false;
	
	if (player == null) {
		player = GameObject.FindWithTag ("Player").transform;
	}
	
	diagonalSpeedStart = diagonalSpeed;
	forwardSpeedStart = forwardSpeed;
	
	notPaused = true;
}

function Update () {
    
    if (dead.gameObject.activeInHierarchy != true) {
    	
    	if (boundaryHit) {
    		target = null;
    		emptyRoom = true;
    		boundaryHit = false;
    	} else {
    		ScanRoom();
    	}
    	
    	if (startMoving && notPaused) {
			MoveCreature();
		}
		
		KillPlayer();
		
		creatureBody.GetComponent(lookAt).target = target;
		
    }
    
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

function KillPlayer () {
	
	distance = Vector3.Distance(player.position, transform.position);
    //Debug.Log(distance);
    
    if (distance < minDistance+0.8) {
	    //Is being eaten
	    
	    PauseMovement();
	    
//	    if (closedMouth.gameObject.active == true) {
//	    	//hide closed mouth mesh and show open mouth mesh
//		    closedMouth.gameObject.SetActive(false);
//		    openMouth.gameObject.SetActive(true);
//		    AudioSource.PlayClipAtPoint(chompSound,transform.position);
//	    }
	    
	    //start death timer
	    deathTimer += Time.deltaTime;
	    if (deathTimer >= timeLimit && globalVariables.playerDead == false) {
	    	//Player Is Dead
	    	
	    	if (deadSoundPlayed == false) {
		    	deadSoundPlayed = true;
		    	AudioSource.PlayClipAtPoint(playerDeadSound,transform.position);
	    	}
	    	
	    	globalVariables.playerDead = true;
	    }
	    
	} else {
		//Isn't being eaten
		// timer resets if time does not = 0
		if (deathTimer != 0) {
			deathTimer = 0;
		}
		
//		if (closedMouth.gameObject.active == false) {
//	    	//hide closed mouth mesh and show open mouth mesh
//		    closedMouth.gameObject.SetActive(true);
//		    openMouth.gameObject.SetActive(false);
//	    }
	}
}

function ScanRoom () {

	if (currentRoom.GetComponent(roomTrigger).sword == true) {
		
		emptyRoom = false;
		
		if (currentRoom.GetComponent(roomTrigger).player == true) {
			target = currentRoom.GetComponent(roomTrigger).playerObject;
			run = false;
			startMoving = true;
		} else {
			target = currentRoom.GetComponent(roomTrigger).swordObject;
			run = true;
		}
		
		
	} else if (currentRoom.GetComponent(roomTrigger).player == true) {
		
		target = currentRoom.GetComponent(roomTrigger).playerObject;
		emptyRoom = false;
		run = false;
		startMoving = true;
		
	} else if (currentRoom.GetComponent(roomTrigger).chalice == true) {
		
		target = currentRoom.GetComponent(roomTrigger).chaliceObject;
		emptyRoom = false;
		run = false;
		
	} else if (currentRoom.GetComponent(roomTrigger).bridge == true) {
		
		target = currentRoom.GetComponent(roomTrigger).bridgeObject;
		emptyRoom = false;
		run = false;
		
	} else if (currentRoom.GetComponent(roomTrigger).magnet == true) {
		
		target = currentRoom.GetComponent(roomTrigger).magnetObject;
		emptyRoom = false;
		run = false;
		
	} else if (currentRoom.GetComponent(roomTrigger).blackKey == true) {
		
		target = currentRoom.GetComponent(roomTrigger).blackKeyObject;
		emptyRoom = false;
		run = false;
		
	} else {
		//room is empty
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

function PauseMovement () {
	
	notPaused = false;
	
	if (creatureBody.GetComponent(creatureDeath).isDead == false) {
		if (closedMouth.gameObject.active == true) {
	    	//hide closed mouth mesh and show open mouth mesh
		    closedMouth.gameObject.SetActive(false);
		    openMouth.gameObject.SetActive(true);
		    if (deadSoundPlayed == false) {
		    	AudioSource.PlayClipAtPoint(chompSound,transform.position);
		    }
	    }
	}		    
		yield WaitForSeconds(2);
	
	if (creatureBody.GetComponent(creatureDeath).isDead == false) {
		if (closedMouth.gameObject.active == false) {
	    	//hide closed mouth mesh and show open mouth mesh
		    closedMouth.gameObject.SetActive(true);
		    openMouth.gameObject.SetActive(false);
	    }
	}
	
	notPaused = true;
	
}