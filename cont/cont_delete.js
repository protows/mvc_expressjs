var task = require('../model/model_task');

var delete1 = function(req, res){
	task.delete(req.body.id, function(err){
		if (err) throw err;
		res.redirect('/');
	});
	  
	}
module.exports = delete1;
