

/*This file will host the players profile*/

function playername (s){

	alert('Welcome to our nightmare, ' + s );
}






var Player = function(attack,defense,health,items) {
	this.attack = attack;
	this.defense = defense;
	this.health = health;
	this.items = items;
	this.update = function(){


	}


};

var start = new Player(0,0,100,0);

draw = function() {
	start.update();
}