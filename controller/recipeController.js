const recipeModel = require("../model/recipeModel.js");

const { Pool } = require('pg');
const connectionString = process.env.DATABASE_URL || "postgres://futdxhkvnuuepy:f187d7af0a259f26677add7247aced689bd76f3d8be42fc721d4f0e38c3bd367@ec2-52-45-14-227.compute-1.amazonaws.com:5432/d137sulfnslg99/recipeDb";
const pool = new Pool({connectionString: connectionString});


function getAll(req, res) {
    recipeModel.getAll((err, results) => {
      if (err) {
        console.log(err);
        res.send(err, null);
      } else {
        console.log("in recipeController recieved: " + results);
        res.render("recipeBox", { list: results });
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
    console.log(req.body.ingredient);
   // req.body.ingredient = req.body.ingredient.split('\r\n');
    console.log(req.body.ingredient);
   // req.body.method = req.body.method.split('\r\n');
    const recipe = req.body;
    recipeModel.insertRecipe(recipe, (err, results) => {
      if (err) {
      } else {
        res.render('recipePage', { recipe: results });
      }
    });
  }