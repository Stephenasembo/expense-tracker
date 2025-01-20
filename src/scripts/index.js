import '../styles/styles.css';

const addExpenseBtn = document.querySelector('#addExpenseBtn');
const inputDialog = document.querySelector('#inputDialog');
const confirmBtn = document.querySelector('#confirm');
const closeBtn = document.querySelector('#close');
const categoryInput = document.querySelector('#category');
const amountInput = document.querySelector('#amount');
const dateInput = document.querySelector('#date');
const descriptionInput = document.querySelector('#description');

function showForm() {
  inputDialog.show();
}

let userValues = {};

function getInputDetails(event) {
  event.preventDefault();
  const categoryValue = categoryInput.value;
  const amountValue = amountInput.value;
  const dateValue = dateInput.value;
  const descriptionValue = descriptionInput.value;

  userValues = {
    categoryValue,
    amountValue,
    dateValue,
    descriptionValue,
  };

  console.log(userValues);
  inputDialog.close();
};

function closeForm(event) {
  event.preventDefault();
  inputDialog.close();
}
addExpenseBtn.addEventListener('click', showForm);
confirmBtn.addEventListener('click', getInputDetails);
closeBtn.addEventListener('click', closeForm);
