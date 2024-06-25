const express = require("express");
const router = express.Router();
const Controllers = require("../controllers");

// matches GET requests sent to /api/users
// (the prefix from server.js)
router.get('/', (req, res) => {
   Controllers.dayController.getDays(res);
})

// matches POST requests sent to /api/users/create
router.post('/create', (req, res) => {
   Controllers.dayController.createDay(req.body, res)
})

router.put('/:id', (req, res) => {
    Controllers.dayController.updateDay(req, res)
})
router.delete('/:id', (req, res) => {
    Controllers.dayController.deleteDay(req, res)
})

module.exports = router;