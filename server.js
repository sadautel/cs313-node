const express = require('express');
var app = express();
var recipeController = require('./controller/recipeController.js');

app.set('port', process.env.PORT || 5432)
  // set up directory for static files
  .use(express.static(__dirname + '/public'))
  // set where are dynamic views will be stored
  .set('views', __dirname + '/views')
  // set default view engine
  .set('view engine', 'ejs')
  // call functions when trying to play a game
  // .get('/signUp', getSignUp.getPerson)
  // // set default route and content
  // .get('/', function(req, res) {
  //   res.sendFile('getSignUp.html', { root: __dirname + "/public"});
  // })
  // run localhost


  app.get('/', (req, res) => {
    res.render('recipeHome', { root: __dirname + "/views"});
    app.get('/getAll', recipeController.getAll);
    app.get('/viewRecipe/:id', recipeController.viewRecipe);
  });

 

  app.get('/addNewRecipe', (req, res) => {
    res.render('addNewRecipe', { root: __dirname + "/views"});
    app.get('insertRecipe', recipeController.insertRecipe);
  });

  
  
  app.listen(app.get('port'), function() {
  	console.log('Listening on port: ' + app.get('port'));
  });