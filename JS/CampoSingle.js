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
	//	this.main.style.marginTop = '130' + 'px'; //DA MODIFICARE METTERE CENTRALE!
	//	this.main.style.marginLeft = '250' + 'px'; //LEGGI SOPRA!
		this.createLevel();
	}

Campo.prototype.createLevel = 
	function(){
		//creazione e gestione del pallone;
		this.ball = new Ball(this); 
		this.ball.createBall(this);
		//creazione e gestione dei giocatori;
		this.cpu = new CPU(this);
		this.cpu.createCPU(this);
	}
