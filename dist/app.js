(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";
let RobotModels = require('./RobotModels.js');

console.log("RobotModels", RobotModels);
},{"./RobotModels.js":3}],2:[function(require,module,exports){
"use strict";

let Robot = function(){
	this.name = "Generic Robot";
	this.something = "filler";
};

module.exports = Robot;

},{}],3:[function(require,module,exports){
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
},{"./RobotTypes.js":4}],4:[function(require,module,exports){
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
},{"./Robot.js":2}]},{},[1]);
