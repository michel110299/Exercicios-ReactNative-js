const Carros = require('./Veiculos.json');

let ValoresCarros = Carros.filter((car) => {
    return car.anoModelo < 2000
}).map((car) => {
    return parseFloat(car.valor.replace('R$ ','')) 
})

let velho = Carros.filter((car) => {
    return parseFloat(car.valor.replace('R$ ','')) == Math.max.apply(null, ValoresCarros)
})

console.log(velho)