const container = document.querySelector('#container');
const expenseDiv = document.querySelector('#expenseDiv');
const addExpenseBtn = document.querySelector('#addExpenseBtn');
const inputDialog = document.querySelector('#inputDialog');
const confirmBtn = document.querySelector('#confirm');
const closeBtn = document.querySelector('#close');
const categoryInput = document.querySelector('#category');
const amountInput = document.querySelector('#amount');
const dateInput = document.querySelector('#date');
const descriptionInput = document.querySelector('#description');

export const formControls = {
  categoryInput,
  amountInput,
  dateInput,
  descriptionInput,
  confirmBtn,
  closeBtn,
};

export const domElements = {
  container,
  expenseDiv,
  addExpenseBtn,
  inputDialog,
};
