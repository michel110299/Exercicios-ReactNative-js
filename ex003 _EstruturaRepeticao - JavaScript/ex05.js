const pessoas = require('./Pessoas.json');
let Cidades = pessoas.filter((pessoa) => {
    return pessoa.idade >=20 && pessoa.idade <=45;
}).map((pessoa) => {
    return pessoa.cidade;
});
console.log(Cidades)