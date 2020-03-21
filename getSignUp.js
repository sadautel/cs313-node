const pool = require('./server');
function getPerson(req, res) {
   console.log("Sending info to another file");

   var firstName = req.query.firstName;
   var lastName = req.query.lastName;
   var phone = req.query.phone;
   var email = req.query.email;
  

   getPersonFromDB(function(error, result) {
      console.log("Database results:" , result);

      if (error || result == null || result.length != 1) {
         res.status(500).json({success:false, data: error});
      }
      else 
      {
      const person = result[0];
      const params = {person: result[0], navPath:partialDir};
      response.render(parecipeDbth.join(rootDir,'display'), params);
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
module.exports = {getPerson: getPerson};
