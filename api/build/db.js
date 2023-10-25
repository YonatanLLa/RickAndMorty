"use strict";
require('dotenv').config();
const { Sequelize } = require('sequelize');
const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME } = process.env;
const charactersModel = require("./Models/Character");
const favoriteModel = require("./Models/Favorite");
const database = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`, {
    logging: false
});
charactersModel(database);
favoriteModel(database);
// const {Characters, Favorite} = database.models
// Characters.belongsToMany(Users, { through: 'CharacterUser' });
// Users.belongsToMany(Characters, { through: 'CharacterUser' });
module.exports = Object.assign({ database }, database.models);
