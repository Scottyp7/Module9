const { DataTypes, Model } = require("sequelize");
let dbConnect = require("../dbConnect");
const sequelizeInstance = dbConnect.Sequelize;


class Location extends Model { }
// Sequelize will create this table if it doesn't exist on startup
Location.init({
    ID: {
        type: DataTypes.INTEGER, allowNull: false, autoIncrement:
            true, primaryKey: true
    },
    city: {
        type: DataTypes.STRING, allowNull: false, required: true
    }
},
    {
        sequelize: sequelizeInstance, modelName: 'locations', // uselowercase plural format
        timestamps: false, freezeTableName: true
    }
)
module.exports = Location;

/*
      {
        "firstName":"scott",
        "lastName":"parker",
        "emailId":"asdasd@asd.com",
        "password":"asasdasd"
      }

*/