const express= require('express');
const router = express.Router();
const db = require('../models');

router.get('/', function(req,res){
    db.post.findAll()
    .then(function(posts){
        res.render('posts/index')
    })
})

router.get('/:id', function(req,res){
    db.post.findByPk(parseInt(req.params.id))
    .then(function(post){
        post.getAuthor()
        .then(function(author){
        db.comment.findAll({
            where: { postId: post.id }
        })
        .then(function(comments){
            res.render('posts/show', { post, comments, author })
        })
    })
})
})


router.post('/:id/comments', function(req,res){
    db.comment.create({
        name: req.body.name,
        content: req.body.content,
        postId : req.params.id
        }).then(function(){
            res.redirect(`/posts/${req.params.id}`);
        });
    });

router.get('/new', function(req,res){
        res.render('posts/new')
});





module.exports = router;