const Feriados = require('./Feriados.json');

function VerificaFeriado(nome) {
    let feriado =  Feriados.some((item) => {
        return item.name == nome;
    })
    if(feriado){
        return Feriados.find((item) => {
            return item.name == nome;
        }).date
    }else{
        return "não tem "
    }
}

console.log(VerificaFeriado('Pdroclamação da República'))
