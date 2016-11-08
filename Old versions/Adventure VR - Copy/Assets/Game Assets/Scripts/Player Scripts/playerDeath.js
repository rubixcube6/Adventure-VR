#pragma strict

var blackoutCubeL : Transform;
var blackoutCubeR : Transform;

var startColor : Color;
var endColor : Color;

var fadeToDarkTimer : float;
var fadeTolightTimer : float;

var fade : boolean;

var changingLevel : boolean;


function Start () {
	fadeToDarkTimer = 0;
	fadeTolightTimer = 0;
	fade = false;
	changingLevel = false;
}

function Update () {
	
	if (globalVariables.playerDead == true || fade == true) {
		
		if (blackoutCubeL.renderer.material.color == startColor) {
			
			fadeTolightTimer = 0;
			
		}
		
		fadeToDarkTimer += Time.deltaTime;
		blackoutCubeL.renderer.material.color = Color.Lerp(startColor, endColor, fadeToDarkTimer);
		blackoutCubeR.renderer.material.color = Color.Lerp(startColor, endColor, fadeToDarkTimer);
		
		if (blackoutCubeL.renderer.material.color == endColor && changingLevel == false) {
			changingLevel = true;
			globalVariables.playerDead = false;
			
			if (Application.loadedLevelName == "Main Menu") {
				
				if (mainMenu.levelNumber == 1) {
					
					Application.LoadLevel("Level 1");
					
				} 
				
				if (mainMenu.levelNumber == 2) {
					
					Application.LoadLevel("Level 2");
					
				} 
				
				if (mainMenu.levelNumber == 3) {
					
					Application.LoadLevel("Level 3");
					
				}
				
			}
			
			if (Application.loadedLevelName != "Main Menu") {
				Application.LoadLevel("Main Menu");
			}
			
		}
		
		
	} else {
		
		if (blackoutCubeL.renderer.material.color == Start) {
			
			fadeToDarkTimer = 0;
			
		}
		
		fadeTolightTimer += Time.deltaTime;
		blackoutCubeL.renderer.material.color = Color.Lerp(endColor, startColor, fadeTolightTimer);
		blackoutCubeR.renderer.material.color = Color.Lerp(endColor, startColor, fadeTolightTimer);
		
	}
	
}