#pragma strict

var playerDeadSound : AudioClip;
var chompSound : AudioClip;

var player : Transform;

var closedMouth : Transform;
var openMouth : Transform;

var targetPosition : Vector3;
var distance : float;
var minDistance : float;

var movementSpeed : float;

var deathTimer : float;
var timeLimit : float;

function Start () {
	
	if (player == null) {
		player = GameObject.FindWithTag ("Player").transform;
	}
	
}

function Update () {
	targetPosition = player.transform.position;
    targetPosition.y = transform.position.y;
    transform.LookAt(targetPosition);
    
    distance = Vector3.Distance(player.position, transform.position);
    //Debug.Log(distance);
    
    if (distance < minDistance+0.8) {
	    //Is being eaten
	    
	    if (closedMouth.gameObject.active == true) {
	    	//hide closed mouth mesh and show open mouth mesh
		    closedMouth.gameObject.SetActive(false);
		    openMouth.gameObject.SetActive(true);
		    AudioSource.PlayClipAtPoint(chompSound,transform.position);
	    }
	    
	    //start death timer
	    deathTimer += Time.deltaTime;
	    //if death timer reaches 1.5 seconds player is eaten
	    if (deathTimer >= timeLimit && globalVariables.playerDead == false) {
	    	Debug.Log("Player Is Dead");
	    	AudioSource.PlayClipAtPoint(playerDeadSound,transform.position);
	    	globalVariables.playerDead = true;
	    }
	    
	} else {
		//Isn't being eaten
		// timer resets if time does not = 0
		if (deathTimer != 0) {
			deathTimer = 0;
		}
		
		if (closedMouth.gameObject.active == false) {
	    	//hide closed mouth mesh and show open mouth mesh
		    closedMouth.gameObject.SetActive(true);
		    openMouth.gameObject.SetActive(false);
	    }
	}
    
}

function OnTriggerStay (other : Collider) {
	
	if (other.tag == "Player") {
		
		//player is detected
		
		if (distance > minDistance) {
	    	
	    	transform.Translate(0,0,movementSpeed * Time.deltaTime);
	    	
		}
		
	}
	
}