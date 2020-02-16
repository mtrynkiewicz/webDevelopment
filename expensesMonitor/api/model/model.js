const thinkagain = require('thinkagain')();

// SingleExpense
var SingleExpense = thinkagain.createModel('SingleExpense', 
{
	type:'object',
	properties:
	{
		id: { type: 'string' },
		expenseValue: { type: 'number' },
		expenseDate: {type: 'string', format:'date-time'},
		expenseDescription: { type: 'string' },
		expenseCurrencyId: { type: 'string' },
		expenseCategoryId: { type: 'string' },
		expenseMonthId: { type: 'string' }
	},
	required: [ 'expenseValue', 'expenseDate' ]
});
exports.SingleExpense = SingleExpense;

var SingleCategory = thinkagain.createModel('SingleCategory', 
{
	type:'object',
	properties:
	{
		id: { type: 'string' },
		categoryName: { type: 'string' },
		categoryPriority: { type: 'number' },
	},
	required: [ 'categoryName', 'categoryPriority' ]
});
exports.SingleCategory = SingleCategory;

var SingleCurrency = thinkagain.createModel('SingleCurrency', 
{
	type:'object',
	properties:
	{
		id: { type: 'string' },
		currencyName: { type: 'string' },
		currencyShort: { type: 'string' },
	},
	required: [ 'categoryName', 'categoryPriority' ]
});
exports.SingleCurrency = SingleCurrency;