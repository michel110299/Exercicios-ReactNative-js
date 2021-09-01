const pessoas = require('./Pessoas.json');

dados = pessoas.map((pessoa)=>{
    return `${pessoa.nome} - ${pessoa.email}`
});

console.log(dados)