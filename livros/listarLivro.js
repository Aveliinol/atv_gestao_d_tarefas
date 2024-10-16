const { livros } = require("./livros");

function listarLivro(){
    livros.forEach(livro => {
        console.log(livro)
    });
};

module.exports = {listarLivro}