"use strict";

let RobotModels = require('./RobotModels.js');

let BattleBots = {};

BattleBots.Player = function(name) {
  this.type = null;
  this.weapon = "bare hands";
  this.playerName = "Unknown Robot";

  this.toString = function() {
    let output = `${this.playerName}!<br/> A brave <pop>${this.type.name}</pop><br/> fighting with: <pop>${this.type.skill}</pop>!`;
    return output;
  };
};

BattleBots.Player.prototype.setName = function(newName) {
  this.playerName = newName;
};

BattleBots.Player.prototype.setType = function(newType) {
  this.type = new RobotModels[newType]();
};

module.exports = BattleBots;
