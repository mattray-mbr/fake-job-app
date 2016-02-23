//model file contains info about how data is structured
//schema

var mongoose = require('mongoose')

var applicantSchema = mongoose.Schema({
	name   : {type: String},
	bio	   : {type: String},
	skills : {type: Array},
	years  : {type: Number},
	why    : {type: String},
})

module.exports = mongoose.model('NewApplicants', applicantSchema) 