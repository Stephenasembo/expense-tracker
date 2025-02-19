// Store keys of the expenses
let userExpenses = [];

function retrieveExpense(expenseName) {
  return JSON.parse(localStorage.getItem(expenseName));
}

function updateExpensesStorage() {
  localStorage.setItem('userExpenses', JSON.stringify(userExpenses));
}

function saveExpense(expenseName, expenseObj) {
  userExpenses = retrieveExpense('userExpenses');
  if (userExpenses === null) {
    userExpenses = [];
  }
  localStorage.setItem(expenseName, JSON.stringify(expenseObj));
  userExpenses.push(expenseName);
  updateExpensesStorage();
}

function removeExpense(expenseName) {
  userExpenses = retrieveExpense('userExpenses');
  localStorage.removeItem(expenseName);
  for (let i = 0; i < userExpenses.length; i += 1) {
    if (userExpenses[i] === expenseName) {
      userExpenses.splice(i, 1);
    }
  }
  updateExpensesStorage();
}

export {
  saveExpense,
  removeExpense,
  retrieveExpense,
  updateExpensesStorage,
};
