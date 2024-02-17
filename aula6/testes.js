for (let i = 0; i <= 10; i += 2) {
    console.log(i)
  }
  
  const carro = {
    marca: 'Volkswagen',
    modelo: 'Jetta',
    ano: 2019,
    cor: 'Azul'
  }
  
  for(let prop in carro) {
    console.log(prop + ':' + carro[prop])
  }
  
  let frutas = ['Maça', 'Banana', 'Morango']
  
  for(let i = 0; i < frutas.length; i++) {
    console.log(frutas[i])
  }
  
  for (let fruta of frutas) {
    console.log(fruta)
  }
  
  for (let l of 'uma frase') {
    console.log(l)
    if (l === ' '){
      console.log('contem espaço')
    }
  }
  
  for (let l of '79874822455896') {
    console.log(l)
    if (l === '3'){
      console.log('Visa')
      break
    }
  }