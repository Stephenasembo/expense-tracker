import '../styles/styles.css';
import { saveExpense, removeExpense, retrieveExpense } from './storage';
import { setUpButtons } from './form-handling';

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

createExpense(testInput);
