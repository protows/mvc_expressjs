// var Task = {
// 	list: function(callback){
// 		connection.query('SELECT car FROM table1', function(err, rows) {
//   		if (err) throw err;
// 		return rows;
			
		
// 	}
// };
// module.exports = Task;

var mysql  = require('mysql');
var config = require('../config.js');
var pool = mysql.createPool(config);
 
var Task = {
	list: function(callback){
		pool.query('SELECT id, car, year FROM table1', callback);
	},

	// add: function(a, callback){
	// 	pool.query('INSERT INTO table1 SET ?', {car: a}, callback);
	// }

	// add: function(a, callback){
	// 	pool.query('INSERT INTO table1 SET' + pool.escape({car:a}), callback);
	// },
	add: function(a, b, callback){
		pool.query('INSERT INTO table1 (car, year) VALUES(?,?)', [a,b], callback);
	},
	delete: function(a, callback){
		pool.query('DELETE FROM table1 WHERE id = ' + pool.escape(a), callback);
	},
	
	// delete: function(a, callback){
	// 	pool.query('DELETE FROM table1 WHERE id = ' + pool.escape(a), callback);
	// },
	// update: function(b, a, callback){
	// 	pool.query('UPDATE table1 SET car = ? WHERE id = ?', [{b}, {a}], callback);
	// }

	update: function(b, a, callback){
		pool.query('UPDATE table1 SET ? WHERE ?', [{car: b}, {id: a}], callback);
	}
	// update: function(b, a, callback){
	// 	var post = [{car: b}, {id: a}];
	// 	pool.query('UPDATE table1 SET ? WHERE ?', post, callback);
	// }
}

module.exports = Task;