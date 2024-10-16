const { livros } = require("./livros");

function criarLivro(autor, titulo) {
    const novoLivro = { autor, titulo };
    livros.push(novoLivro);
};

module.exports = { criarLivro };