var bodyParser = require('body-parser')
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
   extended: true
})); 
 
app.get('/books', bookController.handleBookList);
app.get('/book/:id', bookController.handleSingleBook);
 
app.post('/book', function(request, response) {
   var title = request.body.title;
 
   console.log("Creating a new book with title: " + title);
 
 
   var result = {status:"success"};
 
   response.json(result);
 
});