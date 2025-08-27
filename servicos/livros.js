const fs = require('fs');



function getTodosLivros () {
        return JSON.parse(fs.readFileSync('livro.json', 'utf-8'))
}

function getLivroByID (id) {
        const livros =  JSON.parse(fs.readFileSync('livro.json', 'utf-8'))
        const livrofiltrado = livros.filter( livro => livro.id === id )[0]
        return livrofiltrado
}

function insereLivro (livroNovo) {
        const livros = JSON.parse(fs.readFileSync('livro.json', 'utf-8'));

        const novaListaDeLivros = [...livros, livroNovo]

        fs.writeFileSync('livro.json', JSON.stringify(novaListaDeLivros))
}

function modificaLivro(modificacao, id){
        let livrosAtuais = JSON.parse(fs.readFileSync('livro.json', 'utf-8'));
        
        const indiceModificado = livrosAtuais.findIndex(livro => livro.id === id);

        const conteudoModificado = {...livrosAtuais[indiceModificado], ...modificacao} 
        
        livrosAtuais[indiceModificado] = conteudoModificado;
        
        fs.writeFileSync('livro.json', JSON.stringify(livrosAtuais))
        

}

function deletaLivro(id){
        let livrosAtuais = JSON.parse(fs.readFileSync('livro.json', 'utf-8'));
        
        const livrosFiltrados = livrosAtuais.filter(livro => livro.id !== id);
        
        fs.writeFileSync('livro.json', JSON.stringify(livrosFiltrados))
        

}
module.exports = {getTodosLivros, getLivroByID, insereLivro, modificaLivro, deletaLivro};