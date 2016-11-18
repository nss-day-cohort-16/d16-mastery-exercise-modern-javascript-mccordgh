"use strict";

let Robots = require('./Robot.js'),
		$ = require('jquery'),
		Player1 = new Robots.Player(),
		Player2 = new Robots.Player();


$(function(){

	Player1.setType("WallE");
	Player2.setType("Johnny5");

	Player1.setName("matty buuuu");
	Player2.setName("surfin stevens");

	window.setinterval(fight, 5000);

	console.log("Player1", Player1);
	console.log("Player2", Player2);
});

function fight(){
	Player1.
}