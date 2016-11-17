"use strict";

let RobotTypes = require('./RobotTypes.js');

let Model1 = function(){
	this.name = "Drone";
	this.skill = "Aerial";
};
Model1.prototype = new RobotTypes.Drone();

let Model2 = function(){
	this.name = "Battle Bot";
	this.skill = "Combat Prowess";
};
Model2.prototype = new RobotTypes.Drone();

let Model3 = function(){
	this.name = "Bipedal";
	this.skill = "Mobility";
};
Model3.prototype = new RobotTypes.BattleBot();

let Model4 = function(){
	this.name = "Drone";
	this.skill = "Aerial";
};
Model4.prototype = new RobotTypes.BattleBot();

let Model5 = function(){
	this.name = "Battle Bot";
	this.skill = "Combat Prowess";
};
Model5.prototype = new RobotTypes.Bipedal();

let Model6 = function(){
	this.name = "Model";
	this.skill = "Mobility";
};
Model6.prototype = new RobotTypes.Bipedal();