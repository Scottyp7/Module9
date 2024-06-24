const express = require("express");
const router = express.Router();
const Controllers = require("../controllers");

// matches GET requests sent to /api/users
// (the prefix from server.js)
router.get('/', (req, res) => {
   Controllers.userController.getWinds(res);
})

// matches POST requests sent to /api/users/create
router.post('/create', (req, res) => {
   Controllers.userController.createWind(req.body, res)
})

router.put('/:id', (req, res) => {
    Controllers.userController.updateWind(req, res)
})
router.delete('/:id', (req, res) => {
    Controllers.userController.deleteWind(req, res)
})

module.exports = router;