const Carros = require('./Veiculos.json');


function getCarro(tipo) {
    let carro =  Carros.some((item) => {
        return item.tipoVeiculo == tipo;
    })
    if(carro){
        return Carros.filter((item) => {
            return item.tipoVeiculo == tipo;
        })
    }else{
        return "não tem "
    }
}

console.log(getCarro('1'))
