
class GerenciadorContatos {
    constructor() {
        this.contatos = [];
        this.buscaStrategy = null;
    }
  
    adicionarContato(contato) {
        this.contatos.push(contato);
    }
  
    removerContato(nome) {
        this.contatos = this.contatos.filter(contato => contato.nome !== nome);
    }
  
    listarContatos() {
        return this.contatos;
    }
  
    buscarContato(nome) {
        if (this.buscaStrategy) {
            return this.buscaStrategy.buscar(this.contatos, nome);
        }
        return null;
    }
  
    definirBuscaStrategy(strategy) {
        this.buscaStrategy = strategy;
    }
  }

  module.exports = GerenciadorContatos;