const { DataTypes, Model } = require("sequelize");
let dbConnect = require("../dbConnect");
const sequelizeInstance = dbConnect.Sequelize;


class Temp extends Model { }
// Sequelize will create this table if it doesn't exist on startup
Temp.init({
    id: {
        type: DataTypes.INTEGER, allowNull: false, autoIncrement:
            true, primaryKey: true
    },
    temperature: {
        type: DataTypes.INTEGER, allowNull: false, 
    }
},
    {
        sequelize: sequelizeInstance, modelName: 'temps', // uselowercase plural format
        timestamps: true, freezeTableName: true
    }
)
module.exports = Temp;