import { config } from 'dotenv';
import { Sequelize } from 'sequelize';
import charactersModel from './Models/Character';
import favoriteModel from './Models/Favorite';

config(); // Cargar configuración de dotenv

const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME } = process.env;

const database = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`, {
  logging: false,
});



charactersModel(database);
favoriteModel(database);


const { Characters, Favorites } = database.models;



export  { database, Characters, Favorites};