// Desafio 5
const ano = 2000

const resp = ((ano % 4 === 0 && ano % 100 === 0) || ano % 400 === 0)

// if ((ano % 4 === 0 && ano % 100 === 0) || ano % 400 === 0) {
if (resp) {
  console.log("É bissexto")
} else {
  console.log("Não é bissexto")
}

// Desafio 8
const letra = 'A'.toLowerCase()
switch (letra) {
  case 'a':
  case 'e':
  case 'i':
  case 'o':
  case 'u':
    console.log("É uma vogal");
    break;
  default:
    console.log("É uma consoante");
}

// while

let cont = 0;

while (cont <= 10) {
  console.log(cont)
  cont++;
}

do {
  cont--
  console.log(cont)

  if (cont <= 5) {
    break
  }
} while (cont > 0)

console.log(cont)

console.log(Math.floor(Math.random() * 100) + 1)
console.log(Math.random())
console.log(Math.random())


const sorteado = Math.floor(Math.random() * 10)
const patos = ['Patorango', 'Patolango', 'Patman', 'Patodino', 'Patolhaço',
                'Patoringa', 'PatoSemCss', 'SherlockPato', 'PatoWhile', 'Patodoc']
let contador = 0
let pato = ''

do {
  console.log(patos[sorteado])
  console.log(patos[contador])
  pato = 'Patorango'
  contador++
  if (patos[sorteado] == pato) {
    console.log('Você acertou, é o ', patos[sorteado])    
  } else {
    console.log('Tente novamente')
  }

} while(patos[sorteado] != pato)

console.log(pato)

// const sorteado = Math.floor(Math.random() * 10)
// const patos = ['Patorango', 'Patolango', 'Patman', 'Patodino', 'Patolhaço',
//                 'Patoringa', 'PatoSemCss', 'SherlockPato', 'PatoWhile', 'Patodoc']
// let contador = 0
// let patoDigitado = ''

// do {
// 	if (contador >= 5) {
//   	alert(`Game Over, o pato era ${patos[sorteado]}`); 
//   	break
//   }
//   patoDigitado = prompt('Digite o pato competidor: ')
//   contador++
//   if (patos[sorteado] == patoDigitado) {
//     alert(`Você acertou, é o >>> ${patos[sorteado]} <<<`)
//   } else {
//     alert('Tente novamente')
//   }

// } while(patos[sorteado] != patoDigitado)


