import { DataTypes, Sequelize } from "sequelize"

export default (database: Sequelize) => {
    const Characters =   database.define('Favorites',{
        id:{
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            // autoIncrement: true
        },
        name:{
            type: DataTypes.STRING,
            unique: true, // opción de validación unique

            allowNull: false
        },
       
        species:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        gender:{
            type: DataTypes.ENUM('Female', 'Male', 'Genderless', 'unknown'),
            allowNull: false,
        },
        origin:{
            type: DataTypes.STRING,
            allowNull: false,
        },
 
        image:{
            type: DataTypes.STRING,
            allowNull: false,
        }
    },
    {
        timestamps: false, // Desactiva los timestamps
    })

    return Characters
}