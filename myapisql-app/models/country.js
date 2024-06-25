const { DataTypes, Model } = require("sequelize");
let dbConnect = require("../dbConnect");
const sequelizeInstance = dbConnect.Sequelize;


class Country extends Model { }
// Sequelize will create this table if it doesn't exist on startup
Country.init({
    ID: {
        type: DataTypes.INTEGER, allowNull: false, autoIncrement:
            true, primaryKey: true
    },
    country: {
        type: DataTypes.STRING, allowNull: false, required: true
    }
},
    {
        sequelize: sequelizeInstance, modelName: 'country', // uselowercase plural format
        timestamps: false, freezeTableName: true
    }
)
module.exports = Country;

/*
      {
        "firstName":"scott",
        "lastName":"parker",
        "emailId":"asdasd@asd.com",
        "password":"asasdasd"
      }

*/