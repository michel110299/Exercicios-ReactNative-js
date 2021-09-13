const Feriados = require('./Feriados.json');

function VerificaFeriado(data) {
    let feriado =  Feriados.some((item) => {
        return item.date == data;
    })
    if(feriado){
        return Feriados.find((item) => {
            return item.date == data;
        }).name
    }else{
        return "não tem "
    }
}

console.log(VerificaFeriado('2021-11-15'))
