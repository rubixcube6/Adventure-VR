#pragma strict

var yellowKey : Transform;
var blackKey : Transform;
var whiteKey : Transform;
var sword : Transform;
var magnet : Transform;
var chalice : Transform;
var bridge : Transform;

var yellowKeyHand : Transform;
var blackKeyHand : Transform;
var whiteKeyHand : Transform;
var swordHand : Transform;
var magnetHand : Transform;
var chaliceHand : Transform;

var currentlyHolding : String;

var instantiationPoint : Transform;

var movingObjects : Transform;

var hit : RaycastHit;

var ready : boolean;

var isHoldingBridge : boolean;

var bridgeHandPosition : Transform;

var timerPaused : boolean;

var playerCube : Transform;

function Start () {
	currentlyHolding = "nothing";
	ready = true;
	isHoldingBridge = false;
	timerPaused = false;
}

function Update () {
	
	instantiationPoint.position = transform.position;
	
	if (isHoldingBridge == true) {
		//bridge position = bridge hand position
		bridge.transform.position = bridgeHandPosition.position;
	}
	
}

function TargetTimer () {
	yield WaitForSeconds(10);
	timerPaused = false;
}

function DropObject () {
	
	if (timerPaused == false) {
		timerPaused = true;
		TargetTimer();
	}
	
	if (currentlyHolding == "Yellow Key") {
		
		yellowKey.transform.parent = movingObjects.transform;
		
		yellowKey.GetComponent(itemHoverSpin).enabled = true;
		
		for (var child : Transform in yellowKey.transform) {
			child.collider.enabled = true;
	    }
	    
	    yellowKey.position = instantiationPoint.position;
		yellowKey.rotation = instantiationPoint.rotation;
		yellowKey.transform.localScale = Vector3(1,1,1);
		
	}
	
	if (currentlyHolding == "Black Key") {
		
		blackKey.transform.parent = movingObjects.transform;
		
		blackKey.GetComponent(itemHoverSpin).enabled = true;
		
		for (var child : Transform in blackKey.transform) {
			child.collider.enabled = true;
	    }
		
		blackKey.position = instantiationPoint.position;
		blackKey.rotation = instantiationPoint.rotation;
		blackKey.transform.localScale = Vector3(1,1,1);
		
	}
	
	if (currentlyHolding == "White Key") {
		
		whiteKey.transform.parent = movingObjects.transform;
		
		whiteKey.GetComponent(itemHoverSpin).enabled = true;
		
		for (var child : Transform in whiteKey.transform) {
			child.collider.enabled = true;
	    }
		
		whiteKey.position = instantiationPoint.position;
		whiteKey.rotation = instantiationPoint.rotation;
		whiteKey.transform.localScale = Vector3(1,1,1);
		
	}
	
	if (currentlyHolding == "Sword") {
		
		sword.transform.parent = movingObjects.transform;
		
		sword.GetComponent(itemHoverSpin).enabled = true;
		
		for (var child : Transform in sword.transform) {
			child.collider.enabled = true;
	    }
		
		sword.position = instantiationPoint.position;
		sword.rotation = instantiationPoint.rotation;
		sword.transform.localScale = Vector3(1,1,1);
		
	}
	
	if (currentlyHolding == "Magnet") {
		
		magnet.transform.parent = movingObjects.transform;
		
		magnet.GetComponent(itemHoverSpin).enabled = true;
		
		for (var child : Transform in magnet.transform) {
			child.collider.enabled = true;
	    }
		
		magnet.position = instantiationPoint.position;
		magnet.rotation = instantiationPoint.rotation;
		magnet.transform.localScale = Vector3(1,1,1);
		
	}
	
	if (currentlyHolding == "Chalice") {
		
		chalice.transform.parent = movingObjects.transform;
		
		chalice.GetComponent(itemHoverSpin).enabled = true;
		
		for (var child : Transform in chalice.transform) {
			child.collider.enabled = true;
	    }
		
		chalice.position = instantiationPoint.position;
		chalice.rotation = instantiationPoint.rotation;
		chalice.transform.localScale = Vector3(1,1,1);
		
	}
	
	if (currentlyHolding == "Bridge") {
		isHoldingBridge = false;
		//bridge.transform.parent = movingObjects.transform;
	}
	
}

