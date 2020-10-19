#pragma strict

class fase extends MonoBehaviour{
var hit:RaycastHit;

var raio:Ray;
var voltaBt:GameObject;

function Start () {

}

 function Update () {
 if(Input.GetKeyDown(KeyCode.Escape)){
 Application.LoadLevel("menu");
 
 }
      if(Input.GetMouseButtonDown(0)){
     {
       raio=camera.ScreenPointToRay(Input.mousePosition);
       
      if(Physics.Raycast(raio,hit)){
      if(hit.collider) {
   // botao menu
               
    //entrar no experimento
                           if (hit.collider.gameObject == voltaBt){
                           
        Application.LoadLevel("menu");
          
                           }
        
                           //entrar no experimento
      

       }
      }


    }
  }

 }
}