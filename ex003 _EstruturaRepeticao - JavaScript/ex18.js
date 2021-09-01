const pessoas = require('./Pessoas.json');

dados = pessoas.map((pessoa)=>{
    return `${pessoa.estado} - ${pessoa.cidade} - ${pessoa.endereco} - ${pessoa.numero} - ${pessoa.bairro}`
});

console.log(dados)