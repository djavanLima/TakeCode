#pragma strict

var raio:Ray;
var titulo:TextMesh;
var texto:TextMesh;
var hit:RaycastHit;
var tempoSeg:TextMesh;
var tempoMin:TextMesh;
var tempoDec:TextMesh;
var score:TextMesh;
var compfel:GameObject;
var comptri:GameObject;
static var decimoOver:float;
static var segundoOver:float;
static var minutoOver:float;
static var pontOver:int;


function Start () {
compfel.SetActive(false);
comptri.SetActive(true);
}

function Update () {
salvarRecord();
score.text=pontOver.ToString();
tempoDec.text=decimoOver.ToString(".0");
tempoSeg.text=segundoOver.ToString("00");
tempoMin.text=minutoOver.ToString("00");
     if(Input.GetMouseButtonDown(0)){
      
      raio=camera.ScreenPointToRay(Input.mousePosition);
        if(Physics.Raycast(raio,hit)){
          if(hit.collider){
              switch(hit.collider.gameObject.tag){
                       case "voltarJogo":
                       Application.LoadLevel("livre");
                       break;
                       
                       case "OverMenu":
                       Application.LoadLevel("menu");
                       break;
                      
              }
          
          
           }
      
        }
     }
}
var somaTemp:float;
static var nomeLing:String;
static var refLing:String;
function salvarRecord(){
//soma o tempo

somaTemp=decimoOver+segundoOver+minutoOver;
/*PlayerPrefs.SetInt("score",0);
PlayerPrefs.SetInt("tempFloat",0);
PlayerPrefs.SetFloat("decimStr",0);
PlayerPrefs.SetFloat("segunStr",0);
PlayerPrefs.SetFloat("minStr",0);*/

if((PlayerPrefs.GetInt("score")<pontOver)&&(PlayerPrefs.GetFloat("tempFloat")<somaTemp)){
compfel.SetActive(true);
comptri.SetActive(false);
nomeLing="Parabens";
refLing="Voce bateu o recorde!!";
titulo.text=nomeLing;
texto.text=refLing;
PlayerPrefs.SetInt("score",pontOver);
PlayerPrefs.SetInt("tempFloat",somaTemp);
PlayerPrefs.SetFloat("decimStr",decimoOver);
PlayerPrefs.SetFloat("segunStr",segundoOver);
PlayerPrefs.SetFloat("minStr",minutoOver);


}
else{
titulo.text=nomeLing;
texto.text=refLing;
texto.text.Replace("\\n","n");

}




}