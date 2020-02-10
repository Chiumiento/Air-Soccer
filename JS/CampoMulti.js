function Campo(){
	this.main = document.getElementById("main");
	this.box = document.createElement("div");
	this.ball = null; //dichiarandolo quì posso utilizzarlo in tutte le funzioni;
	this.player = null;
	this.cpu = null;
}

Campo.prototype.createCampo = 
	function(){
		this.box.setAttribute("id","Campo");
		this.main.appendChild(this.box);
		this.createLevel();
	}

Campo.prototype.createLevel = 
	function(){
		//creazione e gestione del pallone;
		this.ball = new Ball(this); 
		this.ball.createBall(this);
		//creazione e gestione dei giocatori;
		this.player = new Player(this);
		this.player.createPlayer(this);
	}
