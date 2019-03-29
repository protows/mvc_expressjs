var task = require('../model/model_task');

var index = function(req, res){
	task.list(function(err, rows){
		data = {
		title: rows
			};

		  	res.render('sql_mvc', data);
	});
	  
	}
module.exports = index;


// module.exports = 
// 	function(req, res){
// 	  res.send('Hello World -- 2');
// 	};
