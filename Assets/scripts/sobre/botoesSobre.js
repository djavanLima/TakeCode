#pragma strict
var hit:RaycastHit;

var raio:Ray;

function Start () {

}

function Update () {
if (Input.GetKeyDown(KeyCode.Escape)){
//GerarObjetos.tempoVariavel=1.5;
//MovimentoObj.velObj=1;
Application.LoadLevel("menu");


      if(Input.GetMouseButtonDown(0)){
     {
       raio=camera.ScreenPointToRay(Input.mousePosition);
      if(Physics.Raycast(raio,hit)){
      if(hit.collider) {
   // botao menu
               
    //entrar no experimento
        if (hit.collider.CompareTag("sobVMenu")){
                           
        Application.LoadLevel("menu");
          
         }
        
                           //entrar no experimento
      

       }
      }


    }
  }



}
}