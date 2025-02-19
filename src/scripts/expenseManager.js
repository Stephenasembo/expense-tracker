import { saveExpense, removeExpense, updateExpensesStorage } from './storage';
import { displayExpense, removeExpenseDiv } from './ui';

function deleteExpense(event) {
  let categoryName = event.target.id;
  [, categoryName] = (categoryName.split('delete'));
  removeExpense(categoryName);
  removeExpenseDiv(categoryName);
  updateExpensesStorage();
}

function createExpense(inputObj) {
  const expenseName = inputObj.categoryValue;
  saveExpense(expenseName, inputObj);
  displayExpense(inputObj);
  const deleteBtnId = `#delete${inputObj.categoryValue}`;
  const deleteBtn = document.querySelector(deleteBtnId);
  deleteBtn.addEventListener('click', deleteExpense);
  updateExpensesStorage();
}

function activateDeleteBtns() {
  let deleteBtnsArr = document.querySelectorAll('.deleteExpense');
  deleteBtnsArr = Array.from(deleteBtnsArr);
  deleteBtnsArr.forEach((btn) => {
    btn.addEventListener('click', deleteExpense);
  });
}

export { createExpense, activateDeleteBtns };
