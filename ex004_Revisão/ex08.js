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
    })

    totalPreco = 0
    
    Cars.forEach(x => {
        totalPreco += parseFloat(x.valor.replace('R$ ','')) 
    })
    console.log(`A marca ${i} tem a media de  ${totalPreco / Cars.length}`);
})

console.log(MarcasUnicas)

