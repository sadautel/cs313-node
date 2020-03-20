const {Pool} = require('pg');

const db = new Pool({
  user: 'savannah',
  host: 'localhost',
  database: 'recipeDb',
  password: 'sadautel',
  port: 5432
});

module.exports = {
  select : async (sql) => {
    try {
      const result = await db.query(sql);
      return result.rows;
    }
    catch(ex){
      console.log("Db queary error! " + ex);
    }
  }
};

console.log('running quearyDb.js');