function CPU(Campo){
 this.playerHome = null;
 this.playerGuest = null;
 this.main = document.getElementById("body");
 this.campo = Campo;
 this.box = Campo.box;
 //posizione iniziale giocatore Home;
 this.HomeX = 50; //100
 this.HomeY = 312; //275 ((Campo.width / 2) - Player_Radius)
 //posizione iniziale giocatore Guest;
 this.GuestX = 925; //850
 this.GuestY = 312; //275
 this.posX = 925;
 this.UP = 38;
 this.DOWN = 40;
 this.LEFT = 37;
 this.RIGHT = 39;
 this.PressUP = false;  
 this.PressRIGHT = false;
 this.PressDOWN = false;
 this.PressLEFT = false;
 this.HomeSpeed = 7;
 this.GuestSpeed = 15;
}

CPU.prototype.createCPU = 	
	function(Campo){
		this.playerHome = document.createElement("div"); //creo il div del giocatore di casa(Home);
		this.playerHome.setAttribute("id","Home"); //al giocatore di casa assegno l'id corrispondente;
		this.box.appendChild(this.playerHome); //playerHome diventa "figlio";
		// stesso procedimento per il giocatore ospite(Guest);
		this.playerGuest = document.createElement("div");
		this.playerGuest.setAttribute("id","Guest");
		this.box.appendChild(this.playerGuest);
		this.setStartingPosition();
		this.setImageHome(this);
		this.setImageGuest(this);
		document.onkeydown = this.setMoveHandlerHome.bind(this); //funzione che consente il movimento del giocatore Guest;
		document.onkeyup = this.resetMoveHandlerHome.bind(this);
		var loop = setInterval(this.playerMoveHandlerHome.bind(this),20);
		var loop1 = setInterval(this.playerMoveHandlerGuest.bind(this, Campo), 20);
		setInterval(this.movimentoLaterale.bind(this, Campo), 100);
	}	

