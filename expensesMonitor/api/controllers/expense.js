'use strict';

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
  readExpense
};

function readExpense(req, res, next) {
	var param = req.swagger.params.id.value
	r.db("ExpensesDatabase").table("SingleExpense")
		.get(param).run().then(
	function(result){
	console.log(JSON.stringify(result));
	res.json(result);
	}
	);
}

function expensesList(req,res,next)
{
	r.db("ExpensesDatabase").table("SingleExpense")
		.run().then(
	function(result){
	console.log(JSON.stringify(result));
	res.json(result);
	}
	);
}