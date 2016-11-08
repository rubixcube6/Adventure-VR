#pragma strict

function Start () {

}

function Update () {
	renderer.material.SetTextureOffset ("_MainTex", Vector2(0,Time.time * 0.17));
}