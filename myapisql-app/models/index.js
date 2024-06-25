'use strict'
const Day = require('./day') //require the model
const Location = require('./location')
const Country = require('./country')


async function init() {

    Country.hasMany(Location, {foreignKey: 'countryID'})
    Location.hasMany(Day, {foreignKey: 'LocationID'})
    
    Day.belongsTo(Location)
    Location.belongsTo(Country)
    
    // AWAIT is used to create tables in the database if they dont already exist.
    await Day.sync()
    await Location.sync()
    await Country.sync()

};

init();

module.exports = {
    Day, 
    Location,
    Country
};
