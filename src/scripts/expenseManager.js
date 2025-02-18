import { saveExpense, removeExpense } from './storage';
import { displayExpense, removeExpenseDiv } from './ui';

function deleteExpense(event) {
  let categoryName = event.target.id;
  [, categoryName] = (categoryName.split('delete'));
  removeExpense(JSON.stringify(categoryName));
  removeExpenseDiv(categoryName);
}

export default function createExpense(inputObj) {
  const expenseName = JSON.stringify(inputObj.categoryValue);
  saveExpense(expenseName, inputObj);
  displayExpense(inputObj);
  const deleteBtnId = `#delete${inputObj.categoryValue}`;
  const deleteBtn = document.querySelector(deleteBtnId);
  deleteBtn.addEventListener('click', deleteExpense);
}
