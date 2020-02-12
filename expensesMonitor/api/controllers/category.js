'use strict';

var util = require('util');
const thinkagain = require('thinkagain')();
var r = thinkagain.r;


module.exports = {
  categories,
};

function categories(req,res,next)
{
	r.db("ExpensesDatabase").table("SingleCategory").run().then(function(result)
	{
		res.json(result);
	});
}