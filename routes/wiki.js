const express = require('express');
const wikiRouter= express.Router();
const models = require('../models');
const Page = models.Page;
const User = models.User;


wikiRouter.get('/',function(req, res, next){
  res.redirect('/');
});

wikiRouter.post('/', function(req, res, next){
  let title = req.body.title,
  content = req.body.content;

  var page = Page.build({
    title: title,
    content: content,
  });

  page.save()
  .then(res.json(req.body));
});

wikiRouter.get('/add', function(req, res, next){
   res.render('addpage');
});

wikiRouter.get('/')





module.exports = wikiRouter;

