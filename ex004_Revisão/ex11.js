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

MarcasUnicas.forEach(i => {
    let Cars = Carros.filter((car)=>{
        return car.marca == i;
    }).map((modelo) => {
        return modelo.modelo;
    });
    
    Cars.forEach(x => {
        console.log(`A marca ${i} tem ${x} `);
    })

    console.log(`A marca ${i} tem ${Cars} `);
})

