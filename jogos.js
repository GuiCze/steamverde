const jogos = [];

const prompt = require("prompt-sync")();

const criar = () => {

    jogos.push(modelo());

    console.log('Jogo criado com sucesso');
    
};

const listar = () => {
    jogos.forEach((jogo, i) => {
        let sequencia 
        if(jogo.sequencia != -1) {
            sequencia = jogos[jogo.sequencia].nome;
        } else {
            sequencia = 'Não possui sequencia';
        }
        console.log(`${i + 1} - ${jogo.nome} - ${jogo.ano} - ${jogo.duracao} - ${jogo.preco} - ${jogo.estudio} - ${sequencia}`)
    })
}

const indiceInvalido = indice => indice < 0 || isNaN(indice) || indice >= jogos.length;

const nomeInvalido = nome => nome == "";

const lerIndice = mensagem => parseInt(prompt(mensagem));

const modelo = () => {

    let jogo = {}

    while(true){
        jogo.nome = prompt('Qual é o nome do jogo');
            if(nomeInvalido(jogo.nome)){
                console.log('O nome não pode estar vazio');
            }else {
                break;
            }
        }
    
        while(true){
            jogo.ano = parseInt(prompt('Qual é o ano do jogo'));
                if(jogo.ano < 1958 || jogo.ano > 2024 || isNaN(jogo.ano)){
                    console.log('O ano é inválido');
                }else {
                    break;
                }
        }
    
        while(true){
            jogo.duracao = +prompt('Qual é o duração do jogo').replaceAll(',', '.');
                if(jogo.duracao <=0 || isNaN(jogo.duracao)){
                    console.log('A duração é inválida');
                }else {
                    break;
                }
        }
    
        while(true){
            jogo.preco = +prompt('Qual é o preço do jogo').replaceAll(',', '.');
                if(jogo.preco != 0 || isNaN(jogo.preco)){
                    console.log('O preço é inválido');
                }else {
                    break;
                }
        }
    
        while(true){
            jogo.estudio = prompt('Qual é o estudio do jogo');
                if(nomeInvalido(jogo.estudio)){
                    console.log('O estudio não pode estar vazio');
                }else {
                    break;
                }
        }
    
        while(true){
    
            if(jogos.length == 0){
                jogo.sequencia = -1
                break;
            }

            jogo.sequencia = lerIndice('Qual é a sequencia do jogo?Digite 0 caso não houver')-1;
            if(jogo.sequencia !=-1 && indiceInvalido(jogo.sequencia)){
                console.log('A sequencia é inválida');
            } else {
                break;
            }
        }

        return jogo;

}



const atualizar = () => {
    while(true){
        if(jogos.length == 0){
            console.log('Lista de jogos vazia');
            break;
        }

        listar();

        const indice = lerIndice('Qual é o indice do jogo que deseja atualizar?')-1;
            if(indiceInvalido(indice)) {
                console.log('O indice é invalido');
            }else {
                jogos[indice] = modelo();
                break;
            }
    }
}

const remover = () => {
    
    while(true) {

        listar()

        const indice = lerIndice('Qual é o indice do jogo que deseja remover?')-1;

        if(indiceInvalido(indice)) {
            console.log('Indice inválido');
        } else {
            jogos.forEach(jogo => {
                if(jogo.sequencia == indice) {
                    jogo.sequencia = -1
                }
            })
            jogos.splice(indice, 1)
            console.log('Jogo removido com sucesso');
            break
        }
    }

}
module.exports = {
    listar,
    atualizar,
    criar,
    remover
}