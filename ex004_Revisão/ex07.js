const Carros = require('./Veiculos.json');

let Marcas = Carros.map((car) => {
    return car.marca;
});

let MarcasUnicas = []
Marcas.forEach(i => {
    if(!MarcasUnicas.includes(i)){
        MarcasUnicas.push(i)
    }
})

console.log(MarcasUnicas.length)
