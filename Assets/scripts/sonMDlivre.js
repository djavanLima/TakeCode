#pragma strict
public static var instance:sonMDlivre;
var fundoMusic:AudioClip;
var estBal:AudioClip;

public enum gameSound{

fundo,
estouro,



}

function Start () {
instance=this;

}

function Update () {
if(Menu().SomEstate==false){
GetComponent(AudioSource).audio.mute=true;

}
else{

GetComponent(AudioSource).audio.mute=false;
}
}
public static function PlaySound(sonAtual:gameSound){// som que toca nao interfere em outro
switch(sonAtual){
 case gameSound.estouro:
 instance.audio.PlayOneShot(instance.estBal);

 break;







}


}