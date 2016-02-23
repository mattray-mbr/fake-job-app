// Requires \\
var express = require('express');
var bodyParser = require('body-parser');
var logger = require('morgan');
var mongoose = require('mongoose');

// Create Express App Object \\
var app = express();

mongoose.connect('mongodb://localhost/randomJobStuff');
//db name is randomJobStuff  collection name is newapplicant


// Application Configuration \\
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));

// Routes \\

app.get('/', function(req, res) {
	res.sendFile('html/index.html', {root : './public'});
});

var jobsCtrl = require('./controllers/jobsCtrl.js')
//pulls in the controllers functions for concise code in this file


// displays a list of applicants
app.get('/applicants', jobsCtrl.getApplicants)



// creates and applicant
app.post('/applicant', jobsCtrl.newApplicant)

app.get('/allApplicants', jobsCtrl.getAllApplicants)

app.post('/removeApplicant', jobsCtrl.deleteApplicant)



// Creating Server and Listening for Connections \\
var port = 3000
app.listen(port, function(){
  console.log('Server running on port ' + port);

})