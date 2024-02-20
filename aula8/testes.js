try {
    console.log(dividir(10, 0))
    // console.log(dividir(10, 2))
} catch(error) {
	console.error('Gerou um erro -> ' + error)
} finally {
	console.log('Sempre executado')
}

function dividir(n1, n2) {
    if (n2 == 0) {
        throw new Error('Não é possível dividir por zero')
    }
    return n1 / n2
}