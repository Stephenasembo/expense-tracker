import { domElements } from './dom';

export default function displayExpense(expenseObj) {
  const newExpenseDiv = document.createElement('div');
  const categoryPara = document.createElement('p');
  const amountPara = document.createElement('p');
  const datePara = document.createElement('p');
  const buttonPara = document.createElement('p');

  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'Delete Expense';
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
