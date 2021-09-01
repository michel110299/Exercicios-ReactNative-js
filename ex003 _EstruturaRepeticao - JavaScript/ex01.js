const pessoas = require('./Pessoas.json');

let MaiorIDade = pessoas.filter((pessoa) => {
    return pessoa.idade >= 18;
})

console.log(MaiorIDade.length)

