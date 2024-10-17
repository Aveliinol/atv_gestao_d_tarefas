const prompt = require("prompt-sync")();

const { autores } = require("./autor/autores");
// const livros = require("./livros/livros"); // Importa a variável livros do arquivo livros/livros.js
// const autores = require("./autores/autores"); // Importa a variável autores do arquivo autores/autores.js
const { livros } = require("./livros/livros");
const { criarLivro } = require("./livros/criarLivro");
const { criarAutor } = require("./autor/criarAutor"); 
const { listarAutores } = require("./autor/listarAutor");
const { listarLivro } = require("./livros/listarLivro");

const autor1 = criarAutor("Xexeu","Xexeu084@gmail.com");
const autor2 = criarAutor("Vanderlei", "Vanderlei917@gmail.com");

criarLivro(autor1.nome , "Harry potter");
criarLivro(autor2.nome , "Senhor dos Aneis");

listarAutores();
listarLivro();

// console.log(autores);
// console.log(livros);
