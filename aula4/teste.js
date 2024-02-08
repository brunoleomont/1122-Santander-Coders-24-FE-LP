const dicionarioDeSinonimos = {
  curto: ["momentâneo", "passageiro", "efêmero"],
  rapido: ["veloz", "acelerado", "apressado"],
  toxico: ["venenoso", "maléfico", "danoso"],
};

console.log(dicionarioDeSinonimos.curto);

if (entrada) {
  console.log("Dicionario de palavras sinonimos sem Map:", entrada.curto);
} else {
  console.log("Palavra-chave não encontrada no dicionário.");
}

const nota = 7;
const faltas = 4;

console.log(nota >= 7);
console.log(faltas < 3);

console.log(nota >= 7 && faltas < 3);
console.log(nota >= 7 || (faltas < 3 && faltas == 2) || nota != 0);

console.log("A é mais cara que B? ", 2 == 2);

// If/else
const salario = 1499;
const tempo = 4;

if (salario >= 3000 && tempo > 2) {
  console.log("Pode realizar o empréstimo!");
} else if (tempo > 2 && salario >= 1500) {
  console.log("Pode realizar emprestimo de até 90%");
} else {
  console.log("Não pode realizar empréstimo");
}

// Ternário
const ehPar = 23 % 2 == 0 ? "é par" : "Não é par";

console.log(ehPar);

const resp =
  salario >= 3000 && tempo > 2
    ? "Pode realizar o empréstimo!"
    : "Não pode realizar empréstimo";

console.log(resp);

const ehPrime = true ? "color:black" : "color:blue";

console.log(ehPrime);

// Truthy e Falsy
if ("") {
  console.log("é true");
} else {
  console.log("é false");
}

// Switch case
const dia = 2;
let diaDaSemana;

switch (dia) {
  case 1:
    diaDaSemana = "Domingo";
    break;
  case 2:
    diaDaSemana = "Segunda";
    break;
  case 3:
  case 4:
  case 5:
  case 6:
    diaDaSemana = "Terça";
    break;
  default:
    diaDaSemana = "Dia da semana inválido";
}

console.log(diaDaSemana);

// Operadores de Coalescência
const backgroundColor = "red";
const cor = backgroundColor ?? "blue";
console.log(cor);

const num1 = 10;
const num2 = undefined;

if (num1 + (num2 ?? 10) <= 15) {
  console.log("É menor ou igual a 15");
}

// Operador de Acesso Opcional
const pessoa = {
  nome: "João",
  endereco: {
    cidade: "São Paulo",
  },
  documento: {
    rg: "494949499",
    cpf: "123456789",
  },
};

const cidade = pessoa.endereco.cidade;
const cep = pessoa.endereco?.cep;
const rg = pessoa.documento?.rg?.dataEmissao;

console.log(cidade);
console.log(cep);
console.log(rg);
