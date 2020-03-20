const express = require('express');
var app = express();
var getSignUp = require('./getSignUp.js');
const { Pool } = require('pg');

const connectionString = process.env.DATABASE_URL || "postgres://futdxhkvnuuepy:f187d7af0a259f26677add7247aced689bd76f3d8be42fc721d4f0e38c3bd367@ec2-52-45-14-227.compute-1.amazonaws.com:5432/d137sulfnslg99/recipeDb";
const pool = new Pool({connectionString: connectionString});


app.set('port', process.env.PORT || 5432)
  // set up directory for static files
  .use(express.static(__dirname + '/public'))
  // set where are dynamic views will be stored
  .set('views', __dirname + '/views')
  // set default view engine
  .set('view engine', 'ejs')
  // call functions when trying to play a game
  .get('/signUp', getSignUp.getSignUp)
  // set default route and content
  .get('/', function(req, res) {
    res.sendFile('signUp.html', { root: __dirname + "/public"});
  })
  // run localhost
  .listen(app.get('port'), function() {
  	console.log('Listening on port: ' + app.get('port'));
  });