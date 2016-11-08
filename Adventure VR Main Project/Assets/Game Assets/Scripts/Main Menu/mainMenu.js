#pragma strict

var tvScreen : GameObject;

var level1 : Texture;
var level2 : Texture;
var level3 : Texture;

static var levelNumber : int;

function Start () {
	globalVariables.playerDead = false;
	levelNumber = 1;
}

function Update () {
	
	if (Input.GetKeyDown (KeyCode.Space) 
	|| Input.GetKeyDown (KeyCode.JoystickButton0) 
	|| Input.GetKeyDown (KeyCode.JoystickButton1)
	|| Input.GetKeyDown (KeyCode.JoystickButton2)
	|| Input.GetKeyDown (KeyCode.JoystickButton3)
	|| Input.GetKeyDown (KeyCode.JoystickButton4)){
		//GetComponent(playerDeath).fade = true;
		
		levelNumber += 1;
		
		if (levelNumber > 2) { //change 2 to 3 when you finish level 3
			levelNumber = 1;
		}
		
		Debug.Log(levelNumber);
		
		if (levelNumber == 1) {
			tvScreen.renderer.material.mainTexture = level1;
		} else if (levelNumber == 2) {
			tvScreen.renderer.material.mainTexture = level2;
		} else if (levelNumber == 3) {
			tvScreen.renderer.material.mainTexture = level3;
		}
	}
	
	if (Input.GetKeyDown (KeyCode.Escape)) {
		Application.Quit();
	}
	
}