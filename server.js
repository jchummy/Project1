
// LINES#CREATE
app.post('/api/lines', function(req, res) {
	console.log(Line);
  // SAVE LINE TO DB
  var line = new Line({
    text: req.body.text
  });

  line.save(function(err, line) {
    res.json(line);
  });
});




app.listen(process.env.PORT || 3000);