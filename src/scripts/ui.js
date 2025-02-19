import { domElements } from './dom';
import { retrieveExpense } from './storage';

function displayExpense(expenseObj) {
  const newExpenseDiv = document.createElement('div');
  const categoryPara = document.createElement('p');
  const amountPara = document.createElement('p');
  const datePara = document.createElement('p');
  const buttonPara = document.createElement('p');

  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'Delete Expense';
  const deleteBtnId = `delete${expenseObj.categoryValue}`;
  deleteBtn.setAttribute('id', deleteBtnId);
  deleteBtn.classList.add('deleteExpense');
  buttonPara.appendChild(deleteBtn);

  categoryPara.textContent = expenseObj.categoryValue;
  amountPara.textContent = expenseObj.amountValue;
  datePara.textContent = expenseObj.dateValue;

  newExpenseDiv.appendChild(buttonPara);
  newExpenseDiv.appendChild(categoryPara);
  newExpenseDiv.appendChild(amountPara);
  newExpenseDiv.appendChild(datePara);

  newExpenseDiv.classList.add(expenseObj.categoryValue);

  domElements.expenseDiv.appendChild(newExpenseDiv);
}

function removeExpenseDiv(expenseName) {
  const className = `.${expenseName}`;
  const expenseDiv = document.querySelector(className);
  domElements.expenseDiv.removeChild(expenseDiv);
}

function updateDisplay() {
  // Returns an array of expense stored keys
  const storedExpenses = retrieveExpense('userExpenses');
  if (storedExpenses === null) {
    return;
  }

  // Display the expenses from storage
  for (let i = 0; i < storedExpenses.length; i += 1) {
    const expenseObj = retrieveExpense(storedExpenses[i]);
    displayExpense(expenseObj);
  }
}

export { displayExpense, removeExpenseDiv, updateDisplay };
