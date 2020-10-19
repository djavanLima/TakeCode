#pragma strict
class SplashTela extends MonoBehaviour{
function Start () {

}

function Update () {

if(Time.time>1.0){
Application.LoadLevel("menu");
}
}
}