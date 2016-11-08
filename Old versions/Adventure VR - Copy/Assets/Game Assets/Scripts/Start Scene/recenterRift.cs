using UnityEngine;
using System.Collections;

public class recenterRift : MonoBehaviour {

	public AudioClip instructionsVoice;

	public GameObject textObject;

	public string sceneName;

	public float audioClipLength;

	public bool isReady;

	void Start () {
		StartCoroutine(Calibrate());
	}

	void Update () {
		if (Input.anyKeyDown && isReady == true) {
			Application.LoadLevel(sceneName);
		}
	}

	IEnumerator Calibrate () {

		isReady = false;

		//AudioSource.PlayClipAtPoint(instructionsVoice, new Vector3(0,0,0));
		
		yield return new WaitForSeconds(6.10f);

		OVRDevice.ResetOrientation();
		
		textObject.SetActive(true);

		isReady = true;

	}
}
