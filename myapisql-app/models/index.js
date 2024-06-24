'use strict'
const Day = require('./day') //require the model
const Sun = require('./sun')
const Temp = require('./temp')
const Wind = require('./wind')


async function init() {

    Day.hasMany(Sun, {foreignKey: 'sunId'})
    Day.hasMany(Temp, {foreignKey: 'tempId'})
    Day.hasMany(Wind, {foreignKey: 'windId'})
    Sun.belongsTo(Day)
    Temp.belongsTo(Day)
    Wind.belongsTo(Day)


    Sun.hasMany(Temp, {foreignKey: 'tempId'})
    Temp.hasMany(Wind, {foreignKey: 'windId'})
    Temp.belongsTo(Sun)
    Wind.belongsTo(Temp)


    await Day.sync()
    await Sun.sync()
    await Temp.sync()
    await Wind.sync(); // sync the model
    // also sync any extra models here
};

init();

module.exports = {
    Day, 
    Sun, 
    Temp, 
    Wind // export the model
    // also export any extra models here
};
