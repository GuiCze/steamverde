const jogos = [];
const prompt = require("prompt-sync");

const criar = () => {

    let jogo = modelo()

    jogos.push(jogo)

    console.log('Jogo criado com sucesso');
    
};
const modelo = () => {

    while(true){
        jogo.nome = prompt('Qual é o nome do jogo');
            if(jogo.nome == ""){
                console.log('O nome não pode estar vazio');
            }else {
                break;
            }
        }
    
        while(true){
            jogo.ano = +prompt('Qual é o ano do jogo');
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
                if(jogo.preco !=0 || isNaN(jogo.preco)){
                    console.log('O preço é inválido');
                }else {
                    break;
                }
        }
    
        while(true){
            jogo.estudio = prompt('Qual é o estudio do jogo');
                if(jogo.estudio == ""){
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
            jogo.sequencia = parseInt(prompt('Qual é o duração do jogo'));
                if(jogo.sequencia < 0 || isNaN(jogo.sequencia) || jogo.sequencia >= jogo.length){
                    console.log('A duração é inválida');
                }else {
                    break;
                }
        }
}
const listagem = () => jogos.forEach(jogo, i) => {
        console.log(`${i +1} - ${jogo.nome}`)
}

const atualizar = () => {
    let indice = parseInt(prompt('Qual é o indice do jogo'));
        if(indice < 0 || isNaN(indice) || indice >= jogo.length){
            console.log('O indice é invalido');
        }else {
            const jogo = modelo()
            jogos[indice] = jogo
            break;
        }
}

module.exports = {
    listagem,
    atualizar,
    criar
}