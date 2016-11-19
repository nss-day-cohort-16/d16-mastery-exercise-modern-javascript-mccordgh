"use strict";

let Models = {};

let RobotModel = function() {
  this.name = "ketchup robot";
  this.weapon = "laser";
  this.health = 9999;
  };

// Mini Tank types

let MiniTank = function(){
	this.name = "MiniTank default";
};
MiniTank.prototype = new RobotModel();

Models.Johnny5 = function(){
  this.health = Math.floor(Math.random() * 40 + 150);
  this.lowDamage = 30;
  this.highDamage = 40;
	this.name = "Johnny5";
	this.skill = "Heat Vision";
	this.url = "../res/Johnny5.jpg";
};
Models.Johnny5.prototype = new MiniTank();

Models.WallE = function(){
  this.health = Math.floor(Math.random() * 90 + 130);
  this.lowDamage = 35;
  this.highDamage = 38;
	this.name = "Wall-E";
	this.skill = "Adoreableness";
	this.url = "../res/WallE.jpg";
};
Models.WallE.prototype = new MiniTank();

// Tripod types

let Tripod = function(){
	this.name = "Tripod Default";
	this.skill = "Tripod Default";
};
Tripod.prototype = new RobotModel();

Models.R2D2 = function(){
  this.health = Math.floor(Math.random() * 100 + 120);
  this.lowDamage = 5;
  this.highDamage = 80;
	this.name = "R2D2";
	this.skill = "Soldering Iron";
	this.url = '../res/R2D2.jpg';
};
Models.R2D2.prototype = new Tripod();

Models.R2BRO2 = function(){
  this.health = Math.floor(Math.random() * 30 + 180);
  this.lowDamage = 15;
  this.highDamage = 70;
	this.name = "R2BRO2";
	this.skill = "Keg Chuck";
	this.url = '../res/R2BRO2.jpg';
};
Models.R2BRO2.prototype = new Tripod();

// Bipedal Types

let Bipedal = function(){
	this.name = "Bipedal";
	this.skill = "Mobility";
};
Bipedal.prototype = new RobotModel();

Models.Bender = function(){
  this.health = Math.floor(Math.random() * 20 + 190);
  this.lowDamage = 20;
  this.highDamage = 60;
	this.name = "Bender";
	this.skill = "Bending";
	this.url = '../res/Bender.jpg';
};
Models.Bender.prototype = new Bipedal();

Models.BayMax = function(){
  this.health = Math.floor(Math.random() * 100 + 105);
  this.lowDamage = 25;
  this.highDamage = 50;
	this.name = "BayMax";
	this.skill = "Anti Heal";
	this.url = '../res/BayMax.jpg';
};
Models.BayMax.prototype = new Bipedal();


module.exports = Models;