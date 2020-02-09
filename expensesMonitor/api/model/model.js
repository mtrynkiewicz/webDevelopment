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