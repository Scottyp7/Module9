"use strict";

let Models = require("../models"); // matches index.js

//USERS
const getUsers = (res) => {
    // finds all users
    Models.User.find({})

        .then(data => res.send({ result: 200, data: data }))
        .catch(err => {
            console.log(err);
            res.send({ result: 500, error: err.message })
        })
}
const createUser = (data, res) => {
    // creates a new user using JSON data POSTed in request body
    console.log(data)
    new Models.User(data).save()

        .then(data => res.send({ result: 200, data: data }))
        .catch(err => {
            console.log(err);
            res.send({ result: 500, error: err.message })
        })
}

const updateUser = (req, res) => {
    // updates the user matching the ID from the param using JSON data POSTed in request body
    console.log(req.body)
    Models.User.findByIdAndUpdate(req.params.id, req.body, { new: true })

        .then(data => res.send({ result: 200, data: data }))
        .catch(err => {
            console.log(err);
            res.send({ result: 500, error: err.message })
        })
}
const deleteUser = (req, res) => {
    // deletes the user matching the ID from the param
    Models.User.findByIdAndDelete(req.params.id)
    .then(data => res.send({ result: 200, data: data }))
    .catch(err => {
        console.log(err);
        res.send({ result: 500, error: err.message })
    })
}

//LIKES
const createLike = (data, res) => {
    // creates a new like using JSON data POSTed in request body
    console.log(data)
    new Models.Like(data).save()

        .then(data => res.send({ result: 200, data: data }))
        .catch(err => {
            console.log(err);
            res.send({ result: 500, error: err.message })
        })
}

const deleteLike = (req, res) => {
    // deletes the like matching the ID from the param
    Models.Like.findByIdAndDelete(req.params.id)
    .then(data => res.send({ result: 200, data: data }))
    .catch(err => {
        console.log(err);
        res.send({ result: 500, error: err.message })
    })
}
const getLike = (res) => {
    // finds all likes
    Models.Like.find({})

        .then(data => res.send({ result: 200, data: data }))
        .catch(err => {
            console.log(err);
            res.send({ result: 500, error: err.message })
        })
}
//COMMENTS
const deleteComment = (req, res) => {
    // deletes the comment matching the ID from the param
    Models.Comment.findByIdAndDelete(req.params.id)
    .then(data => res.send({ result: 200, data: data }))
    .catch(err => {
        console.log(err);
        res.send({ result: 500, error: err.message })
    })
}

const updateComment = (req, res) => {
    // updates the user matching the ID from the param using JSON data POSTed in request body
    console.log(req.body)
    Models.Comment.findByIdAndUpdate(req.params.id, req.body, { new: true })

        .then(data => res.send({ result: 200, data: data }))
        .catch(err => {
            console.log(err);
            res.send({ result: 500, error: err.message })
        })
}
const getComment = (res) => {
    // finds all comments
    Models.Comment.find({})

        .then(data => res.send({ result: 200, data: data }))
        .catch(err => {
            console.log(err);
            res.send({ result: 500, error: err.message })
        })
}
const createComment = (data, res) => {
    // creates a new comment using JSON data POSTed in request body
    console.log(data)
    new Models.Comment(data).save()

        .then(data => res.send({ result: 200, data: data }))
        .catch(err => {
            console.log(err);
            res.send({ result: 500, error: err.message })
        })
}
//POSTS
const getPosts = (res) => {
    // finds all posts
    Models.Post.find({})

        .then(data => res.send({ result: 200, data: data }))
        .catch(err => {
            console.log(err);
            res.send({ result: 500, error: err.message })
        })
}
const updatePost = (req, res) => {
    // updates the user matching the ID from the param using JSON data POSTed in request body
    console.log(req.body)
    Models.Post.findByIdAndUpdate(req.params.id, req.body, { new: true })

        .then(data => res.send({ result: 200, data: data }))
        .catch(err => {
            console.log(err);
            res.send({ result: 500, error: err.message })
        })
}
const deletePost = (req, res) => {
    // deletes the post matching the ID from the param
    Models.Post.findByIdAndDelete(req.params.id)
    .then(data => res.send({ result: 200, data: data }))
    .catch(err => {
        console.log(err);
        res.send({ result: 500, error: err.message })
    })
}

const createPost = (data, res) => {
    // creates a new post using JSON data POSTed in request body
    console.log(data)
    new Models.Post(data).save()

        .then(data => res.send({ result: 200, data: data }))
        .catch(err => {
            console.log(err);
            res.send({ result: 500, error: err.message })
        })
}

module.exports = {
    getUsers, createUser, updateUser, deleteUser, deleteLike, getLike, createLike, deleteComment, getPosts, deletePost, createPost,
    createComment, getComment, updatePost, updateComment
}