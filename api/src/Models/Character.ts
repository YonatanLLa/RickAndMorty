import { DataTypes, Sequelize, Model } from 'sequelize';
import {CharacterAtributes} from "../interface/chareacter"


interface CharacterIntertace extends Model<CharacterAtributes>, CharacterAtributes {}

const charactersModel =  (database: Sequelize) => {
  const Characters = database.define<CharacterIntertace>('Characters', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    status: {
      type: DataTypes.ENUM('Alive', 'Dead', 'unknown'),
      allowNull: false,
    },
    species: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    gender: {
      type: DataTypes.ENUM('Female', 'Male', 'Genderless', 'unknown'),
      allowNull: false,
    },
    origin: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }, {
    timestamps: false, // Desactiva los timestamps
  });

  return Characters;
};

export default charactersModel