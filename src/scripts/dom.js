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

const formControls = {
  categoryInput,
  amountInput,
  dateInput,
  descriptionInput,
  confirmBtn,
  closeBtn,
};

const domElements = {
  container,
  expenseDiv,
  addExpenseBtn,
  inputDialog,
};

function editFormControls() {
  const editDialog = document.querySelector('#editDialog');
  const categoryEdit = document.querySelector('#categoryEdit');
  const amountEdit = document.querySelector('#amountEdit');
  const dateEdit = document.querySelector('#dateEdit');
  const descriptionEdit = document.querySelector('#descriptionEdit');

  const confirmEditBtn = document.querySelector('#confirmEdit');
  const cancelEditBtn = document.querySelector('#closeEdit');

  return {
    editDialog,
    categoryEdit,
    amountEdit,
    dateEdit,
    descriptionEdit,
    confirmEditBtn,
    cancelEditBtn,
  };
}

export { formControls, domElements, editFormControls };
