const express = require('express');
var app = express();
var getSignIn = require('./getSignIn.js');
const { Pool } = require('pg');

const connectionString = process.env.DATABASE_URL || "postgres://savannah:sadautel@localhost:5432/recipeDb";
const pool = new Pool({connectionString: connectionString});


app.set('port', process.env.PORT || 5432)
  // set up directory for static files
  .use(express.static(__dirname + '/public'))
  // set where are dynamic views will be stored
  .set('views', __dirname + '/views')
  // set default view engine
  .set('view engine', 'ejs')
  // call functions when trying to play a game
  .get('/signIn', getSignIn.getSignIn)
  // set default route and content
  .get('/', function(req, res) {
    res.sendFile('signIn.html', { root: __dirname + "/public"});
  })
  // run localhost
  .listen(app.get('port'), function() {
  	console.log('Listening on port: ' + app.get('port'));
  });