// get the input fields and button
const amountInput = document.getElementById('amount');
const categoryInput = document.getElementById('Select');
const descriptionInput = document.getElementById('description');
const addButton = document.querySelector('.btn-primary');

// get the expense list table body
const expenseList = document.getElementById('expense-list');

// add event listener to the add button
addButton.addEventListener('click', () => {
   
  // get the input values
  const amount = amountInput.value;
  const category = categoryInput.value;
  const description = descriptionInput.value;
  const msg = document.querySelector(".msg");
  if (!amount) {
    msg.innerHTML = "Please Enter the Inputs";
    msg.style.color="red"
    msg.style.font="bold"
    return;
  }
  if (!category) {
    msg.innerHTML = "Please input the name";
    msg.style.color="red"
    msg.style.font="bold"
    return;
  }
  if (!description) {
    msg.innerHTML = "Please input the name";
    msg.style.color="red"
    msg.style.font="bold"
    return;
  }

  // create a new row for the expense item
  const newRow = document.createElement('tr');

  // create cells for the row
  const amountCell = document.createElement('td');
  const categoryCell = document.createElement('td');
  const descriptionCell = document.createElement('td');
  const actionsCell = document.createElement('td');

  // set the cell values
  amountCell.textContent = amount;
  categoryCell.textContent = category;
  descriptionCell.textContent = description;
  actionsCell.innerHTML = '<button type="button" class="btn btn-secondary edit-btn">Edit</button><button type="button" class="btn btn-danger delete-btn">Delete</button>';

  // add the cells to the row
  newRow.appendChild(amountCell);
  newRow.appendChild(categoryCell);
  newRow.appendChild(descriptionCell);
  newRow.appendChild(actionsCell);

  // add the row to the table
  expenseList.appendChild(newRow);

  // clear the input fields
  amountInput.value = '';
  categoryInput.selectedIndex = 0;
  descriptionInput.value = '';
});

// add event listeners for edit and delete buttons
expenseList.addEventListener('click', (event) => {
  const target = event.target;

  if (target.classList.contains('delete-btn')) {
    const row = target.closest('tr');
    expenseList.removeChild(row);
  }

  if (target.classList.contains('edit-btn')) {
    const row = target.closest('tr');
    const cells = row.querySelectorAll('td');
    const amount = cells[0].textContent;
    const category = cells[1].textContent;
    const description = cells[2].textContent;

    // set input fields with current values
    amountInput.value = amount;
    categoryInput.value = category;
    descriptionInput.value = description;

    // remove the row from the table
    expenseList.removeChild(row);
  }
});
