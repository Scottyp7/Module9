const { DataTypes, Model } = require("sequelize");
let dbConnect = require("../dbConnect");
const sequelizeInstance = dbConnect.Sequelize;


class Day extends Model { }
// Sequelize will create this table if it doesn't exist on startup
Day.init({
    id: {
        type: DataTypes.INTEGER, allowNull: false, autoIncrement:
            true, primaryKey: true
    },
    date: {
        type: DataTypes.STRING, allowNull: false, required: true
    }, city: {
        type: DataTypes.STRING, allowNull: false, required: true,
        unique: true
    }
},
    {
        sequelize: sequelizeInstance, modelName: 'days', // uselowercase plural format
        timestamps: true, freezeTableName: true
    }
)
module.exports = Day;

/*
      {
        "firstName":"scott",
        "lastName":"parker",
        "emailId":"asdasd@asd.com",
        "password":"asasdasd"
      }

*/