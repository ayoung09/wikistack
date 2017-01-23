const express = require('express');
const wikiRouter= express.Router();

wikiRouter.get('/',function(req, res, next){
  res.redirect('/');
});
wikiRouter.post('/', function(req, res, next){
  res.json(req.body);
});
wikiRouter.get('/add', function(req, res, next){
   res.render('addpage');
});





module.exports = wikiRouter;

