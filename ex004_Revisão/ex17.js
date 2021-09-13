const Carros = require('./Veiculos.json');


function getCarro(Codigo) {
    let carro =  Carros.some((item) => {
        return item.codigoFipe == Codigo;
    })
    if(carro){
        return Carros.find((item) => {
            return item.codigoFipe == Codigo;
        }).modelo
    }else{
        return "não tem "
    }
}

console.log(getCarro('008028-4'))
