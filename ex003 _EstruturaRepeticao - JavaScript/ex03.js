const pessoas = require('./Pessoas.json');

let busca = pessoas.some((item) => {
    return item.idade < 18;
});
console.log(busca);
