require('dotenv').config();
const express = require('express');
const app = express();
const { Pool } = require("pg");

const connectionString = process.env.DATABASE_URL;
const pool = new Pool({connectionString: connectionString});


app.set('port', (process.env.PORT || 5000));
app.use(express.static("public"));

app.get('/getPerson', getPerson);


app.get('/', function (req, res) {
    res.send('Adding something!');
    res.end();
  })

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

function getPerson(){
  const id = request.query.id;
  console.log(id);
}