CPU.prototype.setImageHome =
	function(){
		//Germania
		this.Germania = document.createElement("div");
		this.Germania.setAttribute("id","Nazionali");
		this.Germania.style.backgroundImage = "url('./../Immagini/Germania.png')";
		this.Germania.style.marginTop = "240" + 'px';
		this.Germania.style.marginLeft = "1200" + 'px';
		this.main.appendChild(this.Germania);	
		this.Germania.onclick = function(evt){NomeCasa = 'Germania';};
		this.Germania.ondblclick = this.SceltaCasa.bind(this);
		//Francia
		this.Francia = document.createElement("div");
		this.Francia.setAttribute("id","Nazionali");
		this.Francia.style.backgroundImage = "url('./../Immagini/Francia.png')";
		this.Francia.style.marginTop = "240" + 'px';
		this.Francia.style.marginLeft = "1250" + 'px';
		this.main.appendChild(this.Francia);	
		this.Francia.onclick = function(evt){NomeCasa = 'Francia';};
		this.Francia.ondblclick = this.SceltaCasa.bind(this);
		//Spagna
		this.Spagna = document.createElement("div");
		this.Spagna.setAttribute("id","Nazionali");
		this.Spagna.style.backgroundImage = "url('./../Immagini/Spagna.png')";
		this.Spagna.style.marginTop = "240" + 'px';
		this.Spagna.style.marginLeft = "1300" + 'px';
		this.main.appendChild(this.Spagna);	
		this.Spagna.onclick = function(evt){NomeCasa = 'Spagna';};
		this.Spagna.ondblclick = this.SceltaCasa.bind(this);
		//Belgio
		this.Belgio = document.createElement("div");
		this.Belgio.setAttribute("id","Nazionali");
		this.Belgio.style.backgroundImage = "url('./../Immagini/Belgio.png')";
		this.Belgio.style.marginTop = "290" + 'px';
		this.Belgio.style.marginLeft = "1200" + 'px';
		this.main.appendChild(this.Belgio);	
		this.Belgio.onclick = function(evt){NomeCasa = 'Belgio';};
		this.Belgio.ondblclick = this.SceltaCasa.bind(this);
		//Inghilterra
		this.Inghilterra = document.createElement("div");
		this.Inghilterra.setAttribute("id","Nazionali");
		this.Inghilterra.style.backgroundImage = "url('./../Immagini/Inghilterra.png')";
		this.Inghilterra.style.marginTop = "290" + 'px';
		this.Inghilterra.style.marginLeft = "1250" + 'px';
		this.main.appendChild(this.Inghilterra);	
		this.Inghilterra.onclick = function(evt){NomeCasa = 'Inghilterra'};
		this.Inghilterra.ondblclick = this.SceltaCasa.bind(this);
		//Portogallo
		this.Portogallo = document.createElement("div");
		this.Portogallo.setAttribute("id","Nazionali");
		this.Portogallo.style.backgroundImage = "url('./../Immagini/Portogallo.png')";
		this.Portogallo.style.marginTop = "290" + 'px';
		this.Portogallo.style.marginLeft = "1300" + 'px';
		this.main.appendChild(this.Portogallo);	
		this.Portogallo.onclick = function(evt){NomeCasa = 'Portogallo'};
		this.Portogallo.ondblclick = this.SceltaCasa.bind(this);
		//Italia
		this.Italia = document.createElement("div");
		this.Italia.setAttribute("id","Nazionali");
		this.Italia.style.backgroundImage = "url('./../Immagini/Italia.png')";
		this.Italia.style.marginTop = "290" + 'px';
		this.Italia.style.marginLeft = "1350" + 'px';
		this.main.appendChild(this.Italia);	
		this.Italia.onclick = function(evt){NomeCasa = 'Italia'};
		this.Italia.ondblclick = this.SceltaCasa.bind(this);
		//Danimarca
		this.Danimarca = document.createElement("div");
		this.Danimarca.setAttribute("id","Nazionali");
		this.Danimarca.style.backgroundImage = "url('./../Immagini/Danimarca.png')";
		this.Danimarca.style.marginTop = "340" + 'px';
		this.Danimarca.style.marginLeft = "1200" + 'px';
		this.main.appendChild(this.Danimarca);	
		this.Danimarca.onclick = function(evt){NomeCasa = 'Danimarca'};
		this.Danimarca.ondblclick = this.SceltaCasa.bind(this);
		//Olanda
		this.Olanda = document.createElement("div");
		this.Olanda.setAttribute("id","Nazionali");
		this.Olanda.style.backgroundImage = "url('./../Immagini/Olanda.png')";
		this.Olanda.style.marginTop = "340" + 'px';
		this.Olanda.style.marginLeft = "1250" + 'px';
		this.main.appendChild(this.Olanda);	
		this.Olanda.onclick = function(evt){NomeCasa = 'Olanda'};
		this.Olanda.ondblclick = this.SceltaCasa.bind(this);
	}

CPU.prototype.SceltaCasa =
	function(){
		if (NomeCasa != NomeTrasferta && Scelta === 0){
			GiocaCasa = 1;
			this.playerHome.style.backgroundImage =  "url('"+ Immagini + NomeCasa + formato +"')";
			if (NomeCasa === "Germania" || NomeCasa === "Francia" || NomeCasa === "Spagna")
				this.HomeSpeed = 12;
			if (NomeCasa === "Belgio" || NomeCasa === "Inghilterra" || NomeCasa === "Italia" || NomeCasa === "Portogallo")
				this.HomeSpeed = 9; 
			if (NomeCasa === "Danimarca" || NomeCasa === "Olanda")
				this.HomeSpeed = 6;
			this.Scelta = document.getElementById("HomeName");
			this.Scelta.value = NomeCasa;
		}
	}

