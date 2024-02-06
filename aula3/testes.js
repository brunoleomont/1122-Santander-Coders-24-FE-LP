const nomes = ["Alice", "Bob", "Eva", "John", "Daniel", "Isabel"];

// let result = vet.filter(nome => nome.length >= 5)
let result = []

console.log(nomes[0].length >= 5)
result.push(nomes[0])
console.log(nomes[1].length >= 5)
console.log(nomes[2].length >= 5)
console.log(nomes[3].length >= 5)
console.log(nomes[4].length >= 5)
result.push(nomes[4])
console.log(nomes[5].length >= 5)
result.push(nomes[5])

console.log(result)

// Acessar o index de um valor
const idades = [15, 22, 17, 20, 30, 12];
console.log(idades.indexOf(20))

const palavras = ["Este", "é", "um", "exercício", "interessante"];
console.log(palavras[0] + ' ' + 
            palavras[1] + ' ' + 
            palavras[2] + ' ' + 
            palavras[3] + ' ' + 
            palavras[4] + ' ' )

// Problema que pode ser causado por não ter chave:valor
const contato = [30, 'nome', 'dev']
const contato2 = ['nome', 30, 'dev']
console.log(contato[0])
console.log(contato[1])
console.log(contato[2])

// Objetos
const pessoa = {
  nome: 'Pessoa 1',
  profissao: 'Medico',
  idade: 30
}

// Ediar um objeto
// pessoa.profissao = 'Dentista'
pessoa.cidade = 'São Paulo'

// Deletar uma chave:valor do objeto
// delete pessoa.cidade

console.log(pessoa.nome)
console.log(pessoa.idade)
console.log(pessoa.profissao)
console.log(pessoa.cidade)

// Verificar se uma chave existe no objeto
console.log('cidade' in pessoa)

// Criar uma cópia de um objeto
let p1 = {...pessoa};

// Editar
pessoa.profissao = 'Dentista'
console.log(p1)
console.log(pessoa)

// Objetos
const biblioteca = {
  livro1: {
    titulo: 'livro 1',
    autor: 'autor 1',
    anoPublicacao: 2010
  },
  livro2: {
    titulo: 'livro 2',
    autor: 'autor 2',
    anoPublicacao: 2010
  },
  livro3: {
    titulo: 'livro 3',
    autor: 'autor 3',
    anoPublicacao: 2010
  },
}

console.log(2024-biblioteca.livro1.anoPublicacao)
console.log(biblioteca.livro1.autor)

const livro4 = {
  titulo: 'O Peqqueno Prríncipe',
  autor: 'Antonie',
  anoPublicacao: 1943
}

// Add objeto a biblioteca
biblioteca.livro4 = livro4

// Correção
biblioteca.livro4.titulo = 'O Pequeno Príncipe'
console.log(biblioteca.livro4.titulo)

// Remover
delete biblioteca.livro3
console.log(biblioteca.livro3)

// verificar
console.log('livro5' in biblioteca)

const objeto = new Map()

// adicionar
objeto.set('nome', 'Bruno')
objeto.set('cidade', 'São Paulo')
objeto.set('senha', '******')
objeto.set('idade', 45)
objeto.set('preferidos', ['Diablo 3', 'PUBG'])

// verificar se existe a chave
console.log(objeto.has('nome'))

// delete
console.log(objeto.delete('senha'))

console.log(objeto)

// Limpar mapa por completo
// console.log(objeto.clear())

console.log(objeto)

console.log(['Diablo 3', 'PUBG'].includes('PUBG'))
console.log(objeto.get('preferidos').includes('PUBG'))

console.log(2024-objeto.get('idade'))

// Aula 3
// Desafio 01 
const listaDeCompras = new Map()

// Adicionar
listaDeCompras.set('Maçã', 5)
listaDeCompras.set('Banana', 3)
listaDeCompras.set('Leite', 4)
listaDeCompras.set('Pão', 5)

// Existe
console.log(listaDeCompras.has('Banana'))

// Quantidade
console.log(listaDeCompras.get('Leite'))

// Modifique
console.log(listaDeCompras.set('Banana', 30))
console.log(listaDeCompras)

// Remova
console.log(listaDeCompras.delete('Banana'))
console.log(listaDeCompras)