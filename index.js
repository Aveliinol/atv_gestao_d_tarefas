const prompt = require("prompt-sync")();

const { autores } = require("./autor/autores");
// const livros = require("./livros/livros"); // Importa a variável livros do arquivo livros/livros.js
// const autores = require("./autores/autores"); // Importa a variável autores do arquivo autores/autores.js
const { livros } = require("./livros/livros");
const { criarLivro } = require("./livros/criarLivro");
const { criarAutor } = require("./autor/criarAutor"); 
const { listarAutores } = require("./autor/listarAutor");
const { listarLivro } = require("./livros/listarLivro");

criarAutor("Xexeu","Xexeu084@gmail.com");

criarLivro("Xexeu", "Harry potter");
criarLivro("Lucas", "Senhor dos Aneis")

listarAutores();
listarLivro();

// console.log(autores);
// console.log(livros);
