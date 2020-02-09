const thinkagain = require('thinkagain')();

// Expense
var Expense = thinkagain.createModel('Expense', 
{
	type: 'object',
	properties: 
	{
		id: { type: 'string' },
		expenseValue: { type: 'float' },
		expenseDate: {type: 'string', format:'date-time'},
		expenseDescription: { type: 'string' },
		expenseCurrencyId: { type: 'string' },
		expenseCategoryId: { type: 'string' },
		expenseMonthId: { type: 'string' },
	},
	required: [ 'title', 'path' ]
});

exports.Expense = Expense;