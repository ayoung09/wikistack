const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const nunjucks = require('nunjucks');
const env = nunjucks.configure('views', {noCache: true});
const models = require('./models');
const wikiRouter = require('./routes/wiki');
// const server = app.listen('3000', () => {
//   console.log('Listening on 3000');
// })

app.use(express.static('public'));
app.set('view engine', 'html');
models.User.sync({})
.then(() => {
  return models.Page.sync({});
})
.then(function () {
  app.listen(3000, () => {
    console.log('Server is listening on port 3000');
  });
})
.catch(console.error);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/wiki/', wikiRouter);


//app.set('view engine', 'html');

app.engine('html', nunjucks.render);

//app.use(express.static('public'));


