import { domElements } from './dom';

export default function displayExpense(expenseObj) {
  const newExpenseDiv = document.createElement('div');
  const categoryPara = document.createElement('p');
  const amountPara = document.createElement('p');
  const datePara = document.createElement('p');

  categoryPara.textContent = expenseObj.categoryValue;
  amountPara.textContent = expenseObj.amountValue;
  datePara.textContent = expenseObj.dateValue;

  newExpenseDiv.appendChild(categoryPara);
  newExpenseDiv.appendChild(amountPara);
  newExpenseDiv.appendChild(datePara);

  domElements.expenseDiv.appendChild(newExpenseDiv);
}
