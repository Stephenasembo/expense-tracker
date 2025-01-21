import '../styles/styles.css';
import { domElements, formControls } from './dom';
import clientSideValidation from './form-handling';

function showForm() {
  domElements.inputDialog.show();
}

let userValues = {};

function getInputDetails(event) {
  event.preventDefault();
  const categoryValue = formControls.categoryInput.value;
  const amountValue = formControls.amountInput.value;
  const dateValue = formControls.dateInput.value;
  const descriptionValue = formControls.descriptionInput.value;

  userValues = {
    categoryValue,
    amountValue,
    dateValue,
    descriptionValue,
  };

  clientSideValidation(formControls);

  domElements.inputDialog.close();
}

function closeForm(event) {
  event.preventDefault();
  domElements.inputDialog.close();
}
domElements.addExpenseBtn.addEventListener('click', showForm);
formControls.confirmBtn.addEventListener('click', getInputDetails);
formControls.closeBtn.addEventListener('click', closeForm);
