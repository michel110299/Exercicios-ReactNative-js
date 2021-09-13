const Carros = require('./Veiculos.json');

let ValoresCarros = Carros.filter((car) => {
    return car.anoModelo < 2005
})
Total = 0
ValoresCarros.forEach(i => {
    Total += parseFloat(i.valor.replace("R$ ",""))
})

console.log(`O valor total dos carros inferiores a 2005 = ${Total} `);