// Desafio 1
function soma(n1, n2) {
  return n1 + n2;
}

function divisao(n1, n2) {
  return n1 / n2;
}

function subtracao(n1, n2) {
  return n1 - n2;
}

function multiplicacao(n1, n2) {
  return n1 * n2;
}

console.log(soma(100, 99));
console.log(divisao(100, 2));
console.log(divisao(50, 2));

function calcula(n1, n2, op) {
  switch (op) {
    case "+":
      return soma(n1, n2);
    case "-":
      return subtracao(n1, n2);
    case "*":
      return multiplicacao(n1, n2);
    case "/":
      return divisao(n1, n2);
    default:
      return "Operador inválido";
  }
}

console.log(calcula(100, 99, "*"));

// Desafio 2
let saldo = 0;
let opcao = 0;

function deposito(valor) {
  saldo += valor;
}

function saque(valor) {
  if (saldo < valor) alert("Saldo insulficiente");
  return "Saldo insulficiente";
  saldo -= valor;
}

function consultaSaldo() {
  return "Seu saldo é R$ " + saldo;
}

// console.log(consultaSaldo())
// deposito(100)
// console.log(consultaSaldo())
// deposito(45)
// console.log(consultaSaldo())
// saque(100)
// console.log(consultaSaldo())

// do {
//   alert('1 - Depositar\n2 - Sacar\n3 - Consultar saldo\n4 - Sair')
//   opcao = parseInt(prompt('Digite sua opção: '))

//   switch (opcao) {
//     case 1:
//       deposito(parseFloat(prompt('Digite o valor a ser depositado: ')))
//       break
//     case 2:
//       saque(parseFloat(prompt('Digite o valor a ser sacado: ')))
//       break
//     case 3:
//       alert(consultaSaldo())
//       break
//     case 4:
//       alert('Saindo...')
//       break
//     default:
//       alert('Opção inválida!')
//   }

// } while (opcao != 4)
