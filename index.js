const prompt = require('prompt-sync')();

const biblioteca = require('./jogos.js');

while(true) {
    console.log(`
    1 - Criar
    2 - Listar
    3 - Atualizar 
    4 - Remover
    5 - Sair`
    );
    const opcao = prompt();

    switch (opcao) {
        case '1':
            biblioteca.criar();
            break;
        case '2':
            biblioteca.listar();
            break;
        case '3':
            biblioteca.atualizar();
            break;
        case '4':
            biblioteca.remover();
            break;
        case '5':
            process.exit();
            break;
        default:
            console.log(`Opção inválida`);
            break;
    }
}