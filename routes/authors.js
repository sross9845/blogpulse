const express= require('express');
const router = express.Router();
const db = require('../models');

//GET /authors
router.get('/', function(req,res){
    db.author.findAll()
        .then(function(authors){
            res.render('authors/index',{authors})
        });
});

router.get('/new', function(req,res){
    res.render('authors/new');
});

router.post('/', function(req,res){
    db.author.create(req.body)
        .then(function(author){
            res.redirect('/authors')
        });
});

module.exports = router;