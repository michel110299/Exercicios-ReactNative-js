const pessoas = require('./Pessoas.json');

let Estados = pessoas.map((pessoa) => {
    return pessoa.estado;
});

let EstadoUnicos = []
Estados.forEach(i => {
    if(!EstadoUnicos.includes(i)){
        EstadoUnicos.push(i)
    }
})

EstadoUnicos.forEach(i => {
    let estado = pessoas.filter((pessoa)=>{
        return pessoa.estado == i;
    });
    console.log(`O Estado ${i} tem ${estado.length} pessoas.`);
})

console.log(EstadoUnicos)
