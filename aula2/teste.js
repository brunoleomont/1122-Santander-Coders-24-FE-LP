// console.error((true && (true && true)) || 23)

// Diferença entre variável simples e array
const name = 'Bruno'
const array = ['bruno', 'ana', 5, null, 299, 10.5, 'fulano']

// Imprime o tamanho do array
console.log(array.length)

// Add elemento no inicio do array
array.unshift('primeiro elemento')
console.log(array.length)

// Imprime o index zero que é o primeiro elemento do array
console.log(array[0])


//  1,2,3,4,5,6,7,8,9,10
const numeros = [1,2,3,4,5,6,7,8,9,10]

// start posição 4, remove 2 e add os elementos 999, 888, 777
numeros.splice(4, 2, 999, 888, 777)
console.log(numeros)

// start posição 9, remove 0 e add aula
numeros.splice(9, 0, 'aula')
console.log(numeros)

// Verifica se o elemento entre parenteses existe
console.log(numeros.includes('aula 1'))

// Declaração de matriz 2x2
const matriz = [
  [1, 2],
  [3, 4]
]

console.log(matriz[1][1])

const alunos = [
  ['aluno 1', 7],
  ['aluno 2', 6],
  ['aluno 3', 1],
  ['aluno 4', 10],
  ['aluno 5', 9],
  // aluno 6, 7
]

console.log(alunos[3][1])
console.log(alunos[1])
console.log(alunos[0][1])

// Add elemento na matriz
console.log(alunos.push(['aluno 6', 7]))
console.log(alunos)

// Desafio 9

const notas = [8, 9, 7, 5, 10, 6];

notas.sort((a, b) => a - b)
notas.pop()
notas.shift()

console.log((notas[0]+notas[1]+notas[2]+notas[3])/notas.length)