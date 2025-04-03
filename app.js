
import ExpenseManager from "./expensesManager.js";


async function manageExpenses() {

    console.log("Fetching initial expenses...");

    await new Promise(resolve => setTimeout(resolve, 2000));

    ExpenseManager.addExpense("Groceries", 5000);
    ExpenseManager.addExpense("Electricity Bill", 7000);


    ExpenseManager.displayExpenses();

    ExpenseManager.addExpense("Internet Bill", 2000);

    ExpenseManager.deleteExpense(2);

    ExpenseManager.displayExpenses();
};


manageExpenses();