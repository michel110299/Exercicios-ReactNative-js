const pessoas = require('./Pessoas.json');

let dados = pessoas.filter((pessoa) => {
    return pessoa.nome == "Raul Nathan Oliver Dias";
}).map((pessoa) => {
    return `${pessoa.estado} - ${pessoa.cidade} - ${pessoa.endereco} - ${pessoa.numero} - ${pessoa.bairro}`
});

console.log(dados)