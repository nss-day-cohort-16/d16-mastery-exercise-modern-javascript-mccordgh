"use strict";

let Robot = require('./Robot.js');

let Drone = function(){
	this.name = "Drone";
	this.skill = "Aerial";
};
Drone.prototype = new Robot();

let BattleBot = function(){
	this.name = "Battle Bot";
	this.skill = "Combat Prowess";
};
BattleBot.prototype = new Robot();

let Bipedal = function(){
	this.name = "Bipedal";
	this.skill = "Mobility";
};
Bipedal.prototype = new Robot();

module.exports = {Drone, BattleBot, Bipedal};