CPU.prototype.setImageGuest =
	function(){
		//Germania
		this.Germania = document.createElement("div");
		this.Germania.setAttribute("id","Nazionali");
		this.Germania.style.backgroundImage = "url('./../Immagini/Germania.png')";
		this.Germania.style.marginTop = "440" + 'px';
		this.Germania.style.marginLeft = "1200" + 'px';
		this.main.appendChild(this.Germania);	
		this.Germania.onclick = function(evt){NomeTrasferta = 'Germania';};
		this.Germania.ondblclick = this.SceltaTrasferta.bind(this);
		//Francia
		this.Francia = document.createElement("div");
		this.Francia.setAttribute("id","Nazionali");
		this.Francia.style.backgroundImage = "url('./../Immagini/Francia.png')";
		this.Francia.style.marginTop = "440" + 'px';
		this.Francia.style.marginLeft = "1250" + 'px';
		this.main.appendChild(this.Francia);	
		this.Francia.onclick = function(evt){NomeTrasferta = 'Francia';};
		this.Francia.ondblclick = this.SceltaTrasferta.bind(this);
		//Spagna
		this.Spagna = document.createElement("div");
		this.Spagna.setAttribute("id","Nazionali");
		this.Spagna.style.backgroundImage = "url('./../Immagini/Spagna.png')";
		this.Spagna.style.marginTop = "440" + 'px';
		this.Spagna.style.marginLeft = "1300" + 'px';
		this.main.appendChild(this.Spagna);	
		this.Spagna.onclick = function(evt){NomeTrasferta = 'Spagna';};
		this.Spagna.ondblclick = this.SceltaTrasferta.bind(this);
		//Belgio
		this.Belgio = document.createElement("div");
		this.Belgio.setAttribute("id","Nazionali");
		this.Belgio.style.backgroundImage = "url('./../Immagini/Belgio.png')";
		this.Belgio.style.marginTop = "490" + 'px';
		this.Belgio.style.marginLeft = "1200" + 'px';
		this.main.appendChild(this.Belgio);	
		this.Belgio.onclick = function(evt){NomeTrasferta = 'Belgio';};
		this.Belgio.ondblclick = this.SceltaTrasferta.bind(this);
		//Inghilterra
		this.Inghilterra = document.createElement("div");
		this.Inghilterra.setAttribute("id","Nazionali");
		this.Inghilterra.style.backgroundImage = "url('./../Immagini/Inghilterra.png')";
		this.Inghilterra.style.marginTop = "490" + 'px';
		this.Inghilterra.style.marginLeft = "1250" + 'px';
		this.main.appendChild(this.Inghilterra);	
		this.Inghilterra.onclick = function(evt){NomeTrasferta = 'Inghilterra'};
		this.Inghilterra.ondblclick = this.SceltaTrasferta.bind(this);
		//Portogallo
		this.Portogallo = document.createElement("div");
		this.Portogallo.setAttribute("id","Nazionali");
		this.Portogallo.style.backgroundImage = "url('./../Immagini/Portogallo.png')";
		this.Portogallo.style.marginTop = "490" + 'px';
		this.Portogallo.style.marginLeft = "1300" + 'px';
		this.main.appendChild(this.Portogallo);	
		this.Portogallo.onclick = function(evt){NomeTrasferta = 'Portogallo'};
		this.Portogallo.ondblclick = this.SceltaTrasferta.bind(this);
		//Italia
		this.Italia = document.createElement("div");
		this.Italia.setAttribute("id","Nazionali");
		this.Italia.style.backgroundImage = "url('./../Immagini/Italia.png')";
		this.Italia.style.marginTop = "490" + 'px';
		this.Italia.style.marginLeft = "1350" + 'px';
		this.main.appendChild(this.Italia);	
		this.Italia.onclick = function(evt){NomeTrasferta = 'Italia'};
		this.Italia.ondblclick = this.SceltaTrasferta.bind(this);
		//Danimarca
		this.Danimarca = document.createElement("div");
		this.Danimarca.setAttribute("id","Nazionali");
		this.Danimarca.style.backgroundImage = "url('./../Immagini/Danimarca.png')";
		this.Danimarca.style.marginTop = "540" + 'px';
		this.Danimarca.style.marginLeft = "1200" + 'px';
		this.main.appendChild(this.Danimarca);	
		this.Danimarca.onclick = function(evt){NomeTrasferta = 'Danimarca'};
		this.Danimarca.ondblclick = this.SceltaTrasferta.bind(this);
		//Olanda
		this.Olanda = document.createElement("div");
		this.Olanda.setAttribute("id","Nazionali");
		this.Olanda.style.backgroundImage = "url('./../Immagini/Olanda.png')";
		this.Olanda.style.marginTop = "540" + 'px';
		this.Olanda.style.marginLeft = "1250" + 'px';
		this.main.appendChild(this.Olanda);	
		this.Olanda.onclick = function(evt){NomeTrasferta = 'Olanda'};
		this.Olanda.ondblclick = this.SceltaTrasferta.bind(this);
	}

