var play = false; //variabile bool che blocca l'inizio fino al click del giocatore;
var lastGoal = true; //variabile che prende true se Guest ha segnato l'ultimo goal, false altrimenti;
var scoreHome = 0; //variabile nella quale viene registrato il punteggio della squadra di casa;
var scoreGuest = 0; //variabile nella quale viene registrato il punteggio della squadra in trasferta;

function Ball(Campo){
	this.box = null;
  //posizione iniziale della palla;	
	this.posX = 497; //485
	this.posY = 322; //290 
	if (lastGoal === true)
      this.angle = 3 * Math.PI/2; //angolo considerando l'asse Y
  else 
      this.angle = Math.PI/2; //angolo considerando l'asse Y
  this.speed = 7; //velocità
}

Ball.prototype.createBall =  //funzione che crea la palla;
  function(Campo){
  	this.box = Campo.box; //div che contiene il campo;
    // creazione del pallone di gioco;
  	this.ball = document.createElement("div");
  	this.ball.setAttribute("id","Ball");	
    //imposto la posizione iniziale della palla;
  	this.box.appendChild(this.ball);
  	this.setStartingPosition();
    document.onkeypress = function(evt){if(evt.which == 32 && GiocaCasa === 1 && GiocaTrasferta === 1 && FinePartita === 0) play = true; Scelta = 1;} //cliccando la barra spaziatrice play diventa true ed il gioco puo' iniziare;  	
    var loop = setInterval(this.MoveBall.bind(this,Campo),10); //loop che richiama la funzione che permette alla palla di muoversi aggiornando i passi ogni 10ms;
  }  

Ball.prototype.setStartingPosition = 
  function(){ //reset delle posizione iniziale della palla;
    if (lastGoal === true)
        this.angle = 3 * Math.PI/2; //angolo considerando l'asse Y
    else 
        this.angle = Math.PI/2;
    this.speed = 7; //velocità
    this.posX = 497;
    this.posY = 322;
    this.ball.style.left = this.posX + 'px'; 
    this.ball.style.top = this.posY + 'px';
  }

Ball.prototype.MoveBall =
  function(Campo){
    if (play === true){ //controllo che il click sul campo sia avvenuto;
      this.stepX = this.speed * Math.sin(this.angle); //passo rispetto all'asse X;
      this.stepY = -this.speed * Math.cos(this.angle); //passo rispetto all'asse Y;
      //aggiorno la posizione;
      this.ball.style.left = this.posX + 'px';
      this.ball.style.top = this.posY + 'px';
   	  //incremento le posizioni con i passi;
      this.posX += this.stepX;
   	  this.posY += this.stepY;
      //controlli che la palla non esca dai bordi;
   	  if (this.posX < 0){ //bordo Sx;
   	   	this.posX = 0;
   	  	this.angle = -this.angle;
  	    this.Goal(Campo,true); //funzione che segnala un goal;
      }
  	  else if (this.posX > 995){ //bordo Dx;
  	   	this.posX = 995;
  		  this.angle = -this.angle;
  	    this.Goal(Campo,false); //funzione che segnala un goal;
      }
  	  if (this.posY < 0){ //bordo superiore;
    		this.posY = 0;
    		this.angle = Math.PI - this.angle;
      }
      else if (this.posY > 645){	//bordo inferiore;
    		this.posY = 645;
    		this.angle = Math.PI - this.angle;
    	}
      //funzioni che gestiscono le collisioni;
      this.PlayerHit(Campo);
    }
  }

Ball.prototype.Goal = //funzione che gestisce i Goal;
  function(Campo,last){
    if (this.posY >= 175 && this.posY <= 485){ //controllo che la palla sia entrata in rete; 
        //aggiorno il punteggio;
        if (last === true) 
            scoreGuest++; 
        else 
            scoreHome++;
        document.getElementById("Casa").value = (scoreHome); 
        document.getElementById("Trasferta").value = (scoreGuest);
        if (scoreGuest === 5 || scoreHome === 5){
          document.getElementById("btn-set").style.display = "block";
          FinePartita = 1;
        } 
        lastGoal = last;
        play = false;
        Campo.cpu.setStartingPosition();
        this.setStartingPosition(); //reset posizione iniziale della palla;
    } 
  }




Ball.prototype.PlayerHit =
  function(Campo){
    var collisione = (((Campo.cpu.HomeX + 10 - this.posX) * (Campo.cpu.HomeX + 10 - this.posX)
                   + (Campo.cpu.HomeY + 10 - this.posY) * (Campo.cpu.HomeY + 10 - this.posY)) <= 8100)
        if (collisione){
            if (this.posX > Campo.cpu.HomeX + 10)
              this.angle = Math.acos((Campo.cpu.HomeY + 10 - this.posY) / 90);
            else 
              this.angle = -Math.acos((Campo.cpu.HomeY + 10 - this.posY) / 90);
            this.setSpeed();
        }
    var impatto = (((Campo.cpu.GuestX + 10 - this.posX) * (Campo.cpu.GuestX + 10 - this.posX)
                  + (Campo.cpu.GuestY + 10 - this.posY) * (Campo.cpu.GuestY + 10 - this.posY)) <= 8100)
        if (impatto){
            if (this.posX > Campo.cpu.GuestX + 10)
              this.angle = Math.acos((Campo.cpu.GuestY + 10 - this.posY) / 90);
            else 
              this.angle = -Math.acos((Campo.cpu.GuestY + 10 - this.posY) / 90);
            this.setSpeed();
        }
  }

Ball.prototype.setSpeed = //funzione che aggiorna la velocità della palla; 
  function(){
      if (this.speed >= 7 && this.speed <= 10)
          this.speed += Math.random() * (0.7 - 0.3) + 0.3;
  }
