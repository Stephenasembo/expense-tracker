function saveExpense(expenseName, expenseObj) {
  localStorage.setItem(expenseName, JSON.stringify(expenseObj));
}

function removeExpense(expenseName) {
  localStorage.removeItem(expenseName);
}

function retrieveExpense(expenseName) {
  return JSON.parse(localStorage.getItem(expenseName));
}

export { saveExpense, removeExpense, retrieveExpense };
