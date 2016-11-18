"use strict";

let Models = {};

let RobotModel = function() {
  this.name = "ketchup robot";
  this.weapon = "laser";
  this.health = 9999;
  // this.healthBonus = 0;
  // this.strengthBonus = 0;
  // this.intelligenceBonus = 0;
  // this.critBonus = 0;
  // this.magical = false;
  };

let MiniTank = function(){
	this.name = "MiniTank default";
};
MiniTank.prototype = new RobotModel();

Models.Johnny5 = function(){
  this.health = Math.floor(Math.random() * 40 + 150);
  this.damage = Math.floor(Math.random() * 5 + 30);
	this.name = "Johnny5! No disassemble!!";
	this.skill = "Robot Charisma";
};
Models.Johnny5.prototype = new MiniTank();

Models.WallE = function(){
  this.health = Math.floor(Math.random() * 90 + 130);
  this.damage = Math.floor(Math.random() * 15 + 25);
	this.name = "Waaaaaaaaaaaaall-EEEEEEEEEEE";
	this.skill = "Complete pitifullness in a most adoreable way";
};
Models.WallE.prototype = new MiniTank();






let Tripod = function(){
	this.name = "Tripod Default";
	this.skill = "Tripod Default";
};
Tripod.prototype = new RobotModel();

Models.R2D2 = function(){
  this.health = Math.floor(Math.random() * 100 + 120);
  this.damage = Math.floor(Math.random() * 30 + 15);
	this.name = "R2D2";
	this.skill = "BEEP BOOP BOP BEEP WHEEEERRRRREERER";
};
Models.R2D2.prototype = new Tripod();

Models.R2BRO2 = function(){
  this.health = Math.floor(Math.random() * 30 + 180);
  this.damage = Math.floor(Math.random() * 50 + 10);
	this.name = "R2BRO2";
	this.skill = "BEER BOOP BOP BEER BEEEEEEEEEEERKEGSTAND";
};
Models.R2BRO2.prototype = new Tripod();







let Bipedal = function(){
	this.name = "Bipedal";
	this.skill = "Mobility";
};
Bipedal.prototype = new RobotModel();

Models.C3PO = function(){
  this.health = Math.floor(Math.random() * 20 + 190);
  this.damage = Math.floor(Math.random() * 20 + 20);
	this.name = "C3PO";
	this.skill = "Oh my!!";
};
Models.C3PO.prototype = new Bipedal();

Models.BayMax = function(){
  this.health = Math.floor(Math.random() * 100 + 105);
  this.damage = Math.floor(Math.random() * 25 + 15);
	this.name = "BayMax the Big Hero";
	this.skill = "Tender Voice";
};
Models.BayMax.prototype = new Bipedal();


module.exports = Models;