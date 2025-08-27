

const { getTodosLivros,getLivroByID, insereLivro, modificaLivro, deletaLivro } = require('../servicos/livros');


function getLivros (req, res) {
    try {
        const livros = getTodosLivros();
        res.send(livros);     

    } catch(error){
        console.error('Erro ao processar a requisição:', error);
        res.status(500).send('Erro interno do servidor');
    }
    
}

function getLivro(req, res) {
    try {
        const id = req.params.id 
        if(id && Number(id)) {
        const livro = getLivroByID(id);   
        res.send(livro);  
        } else {
            res.status(422).send('ID inválido. O ID deve ser um número.');
        }
    } catch(error){
        console.error('Erro ao processar a requisição:', error);
        res.status(500).send('Erro interno do servidor');
    }
    
}

function postLivro(req, res) {
    try {
       const livroNovo = req.body
       if(req.body.nome){
       insereLivro(livroNovo)  
       res.status(201)
       res.send("Livro inserido com sucesso")     
       } else {
        res.status(422).send('O campo nome é obrigatório.');
       }

    } catch(error){
        console.error('Erro ao processar a requisição:', error);
        res.status(500).send('Erro interno do servidor');
    }
    
}

function patchLivro(req, res) {
    try {
       const modificacao = req.body
       const id = req.params.id  
       modificaLivro(modificacao, id)  
       res.status(200)
       res.send("Livro modificado com sucesso")     

    } catch(error){
        console.error('Erro ao processar a requisição:', error);
        res.status(500).send('Erro interno do servidor');
    }
    
}

function delLivro(req, res) {
    try {
       const id = req.params.id  
       deletaLivro(id)  
       res.send("Livro deletado com sucesso")     

    } catch(error){
        console.error('Erro ao processar a requisição:', error);
        res.status(500).send('Erro interno do servidor');
    }
    
}
module.exports = {getLivros, getLivro, postLivro, patchLivro, delLivro};