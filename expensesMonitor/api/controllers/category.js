'use strict';

var fs = require('fs');
var path = require('path');

var util = require('util');
const thinkagain = require('thinkagain')();
var r = thinkagain.r;


module.exports = {
  categories,
  manageCategories
};

function categories(req,res,next)
{
	r.db("ExpensesDatabase").table("SingleCategory").run().then(function(result)
	{
		res.json(result);
	});
}

function manageCategories(req, res, next) 
{
	let file = path.join(__dirname,"..","..","html","categories.html");
	let contents = fs.readFileSync(file, 'utf8');
	res.send(contents);
}
