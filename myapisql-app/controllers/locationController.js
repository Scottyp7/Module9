"use strict";
const Models = require("../models");

// Locations
const getLocations = (res) => {
    Models.Location.findAll({}).then(data => {
        res.send({ result: 200, data: data });
    }).catch(err => {
        console.log(err);
        res.send({ result: 500, error: err.message });
    })
}

const createLocation = (data, res) => {
    Models.Location.create(data).then(data => {
        res.send({ result: 200, data: data });
    }).catch(err => {
        console.log(err);
        res.send({ result: 500, error: err.message });
    })
}

const updateLocation = (req, res) => {
    Models.Location.update(req.body, {
        where: { id: req.params.id },
        returning: true
    })
        .then(data => {
            res.send({ result: 200, data: data });
        }).catch((err) => {
            console.log(err);
            res.send({ result: 500, error: err.message });
        });
};

const deleteLocation = (req, res) => {
    Models.Location.destroy({ where: { id: req.params.id } })
        .then(data => {
            res.send({ result: 200, data: data });
        }).catch((err) => {
            console.log(err);
            res.send({ result: 500, error: err.message });
        });
};


module.exports = {

    deleteLocation,updateLocation,createLocation,getLocations
};
