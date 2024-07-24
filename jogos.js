const jogos = [];
const prompt = require("prompt-sync")();

const criar = () => {

    jogos.push(modelo());

    console.log('Jogo criado com sucesso');
    
};

const indiceInvalido = indice => indice < 0 || isNaN(indice) || indice >= jogo.length;

const nomeInvalido = nome => nome == "";

const lerIndice = mensagem => parseInt(prompt(mensagem));

const modelo = () => {

    let jogo;

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
                jogos.sequencia = undefined
                break;
            }
            jogo.sequencia = lerIndice('Qual é a sequencia do jogo');
                if(indiceInvalido(jogo.sequencia)){
                    console.log('A duração é inválida');
                }else {
                    break;
                }
        }

        return jogo 

}

const listagem = () => {
    jogos.forEach((jogo, i) => {
        console.log(`${i + 1} - ${jogo.nome} - ${jogo.ano} - ${jogo.duracao} - ${jogo.sequencia} - ${jogo.estudio} - ${jogo.preco}`)
    })
}

const atualizar = () => {
    while(true){
        if(jogos.length == 0){
            console.log('Lista de jogos vazia');
            break;
        }

        listagem();

        const indice = lerIndice('Qual é o indice do jogo que deseja atualizar?')--;
            if(indiceInvalido(indice)) {
                console.log('O indice é invalido');
            }else {
                jogos[indice] = modelo();
                break;
            }
    }
}

const remocao = () => {
    
    while(true) {

        listagem()

        const indice = lerIndice('Qual é o indice do jog que deseja remover?')--;

        if(indiceInvalido(indice)) {
            console.log('Indice inválido');
        } else {
            jogos.splice(indice, 1)
            console.log('Jogo removido com sucesso');
            break
        }
    }

}
module.exports = {
    listagem,
    atualizar,
    criar,
    remocao
}