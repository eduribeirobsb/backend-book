//Importando o módulo Express
const express = require('express');
const rotaLivro = require('./rotas/livro');

const app = express();
app.use(express.json());

const port = 7000;

//Definindo uma rota para a raiz do site
/* app.get('/', (req, res) => {
    res.send('Hello World!');
}); */

app.use('/livros', rotaLivro);

//Iniciando o servidor na porta 7000
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});


