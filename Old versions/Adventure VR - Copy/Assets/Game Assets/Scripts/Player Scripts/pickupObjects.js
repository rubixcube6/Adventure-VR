#pragma strict

var dropSound : AudioClip;
var pickupSound : AudioClip;

var yellowKey : Transform;
var blackKey : Transform;
var sword : Transform;
var magnet : Transform;
var chalice : Transform;
var bridge : Transform;

var yellowKeyHand : Transform;
var blackKeyHand : Transform;
var swordHand : Transform;
var magnetHand : Transform;
var chaliceHand : Transform;

var yellowKeyInstance : Transform;
var blackKeyInstance : Transform;
var swordInstance : Transform;
var magnetInstance : Transform;
var chaliceInstance : Transform;

var currentlyHolding : String;

var instantiationPoint : Transform;
var instantiationPointStart : Transform;

var movingObjects : Transform;

var hit : RaycastHit;

var ready : boolean;

var isHoldingBridge : boolean;

var bridgeHandPosition : Transform;

function Start () {
	currentlyHolding = "nothing";
	ready = true;
	isHoldingBridge = false;
}

function Update () {
	
	//Debug.DrawLine(instantiationPointStart.position, hit.point, Color.green);

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
		yellowKeyInstance = Instantiate (yellowKey, instantiationPoint.position, instantiationPoint.rotation);
		yellowKeyInstance.transform.parent = movingObjects.transform;
		yellowKeyHand.gameObject.SetActive(false);
		
	}
	
	if (currentlyHolding == "Black Key") {
		blackKeyInstance = Instantiate (blackKey, instantiationPoint.position, instantiationPoint.rotation);
		blackKeyInstance.transform.parent = movingObjects.transform;
		blackKeyHand.gameObject.SetActive(false);
		
	}
	
	if (currentlyHolding == "Sword") {
		swordInstance = Instantiate (sword, instantiationPoint.position, instantiationPoint.rotation);
		swordInstance.transform.parent = movingObjects.transform;
		swordHand.gameObject.SetActive(false);
		
	}
	
	if (currentlyHolding == "Magnet") {
		magnetInstance = Instantiate (magnet, instantiationPoint.position, instantiationPoint.rotation);
		magnetInstance.transform.parent = movingObjects.transform;
		magnetHand.gameObject.SetActive(false);
		
	}
	
	if (currentlyHolding == "Chalice") {
		chaliceInstance = Instantiate (chalice, instantiationPoint.position, instantiationPoint.rotation);
		chaliceInstance.transform.parent = movingObjects.transform;
		chaliceHand.gameObject.SetActive(false);
		
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
			DropObject();
			other.gameObject.transform.position = Vector3(0,50,0);
			Destroy (other.gameObject);
			currentlyHolding = "Yellow Key";
			yellowKeyHand.gameObject.SetActive(true);
			blackKeyHand.gameObject.SetActive(false);
			swordHand.gameObject.SetActive(false);
			magnetHand.gameObject.SetActive(false);
			chaliceHand.gameObject.SetActive(false);
			AudioSource.PlayClipAtPoint(pickupSound,transform.position);
		}
		
		if (other.tag == "Black Key") {
			DropObject();
			other.gameObject.transform.position = Vector3(0,50,0);
			Destroy (other.gameObject);
			currentlyHolding = "Black Key";
			yellowKeyHand.gameObject.SetActive(false);
			blackKeyHand.gameObject.SetActive(true);
			swordHand.gameObject.SetActive(false);
			magnetHand.gameObject.SetActive(false);
			chaliceHand.gameObject.SetActive(false);
			AudioSource.PlayClipAtPoint(pickupSound,transform.position);
		}
		
		if (other.tag == "Sword") {
			DropObject();
			other.gameObject.transform.position = Vector3(0,50,0);
			Destroy (other.gameObject);
			currentlyHolding = "Sword";
			yellowKeyHand.gameObject.SetActive(false);
			blackKeyHand.gameObject.SetActive(false);
			swordHand.gameObject.SetActive(true);
			magnetHand.gameObject.SetActive(false);
			chaliceHand.gameObject.SetActive(false);
			AudioSource.PlayClipAtPoint(pickupSound,transform.position);
		}
		
		if (other.tag == "Magnet") {
			DropObject();
			other.gameObject.transform.position = Vector3(0,50,0);
			Destroy (other.gameObject);
			currentlyHolding = "Magnet";
			yellowKeyHand.gameObject.SetActive(false);
			blackKeyHand.gameObject.SetActive(false);
			swordHand.gameObject.SetActive(false);
			magnetHand.gameObject.SetActive(true);
			chaliceHand.gameObject.SetActive(false);
			AudioSource.PlayClipAtPoint(pickupSound,transform.position);
		}
		
		if (other.tag == "Chalice") {
			DropObject();
			other.gameObject.transform.position = Vector3(0,50,0);
			Destroy (other.gameObject);
			currentlyHolding = "Chalice";
			yellowKeyHand.gameObject.SetActive(false);
			blackKeyHand.gameObject.SetActive(false);
			swordHand.gameObject.SetActive(false);
			magnetHand.gameObject.SetActive(false);
			chaliceHand.gameObject.SetActive(true);
			AudioSource.PlayClipAtPoint(pickupSound,transform.position);
		}
		
		if (other.tag == "Bridge") {
			DropObject();
			if (currentlyHolding != "Bridge") {
				AudioSource.PlayClipAtPoint(pickupSound,transform.position);
			}
			currentlyHolding = "Bridge";
			isHoldingBridge = true;
			yellowKeyHand.gameObject.SetActive(false);
			blackKeyHand.gameObject.SetActive(false);
			swordHand.gameObject.SetActive(false);
			magnetHand.gameObject.SetActive(false);
			chaliceHand.gameObject.SetActive(false);
			
		}
		
	}
	
}

function ReadyOrNot () {
	ready = false;
	
	yield WaitForSeconds (0.5);
	
	ready = true;
	
}