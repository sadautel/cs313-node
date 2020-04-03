const recipeModel = require("../models/recipeModel.js");

const { Pool } = require('pg');
const connectionString = process.env.DATABASE_URL;
const pool = new Pool({ connectionString: connectionString });

// TODO put pool and bcrypt into model

//all functions will need to define callback functions with err and res parameters
function getAll(req, res) {
  recipeModel.getAll((err, results) => {
    if (err) {
      console.log(err);
      res.send(err, null);
    } else {
      console.log("in recipeController recieved: " + results);
      res.render("recipeCard", { list: results });
      res.end();
    }
  });
}

function viewRecipe(req, res) {
  console.log('controler.viewRecipe params.id: ', req.params.id);
  recipeModel.getRecipeById(req.params.id, (err, results) => {
    if (err) {
      console.log(err);
      res.send(err, null);
    } else {

      res.render('recipePage', { recipe: results });

    }
  });
}

function insertRecipe(req, res) {
  // TODO sanitize input
  console.log("req: ", req.body);
  //console.log(req.body.ingredient);
  req.body.ingredient = req.body.ingredient.split('\r\n');
  //console.log(req.body.ingredient);
  req.body.method = req.body.method.split('\r\n');
  const recipe = req.body;
  recipeModel.insertRecipe(recipe, (err, results) => {
    if (err) {
    } else {
      res.render('recipePage', { recipe: results });
    }
  });
}

function handleSignup(req, res) {
  //TODO: sanitize this
  var pword1 = req.body.pword1;
  var pword2 = req.body.pword2;
  //compare the two passwords ? hash password : send error message
  if (pword1 != pword2) {
    res.render('signup', { message: "Passwords do not match" });
  } else {
    //insert the user
    var user = {
      // TODO: sanitize this
      fname: req.body.fname,
      lname: req.body.lname,
      uname: req.body.uname,
      pword: req.body.pword1,
    };
    recipeModel.insertUser(user, (err, result) => {
      if (err) {
        res.render('signup', { message: "error in creating your account" })
      } else {
        res.redirect('/login');
      }
    });
  }
}


function handlelogin(req, res) {
  // TODO: sanitize this
  var login = {
    uname: req.body.uname,
    pword: req.body.pword
  }
  recipeModel.verifyPassword(login, (err, results) => {
    if (err) {
      res.render('login', { message: err });
    } else {
      //set session variable
      req.session.uid = results; 
      res.redirect('/');
    }
  });

}

module.exports = {
  getAll: getAll,
  viewRecipe: viewRecipe,
  insertRecipe: insertRecipe,
  handleSignup: handleSignup,
  handleLogin: handlelogin
};