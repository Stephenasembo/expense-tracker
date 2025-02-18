import { saveExpense, removeExpense } from './storage';
import { displayExpense, removeExpenseDiv } from './ui';

const testInput = {
  categoryValue: 'Food',
  amountValue: 55,
  dateValue: '2025-02-28',
  descriptionValue: 'Pizza and pineapples',
};

function deleteExpense(event) {
  let categoryName = event.target.id;
  [, categoryName] = (categoryName.split('delete'));
  removeExpense(JSON.stringify(categoryName));
  removeExpenseDiv(categoryName);
}

function createExpense(inputObj) {
  const expenseName = JSON.stringify(inputObj.categoryValue);
  saveExpense(expenseName, inputObj);
  displayExpense(inputObj);
  const deleteBtnId = `#delete${inputObj.categoryValue}`;
  const deleteBtn = document.querySelector(deleteBtnId);
  deleteBtn.addEventListener('click', deleteExpense);
}

createExpense(testInput);
