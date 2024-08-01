const prompt = require("prompt-sync")();

module.exports = (heroi) => {

    function verificarNum() {
        let valor;
        do {
            valor = parseInt(+prompt("Digite um valor:"));
        } while ((isNaN(valor) || valor < 1 || valor > 3) && typeof valor !== 'string');
    
        return valor;
    }

    console.log(`
            Chegando na torre ${heroi.nome} não encontra Bia, ela havia sumido, 
            mas deixou uma mensagem em uma folha na mesa:
            ${heroi.nome}, eu trabalhei como bióloga deste zoológico, por 15 anos,
            descobrir que estão usando os animais para torna-los mais fortes
            e violentos com um agente biológico, esses animais são usados para
            amedrontar e afugentar os habitantes da região, diminuindo o valor
            das terras e das aldeias onde descobriram minas com grande quantidade
            de ouro. Por isso, gravei os dados das pesquisas e pedi demissão.  
            Depois invadir o laboratório e sabotei as instalações. Deixei um 
            isqueiro com meu telefone caso consiga sair, e me ajudar a contar o
            que o zoológico está fazendo.

            Você pega o isqueiro, vê umas chaves pendurada em um quadro que diz 
            ‘Portão da saída dos fundos’, você pega as chaves e nota que no 
            canto superior do teto tem uma câmera, seguindo seus movimentos, 
            após isso escuta uma voz no walk talk:
            - “Doutor Caio. Câmbio”.
            Você pega rapidamente o rádio e responde:
            - “Aqui é o doutor Caio, houve uma pane nos sistemas os animais 
            estão soutos, solicito um resgate imediatamente! Câmbio.”
            - “Já estamos indo. Eu quero os dados da pesquisa ou morra. Câmbio”
            - “Eu não tenho os dados. Câmbio.”
            - “Veremos. Câmbio final”
            Saindo da torre você percebe que na parte de baixo do isqueiro 
            tem um pequeno cartão SD.

        `);
        console.log("");
    console.log("COMO SAIR DESSA AGORA ?");
    console.log(`
            1 - Procura a saida para usar as chaves.
            2 - Entregar o cartão SD.
            `);
    console.log("");

    let vivo = true;
    opc = verificarNum();

    switch(opc){
        case 1:
            console.log(`
                Voce corre para procurar a saida dos fundos`);
            if(heroi.Ferramentas.includes("MAPA") && heroi.Ferramentas.includes("CHAVE GRIFO")){
            console.log(`
                Usando o mapa você encontra a saida dos fundos, mas ${heroi.nome} percebe 
                que está com uma porta parafusada Usando a chave grifo voce abre a porta tirando
                os parafusos. correndo pelo tunel com um grande cheiro de gás, chegando ate o 
                grade com o cadeado.
                Mas voce escuta uma voz de diz:
                -Entregue os dado pesquisa ou morra.
                 `);
                console.log("");
                console.log("COMO SAIR DESSA AGORA ?");
                console.log(`
                    1 - Jogar a chave grifo no agente.
                    2 - Jogar o isqueiro.
            `);
                console.log("");
                 let opc2 = verificarNum()
                 switch(opc2){
                    case 1:
                        console.log(`
                            Em um movimento rápido você joga a chave grifo no agente
                            acertando-o em cheio, mas antes de cair ele atira.
                            O tiro acerta seu peito, você cai olhando para a grade`);
                    heroi.ferimento(100);
                    vivo = false;
                    break;
                    case 2:
                        console.log(`
                            ${heroi.nome} acende o isqueiro, leva uma das mão dizendo que vai
                            entregar, rápidamente você pula para trás de uma viga e joga o
                            isqueiro no cano de gás atrás do agente, formando uma grande
                            bola de fogo que atinge o agente que grita caindo no chão.
                            Com os olhos lagrimejando com a alta temperatura, você abre a grade.
                            Uma mão é estendida, você pega e a pessoa puxa-o para fora. È Bia
                            que fala:
                            - "Sabia que conseguiria"
                            Sentindo a brisa da manhã, vocês caminham pela estrada assistindo 
                            ao nascer do sol.
                            Fim!`);
                            break;
                 }
                 heroi.verStatus();
                }else{
                console.log(`Não conseguindo pensar em nada, desiste e vai embora,
                deixando a macaca olhando para o buraco agitada e dando pequenos 
                gritos. ${heroi.nome} Segue em direção da porta de saída, na 
                esperança de encontrar alguém que possa ajuda-lo a sair.`)
                }
                
            break;
        case 2:
            
            console.log(`
                ${heroi.nome} vai se encontrar com os agentes de seguraça, eles aterrisam o
                helicoptero, um dos agentes pergunta onde está os dados.
                ${heroi.nome} pergunta sobre Bia, eles respondem que não sabe do que você está
                falando, Perguntam sobre os dados novamente, você mostra o SD, os agentes
                dizem: 
                - Obrigado! E atira em sua cabeça, pegam os dados e vão embora no
                helicoptero.`);
                heroi.ferimento(100)
                vivo = false;

            break;
    
    }
    
    
    return vivo;
}