const Feriados = require('./Feriados.json');

let busca = Feriados.find((item) => {
    return item.name == "Proclamação da República";
})

console.log(busca.date);
