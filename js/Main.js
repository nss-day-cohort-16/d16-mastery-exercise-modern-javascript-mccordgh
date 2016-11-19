"use strict";

let roundCounter = 0,
		p1MaxHP = 666,
		p2MaxHP = 666,
		interval;

let Robots = require('./Robot.js'),
		$ = require('jquery'),
		Player1 = new Robots.Player(),
		Player2 = new Robots.Player();

$(function(){

	$('#pressStartBtn').click((event) => {
		if (evalUserInput()) {
			arenaSetup();
			interval = window.setInterval(fight, 500);
		} else {
			alert(('Please enter a name and choose a robot type for Player1 and Player2').toUpperCase());
		}
	});

});

function arenaSetup(){
	
	let p1Name = $('#txtP1Name').val();
	let p2Name = $('#txtP2Name').val();
	let p1Type = $('#p1Select').val();
	let p2Type = $('#p2Select').val();

	Player1.setName(p1Name);
	Player2.setName(p2Name);
	Player1.setType(p1Type);
	Player2.setType(p2Type);

	$('#player1Info').html(Player1.toString());
	$('#player2Info').html(Player2.toString());
	
	$('#player1Image').attr('src', Player1.type.url);
	$('#player2Image').attr('src', Player2.type.url);

	p1MaxHP = Player1.type.health;
	p2MaxHP = Player2.type.health;
	$('#Player1Info h1').html(Player1.playerName);
	$('#Player2Info h1').html(Player2.playerName);
	$('#Player1Health hp').html(`${Player1.type.health} / ${p1MaxHP}`);
	$('#Player2Health hp').html(`${Player2.type.health} / ${p2MaxHP}`);

	$('#playerSetup').addClass('hidden');
	$('#startFooter').addClass('hidden');

	randomizeBG();
	$('#battleArena').removeClass('hidden');
}

function evalUserInput(){
	let p1Name = $('#txtP1Name').val();
	let p2Name = $('#txtP2Name').val();
	let p1Type = $('#p1Select').val();
	let p2Type = $('#p2Select').val();

	if (p1Name !== "" && p2Name !== "" && p1Type !== null && p2Type !== null) {
		return true;
	} else {
		return false;
	}
}

function fight(){
	roundCounter++;
	battleLog(`<h2>ROUND ${roundCounter} ~~~~~~~~~~~~~~~~~</h2>`);
	attacks(Player1, Player2);
	attacks(Player2, Player1);
	updateHealth();
	let winner = "";

	if (Player1.type.health < 1 && Player2.type.health < 1){
		winner = `<h1>DRAW!!</h1><h1>${Player1.playerName} and ${Player2.playerName} have both been defeated!!`;
	} else if (Player1.type.health < 1 && Player2.type.health > 0){
		winner = `<h1>VICTORY!!</h1><h1>${Player2.playerName} has defeated ${Player1.playerName} with ${Player2.type.skill}!!</h1>`;
	} else if (Player2.type.health < 1 && Player1.type.health > 0){
		winner = `<h1>VICTORY!!</h1><h1>${Player1.playerName} has defeated ${Player2.playerName} with ${Player1.type.skill}!!</h1>`;
	}

	if (winner !== ""){
		window.clearInterval(interval);
		declareWinner(winner);
	}

}

function battleLog(_string){
	$('#battleLog').html(`${$('#battleLog').html()}<h2>${_string}</h2>`);
}

function randomizeBG(){
	let rndBG = Math.floor(Math.random() * 7) + 1;
	let rndBGstr = `../res/backgrounds/mkbg${rndBG}.jpg`;
	$(document.body).css('background-image', `url('${rndBGstr}')`);	
}
	
function attacks(_attacker, _defender){
	let dmg = Math.floor(Math.random() * (_attacker.type.highDamage - _attacker.type.lowDamage + 1)) + _attacker.type.lowDamage;
	_defender.type.health -= dmg;
	battleLog(`${_attacker.playerName} attacks ${_defender.playerName} with ${_attacker.type.skill} for ${dmg} damage!`);
}

function updateHealth(){
	let p1Health = Player1.type.health > 0 ? Player1.type.health : 0;
	let p2Health = Player2.type.health > 0 ? Player2.type.health : 0;
	$('#Player1Health hp').html(`${p1Health} / ${p1MaxHP}`);
	$('#Player2Health hp').html(`${p2Health} / ${p2MaxHP}`);
}

function declareWinner(winString){
	$('#myModal h2').html(`${winString}<br/>`);
	$('#btnClose').click((event) => {
		window.location.reload();
	});
	$('#myModal').css('display', 'block');
}