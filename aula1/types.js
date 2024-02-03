let contador = 2
contador = 10

const x = 5
// const não aceita ser alterado
// x = 120

let nome = "Bruno"

// Função nativa para imprimir o resultado
console.log(contador+x)

// Função nativa para exibir um modal com input e botões
// let name = prompt("Digite o nome:")
// console.log("Olá " + name)

const numero1 = 5
// Coerção de tipo integer
const numero2 = parseInt("10")

console.log(numero1 + numero2)
console.log(numero1 - numero2)
console.log(numero1 * numero2)
console.log(numero1 / numero2)
console.log(numero1 % numero2)

console.log(numero1 == numero2)
console.log(numero1 != numero2)
console.log(numero1 > numero2)
console.log(numero1 < numero2)
console.log(numero1 >= numero2)
console.log(numero1 <= numero2)

console.log(true && true)
console.log(true && false)
console.log(false && true)
console.log(false && false)

console.log(true || true)
console.log(true || false)
console.log(false || true)
console.log(false || false)

// Desafio 01

let idade = 18
let nacionalidade = 'brasileira'

const resp = idade >= 16 && nacionalidade == 'brasileira'
console.log(resp)

// let idade = prompt("Digite sua idade:")
// let nacionalidade = prompt("Digite sua nacionalidade:")

// alert(idade >= 16 && nacionalidade == 'brasileira')