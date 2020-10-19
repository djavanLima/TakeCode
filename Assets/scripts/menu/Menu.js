#pragma strict

class Menu extends MonoBehaviour{
var hit:RaycastHit;
var popup:GameObject;
var botoes:GameObject;
var raio:Ray;
var btPlay:GameObject;
var btSom:GameObject;
var btInfo:GameObject;
var btShare:GameObject;
var popSair:GameObject;
var poModo:int;

 var objetivo1:TextMesh;
 var objetivo2:TextMesh;
 var texto1:TextMesh;
 var texto2:TextMesh;
public static var SomEstate:boolean=true;
function Start () {
getRecord();

popup.SetActive(false);
popSair.SetActive(false);
botoes.SetActive(true);
poModo=0;
estSm();
reiniciaTex();
}

 function Update () {
 if (Input.GetKeyDown(KeyCode.Escape)&& poModo==0){
//GerarObjetos.tempoVariavel=1.5;
//MovimentoObj.velObj=1;
popSair.SetActive(true);
botoes.SetActive(false);


}
if (Input.GetKeyDown(KeyCode.Escape)&& poModo==1){
//GerarObjetos.tempoVariavel=1.5;
//MovimentoObj.velObj=1;
popup.SetActive(false);
botoes.SetActive(true);
  reiniciaTex();
                          
poModo=0;

}


      if(Input.GetMouseButtonDown(0)){
     {
       raio=camera.ScreenPointToRay(Input.mousePosition);
      if(Physics.Raycast(raio,hit)){
      if(hit.collider) {
   // botao menu
               
    //entrar no experimento
                           if (hit.collider.gameObject==btPlay){// apertar play
                           popup.SetActive(true);
                           botoes.SetActive(false);
                           poModo=1;
                           objetivo1.text="Livre:";
                           objetivo2.text="Fase:";
                           texto1.text="  Destrua todas as\nlinguagens de progra-\nmacao.";
                           texto2.text="  Destrua todas as \nLP's de acordo com o\nparadigma da fase.";
                           texto1.text.Replace("\n\n","\n");
                           texto2.text.Replace("\n\n","\n");
        //Application.LoadLevel("livre");
      
          
                           }
                           
                             if (hit.collider.CompareTag("sairMenu")){
                          
        Application.Quit();
      
          
                           }
                                 if (hit.collider.CompareTag("naoMenu")){
                          
        popSair.SetActive(false);
        botoes.SetActive(true);
      
          
                           }
                           
                           
                           
                           if (hit.collider.CompareTag("livre")){
                          
        Application.LoadLevel("livre");
      
          
                           }
                           
                            if (hit.collider.CompareTag("fase")){
                          
        Application.LoadLevel("fase");
      
          
                           }
        
                 if (hit.collider.CompareTag("sobre")){
                           
        Application.LoadLevel("sobre");
      
          
                           }
                  if(hit.collider.CompareTag("som")){
                  if(GetComponent(AudioSource).audio.mute==true){
                  GetComponent(AudioSource).audio.mute=false;
                  SomEstate=true;
                  }
                  
                  else{
                  GetComponent(AudioSource).audio.mute=true;
                  SomEstate=false;
                  }
                  
                  }
                                            //entrar no experimento
      
                
       }
      }


    }
  }

 }
 var ponto:TextMesh;
 var seg:TextMesh;
 var min:TextMesh;
 var dec:TextMesh;
 
 function getRecord() {
 //Debug.Log(PlayerPrefs.GetString("decimStr"));
 ponto.text=PlayerPrefs.GetInt("score").ToString();
 dec.text=PlayerPrefs.GetFloat("decimStr").ToString(".0");
 seg.text=PlayerPrefs.GetFloat("segunStr").ToString("00");
 min.text=PlayerPrefs.GetFloat("minStr").ToString("00");
 }
function estSm(){
if(SomEstate==true){
GetComponent(AudioSource).audio.mute=false;
}
else{
GetComponent(AudioSource).audio.mute=true;

}

}

}

function reiniciaTex(){
 objetivo1.text="Objetivo:";
   objetivo2.text="";
   texto1.text="  Destrua a maior\nquantidade de balões\nque mostrem lingua-\ngens de programação.";
   texto2.text="";
   texto1.text.Replace("\n\n","\n");


}



