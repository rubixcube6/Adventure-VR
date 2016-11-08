#pragma strict

var player : Transform;
var walls : Transform;
var colorCycleMaterial : Material;
var hasPlayed : boolean;

var winSound : AudioClip;

function Start () {
	hasPlayed = false;
}

function Update () {
	
}

function OnTriggerEnter (other : Collider) {
	
	if (other.tag == "Chalice" && hasPlayed == false) {
		hasPlayed = true;
		Debug.Log("You Win!");
		walls.renderer.material = colorCycleMaterial;
		walls.gameObject.AddComponent ("cycleColors");
		Fade();
	}
	
}

function Fade () {
	
	AudioSource.PlayClipAtPoint(winSound,transform.position);
	yield WaitForSeconds (winSound.length);
	player.GetComponent(playerDeath).fade = true;
	
}