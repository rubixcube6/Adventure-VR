#pragma strict

function Start () {

}

function Update () {
	if (Input.GetKeyDown(KeyCode.Escape)) {
		Application.Quit();
	}
}