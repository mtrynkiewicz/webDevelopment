'use strict';
var util = require('util');

const thinkagain = require('thinkagain')();
var r = thinkagain.r;

module.exports = {
  hello: hello
};

/*
  Functions in a127 controllers used for operations should take two parameters:

  Param 1: a handle to the request object
  Param 2: a handle to the response object
 */
function hello(req, res) 
{  
  var name = req.swagger.params.name.value || 'stranger';
  var hello = util.format('Hello, %s!', name);

  r.db("ExpensesDatabase").table("SingleExpense").run().then
  (
	function(result)
	{
		console.log(JSON.stringify(result));	
	}
  );
  res.json(hello);
}
