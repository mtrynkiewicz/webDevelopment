'use strict';

var fs = require('fs');
var path = require('path');

var util = require('util');
const thinkagain = require('thinkagain')();
var r = thinkagain.r;


module.exports = {
  categories,
  manageCategories,
  removeSingleCategory,
  createCategory,
  singleCategory,
  updateCategory
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
	
	var param = req.swagger.params.id.value
	
	r.db("ExpensesDatabase").table("SingleCategory")
		.get(param).delete().run().then(
	function(resOfDelete)
	{		
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

function createCategory(req,res,next)
{
	var catName = req.swagger.params.categoryName.value;
	var catPriority = req.swagger.params.categoryPriority.value;
	
    r.db('ExpensesDatabase').table('SingleCategory').insert(
	{
        categoryName: catName,
        categoryPriority: catPriority,
    },
	{returnChanges: true}).run().then
	(function(resOfChange)
	{
		if(resOfChange.inserted == 1)
		{
			res.json({status:'inserted'});
		}
		else 
		{
			res.json({status:'not inserted'});
		}
	});
}

function updateCategory(req,res,next)
{
	var catName = req.swagger.params.categoryName.value;
	var catPriority = req.swagger.params.categoryPriority.value;
	var catId = req.swagger.params.id.value;
	
	if(Object.keys(catId).length === 0)
	{
		 return;
	}
	
	console.log(catName)
	console.log(catPriority)
	console.log(catId)

	
    r.db('ExpensesDatabase').table('SingleCategory').get(catId).update
	({
        categoryName: catName,
        categoryPriority: catPriority,
    },
	{returnChanges: true}).run().then
	(function(resOfChange)
	{
		if(resOfChange.replaced == 1)
		{
			res.json({status:'replaced'});
		}
		else 
		{
			res.json({status:'not replaced'});
		}
	});
}

function singleCategory(req,res,next)
{
	var catId = req.swagger.params.id.value;
	r.db("ExpensesDatabase").table("SingleCategory").get(catId).run().then(function(result)
	{
		console.log(result)
		res.json(result);
	});
}

function get_new(result) 
{
    if (result.changes.length > 0) if (result.changes[0].new_val != null) return result.changes[0].new_val;
    return result;
}

