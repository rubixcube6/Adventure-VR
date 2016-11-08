#pragma strict

var dropSound : AudioClip;
var pickupSound : AudioClip;

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
var instantiationPointStart : Transform;

var movingObjects : Transform;

var hit : RaycastHit;

var ready : boolean;

var isHoldingBridge : boolean;

var bridgeHandPosition : Transform;

var batHand : Transform;

function Start () {
	currentlyHolding = "nothing";
	ready = true;
	isHoldingBridge = false;
}

function Update () {

	Physics.Raycast(instantiationPointStart.position, transform.forward, hit);
	
	instantiationPoint.position = hit.point;

	//if press space then drop item
	if (Input.GetKeyDown (KeyCode.Space) 
	|| Input.GetKeyDown (KeyCode.JoystickButton0) 
	|| Input.GetKeyDown (KeyCode.JoystickButton1)
	|| Input.GetKeyDown (KeyCode.JoystickButton2)
	|| Input.GetKeyDown (KeyCode.JoystickButton3)
	|| Input.GetKeyDown (KeyCode.JoystickButton4)){
		
		if (currentlyHolding != "nothing") {
		
			AudioSource.PlayClipAtPoint(dropSound,transform.position);
		
		}
		
		DropObject();
		
		currentlyHolding = "nothing";
		
	}
	
	if (isHoldingBridge == true) {
		//bridge position = bridge hand position
		bridge.transform.position = bridgeHandPosition.position;
	}

}

function DropObject () {
	
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
			//DropObject();
			other.transform.parent = yellowKeyHand.transform;
			other.gameObject.transform.localPosition = Vector3.zero;
			other.gameObject.transform.localRotation = Quaternion.identity;
			other.transform.localScale = Vector3(1,1,1);
			other.GetComponent(itemHoverSpin).enabled = false;
			
			for (var child : Transform in other.transform) {
				child.collider.enabled = false;
	    	}
			
			currentlyHolding = "Yellow Key";
			AudioSource.PlayClipAtPoint(pickupSound,transform.position);
			
			if (batHand.GetComponent(batPickupObjects).currentlyHolding == "Yellow Key") {
				//The player took from the bat
				batHand.GetComponent(batPickupObjects).currentlyHolding = "nothing";
			}
		}
		
		if (other.tag == "Black Key") {
			//DropObject();
			
			other.transform.parent = blackKeyHand.transform;
			other.gameObject.transform.localPosition = Vector3(0,0,0);
			other.gameObject.transform.localRotation = Quaternion.identity;
			other.transform.localScale = Vector3(1,1,1);
			other.GetComponent(itemHoverSpin).enabled = false;
			
			for (var child : Transform in other.transform) {
				child.collider.enabled = false;
	    	}
	    	
			currentlyHolding = "Black Key";
			AudioSource.PlayClipAtPoint(pickupSound,transform.position);
			
			if (batHand.GetComponent(batPickupObjects).currentlyHolding == "Black Key") {
				//The player took from the bat
				batHand.GetComponent(batPickupObjects).currentlyHolding = "nothing";
			}
		}
		
		if (other.tag == "White Key") {
			//DropObject();
			
			other.transform.parent = whiteKeyHand.transform;
			other.gameObject.transform.localPosition = Vector3(0,0,0);
			other.gameObject.transform.localRotation = Quaternion.identity;
			other.transform.localScale = Vector3(1,1,1);
			other.GetComponent(itemHoverSpin).enabled = false;
			
			for (var child : Transform in other.transform) {
				child.collider.enabled = false;
	    	}
	    	
			currentlyHolding = "White Key";
			AudioSource.PlayClipAtPoint(pickupSound,transform.position);
			
			if (batHand.GetComponent(batPickupObjects).currentlyHolding == "White Key") {
				//The player took from the bat
				batHand.GetComponent(batPickupObjects).currentlyHolding = "nothing";
			}
		}
		
		if (other.tag == "Sword") {
			//DropObject();
			
			other.transform.parent = swordHand.transform;
			other.gameObject.transform.localPosition = Vector3(0,0,0);
			other.gameObject.transform.localRotation = Quaternion.identity;
			other.transform.localScale = Vector3(1,1,1);
			other.GetComponent(itemHoverSpin).enabled = false;
			
			for (var child : Transform in other.transform) {
				child.collider.enabled = false;
	    	}
	    	
			currentlyHolding = "Sword";
			AudioSource.PlayClipAtPoint(pickupSound,transform.position);
			
			if (batHand.GetComponent(batPickupObjects).currentlyHolding == "Sword") {
				//The player took from the bat
				batHand.GetComponent(batPickupObjects).currentlyHolding = "nothing";
			}
		}
		
		if (other.tag == "Magnet") {
			//DropObject();
			
			other.transform.parent = magnetHand.transform;
			other.gameObject.transform.localPosition = Vector3(0,0,0);
			other.gameObject.transform.localRotation = Quaternion.identity;
			other.transform.localScale = Vector3(1,1,1);
			other.GetComponent(itemHoverSpin).enabled = false;
			
			for (var child : Transform in other.transform) {
				child.collider.enabled = false;
	    	}
	    	
			currentlyHolding = "Magnet";
			AudioSource.PlayClipAtPoint(pickupSound,transform.position);
			
			if (batHand.GetComponent(batPickupObjects).currentlyHolding == "Magnet") {
				//The player took from the bat
				batHand.GetComponent(batPickupObjects).currentlyHolding = "nothing";
			}
		}
		
		if (other.tag == "Chalice") {
			//DropObject();
			
			other.transform.parent = chaliceHand.transform;
			other.gameObject.transform.localPosition = Vector3(0,0,0);
			other.gameObject.transform.localRotation = Quaternion.identity;
			other.transform.localScale = Vector3(1,1,1);
			other.GetComponent(itemHoverSpin).enabled = false;
			
			for (var child : Transform in other.transform) {
				child.collider.enabled = false;
	    	}
	    	
			currentlyHolding = "Chalice";
			AudioSource.PlayClipAtPoint(pickupSound,transform.position);
			
			if (batHand.GetComponent(batPickupObjects).currentlyHolding == "Chalice") {
				//The player took from the bat
				batHand.GetComponent(batPickupObjects).currentlyHolding = "nothing";
			}
		}
		
		if (other.tag == "Bridge") {
			//DropObject();
			if (currentlyHolding != "Bridge") {
				AudioSource.PlayClipAtPoint(pickupSound,transform.position);
			}
			currentlyHolding = "Bridge";
			isHoldingBridge = true;
			
			if (batHand.GetComponent(batPickupObjects).currentlyHolding == "Bridge") {
				//The player took from the bat
				batHand.GetComponent(batPickupObjects).currentlyHolding = "nothing";
			}
			
		}
		
	}
	
}

function ReadyOrNot () {
	ready = false;
	
	yield WaitForSeconds (0.5);
	
	ready = true;
	
}