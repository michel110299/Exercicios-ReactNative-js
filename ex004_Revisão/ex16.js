const Carros = require('./Veiculos.json');

let Marcas = Carros.map((car) => {
    return car.combustivel;
});

let TiposCombustivel = []
Marcas.forEach(i => {
    if(!TiposCombustivel.includes(i)){
        TiposCombustivel.push(i)
    }
})

TiposCombustivel.forEach(i => {
    let Cars = Carros.filter((car)=>{
        return car.combustivel == i;
    })

    console.log(`A Tipo ${i} tem ${Cars.length} carros`);
})
