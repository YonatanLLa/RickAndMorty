"use strict";
const { DataTypes } = require('sequelize');
module.exports = (database) => {
    database.define('Favorites', {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            // autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false
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
        }
    }, {
        timestamps: false, // Desactiva los timestamps
    });
};
