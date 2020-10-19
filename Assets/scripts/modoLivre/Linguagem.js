#pragma strict
static var adscore:boolean;
function Start () {

}

function Update () {

}
public static function lingns(hit:RaycastHit){

 switch(hit.rigidbody.gameObject.tag)// clicar no certo = aumenta ponto
      {
       
      
           case "abc":
   adscore=true;
   
   break;
           case "ada":
   adscore=true;
   break;
   
          case "bliss":
   adscore=true;
   break;
   
          case "b":
  adscore=true;
   break;
   
         case "bcpl":
  adscore=true;
   break;
   
         case "basic":
   adscore=true;
   break;
   //formal
         case "a+":
   adscore=true;
   break;
   
         case "apl":
  adscore=true;
   break;
   
        case "autolisp":
 adscore=true;
   break;
   
        case "lisp":
  adscore=true;
   break;
   
    //funcional
        case "afnix":
 adscore=true;
   break;
   
        case "alice":
  adscore=true;
   break;
    
       case "bistro":
  adscore=true;
   break;
   
       case "fl":
   adscore=true;
   break;
   
   //Orientado a Objetos
      case "actionscript":
 adscore=true;
   break;
   
     case "eiffel":
 adscore=true;
   break;
   
    case "f#":
   adscore=true;
   break;
   
     case "fatom":
  adscore=true;
   break;
   
      }

}