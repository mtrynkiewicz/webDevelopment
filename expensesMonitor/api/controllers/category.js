'use strict';

var fs = require('fs');
var path = require('path');

var util = require('util');
const thinkagain = require('thinkagain')();
var r = thinkagain.r;


module.exports = {
  categories,
  manageCategories,
  removeSingleCategory
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

function removeSingleCategory(req, res, next) {
	
	console.log("Kurwa mac");
	var param = req.swagger.params.id.value
	
	r.db("ExpensesDatabase").table("SingleCategory")
		.get(param).delete().run().then(
	function(resOfDelete)
	{
		console.log(JSON.stringify(resOfDelete));
		
		if(resOfDelete.deleted == 1)
		{
			res.json({param,status:'deleted'});
		}
		else 
		{
			res.json({param,status:'not deleted'});
		}
	});
}

