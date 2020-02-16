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
  createExpense
};

function removeSingleExpense(req, res, next) {
	
	var param = req.swagger.params.id.value
	
	r.db("ExpensesDatabase").table("SingleExpense")
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

function createExpense(req,res,next)
{
	var expValue = req.swagger.params.expenseValue.value;
	var expDate = req.swagger.params.date.value;
	var expDesc = req.swagger.params.expenseDescription.value;
	var categoVa = req.swagger.params.categoryName.value;
	var currencyVa = req.swagger.params.currencyShort.value;

    r.db('ExpensesDatabase').table('SingleExpense').insert(
	{
        expenseValue: expValue,
        expenseDate: expDate,
        expenseDescription: expDesc,
		expenseCurrencyId: currencyVa,
		expenseCategoryId: categoVa
    },
	{returnChanges: true}).run().then
	(function(result)
	{
		if(result.inserted == 1)
		{
			res.json({status:'inserted'});
		}
		else 
		{
			res.json({status:'not inserted'});
		}
	});
}

function get_new(result) 
{
    if (result.changes.length > 0) if (result.changes[0].new_val != null) return result.changes[0].new_val;
    return result;
}



