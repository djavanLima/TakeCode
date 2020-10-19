#pragma strict


class MovimentoObj extends MonoBehaviour{
var Contativo:boolean;
static var velObj:float=1;
static var pause:float=0;
static var cntrlSaveMov:boolean=false;
 var k:float;
function Start () {

}
function Update(){
if(pause==0){
Linguagem();
transform.position.y-=(velObj*Time.deltaTime);



if(transform.position.y<-5.25){
Destroy(gameObject);

}
}
}

function Linguagem(){

   
  
   if(transform.position.y<-3.6){
   switch(tag){
   // estruturada
   case "abc":
   estourarObjetos.Saverecord();
   gameOver.nomeLing="abc";
   gameOver.refLing=" É uma linguagem de pro-\ngramação";
   Application.LoadLevel("gameOver");
   break;
     case "ada":
   estourarObjetos.Saverecord();
   gameOver.nomeLing="ada";
   gameOver.refLing=" É uma linguagem de pro-\ngramação";
   Application.LoadLevel("gameOver");
   break;
   
   case "bliss":
   estourarObjetos.Saverecord();
    gameOver.nomeLing="bliss";
   gameOver.refLing=" É uma linguagem de pro-\ngramação";
   Application.LoadLevel("gameOver");
   break;
   
     case "b":
   estourarObjetos.Saverecord();
    gameOver.nomeLing="b";
   gameOver.refLing=" É uma linguagem de pro-\ngramação";
   Application.LoadLevel("gameOver");
   break;
   
   case "bcpl":
   estourarObjetos.Saverecord();
    gameOver.nomeLing="bcpl";
   gameOver.refLing=" É uma linguagem de pro-\ngramação";
   Application.LoadLevel("gameOver");
   break;
   
     case "basic":
   estourarObjetos.Saverecord();
    gameOver.nomeLing="basic";
   gameOver.refLing=" É uma linguagem de pro-\ngramação";
   Application.LoadLevel("gameOver");
   break;
   //formal
   case "a+":
   estourarObjetos.Saverecord();
     gameOver.nomeLing="a+";
   gameOver.refLing=" É uma linguagem de pro-\ngramação";
   Application.LoadLevel("gameOver");
   break;
   
     case "apl":
   estourarObjetos.Saverecord();
     gameOver.nomeLing="apl";
   gameOver.refLing=" É uma linguagem de pro-\ngramação";
   Application.LoadLevel("gameOver");
   break;
   
    case "autolisp":
   estourarObjetos.Saverecord();
    gameOver.nomeLing="autolisp";
   gameOver.refLing=" É uma linguagem de pro-\ngramação";
   Application.LoadLevel("gameOver");
   break;
   
     case "lisp":
   estourarObjetos.Saverecord();
    gameOver.nomeLing="lisp";
   gameOver.refLing=" É uma linguagem de pro-\ngramação";
   Application.LoadLevel("gameOver");
   break;
   
    //funcional
   case "afnix":
   estourarObjetos.Saverecord();
    gameOver.nomeLing="afnix";
   gameOver.refLing=" É uma linguagem de pro-\ngramação";
   Application.LoadLevel("gameOver");
   break;
   
     case "alice":
   estourarObjetos.Saverecord();
    gameOver.nomeLing="alice";
  gameOver.refLing=" É uma linguagem de pro-\ngramação";
   Application.LoadLevel("gameOver");
   break;
   
    case "bistro":
   estourarObjetos.Saverecord();
     gameOver.nomeLing="bistro";
   gameOver.refLing=" É uma linguagem de pro-\ngramação";
   Application.LoadLevel("gameOver");
   break;
   
     case "fl":
   estourarObjetos.Saverecord(); 
   gameOver.nomeLing="fl";
   gameOver.refLing=" É uma linguagem de pro-\ngramação";
   Application.LoadLevel("gameOver");
   break;
   
   //Orientado a Objetos
   case "actionscript":
   estourarObjetos.Saverecord();
    gameOver.nomeLing="actionscript";
  gameOver.refLing=" É uma linguagem de pro-\ngramação";
   Application.LoadLevel("gameOver");
   break;
   
     case "eiffel":
   estourarObjetos.Saverecord();
    gameOver.nomeLing="eiffel";
   gameOver.refLing=" É uma linguagem de pro-\ngramação";
   Application.LoadLevel("gameOver");
   break;
   
    case "f#":
   estourarObjetos.Saverecord();
     gameOver.nomeLing="f#";
   gameOver.refLing=" É uma linguagem de pro-\ngramação";
   Application.LoadLevel("gameOver");
   break;
   
     case "fatom":
   estourarObjetos.Saverecord();
    gameOver.nomeLing="fatom";
  gameOver.refLing=" É uma linguagem de pro-\ngramação";
   Application.LoadLevel("gameOver");
   break;
   
   }
    /*if(tag=="inimigo"){
   estourarObjetos.Saverecord();
        // cntrlSaveMov=true;
         
   
   
   
   }*/
   
   
   }
   }




}