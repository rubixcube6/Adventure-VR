#pragma strict

var creature : Transform;

var instantiationPoint : Transform;

var hasSpawned : boolean;

function Start () {
	hasSpawned = false;
}

function Update () {

	

}

function OnTriggerEnter (other : Collider) {
	
	if (other.tag == "Player") {
		if (globalVariables.creaturesDead < globalVariables.creaturesTotal && hasSpawned == false) {
			//spawn creature
			Debug.Log(other.tag);
			creature.transform.position = instantiationPoint.transform.position;
			hasSpawned = true;
		}
	}
	
}