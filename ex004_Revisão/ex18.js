const Carros = require('./Veiculos.json');


function getCarro(Nome) {
    let carro =  Carros.some((item) => {
        return item.modelo == Nome;
    })
    if(carro){
        return Carros.find((item) => {
            return item.modelo == Nome;
        })
    }else{
        return "não tem "
    }
}

console.log(getCarro('80 2.6/2.8 Avant'))
