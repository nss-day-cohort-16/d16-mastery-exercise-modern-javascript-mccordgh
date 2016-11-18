"use strict";

let RobotModels = require('./RobotModels.js');

// const Names = [ "Thoror", "Hlundig", "Breuskie", "Ned Nederlander", "Lucky Day", "Dusty Bottoms", "Jack", "Mr. Holmes", "Matt", "Belve", "Nathan Majestic V, of the High Country", "Stevie"];

let BattleBots = {};

BattleBots.Player = function(name) {
  this.type = null;
  this.weapon = "bare hands";
  this.playerName = "Unknown Robot";

  this.toString = function() {
    let output = "generic output placeholder";
    return output;
  };
};

BattleBots.Player.prototype.setName = function(newName) {
  this.playerName = newName;
};

BattleBots.Player.prototype.setType = function(newType) {
  this.type = new RobotModels[newType]();
};

// BattleBots.Player.prototype.setWeapon = function(newWeapon) {
//    this.weapon = new Weapons[newWeapon]();
// };

// RANDOMIZER

// BattleBots.Player.prototype.generateClass = function() {
//   // Get a random index from the allowed classes array
//   let classes = Object.keys(Classes);
//   let randClsIndex = Math.floor(Math.random() * (classes.length));
//   return classes[randClsIndex];
// };

// BattleBots.Player.prototype.generateWeapon = function() {
//   let weapons = Object.keys(Weapons);
//   let randWepIndex = Math.floor(Math.random() * (weapons.length));
//   return weapons[randWepIndex];
// };

// BattleBots.Player.prototype.generateName = function() {
//   let randNameIndex = Math.floor(Math.random() * (Names.length));
//   return Names[randNameIndex];
// };

// BattleBots.Player.prototype.generateSpecies = function() {
//   let species = Object.keys(Species);
//   let randSpcIndex = Math.floor(Math.random() * (species.length));
//   return species[randSpcIndex];
// };

module.exports = BattleBots;
