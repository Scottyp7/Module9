"use strict";
const Models = require("../models");

// DAYS
const getDays = (res) => {
    Models.User.findAll({}).then(data => {
        res.send({ result: 200, data: data });
    }).catch(err => {
        console.log(err);
        res.send({ result: 500, error: err.message });
    })
}
// uses JSON from request body to create new user in DB
const createDay = (data, res) => {
    Models.User.create(data).then(data => {
        res.send({ result: 200, data: data });
    }).catch(err => {
        console.log(err);
        res.send({ result: 500, error: err.message });
    })
}
const updateDay = (req, res) => {
    Models.User.update(req.body, {
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
// deletes user matching ID from params
const deleteDay = (req, res) => {
    Models.User.destroy({ where: { id: req.params.id } })
        .then(data => {
            res.send({ result: 200, data: data });
        }).catch((err) => {
            console.log(err);
            res.send({ result: 500, error: err.message });
        });
};

//TEMPS
const getTemps = (res) => {
    Models.Post.findAll({}).then(data => {
        res.send({ result: 200, data: data });
    }).catch(err => {
        console.log(err);
        res.send({ result: 500, error: err.message });
    })
}
const createTemp = (data, res) => {
    Models.Post.create(data).then(data => {
        res.send({ result: 200, data: data });
    }).catch(err => {
        console.log(err);
        res.send({ result: 500, error: err.message });
    })
}
const updateTemp = (req, res) => {
    Models.Post.update(req.body, {
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
const deleteTemp = (req, res) => {
    Models.Post.destroy({ where: { id: req.params.id } })
        .then(data => {
            res.send({ result: 200, data: data });
        }).catch((err) => {
            console.log(err);
            res.send({ result: 500, error: err.message });
        });
};

//SUNS
const getSuns = (res) => {
    Models.Comment.findAll({}).then(data => {
        res.send({ result: 200, data: data });
    }).catch(err => {
        console.log(err);
        res.send({ result: 500, error: err.message });
    })
}
const createSun = (data, res) => {
    Models.Comment.create(data).then(data => {
        res.send({ result: 200, data: data });
    }).catch(err => {
        console.log(err);
        res.send({ result: 500, error: err.message });
    })
}
const updateSun = (req, res) => {
    Models.Comment.update(req.body, {
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
const deleteSun = (req, res) => {
    Models.Comment.destroy({ where: { id: req.params.id } })
        .then(data => {
            res.send({ result: 200, data: data });
        }).catch((err) => {
            console.log(err);
            res.send({ result: 500, error: err.message });
        });
};

//WINDS
const getWinds = (res) => {
    Models.Like.findAll({}).then(data => {
        res.send({ result: 200, data: data });
    }).catch(err => {
        console.log(err);
        res.send({ result: 500, error: err.message });
    })
}
const updateWind = (req, res) => {
    Models.Comment.update(req.body, {
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
const createWind = (data, res) => {
    Models.Like.create(data).then(data => {
        res.send({ result: 200, data: data });
    }).catch(err => {
        console.log(err);
        res.send({ result: 500, error: err.message });
    })
}
const deleteWind = (req, res) => {
    Models.Like.destroy({ where: { id: req.params.id } })
        .then(data => {
            res.send({ result: 200, data: data });
        }).catch((err) => {
            console.log(err);
            res.send({ result: 500, error: err.message });
        });
};
module.exports = {
    deleteWind,createWind,updateWind,getWinds,
    deleteSun,updateSun,getSuns,createSun,
    deleteTemp,updateTemp,createTemp,updateTemp,
    deleteDay,getTemps,updateDay,createDay,getDays
};
