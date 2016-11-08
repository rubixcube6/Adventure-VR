#pragma strict

var creatureDeadSound : AudioClip;

var creatureMain : Transform;

var closedMouth : Transform;
var openMouth : Transform;
var dead : Transform;

var isDead : boolean;

function Start () {
	isDead = false;
}

function Update () {
	
	
    
}

function OnTriggerEnter (other : Collider) {
	
	if (other.tag == "Sword") {
		//creatire is dead
		CreatureDeath();
	}
	
}

function CreatureDeath () {
	isDead = true;
	globalVariables.creaturesDead += 1;
	closedMouth.gameObject.SetActive(false);
	openMouth.gameObject.SetActive(false);
	dead.gameObject.SetActive(true);
	transform.collider.enabled = false;
	creatureMain.collider.enabled = false;
	Component.Destroy(creatureMain.GetComponent(creature));
	Component.Destroy(GetComponent(lookAt));
	AudioSource.PlayClipAtPoint(creatureDeadSound,transform.position);
}