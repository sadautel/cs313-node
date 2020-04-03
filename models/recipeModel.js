const { Pool } = require('pg');
const connectionString = process.env.DATABASE_URL;
const pool = new Pool({ connectionString: connectionString });

const bcrypt = require('bcrypt');

function getAll(callback) {

  let sql = "SELECT title, description, prep_time, id FROM recipe";
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
  let sql = "SELECT title, description, prep_time, ingredient, method FROM recipe WHERE id=$1";
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
  let sql = "INSERT INTO recipe (category, title, description, prep_time, ingredient, method) VALUES ($1, $2, $3, $4, $5, $6) RETURNING category, title, description, prep_time, ingredient, method";
  params = [recipe.category, recipe.title, recipe.description, recipe.prep_time, recipe.ingredient, recipe.method];
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

function hashPassword(pword, callback) {
  bcrypt.hash(pword, 10, function (err, hash) {
    if (err) {
      callback(err, null)
    } else {
      callback(null, hash);
    }
  });
}

function insertUser(user, callback) {
  //hash the password
  hashPassword(user.pword, (err, hash) => {
    if (err) {
      console.log(err);
      callback(err, null);
    } else {
      let sql = "INSERT INTO auser (fname, lname, uname, pword_hash) VALUES ($1, $2, $3, $4)";
      let params = [user.fname, user.lname, user.uname, hash];
      pool.query(sql, params, (err, results) => {
        if (err) {
          console.log(err);
          callback(err, null);
        } else {
          callback(null, true);
        }
      });
    }
  });

}

function verifyPassword(login, callback) {
  // get hashed password
  let sql = "SELECT pword_hash, id FROM auser WHERE uname = $1";
  pool.query(sql, [login.uname], (err, results) => {
    if (err) {
      let message = "Error in creating your account";
      callback(message, null);
    } else {
      // compare passwords
      console.log(results.rows[0].pword_hash);
      var hash = results.rows[0].pword_hash;
      bcrypt.compare(login.pword, hash, function (err, result) {
        if (err) {
          let message = "Error in creating your account";
          callback(message, null);
        } else if (result) {
          callback(null, results.rows[0].id);
        } else {
          let message = "Incorect username or password";
          callback(message, null);
        }
      });
    }
  });
}

module.exports = {
  getAll: getAll,
  getRecipeById: getRecipeById,
  insertRecipe: insertRecipe,
  insertUser: insertUser,
  verifyPassword: verifyPassword
};

