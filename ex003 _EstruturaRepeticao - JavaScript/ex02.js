const pessoas = require('./Pessoas.json');

let TotalImc = 0
pessoas.forEach(i => {
    TotalImc += (i.peso / (i.altura*i.altura))

})

console.log(TotalImc/pessoas.length)