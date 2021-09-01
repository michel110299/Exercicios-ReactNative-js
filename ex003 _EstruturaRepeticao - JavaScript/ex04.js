const pessoas = require('./Pessoas.json');
let Pessoas = pessoas.filter((pessoa) => {
    return pessoa.idade >=20 && pessoa.idade <=45;
})

console.log(Pessoas.length)
