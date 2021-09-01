const pessoas = require('./Pessoas.json');
const fs = require('fs')

dados = pessoas.filter((pessoa)=>{
    return "" + (pessoa.idade > 30) && (pessoa.peso / (pessoa.altura*pessoa.altura)) > 25+ ""
});

v = "String"

fs.writeFile('./pessoas30anos.json', JSON.stringify(dados), err => {
    if (err) {
        console.log('Erro', err)
    } else {
        console.log('Sucesso!!!')
    }
})
