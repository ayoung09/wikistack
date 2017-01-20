const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const nunjucks = require('nunjucks');
const env = nunjucks.configure('views', {noCache: true});
const models = require('./models');
// const server = app.listen('3000', () => {
//   console.log('Listening on 3000');
// })


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


app.get('/', (req, res) => {
  res.send('Welcome to Wikistack');
});


app.set('view engine', 'html');

app.engine('html', nunjucks.render);

app.use(express.static('public'));


