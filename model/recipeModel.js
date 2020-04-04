const express = require('express');
var app = express();
const { Pool } = require('pg');

const connectionString = process.env.DATABASE_URL || "postgres://futdxhkvnuuepy:f187d7af0a259f26677add7247aced689bd76f3d8be42fc721d4f0e38c3bd367@ec2-52-45-14-227.compute-1.amazonaws.com:5432/d137sulfnslg99/recipeDb";
const pool = new Pool({connectionString: connectionString});

function getAll(callback){
    let sql = "SELECT * FROM add_recipes";
    pool.query(sql, (err, results) => {
        if (err) {
          console.log(err);
          callback(err, null);
        } else {
          console.log(results.rows);
          callback(null, results.rows);
        }
      });
    }
    
function getRecipeById(id, callback) {
    console.log(id);
    let sql = "SELECT * FROM add_recipes WHERE id=$1";
    pool.query(sql, [id], (err, results) => {
        if (err) {
          callback(err, results);
        }
        console.log("recipeModel.ById: " + results.rows);
        callback(null, results.rows[0]);
      });
}

function insertRecipe(recipe, callback) {
  console.log("Recipe to be inserted in recipeModel ", recipe);
  let sql = "INSERT INTO add_recipes (recipe_name, recipe_description, prep_time, cook_time, ingredient) VALUES ($1, $2, $3, $4, $5, $6) RETURNING add_recipes (recipe_name, recipe_description, prep_time, cook_time, ingredients";
  params = [recipe.recipe_name, recipe.recipe_description, recipe.prep_time, recipe.cook_time, recipe.ingredient];
  pool.query(sql, params, (err, results) => {
    if (err) {
      console.log(err);
      callback(err, null);
    } else {
      console.log("res.row.id", results.rows[0]);
      callback(null, results.rows[0]);
    }
  });
}

module.exports = {
  getAll: getAll,
  getRecipeById: getRecipeById,
  insertRecipe: insertRecipe,
};