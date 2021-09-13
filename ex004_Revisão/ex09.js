const Carros = require('./Veiculos.json');

let ValoresCarros = Carros.map((car) => {
    return parseFloat(car.valor.replace('R$ ',''))
})

console.log(Math.max.apply(null, ValoresCarros));