CPU.prototype.SceltaTrasferta =
	function(){
		if (NomeCasa != NomeTrasferta && Scelta === 0){
			GiocaTrasferta = 1;
			this.playerGuest.style.backgroundImage =  "url('"+ Immagini + NomeTrasferta + formato +"')";
			if (NomeTrasferta === "Germania" || NomeTrasferta === "Francia" || NomeTrasferta === "Spagna")
				this.GuestSpeed = 12;
			if (NomeTrasferta === "Belgio" || NomeTrasferta === "Inghilterra" || NomeTrasferta === "Italia" || NomeTrasferta === "Portogallo")
				this.GuestSpeed = 9; 
			if (NomeTrasferta === "Danimarca" || NomeTrasferta === "Olanda")
				this.GuestSpeed = 6;
			this.Scelta = document.getElementById("GuestName");
			this.Scelta.value = NomeTrasferta;
		
		}
	}

CPU.prototype.setStartingPosition = 
	function(){
		this.HomeX = 50; //100
 		this.HomeY = 312; //275
 		//posizione iniziale giocatore Guest;
 		this.GuestX = 925; //850
 		this.GuestY = 312; //275
		//CSS per la posizione dei giocatori;
		this.playerHome.style.top = this.HomeY + 'px'; 
		this.playerHome.style.left = this.HomeX + 'px';
		this.playerGuest.style.top = this.GuestY + 'px';
		this.playerGuest.style.left = this.GuestX + 'px';
	}

CPU.prototype.playerMoveHandlerHome = 
	function(evt){
		if (play === true){
			if (this.PressUP === true)
				this.HomeY -= this.HomeSpeed;
			if (this.PressDOWN === true)
				this.HomeY += this.HomeSpeed;
			if (this.PressLEFT === true)
				this.HomeX -= this.HomeSpeed;
			if (this.PressRIGHT === true)
				this.HomeX += this.HomeSpeed;
			//controllo che playerGuest non esca dal rettangolo di gioco;
			if (this.HomeX < 50) //bordo sx;
				this.HomeX = 50;
			else if (this.HomeX > 437) //bordo dx;
				this.HomeX = 437;
			this.playerHome.style.left = this.HomeX + 'px';
			if (this.HomeY < 0) //bordo superiore;
				this.HomeY = 0 
			else if(this.HomeY > 625) //bordo inferiore;
				this.HomeY = 625;
			this.playerHome.style.top = this.HomeY + 'px';
		}	
	}

CPU.prototype.setMoveHandlerHome = 
	function(evt){
		if (evt.which == this.UP)
			this.PressUP = true;
		if (evt.which == this.DOWN)
			this.PressDOWN = true;
		if (evt.which == this.LEFT)
			this.PressLEFT = true;
		if (evt.which == this.RIGHT)
			this.PressRIGHT = true;	
	}

CPU.prototype.resetMoveHandlerHome = 
	function(evt){
 		if (evt.which == this.UP)
			this.PressUP = false;
		if (evt.which == this.DOWN)
			this.PressDOWN = false;
		if (evt.which == this.LEFT)
			this.PressLEFT = false;
		if (evt.which == this.RIGHT)
			this.PressRIGHT = false;
	}


CPU.prototype.playerMoveHandlerGuest =
	function(Campo){
		if (play === true){
			var random =  Math.random() * (50 - 20) + 20;
			if(this.GuestY - random > Campo.ball.posY)
				this.GuestY -= this.GuestSpeed;
			else if(this.GuestY + random < Campo.ball.posY)
				this.GuestY += this.GuestSpeed;		
			if (this.GuestY < 0) //bordo superiore;
				this.GuestY = 0	;
			else if(this.GuestY > 625) //bordo inferiore;
				this.GuestY = 625;
			this.playerGuest.style.top = this.GuestY + 'px'; 	

			if(this.GuestX + 100 < Campo.ball.posX)
				this.GuestX += this.GuestSpeed;
			if(this.GuestX + random < this.posX)
				this.GuestX += this.GuestSpeed;
			else if(this.GuestX - random > this.posX)
				this.GuestX -= this.GuestSpeed;
			if (this.GuestX > 925) //bordo dx;
				this.GuestX = 925;
			else if(this.GuestX < 537) //bordo sx;
				this.GuestX = 537; 
			this.playerGuest.style.left = this.GuestX + 'px'; 
			}
	}

CPU.prototype.movimentoLaterale =
	function(Campo){
		if (play === true){
			var casuale = Math.random() * (500 - 40) - 200;
				this.posX += casuale;
			if(this.posX > 950)
				this.posX = 900;
			else if( this.posX < 0)
				this.posX = 50;
		}	
	}