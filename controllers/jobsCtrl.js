// controller contains 
var applicant = require('../models/jobapp.js')

function getApplicants(req, res){
	res.sendFile('html/applicants.html', {root : './public'});
}

function newApplicant(req, res){
	console.log(req.body)
	// Here is where you need to get the data
	var person = new applicant({
		name  : req.body.name,
		bio   : req.body.bio,
		skills: req.body.skills.split(', '),
		years : +req.body.years,
		why   : req.body.why,
	})
	person.save()
	// from the post body and store it in the database
	res.sendFile('html/success.html', {root: './public'});
}

function getAllApplicants(req, res){
	applicant.find({}, function(err, docs){
		console.log('sending back applicants')
		res.send(docs)
	})
}

function deleteApplicant(req, res){
	console.log(req.body.appID)
	applicant.remove({_id: req.body.appID}, function(err, docs){
		res.send(docs)
	})
}


module.exports = {
	getApplicants    : getApplicants,
	newApplicant     : newApplicant,
	getAllApplicants : getAllApplicants,
	deleteApplicant  : deleteApplicant
}