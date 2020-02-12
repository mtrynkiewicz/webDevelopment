'use strict';

var util = require('util');
const thinkagain = require('thinkagain')();
var r = thinkagain.r;


module.exports = {
  currencies,
};

function currencies(req,res,next)
{
	r.db("ExpensesDatabase").table("SingleCurrency").run().then(function(result)
	{
		res.json(result);
	});
}

