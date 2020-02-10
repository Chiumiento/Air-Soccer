var FinePartita = 0;
var game = null;
var NomeCasa = "SquadraCasa";
var NomeTrasferta = "SquadraTrasferta";
var GiocaCasa = 0;
var GiocaTrasferta = 0;
var Scelta = 0;
var Immagini = "./../Immagini/";
var formato = ".png";

function begin(){
	game = new Game();
	game.area.createCampo(); //funzione che crea il campo di gioco;
	
	//game.area = null;
}

function Game(){
	this.area = new Campo(); //classe che gestisce il campo di gioco;
	this.main = document.getElementById("body");
	this.stella1 = document.createElement("div");
	this.stella1.setAttribute("id","stelle");
	this.stella1.style.marginTop = "350" + 'px';
	this.stella1.style.backgroundImage = "url('./../Immagini/1stella.png')";
	this.main.appendChild(this.stella1);
	this.stella2 = document.createElement("div");
	this.stella2.setAttribute("id","stelle");
	this.stella2.style.marginTop = '300' + 'px';
	this.stella2.style.backgroundImage = "url('./../Immagini/2stelle.png')";
	this.main.appendChild(this.stella2);
	this.stella3 = document.createElement("div");
	this.stella3.setAttribute("id","stelle");
	this.stella3.style.marginTop = '250' + 'px';
	this.stella3.style.backgroundImage = "url('./../Immagini/3stelle.png')";
	this.main.appendChild(this.stella3);
	this.stella1bis = document.createElement("div");
	this.stella1bis.setAttribute("id","stelle");
	this.stella1bis.style.marginTop = "550" + 'px';
	this.stella1bis.style.backgroundImage = "url('./../Immagini/1stella.png')";
	this.main.appendChild(this.stella1bis);
	this.stella2bis = document.createElement("div");
	this.stella2bis.setAttribute("id","stelle");
	this.stella2bis.style.marginTop = '500' + 'px';
	this.stella2bis.style.backgroundImage = "url('./../Immagini/2stelle.png')";
	this.main.appendChild(this.stella2bis);
	this.stella3bis = document.createElement("div");
	this.stella3bis.setAttribute("id","stelle");
	this.stella3bis.style.marginTop = '450' + 'px';
	this.stella3bis.style.backgroundImage = "url('./../Immagini/3stelle.png')";
	this.main.appendChild(this.stella3bis);
	
}