function OnTriggerEnter (other : Collider) {
	
	if (ready) {
		
		ReadyOrNot();
		
		if (other.tag == "Yellow Key") {
			
			other.transform.parent = yellowKeyHand.transform;
			other.gameObject.transform.localPosition = Vector3.zero;
			other.gameObject.transform.localRotation = Quaternion.identity;
			other.transform.localScale = Vector3(1,1,1);
			other.GetComponent(itemHoverSpin).enabled = false;
			
			for (var child : Transform in other.transform) {
				child.collider.enabled = false;
	    	}
			
			currentlyHolding = "Yellow Key";
			
			if (playerCube.GetComponent(pickupObjectsLevel2New).currentlyHolding == "Yellow Key") {
				//The bat took from the player
				playerCube.GetComponent(pickupObjectsLevel2New).currentlyHolding = "nothing";
			}
			
		}
		
		if (other.tag == "Black Key") {
			
			other.transform.parent = blackKeyHand.transform;
			other.gameObject.transform.localPosition = Vector3(0,0,0);
			other.gameObject.transform.localRotation = Quaternion.identity;
			other.transform.localScale = Vector3(1,1,1);
			other.GetComponent(itemHoverSpin).enabled = false;
			
			for (var child : Transform in other.transform) {
				child.collider.enabled = false;
	    	}
	    	
			currentlyHolding = "Black Key";
			
			if (playerCube.GetComponent(pickupObjectsLevel2New).currentlyHolding == "Black Key") {
				playerCube.GetComponent(pickupObjectsLevel2New).currentlyHolding = "nothing";
			}
			
		}
		
		if (other.tag == "White Key") {
			
			other.transform.parent = whiteKeyHand.transform;
			other.gameObject.transform.localPosition = Vector3(0,0,0);
			other.gameObject.transform.localRotation = Quaternion.identity;
			other.transform.localScale = Vector3(1,1,1);
			other.GetComponent(itemHoverSpin).enabled = false;
			
			for (var child : Transform in other.transform) {
				child.collider.enabled = false;
	    	}
	    	
			currentlyHolding = "White Key";
			
			if (playerCube.GetComponent(pickupObjectsLevel2New).currentlyHolding == "Black Key") {
				playerCube.GetComponent(pickupObjectsLevel2New).currentlyHolding = "nothing";
			}
			
		}
		
		if (other.tag == "Sword") {
			
			other.transform.parent = swordHand.transform;
			other.gameObject.transform.localPosition = Vector3(0,0,0);
			other.gameObject.transform.localRotation = Quaternion.identity;
			other.transform.localScale = Vector3(1,1,1);
			other.GetComponent(itemHoverSpin).enabled = false;
			
			for (var child : Transform in other.transform) {
				child.collider.enabled = false;
	    	}
	    	
			currentlyHolding = "Sword";
			
			if (playerCube.GetComponent(pickupObjectsLevel2New).currentlyHolding == "Sword") {
				playerCube.GetComponent(pickupObjectsLevel2New).currentlyHolding = "nothing";
			}
			
		}
		
		if (other.tag == "Magnet") {
			
			other.transform.parent = magnetHand.transform;
			other.gameObject.transform.localPosition = Vector3(0,0,0);
			other.gameObject.transform.localRotation = Quaternion.identity;
			other.transform.localScale = Vector3(1,1,1);
			other.GetComponent(itemHoverSpin).enabled = false;
			
			for (var child : Transform in other.transform) {
				child.collider.enabled = false;
	    	}
	    	
			currentlyHolding = "Magnet";
			
			if (playerCube.GetComponent(pickupObjectsLevel2New).currentlyHolding == "Magnet") {
				playerCube.GetComponent(pickupObjectsLevel2New).currentlyHolding = "nothing";
			}
			
		}
		
		if (other.tag == "Chalice") {
			
			other.transform.parent = chaliceHand.transform;
			other.gameObject.transform.localPosition = Vector3(0,0,0);
			other.gameObject.transform.localRotation = Quaternion.identity;
			other.transform.localScale = Vector3(1,1,1);
			other.GetComponent(itemHoverSpin).enabled = false;
			
			for (var child : Transform in other.transform) {
				child.collider.enabled = false;
	    	}
	    	
			currentlyHolding = "Chalice";
			
			if (playerCube.GetComponent(pickupObjectsLevel2New).currentlyHolding == "Chalice") {
				playerCube.GetComponent(pickupObjectsLevel2New).currentlyHolding = "nothing";
			}
			
		}
		
		if (other.tag == "Bridge") {
			
			currentlyHolding = "Bridge";
			isHoldingBridge = true;
			
			if (playerCube.GetComponent(pickupObjectsLevel2New).currentlyHolding == "Bridge") {
				playerCube.GetComponent(pickupObjectsLevel2New).currentlyHolding = "nothing";
			}
			
		}
		
	}
	
}

function ReadyOrNot () {
	ready = false;
	
	yield WaitForSeconds (0.5);
	
	ready = true;
	
}