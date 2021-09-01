var dado = require('../aula25-08/pessoas.json')

calcularImc(dado.pessoas);

function calcularImc(listPessoas) {

    let abaixoPeso = listPessoas.filter((pessoa) => {
        return (pessoa.peso / (Math.pow(pessoa.altura, 2))) < 18.5;
    }).map((pessoa) => {
        return pessoa.nome;
    });

    let pesoNormal = listPessoas.filter((pessoa) => {
        return (pessoa.peso / (Math.pow(pessoa.altura, 2))) >= 18.5 && (pessoa.peso / (Math.pow(pessoa.altura, 2))) < 25;
    }).map((pessoa) => {
        return pessoa.nome;
    });

    let sobrepeso = listPessoas.filter((pessoa) => {
        return (pessoa.peso / (Math.pow(pessoa.altura, 2))) >= 25 && (pessoa.peso / (Math.pow(pessoa.altura, 2))) < 30;
    }).map((pessoa) => {
        return pessoa.nome;
    });

    let obesoGrauI = listPessoas.filter((pessoa) => {
        return (pessoa.peso / (Math.pow(pessoa.altura, 2))) >= 30 && (pessoa.peso / (Math.pow(pessoa.altura, 2))) < 35;
    }).map((pessoa) => {
        return pessoa.nome;
    });
    
    let obesoGrauII = listPessoas.filter((pessoa) => {
        return (pessoa.peso / (Math.pow(pessoa.altura, 2))) >= 35 && (pessoa.peso / (Math.pow(pessoa.altura, 2))) < 40;
    }).map((pessoa) => {
        return pessoa.nome;
    });

    let obesoGrauIII = listPessoas.filter((pessoa) => {
        return (pessoa.peso / (Math.pow(pessoa.altura, 2))) >= 40;
    }).map((pessoa) => {
        return pessoa.nome;
    });


    console.log("Pessoas abaixo do peso: " + abaixoPeso);
    console.log("Pessoas com peso normal: " + pesoNormal);
    console.log("Pessoas com sobrepeso: " + sobrepeso);
    console.log("Pessoas com obesidade grau I: " + obesoGrauI);
    console.log("Pessoas com obesidade grau II: " + obesoGrauII);
    console.log("Pessoas com obesidade grau III: " + obesoGrauIII);

    // console.log(abaixoPeso? "Pessoas abaixo do peso: " : "não possui");
    // console.log(pesoNormal ? "Pessoas com peso normal: " : "não possui");
    // console.log(sobrepeso ? "Pessoas com sobrepeso: " : "não possui");
    // console.log(obesoGrauI ? "Pessoas com obesidade grau I: " : "não possui" );
    // console.log(obesoGrauII ? "Pessoas com obesidade grau II: " : "não possui " );
    // console.log(obesoGrauIII ? "Pessoas com obesidade grau III:" : "não possui ");
}
