const { Facade, BuscaSimplesStrategy, BuscaAvancadaStrategy } = require('./src/facade');
const Contato = require('./src/contato');
const GerenciadorContatos = require('./src/gerenciadorContatos');

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const facade = new Facade();
facade.definirBuscaStrategy(new BuscaSimplesStrategy());


function menu() {
  console.log('\n1. Adicionar contato');
  console.log('2. Remover contato');
  console.log('3. Listar contatos');
  console.log('4. Buscar contato');
  console.log('5. Busca avançada\n');
  console.log('0. Sair\n'); 

  rl.question('Escolha uma opção: ', (opcao) => {
      switch (opcao) {
          case '1':
              rl.question('Nome: ', (nome) => {
                  rl.question('Telefone: ', (telefone) => {
                      rl.question('Email: ', (email) => {
                          facade.adicionarContato(nome, telefone, email);
                          console.log('Contato adicionado com sucesso!');
                          menu();
                      });
                  });
              });
              break;
          case '2':
              rl.question('Nome: ', (nome) => {
                  facade.removerContato(nome);
                  menu();
              });
              break;
          case '3':
              console.log(facade.listarContatos());
              menu();
              break;
          case '4':
              rl.question('Nome: ', (nome) => {
                  console.log(facade.buscarContato(nome));
                  menu();
              });
              break;
          case '5':
            case '5':
    rl.question('1. Busca simples\n2. Busca avançada\nEscolha uma opção: ', (opcaoBusca) => {
        switch (opcaoBusca) {
            case '1':
                facade.definirBuscaStrategy(new BuscaSimplesStrategy());

                break;
            case '2':
                facade.definirBuscaStrategy(new BuscaAvancadaStrategy());
                break;
            default:
                console.log('Opção inválida!');
                return; 
        }

        rl.question('Digite o nome que deseja buscar: ', (nome) => {
            const resultado = facade.buscarContato(nome);
            if (resultado) {
                console.log('Contato encontrado:', resultado);
                menu();
            } else {
                console.log('Contato não encontrado');
            }
        });
    });
    break;
          default:
              console.log('Opção inválida!');
              menu();
      }
  });
}

menu();



