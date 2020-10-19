#pragma strict

public enum GameState{
START,
INGAME,
GAMEOVER,
PAUSE

}

private var currentState:GameState=currentState.START;

function Start () {

 MovimentoObj.velObj=1;
estourarObjetos.velIni=1;
  GerarObjetos.tempoVariavel=1.2;
 estourarObjetos.segundo=0f;
 estourarObjetos.minuto=0f;
 estourarObjetos.decimo=0f;
 estourarObjetos.numberScore=0f;
 estourarObjetos.tempIni=1.2;
} 

function Update () {
    switch(currentState){
        case GameState.START:
               comecar();        
        break;
        
        case GameState.INGAME:
                   
        break;
        
        case GameState.PAUSE:
                      
        break;
        
        case GameState.GAMEOVER:
                
        break;
       
    
    }
}







static function comecar(){

//estourarObjetos.numberScore=0;
//Debug.Log("vai!!");


}


public function jogando(){



}
function  pause(){


}
function gameOver(){



}


