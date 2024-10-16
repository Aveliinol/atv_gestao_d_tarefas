const { autores } = require("./autores"); // Importa a variável autores do arquivo autores que está no mesmo diretório 

function criarAutor(nome, email) {
    const novoAutor = { nome, email };
    autores.push(novoAutor);
};

module.exports = { criarAutor };  // Exporta a função criarAutor para ser ultilizada em outros arquivos