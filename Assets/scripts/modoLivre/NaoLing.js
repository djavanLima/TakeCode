#pragma strict

function Start () {

}

function Update () {

}


public static function nLgns(hit:RaycastHit){

 switch(hit.rigidbody.gameObject.tag)// clicar no errado = gameOver
      {
       case "enemy":
        estourarObjetos.Saverecord();
       Application.LoadLevel("gameOver");
       //Saverecord();
     //  Application.LoadLevel("gameOver");
       Debug.Log("oi mo");
       break;
       
   /*case "abc":
   estourarObjetos.Saverecord();
   Application.LoadLevel("gameOver");
   break;
     case "ada":
   estourarObjetos.Saverecord();
   Application.LoadLevel("gameOver");
   break;
   
   case "bliss":
   estourarObjetos.Saverecord();
   Application.LoadLevel("gameOver");
   break;
   
     case "b":
   estourarObjetos.Saverecord();
   Application.LoadLevel("gameOver");
   break;
   
   case "bcpl":
   estourarObjetos.Saverecord();
   Application.LoadLevel("gameOver");
   break;
   
     case "basic":
   estourarObjetos.Saverecord();
   Application.LoadLevel("gameOver");
   break;
   //formal
   case "a+":
   estourarObjetos.Saverecord();
   Application.LoadLevel("gameOver");
   break;
   
     case "apl":
   estourarObjetos.Saverecord();
   Application.LoadLevel("gameOver");
   break;
   
    case "autolisp":
   estourarObjetos.Saverecord();
   Application.LoadLevel("gameOver");
   break;
   
     case "lisp":
   estourarObjetos.Saverecord();
   Application.LoadLevel("gameOver");
   break;
   
    //funcional
   case "afnix":
   estourarObjetos.Saverecord();
   Application.LoadLevel("gameOver");
   break;
   
     case "alice":
   estourarObjetos.Saverecord();
   Application.LoadLevel("gameOver");
   break;
   
    case "bistro":
   estourarObjetos.Saverecord();
   Application.LoadLevel("gameOver");
   break;
   
     case "fl":
   estourarObjetos.Saverecord();
   Application.LoadLevel("gameOver");
   break;
   
   //Orientado a Objetos
   case "actionscript":
   estourarObjetos.Saverecord();
   Application.LoadLevel("gameOver");
   break;
   
     case "eiffel":
   estourarObjetos.Saverecord();
   Application.LoadLevel("gameOver");
   break;
   
    case "f#":
   estourarObjetos.Saverecord();
   Application.LoadLevel("gameOver");
   break;
   
     case "fatom":
   estourarObjetos.Saverecord();
   Application.LoadLevel("gameOver");
   break;*/
   
      }

}