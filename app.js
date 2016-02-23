// Requires \\
var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

// Create Express App Object \\
var app = express();

mongoose.connect('mongodb://localhost/randomJobStuff');
//db name is randomJobStuff  collection name is newapplicant
var applicantSchema = mongoose.Schema({
	name   : {type: String},
	bio	   : {type: String},
	skills : {type: Array},
	years  : {type: Number},
	why    : {type: String},
})

var Applicant = mongoose.model('NewApplicants', applicantSchema) 

// Application Configuration \\
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));

// Routes \\

app.get('/', function(req, res) {
	res.sendFile('html/index.html', {root : './public'});
});

// displays a list of applicants
app.get('/applicants', function(req, res){
	res.sendFile('html/applicants.html', {root : './public'});
});

// creates and applicant
app.post('/applicant', function(req, res){
	console.log(req.body)
	// Here is where you need to get the data
	var person = new Applicant(req.body)
	person.save()
	// from the post body and store it in the database
	res.sendFile('html/success.html', {root: './public'});
});



// Creating Server and Listening for Connections \\
var port = 3000
app.listen(port, function(){
  console.log('Server running on port ' + port);

})