import { editFormControls, formControls } from './dom';
import { saveExpense, removeExpense, updateExpensesStorage, retrieveExpense } from './storage';
import { displayExpense, removeExpenseDiv, displayEditDialog, updateDisplay } from './ui';

let selectedExpense;

function implementEdit(newValues) {
  removeExpense(selectedExpense);
  saveExpense(newValues.categoryValue, newValues);
  updateDisplay();
}

function deleteExpense(event) {
  let categoryName = event.target.id;
  [, categoryName] = (categoryName.split('delete'));
  removeExpense(categoryName);
  removeExpenseDiv(categoryName);
  updateExpensesStorage();
}

function closeEdit(event) {
  event.preventDefault();
  const editDialog = document.querySelector('#editDialog');
  editDialog.close();
}

function confirmEdit(formControlsFn) {
  const editForm = formControlsFn();
  const categoryValue = editForm.categoryEdit.value;
  const amountValue = editForm.amountEdit.value;
  const dateValue = editForm.dateEdit.value;
  const descriptionValue = editForm.descriptionEdit.value;

  const userValues = {
    categoryValue,
    amountValue,
    dateValue,
    descriptionValue,
  };

  return userValues;
}

function getEditInput(event) {
  let editValues;
  switch (event.target.id) {
    case 'confirmEdit':
      editValues = confirmEdit(editFormControls);
      console.log(editValues);
      implementEdit(editValues);
      break;
    case 'closeEdit':
      closeEdit(event);
      break;
    default:
      console.log('failed');
  }
}

function editExpense(event) {
  selectedExpense = event.target.id;
  [, selectedExpense] = selectedExpense.split('edit');
  const expenseObj = retrieveExpense(selectedExpense);
  displayEditDialog(expenseObj);
  const editForm = editFormControls();
  editForm.editDialog.addEventListener('click', getEditInput);
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

function activateExpenseEditBtns() {
  let editBtnsArr = document.querySelectorAll('.editExpense');
  editBtnsArr = Array.from(editBtnsArr);
  editBtnsArr.forEach((btn) => {
    btn.addEventListener('click', editExpense);
  });
}

export { createExpense, activateDeleteBtns, activateExpenseEditBtns };
