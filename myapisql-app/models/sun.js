const { DataTypes, Model } = require("sequelize");
let dbConnect = require("../dbConnect");
const sequelizeInstance = dbConnect.Sequelize;


class Sun extends Model { }
// Sequelize will create this table if it doesn't exist on startup
Sun.init({
    id: {
        type: DataTypes.INTEGER, allowNull: false, autoIncrement:
            true, primaryKey: true
    },
    description: {
        type: DataTypes.STRING, allowNull: false, required: true
    },
},
    {
        sequelize: sequelizeInstance, modelName: 'suns', // uselowercase plural format
        timestamps: true, freezeTableName: true
    }
)

module.exports = Sun;