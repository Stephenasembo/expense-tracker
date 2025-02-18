import '../styles/styles.css';
import { saveExpense, removeExpense, retrieveExpense } from './storage';
import { confirmForm, setUpButtons } from './form-handling';
import displayExpense from './ui';
import { formControls } from './dom';

setUpButtons();

const testInput = {
  categoryValue: 'Food',
  amountValue: 55,
  dateValue: '2025-02-28',
  descriptionValue: 'Pizza and pineapples',
};

function createExpense(inputObj) {
  const expenseName = JSON.stringify(inputObj.categoryValue);
  saveExpense(expenseName, inputObj);
}

displayExpense(testInput);

const inputValues = {};

function getUserInput(event) {
  const categoryValue = formControls.categoryInput.value;
  const amountValue = formControls.amountInput.value;
  const dateValue = formControls.dateInput.value;
  const descriptionValue = formControls.descriptionInput.value;

  const userValues = {
    categoryValue,
    amountValue,
    dateValue,
    descriptionValue,
  };

  Object.assign(inputValues, userValues);

  confirmForm(event);
}

formControls.confirmBtn.addEventListener('click', getUserInput);

createExpense(testInput);
