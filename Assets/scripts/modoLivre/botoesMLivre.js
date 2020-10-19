#pragma strict
var hit:RaycastHit;
var raio:Ray;
var pausebutton:GameObject;
var popupdePause:GameObject;
function Start () {
pausebutton.SetActive(true);
popupdePause.SetActive(false);
MovimentoObj.pause=0;
MovimentoObj.cntrlSaveMov=false;
}

function Update () {
tocouBotao();
if (Input.GetKeyDown(KeyCode.Escape)){
//GerarObjetos.tempoVariavel=1.5;
//MovimentoObj.velObj=1;
MovimentoObj.pause=1;//pergunta se quer ir para o menu
      pausebutton.SetActive(false);// some com game object
      popupdePause.SetActive(true);

}
}


function tocouBotao(){
 
     if(Input.GetMouseButtonDown(0)){
      raio=camera.ScreenPointToRay(Input.mousePosition);
        if(Physics.Raycast(raio,hit)){
       
         if(hit.collider){
           //Debug.Log("clicou");
        
           butaoAcao(hit);
           
           
           
            
           }
         }
      }
   }


 function butaoAcao(hit:RaycastHit){
   
   switch(hit.collider.gameObject.tag)// clicar no errado = gameOver
      {
       case "pauseLivre":
      MovimentoObj.pause=1;
      pausebutton.SetActive(false);
      popupdePause.SetActive(true);
      
      
        break;
          case "avisoSim":
         Application.LoadLevel("menu");
         break;
           
          case "avisoNao":
          MovimentoObj.pause=0;
      pausebutton.SetActive(true);
      popupdePause.SetActive(false);
          break;
       
        
      }
   
   }
   
   