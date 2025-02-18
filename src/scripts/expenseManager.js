import { saveExpense, removeExpense, retrieveExpense } from './storage';
import displayExpense from './ui';

const testInput = {
  categoryValue: 'Food',
  amountValue: 55,
  dateValue: '2025-02-28',
  descriptionValue: 'Pizza and pineapples',
};

function createExpense(inputObj) {
  const expenseName = JSON.stringify(inputObj.categoryValue);
  saveExpense(expenseName, inputObj);
  displayExpense(inputObj);
}

createExpense(testInput);
