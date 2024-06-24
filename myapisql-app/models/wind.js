const { DataTypes, Model } = require("sequelize");
let dbConnect = require("../dbConnect");
const sequelizeInstance = dbConnect.Sequelize;


class Wind extends Model { }
// Sequelize will create this table if it doesn't exist on startup
Wind.init({
    id: {
        type: DataTypes.INTEGER, allowNull: false, autoIncrement:
            true, primaryKey: true
    },
    speed: {
        type: DataTypes.STRING, allowNull: false, required: true
    },
    direction: {
        type: DataTypes.STRING, allowNull: false, required: true
    }
},
    {
        sequelize: sequelizeInstance, modelName: 'winds', // uselowercase plural format
        timestamps: true, freezeTableName: true
    }
)

module.exports =  Wind;