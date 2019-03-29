var task = require('../model/model_task');

var add = function(req, res){
	task.add(req.body.car, req.body.year, function(err){
		if (err) throw err;
		res.redirect('/');
	});
	  
	}
module.exports = add;


