const { Pool } = require('pg');
const connectionString = process.env.DATABASE_URL || "postgres://savannah:sadautel@localhost:5432/recipeDb";
const pool = new Pool({connectionString: connectionString});

function getSignIn(req, res) {
   console.log("Sending info to another file");

   var name = req.query.name;
   var password = req.query.password;

   getBoardFromDB(function(error, result) {
      console.log("Database results:" , result);

      if (error || result == null || result.length != 1) {
         res.status(500).json({success:false, data: error});
      }
      else 
      {
      const person = result[0];
      response.status(200).json(person);
      }
   });
}

function getPersonFromDb(id, callback) {
   const sql = "SELECT id, firstName, lastName, phone, email FROM person";
   pool.query(sql, function(err, result) {
      if (err) {
         console.log("Error with database has occured");
         console.log(err);
      }

      console.log("Found DB result " + JSON.stringify(result.rows));
      callback(null, result.rows);
   });
}
module.exports = {getSignIn: getSignIn};
