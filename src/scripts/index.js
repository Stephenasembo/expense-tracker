import '../styles/styles.css';

const addExpenseBtn = document.querySelector('#addExpenseBtn');
const inputDialog = document.querySelector('#inputDialog');
const confirmBtn = document.querySelector('#confirm');
const closeBtn = document.querySelector('#close');

function showForm() {
  inputDialog.show();
}
function getInputDetails(event) {
  event.preventDefault();
}

function closeForm(event) {
  event.preventDefault();
}
addExpenseBtn.addEventListener('click', showForm);
confirmBtn.addEventListener('click', getInputDetails);
closeBtn.addEventListener('click', closeForm);
