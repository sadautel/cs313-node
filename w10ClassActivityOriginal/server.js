
 
app.set('port', (process.env.PORT || 5000));
 
app.use(express.static(__dirname + "/public"));
 
app.get('/books', bookController.handleBookList);
app.get('/book/:id', bookController.handleSingleBook);
 
app.post('/book', function(request, response) {
   var title = request.body.title;
 
   console.log("Creating a new book with title: " + title);
 
 
   var result = {status:"success"};
 
   response.json(result);
 
});
 
app.listen(app.get('port'), function() {
   console.log("Now listening on port " + app.get('port'));
});
