const {Pool} = require('pg');

const db = new Pool({
  host: 'localhost',
  database: 'recipeDb',
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

console.log('running server.js');