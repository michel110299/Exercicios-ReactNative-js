const Carros = require('./Veiculos.json');

let ValoresCarros = Carros.map((car) => {
    return car.anoModelo
})

let velho = Carros.filter((car) => {
    return car.anoModelo == Math.min.apply(null, ValoresCarros)
})

console.log(velho)