const express = require("express");
const router = express.Router();
const Controllers = require("../controllers");

// matches GET requests sent to /api/users
// (the prefix from server.js)
router.get('/', (req, res) => {
   Controllers.userController.getLikes(res);
})

// matches POST requests sent to /api/users/create
router.post('/create', (req, res) => {
   Controllers.userController.createLike(req.body, res)
})

router.delete('/:id', (req, res) => {
    Controllers.userController.deleteLike(req, res)
})

module.exports = router;