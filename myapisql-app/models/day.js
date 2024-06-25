const { DataTypes, Model } = require("sequelize");
let dbConnect = require("../dbConnect");
const sequelizeInstance = dbConnect.Sequelize;


class Day extends Model { }
// Sequelize will create this table if it doesn't exist on startup
Day.init({
    ID: {
        type: DataTypes.INTEGER, allowNull: false, autoIncrement:
            true, primaryKey: true
    },
        day: {
        type: DataTypes.STRING, allowNull: false, required: true
    }, 
        windDirection: {
        type: DataTypes.STRING, allowNull: false, required: true
    }, 
        windSpeed: {
        type: DataTypes.STRING, allowNull: false, required: true
    }, 
        sunDescription: {
        type: DataTypes.STRING, allowNull: false, required: true
    },        
        temperature: {
        type: DataTypes.STRING, allowNull: false, required: true,
    }  },
    {
        sequelize: sequelizeInstance, modelName: 'days', // uselowercase plural format
        timestamps: false, freezeTableName: true
    }
)
module.exports = Day;

