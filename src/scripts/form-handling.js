import { domElements, formControls } from './dom';

function showForm() {
  domElements.inputDialog.show();
}

function closeForm(event) {
  event.preventDefault();
  domElements.inputDialog.close();
}

function clientSideValidation(obj) {
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

function confirmForm(event) {
  event.preventDefault();
  clientSideValidation(formControls);
  domElements.inputDialog.close();
}

const setUpButtons = function addListeners() {
  domElements.addExpenseBtn.addEventListener('click', showForm);
  formControls.closeBtn.addEventListener('click', closeForm);
};

export { setUpButtons, confirmForm };
