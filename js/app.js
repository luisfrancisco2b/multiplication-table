// Element Selection
const multiplicationForm = document.querySelector("#multiplication-form");
const numberInput = document.querySelector("#number");
const multiplicationInput = document.querySelector("#multiplicator");

const multiplicationTable = document.querySelector(
  "#multiplication-operations",
);

const spanNumber = document.querySelector("#multiplication-title span");

// Functions
const createTable = (number, multiplicatorNumber) => {
  // Clear the current table content before generating a new one
  multiplicationTable.innerHTML = "";

  // Loop to iterate from 1 up to the chosen multiplicator limit
  for (let i = 1; i <= multiplicatorNumber; i++) {
    // Calculate the result of the current multiplication
    const result = number * i;

    // Create the row HTML structure as a string template
    const template = `<div class="row">
      <div class="operation"> ${number} x ${i} =</div>
      <div class="result"> ${result}</div>
    </div>`;

    // Insert the template string directly at the end of the table
    // The browser converts the text to HTML and renders it on screen
    multiplicationTable.insertAdjacentHTML("beforeend", template);
  }
  spanNumber.textContent = number;
};

// Events
multiplicationForm.addEventListener("submit", (e) => {
  e.preventDefault();

  // Number to be multiplied
  // The "+" converts the string value to a number
  const multiplicationNumber = +numberInput.value;

  // Number of times the value will be multiplied
  const multiplicatorNumber = +multiplicationInput.value;

  // Validation to check if both numbers are valid
  if (!multiplicationNumber || !multiplicatorNumber) return;

  // Call the function passing the values entered by the user
  createTable(multiplicationNumber, multiplicatorNumber);
});
