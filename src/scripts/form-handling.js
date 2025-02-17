import { domElements, formControls } from './dom';

let userValues = {};

function showForm() {
  domElements.inputDialog.show();
}

function closeForm(event) {
  event.preventDefault();
  domElements.inputDialog.close();
}

export default function clientSideValidation(obj) {
  const inputArr = Object.keys(obj);
  for (let i = 0; i < inputArr.length; i += 1) {
    if (inputArr[i] !== 'description' || inputArr[i] !== 'confirmBtn'
      || inputArr[i] !== 'closeBtn') {
      const input = obj[inputArr[i]];
      if (input.validity.valueMissing === false) {
        console.log('no value provided');
      }
    }
  }
}

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

const setUpButtons = function addListeners() {
  domElements.addExpenseBtn.addEventListener('click', showForm);
  formControls.confirmBtn.addEventListener('click', getInputDetails);
  formControls.closeBtn.addEventListener('click', closeForm);
};

export { setUpButtons };
