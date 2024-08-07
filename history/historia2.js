const prompt = require("prompt-sync")();

module.exports = (heroi) => {
    function verificarNum() {
        let valor;
        do {
            valor = parseInt(+prompt("Digite um valor: "));
        } while ((isNaN(valor) || valor < 1 || valor > 3) && typeof valor !== 'string');
    
        return valor;
    }

    console.log("");
    console.log(`Fora do zoológico os agentes descobrem que você não saiu. 
                 E começam a ficar preocupados.
                 Um dos agentes faz uma ligação misteriosa.
                 Quando a chamada e atendida, ele fala:
                 - Senhor, temos um problema!
                 
                 Dentro do zoológico ...
                 
                 Avistando uma torre de observação a 300 metros de distância você decide ir até lá.
                 O caminho para a torre está escuro.
                 ${heroi.nome} avança com cautela pelo terreno arenoso, iluminando com sua lanterna 
                 cada som que escuta, você nota que o caminho fica a beira de um barranco de 
                 aproximadamente dez metros de profundidade.
                 Um som de passos galopantes se aproxima, você escuta pequenas risadinhas e uivos
                 se aproximar. Logo aponta a lanterna em direção dos sons.
                 Uma hiena se aproxima, agora ${heroi.nome} tem que pensar rápido.
                 `);
    console.log("QUAL SUA AÇÃO AO PERIGO EMINENTE ?");
    console.log(`
            1 - Correr e pular barranco abaixo.
            2 - Usar um dardo tranquilizante.
            3 - Apaga a lanterna e tenta se esconder em algum arbusto.
            `);
    console.log("");

    let vivo = true;
    opc = verificarNum();

    switch(opc){
        case 1:
            console.log(`
                Sem saber a quantidade de hienas e temeroso pela altura do barranco,
                ${heroi.nome} toma impulso e corre, saltando barranco abaixo.
                Apontando alanterna para baixo para ver onde vai cair,
                Acerta com sorte, um pequeno lago de lama e fezes de animais
                que suaviza a queda, machucando levemente o joelho.`);
                heroi.removerItemDeFerramentas("LANTERNA")
                heroi.ferimento(20);
                heroi.verStatus();
            break;
        case 2:
            
            console.log(`
                ${heroi.nome} Prepara rápidamente um dardo, espera a hiena se 
                aproximar, faz a mira, a hiena circula ${heroi.nome} fazendo
                ele não ter um alvo fixo, a hiena muda de direção  constantemente,
                você decide se aproximar mais um pouco, a tensão aumenta.
                A hiena ataca, você atira o dardo que passa perto da cabeça da hiena.
                A hiena agarra sua perna, ${heroi.nome} cai, em poucos segundos 
                chegam mais hienas que o matam`);
                heroi.atiraDardo();
                heroi.ferimento(100);
                vivo = false;
            break;
        case 3:
            console.log(`
                ${heroi.nome} apaga a lanterna e entra em alguns arbustos, o som da
                hiena se aproximando aumenta, voc~e escuta os passos dela a sua frente,
                sem enxergar nada, escuta que risadinhas e uivos que se multiplicam.
                Sabendo que é uma alcatéia, acende a laterna e corre em direção da torre,
                se deparando varias hienas que o atacam ferozmente, impedido de correr
                você é mordido varias vezes, perdendo a conciencia.`);
                heroi.ferimento(100)
                vivo = false;
                heroi.verStatus();
            break;
    }
    
    
    return vivo;
    



}