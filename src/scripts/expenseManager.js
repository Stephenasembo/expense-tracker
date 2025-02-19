import { saveExpense, removeExpense, updateExpensesStorage, retrieveExpense } from './storage';
import { displayExpense, removeExpenseDiv, displayEditDialog } from './ui';

function deleteExpense(event) {
  let categoryName = event.target.id;
  [, categoryName] = (categoryName.split('delete'));
  removeExpense(categoryName);
  removeExpenseDiv(categoryName);
  updateExpensesStorage();
}

function editExpense(event) {
  let selectedExpense = event.target.id;
  [, selectedExpense] = selectedExpense.split('edit');
  displayEditDialog();
}

function createExpense(inputObj) {
  const expenseName = inputObj.categoryValue;
  saveExpense(expenseName, inputObj);
  displayExpense(inputObj);

  const deleteBtnId = `#delete${inputObj.categoryValue}`;
  const deleteBtn = document.querySelector(deleteBtnId);
  deleteBtn.addEventListener('click', deleteExpense);

  const editBtnId = `#edit${inputObj.categoryValue}`;
  const editBtn = document.querySelector(editBtnId);
  editBtn.addEventListener('click', editExpense);
  updateExpensesStorage();
}

function activateDeleteBtns() {
  let deleteBtnsArr = document.querySelectorAll('.deleteExpense');
  deleteBtnsArr = Array.from(deleteBtnsArr);
  deleteBtnsArr.forEach((btn) => {
    btn.addEventListener('click', deleteExpense);
  });
}

function activateEditBtns() {
  let editBtnsArr = document.querySelectorAll('.editExpense');
  editBtnsArr = Array.from(editBtnsArr);
  editBtnsArr.forEach((btn) => {
    btn.addEventListener('click', editExpense);
  });
}

export { createExpense, activateDeleteBtns, activateEditBtns };
