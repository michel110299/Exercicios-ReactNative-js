const pessoas = require('./Pessoas.json');
let Estados = pessoas.filter((pessoa) => {
    return pessoa.idade >=20 && pessoa.idade <=45;
}).map((pessoa) => {
    return pessoa.estado;
});
console.log(Estados)