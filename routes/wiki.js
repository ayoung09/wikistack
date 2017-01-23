const express = require('express');
const wikiRouter= express.Router();
const models = require('../models');
const Page = models.Page;
const User = models.User;



wikiRouter.get('/',function(req, res, next){
  Page.findAll({
    where: {status: 'open'}
  }).then(function(allPages){
   // console.log(allPages)
    res.render('index', {allPages: allPages})
    }).catch(next);

});


wikiRouter.get('/add', function(req, res, next){
   res.render('addpage');
});
wikiRouter.post('/', function(req, res, next){
  let title = req.body.title,
  content = req.body.content;

  var page = Page.build({
    title: title,
    content: content,
    status: 'open'
  });

var newPage = page.save();
//console.log(this);
  newPage.then(function(savedPage){
    res.redirect(savedPage.urlTitle);
  }
    //console.log('this is this', this),
).catch(next);
})



wikiRouter.get('/:urlTitle', function(req,res,next){
  Page.findOne({
    where : {urlTitle : req.params.urlTitle}
  }).then(function(foundPage){
    //console.log(foundPage)
    res.render('wikipage', foundPage.dataValues);
  }).catch(next);

})

wikiRouter.get('/')





module.exports = wikiRouter;

