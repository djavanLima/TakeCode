#pragma strict
  var hit:RaycastHit;
  var audiofun:AudioClip;
   var raio:Ray;
   var score:TextMesh;
   var aviso:GameObject;
   private var j:float;
  static var numberScore:int;
   
   var temporarioCrono:float;
function Start () {

aviso.SetActive(true);
}

function Update () {
if(Linguagem.adscore==true){
addScore();
Linguagem.adscore=false;
}
score.text=numberScore.ToString();
if(MovimentoObj.pause==0){
estadoSom();
if(!audio.isPlaying){
audio.clip=audiofun;

audio.Play();
}
j+=Time.deltaTime;
if(j>5){
aviso.SetActive(false);
}
destruirObjeto();

  }
  else{
  
  audio.Pause();
  }
}
 
function FixedUpdate(){
if(MovimentoObj.pause==0){
cronometro();

}

}
 
 
 
 
  var touchAnterior: int;
 function destruirObjeto(){
 
     if(Input.GetMouseButtonDown(0)){
      raio=camera.ScreenPointToRay(Input.mousePosition);
        if(Physics.Raycast(raio,hit)){
           if(hit.rigidbody){
         if(hit.rigidbody.collider){
      /*    switch(hit.rigidbody.gameObject.tag)// clicar no errado = gameOver
      {
       
      
           case "abc":
   addScore();
   
   break;
           case "ada":
   addScore();
   break;
   
          case "bliss":
   addScore();
   break;
   
          case "b":
  addScore();
   break;
   
         case "bcpl":
  addScore();
   break;
   
         case "basic":
  addScore();
   break;
   //formal
         case "a+":
   addScore();
   break;
   
         case "apl":
  addScore();
   break;
   
        case "autolisp":
addScore();
   break;
   
        case "lisp":
addScore();
   break;
   
    //funcional
        case "afnix":
addScore();
   break;
   
        case "alice":
 addScore();
   break;
    
       case "bistro":
 addScore();
   break;
   
       case "fl":
   addScore();
   break;
   
   //Orientado a Objetos
      case "actionscript":
 addScore();
   break;
   
     case "eiffel":
  addScore();
   break;
   
    case "f#":
  addScore();
   break;
   
     case "fatom":
  addScore();
   break;
   
      }*/
         Destroy(hit.rigidbody.gameObject);
           //Debug.Log("clicou");
           Linguagem.lingns(hit);
           
           NaoLing().nLgns(hit);// funcao de estourar inimigo
           
           
           
            }    
           }
         }
      }
      
      if(Input.touchCount>0 && touchAnterior==0){
     
      raio=camera.ScreenPointToRay(Input.GetTouch(0).position);
        if(Physics.Raycast(raio,hit)){
           if(hit.rigidbody){
         if(hit.rigidbody.collider){
           //Debug.Log("clicou");
            Linguagem.lingns(hit);
           NaoLing().nLgns(hit);// funcao de estourar inimigo
          
           Destroy(hit.rigidbody.gameObject);
          
           sonMDlivre.PlaySound(gameSound.estouro);
           
            }    
           }
         }
      }
       touchAnterior=Input.touchCount;
      
   }
   
   
  public function addScore(){//aumenta a pontuaçao
   contScore+=1;
   numberScore+=10;
   
   
   if(contScore==3){// quando for dez quer dizer que a pontuaçao e 100
   aumentoVel();
   Debug.Log(contScore);
   contScore=0;
   
   }
   }
   
  
   
   var decimoCrono:TextMesh;
   var segundoText:TextMesh;
   var minutoText:TextMesh;
   static var decimo:float;
  static var segundo:float;
  static var minuto:float;
   function cronometro(){
 var aux:String;
 temporarioCrono+=0.02;   
     aux=temporarioCrono.ToString("0.0");// convertendo em decimo confiavel
     decimo=float.Parse(aux);
   if(decimo==0.9){// zerar decimo
   temporarioCrono=0.0;
   
    segundo=segundo+1;
   }
   if(segundo==60){// se chegar e 60 aumenta 1 minuto e zera segundos
   segundo=0;
   minuto+=1f;
   }
   
   
   
   
  minutoText.text=minuto.ToString("00");
 segundoText.text=segundo.ToString("00");
 decimoCrono.text=decimo.ToString(".0");
 
   
   }
   static var tempIni:float;
   static var velIni:float;
    public var contScore:float;
  function aumentoVel()
  {
  
var x:float;
var y:float;
       MovimentoObj.velObj=MovimentoObj.velObj+0.12;
x=MovimentoObj.velObj/velIni;// pegar proporcao da velocidade
Debug.Log("x"+x);
      
       GerarObjetos.tempoVariavel=tempIni/x;
       
       

     

  }
  
  static var overPont:float; 
  //funçao para verificar se o record
  static function Saverecord(){
       // if(MovimentoObj.cntrlSaveMov==true){//verifica se perdeu
       Debug.Log("ja");
         gameOver.pontOver=numberScore;
         gameOver.segundoOver=segundo;
         gameOver.minutoOver=minuto;
         gameOver.decimoOver=decimo;
        // }
  
  
  }
  
  function estadoSom(){
  if(Menu().SomEstate==true){
  GetComponent(AudioSource).audio.mute=false;
  }
  else{
  
  GetComponent(AudioSource).audio.mute=true;
  
  }
  
  }
  
  
  
  
   
  