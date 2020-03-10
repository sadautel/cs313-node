const express = require('express');
const app = express();
const port = 5000;

app.use(express.static("public"));


app.get('/', function (req, res) {
    res.send('Adding something!');
    res.end();
  })

app.listen(port, () => console.log(`Example app listening on port ${port}!`));