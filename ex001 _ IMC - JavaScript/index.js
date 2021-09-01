var dado = require('./index.json')

dado.pessoa.forEach(i => {
    let imc = (i.peso / (i.altura*i.altura))
    console.log(i.nome + ", seu IMC = " + imc)
})

