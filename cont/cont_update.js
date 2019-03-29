var task = require('../model/model_task');

var update = function(req, res){
	task.update(req.body.update, req.body.id, function(err){
		if (err) throw err;
		res.redirect('/');
	});
	  
	}
module.exports = update;
