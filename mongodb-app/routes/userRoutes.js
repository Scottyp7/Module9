let express = require("express");
let router = express.Router();
let Controllers = require("../controllers"); // index.js will be matched if you give the file path

// USERS
router.get('/users', (req, res) => {
    Controllers.userController.getUsers(res);
})

router.post('/users/create', (req, res) => {
    Controllers.userController.createUser(req.body, res);
})

router.put('/users/:id', (req, res) => {
    Controllers.userController.updateUser(req, res)
})
router.delete('/users/:id', (req, res) => {
    Controllers.userController.deleteUser(req, res)
})

//COMMENT
router.get('/comments', (req, res) => {
    Controllers.userController.getComment(res);
})

router.post('/comments/create', (req, res) => {
    Controllers.userController.createComment(req.body, res);
})

router.put('/comments/:id', (req, res) => {
    Controllers.userController.updateComment(req, res)
})
router.delete('/comments/:id', (req, res) => {
    Controllers.userController.deleteComment(req, res)
})

//POST
router.get('/posts', (req, res) => {
    Controllers.userController.getPosts(res);
})

router.post('/posts/create', (req, res) => {
    Controllers.userController.createPost(req.body, res);
})

router.put('/posts/:id', (req, res) => {
    Controllers.userController.updatePost(req, res)
})
router.delete('/posts/:id', (req, res) => {
    Controllers.userController.deletePost(req, res)
})

//LIKES
router.get('/likes', (req, res) => {
    Controllers.userController.getLike(res);
})

router.post('/create/likes', (req, res) => {
    Controllers.userController.createLike(req.body, res);
})

router.delete('/likes/:id', (req, res) => {
    Controllers.userController.deleteLike(req, res)
})
module.exports = router;