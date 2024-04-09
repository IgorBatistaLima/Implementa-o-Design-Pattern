const Contato  = require('./contato');
const GerenciadorContatos  = require('./gerenciadorContatos');

class Facade {
  constructor() {
      this.gerenciador = new GerenciadorContatos();
  }

  adicionarContato(nome, telefone, email) {
      this.gerenciador.adicionarContato(new Contato(nome, telefone, email));
  }

  removerContato(nome) {
      this.gerenciador.removerContato(nome);
  }

  listarContatos() {
      return this.gerenciador.listarContatos();
  }

  buscarContato(nome) {
      return this.gerenciador.buscarContato(nome);
  }

  definirBuscaStrategy(strategy) {
      this.gerenciador.definirBuscaStrategy(strategy);
  }
}

class BuscaStrategy {
  buscar(contatos, nome) {
      throw new Error('Método "buscar" não implementado');
  }
}

class BuscaSimplesStrategy extends BuscaStrategy {
  buscar(contatos, nome) {
      return contatos.find(contato => contato.nome === nome);
  }
}

class BuscaAvancadaStrategy extends BuscaStrategy {
  buscar(contatos, nome) {
        return contatos.filter(contato => contato.nome.includes(nome));
  }
}

module.exports = { Facade, BuscaSimplesStrategy, BuscaAvancadaStrategy };
