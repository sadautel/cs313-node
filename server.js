const express = require('express');
var app = express();
var recipeController = require('./controller/recipeController.js');

app.set('port', process.env.PORT || 5432)
  // set up directory for static files
  .use(express.static(__dirname + '/public'))
  // set where are dynamic views will be stored
  .set('views', __dirname + '/views')
  // set default view engine
  .set('view engine', 'ejs');

  app.get('/', (req, res) => {
    res.render('recipeHome.html', { root: __dirname + "/public"})
  })

  app.get('/getAll', (req, res) => {
  app.render('getAll', recipeController.getAll);
  })

  app.get('/addNewRecipe', (req, res) => {
    res.render('addNewRecipe.html', { root: __dirname + "/public"})
  })

  app.post('/insertRecipe', (req, res) => {
    app.post('insertRecipe', recipeController.insertRecipe)
  })
  
  
  app.listen(app.get('port'), function() {
  	console.log('Listening on port: ' + app.get('port'))
  });