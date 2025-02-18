import '../styles/styles.css';
import { confirmForm, setUpButtons } from './form-handling';
import { formControls } from './dom';
import createExpense from './expenseManager';

setUpButtons();

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

  createExpense(inputValues);
}

formControls.confirmBtn.addEventListener('click', getUserInput);
