// Seleção de Elementos
const multiplicationForm = document.querySelector("#multiplication-form");
const numberInput = document.querySelector("#number");
const multiplicationInput = document.querySelector("#multiplicator");

// Funções

// Eventos
multiplicationForm.addEventListener("submit", (e) => {
  e.preventDefault();

  // Número a ser multiplicado
  const multiplicationNumber = +numberInput.value;

  // Quantidade de vezes que o número vai ser multiplicado
  const multiplicatorNumber = +multiplicationInput.value;

  if (!multiplicationNumber || !multiplicatorNumber) return;

  console.log(multiplicationNumber, multiplicatorNumber);
});
