import '../styles/styles.css';

const addExpenseBtn = document.querySelector('#addExpenseBtn');
const inputDialog = document.querySelector('#inputDialog');

function showForm() {
  inputDialog.show();
}
addExpenseBtn.addEventListener('click', showForm);
