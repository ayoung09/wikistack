const express = require('express');
const wikiRouter= express.Router();
const models = require('../models');
const Page = models.Page;
const User = models.User;
const Sequelize = require('sequelize');


wikiRouter.get('/',function(req, res, next){
  res.redirect('/');
});

wikiRouter.post('/', function(req, res, next){
  //res.json(req.body);

  var page = Page.build({
    title: req.body.title,
    content: req.body.content,
    //date: Sequelize.NOW
  });

  page.save()
  .then(res.json(req.body));
});

wikiRouter.get('/add', function(req, res, next){
   res.render('addpage');
});

wikiRouter.get('/')





module.exports = wikiRouter;

