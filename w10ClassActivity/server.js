var express = require('express');
var app = express();
 
 
app.set('port', (process.env.PORT || 5000));
app.use(express.static(__dirname + "/public"));
app.use(require('./route.js'));
app.listen(app.get('port'), function() {
   console.log("Now listening on port " + app.get('port'));
});
