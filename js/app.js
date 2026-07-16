// Seleção de Elementos
const multiplicationForm = document.querySelector("#multiplication-form");
const numberInput = document.querySelector("#number");
const multiplicationInput = document.querySelector("#multiplicator");

const multiplicationTable = document.querySelector(
  "#multiplication-operations",
);

const spanNumber = document.querySelector("#multiplication-title span");

// Funções
const createTable = (number, multiplicatorNumber) => {
  // Limpa o conteúdo da tabela atual antes de gerar uma nova
  multiplicationTable.innerHTML = "";

  // Laço de repetição que rodar de 1 até o limite do  multiplicador escolhido
  for (let i = 1; i <= multiplicatorNumber; i++) {
    // Calcula o resultado da multiplicação atual
    const result = number * i;

    // Cria a estrutura HTML da linha em formato de string/texto
    const template = `<div class="row">
      <div class="operation"> ${number} x ${i} =</div>
      <div class="result"> ${result}</div>
    </div>`;

    // Insere o template de texto diretamente no final da tabela por meio do beforeend
    // O navegador converte o texto HTML e coloca na tela
    multiplicationTable.insertAdjacentHTML("beforeend", template);
  }
  spanNumber.textContent = number;
};

// Eventos
multiplicationForm.addEventListener("submit", (e) => {
  e.preventDefault();

  // Número a ser multiplicado
  // O "+" converte um dado do tipo string para number
  const multiplicationNumber = +numberInput.value;

  // Quantidade de vezes que o número vai ser multiplicado
  const multiplicatorNumber = +multiplicationInput.value;

  // Validação para verificar se os números estão corretos
  if (!multiplicationNumber || !multiplicatorNumber) return;

  // Pega a função e passa os valores que o usuário digitou no input
  createTable(multiplicationNumber, multiplicatorNumber);
});
