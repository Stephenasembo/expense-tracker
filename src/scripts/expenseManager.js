import { saveExpense, removeExpense, updateExpensesStorage } from './storage';
import { displayExpense, removeExpenseDiv } from './ui';

function deleteExpense(event) {
  let categoryName = event.target.id;
  [, categoryName] = (categoryName.split('delete'));
  removeExpense(categoryName);
  removeExpenseDiv(categoryName);
  updateExpensesStorage();
}

export default function createExpense(inputObj) {
  const expenseName = inputObj.categoryValue;
  saveExpense(expenseName, inputObj);
  displayExpense(inputObj);
  const deleteBtnId = `#delete${inputObj.categoryValue}`;
  const deleteBtn = document.querySelector(deleteBtnId);
  deleteBtn.addEventListener('click', deleteExpense);
  updateExpensesStorage();
}
