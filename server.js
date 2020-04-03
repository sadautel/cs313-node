const express = require('express');
const app = express();
require('dotenv').config();
var path = require('path');

// middleware

const bodyParser = require('body-parser');
var session = require('express-session');
//const { check, validationResult } = require('express-validator');

// controllers
const recipeController = require('./controllers/recipeController.js');

//
app.set('port', (process.env.PORT || 5000));
// static content
app.use(express.static(path.join(__dirname, 'public/')));
// dynamic views
app.set('views', path.join(__dirname, 'views'));
// set default view engine
app.set('view engine', 'ejs');

app.use(session({
  secret: 'secret-key',
  resave: false,
  saveUninitialized: false
}))

app.use(bodyParser.urlencoded({ extended: true }));

// Root
app.get('/', (req, res) => {
  res.render('recipeReadyMain', { uid: req.session.uid });
});

app.get('/getAll', recipeController.getAll);

app.get('/viewRecipe/:id', recipeController.viewRecipe);

app.get('/newRecipe', verifyLogin, (req, res) => {

  res.render('newRecipe', { uid: req.session.uid });
});

app.post('/insertRecipe', recipeController.insertRecipe)


app.get('/login', (req, res) => {
  res.render('login', { message: null });
});

app.get('/signup', (req, res) => {
  res.render('signup', { message: null });
});

app.post('/handleSignup', recipeController.handleSignup);

app.post('/handleLogin', recipeController.handleLogin);


app.get('/signout', (req, res) => {
  if (req.session.uid) {
    req.session.destroy((err) => {
      if (err) {
        // TODO handle error
      } else {
        res.render('recipeReadyMain', { uid: null });
      }
    });
  } else {
    console.log("attempting to logout with no session.uid");
    res.render('recipeReadyMain', { uid: req.session.uid });
  }
});

app.listen(app.get('port'), function () {
  console.log('Node app is running on port', app.get('port'));
});

function verifyLogin(req, res, next) {
  if (req.session.uid) {
    // They are logged in
    next();
  } else {
    //not logged in. Redirect to login page
    // res.render('login', { message: null });
    // res.end();
    next();
  }
}