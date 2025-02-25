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

  const editBtn = document.createElement('button');
  editBtn.textContent = 'Edit Expense';
  const editBtnId = `edit${expenseObj.categoryValue}`;
  editBtn.setAttribute('id', editBtnId);
  editBtn.classList.add('editExpense');

  buttonPara.appendChild(editBtn);
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
  // Clear the display first
  domElements.expenseDiv.innerHTML = '';

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

function displayEditDialog() {
  const editDiv = document.createElement('div');
  editDiv.innerHTML = `
  <dialog id="editDialog">
    <form method="dialog">
      <div>
        <label for="categoryEdit">Enter the new category for your expense: </label>
        <input type="text" name="category" id="categoryEdit">
      </div>
      <div>
        <label for="amountEdit">Enter the amount spent: </label>
        <input type="number" step="0.1" min="0.00" id="amountEdit">
      </div>
      <div>
        <label for="dateEdit">Enter the date for your expenditure: </label>
        <input type="date" id="dateEdit">
      </div>
      <div>
        <label for="descriptionEdit">Enter additional description: </label>
        <textarea name="description" id="descriptionEdit"></textarea>
      </div>
      <div>
        <button id="confirmEdit">Confirm</button>
        <button id="closeEdit">Close</button>
      </div>
    </form>
  </dialog>`;

  domElements.container.appendChild(editDiv);
  const editDialog = document.querySelector('#editDialog');
  editDialog.showModal();
}

export { displayExpense, removeExpenseDiv, updateDisplay, displayEditDialog };
