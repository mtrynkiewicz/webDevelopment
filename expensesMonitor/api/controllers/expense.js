'use strict';

var fs = require('fs');
var path = require('path');
var util = require('util');
var model = require('../model/model.js');

const thinkagain = require('thinkagain')();
var r = thinkagain.r;

var testData;
testData = new model.SingleExpense(
{
	id:"0123456789abcd",
	expenseValue: 12.12,
	expenseDate: "2020-01-02T11:11:11.214Z",
	expenseDescription: "Jedzonko",
	expenseCurrencyId: "3c55ac4b-05d9-45d8-b65d-00336590c46c",
	expenseCategoryId: "8c56e1ea-91c5-4837-b32f-19f8ec1241cb",
	expenseMonthId: "c9a626ca-0fa0-4059-988b-11fcaf97b226"
});

module.exports = {
  expensesList,
  singleExpense,
  removeSingleExpense,
  confirmExpense
};

function removeSingleExpense(req, res, next) {
	
	var param = req.swagger.params.id.value
	
	r.db("ExpensesDatabase").table("SingleExpense")
		.get(param).delete().run().then(
	function(okOk)
	{
		console.log(JSON.stringify(result));
		
		if(result.deleted == 1)
		{
			res.json({param,status:'deleted'});
		}
		else 
		{
			res.json({param,status:'not deleted'});
		}
	});
}

function expensesList(req,res,next)
{
	r.db("ExpensesDatabase").table("SingleExpense").run().then(function(result)
	{
		res.json(result);
	});
}

function singleExpense(req,res,next)
{
	let file = path.join(__dirname,"..","..","html","addNewExpense.html");
	let contents = fs.readFileSync(file, 'utf8');
	res.send(contents);
}


function confirmExpense(req,res,next)
{
	r.db("ExpensesDatabase").table("SingleExpense").run().then(function(result)
	{
		res.json(result);
	});
}





