
const ExpenseManager = (() => {
    let expenses = []; 
    let id = 1; 

    function addExpense(name, amount) {
        const expense = { id: id++, name, amount };
        expenses.push(expense);
        console.log(`Expense Added: ${expense.id} - ${expense.name} -- amount-(${expense.amount})`);
    }

    function deleteExpense(expenseId) {
        expenses = expenses.filter(exp => exp.id !== expenseId);
        console.log(`Expense ${expenseId} Deleted.`);
    }

    function displayExpenses() {
        console.log("Current Expenses:");
        expenses.forEach(exp => {
            console.log(`ID: ${exp.id}, Name: ${exp.name}, Amount: ${exp.amount}`);
        });
    }

    return {
        addExpense,
        deleteExpense,
        displayExpenses
    };
})();

export default ExpenseManager;