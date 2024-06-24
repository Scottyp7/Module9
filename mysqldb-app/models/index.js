'use strict'
const User = require('./user') //require the model
const Post = require('./post')
const Like = require('./like')
const Comment = require('./comment')


async function init() {

    User.hasMany(Post, {foreignKey: 'userId'})
    User.hasMany(Like, {foreignKey: 'userId'})
    User.hasMany(Comment, {foreignKey: 'userId'})
    Post.belongsTo(User)
    Comment.belongsTo(User)
    Like.belongsTo(User)

    Post.hasMany(Comment, {foreignKey: 'postId'})
    Post.hasMany(Like, {foreignKey: 'postId'})
    Comment.belongsTo(Post)
    Like.belongsTo(Post)


    await User.sync()
    await Post.sync()
    await Comment.sync()
    await Like.sync(); // sync the model
    // also sync any extra models here
};

init();

module.exports = {
    User, 
    Post, 
    Like, 
    Comment // export the model
    // also export any extra models here
};
