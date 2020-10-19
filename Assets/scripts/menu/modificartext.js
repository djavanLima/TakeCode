#pragma strict
private var modificar:TextMesh;
function Start () {
modificar=GetComponent(TextMesh);

}

function Update () {
modificar.text=GetComponent(TextMesh).text.Replace("\\n","\n");

}