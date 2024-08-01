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
            Pela manhã você avista um macaco chimpanzé, você reconhece como 
            sendo a macaca Ruth, ela se aproxima e puxa você pelo braço até
            chegar em um buraco profundo e escuro, indicando que tem alguma
            coisa neste buraco que ela quer.
        `);
        console.log("");
    console.log("SERÁ QUE É HORA DE BANCAR O BOM SAMARITANO ?");
    console.log(`
            1 - Ajudar a macaca.
            2 - Ignorar a macaca e seguir para a torre de observação.
            `);
    console.log("");

    let vivo = true;
    opc = verificarNum();

    switch(opc){
        case 1:
            console.log(`
                Ainda achando que é uma má ideia ${heroi.nome} se aproxima
                do buraco, usando a lanterna para inspencionar o buraco, 
                depois pensa como vai entrar no buraco.`);
            if(heroi.Ferramentas.includes("CORDAS")){
            console.log(`
                Procura uma arvore para amarrar a corda, encontra uma proxima
                 e começa a decida, olhando para baixo avista um bebê macaco
                 desmanhado e ferido em uma pedra, quase caindo para o fundo 
                 do nuraco. Ao se aproximar, encontra uma chave Grifo proximo
                 macaco, ${heroi.nome} decide guardar, pois pode ser útil mais
                 tarde, depois, se esforça para sair do buraco e entrega a
                 macaca Ruth, que rápidamente some floresta a dentro. Usando o 
                 mapa segue em direção do prédio da administração.
                 `);
                 heroi.addFerramenta("CHAVE GRIFO");
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
                ${heroi.nome} Decide ignorar a macaca e seguir para a torre de observação,
                seguindo pela margem do barranco, em busca de um ponto que possa escalar 
                o barranco, ${heroi.nome} percebe que está se afastando da torre mas, 
                avista um ponto de acesso, por meio de uma arvore proxima ao barranco, 
                rápidamente corre para subir, quando estava no galho mais alto, nota que 
                tem um leopardo no mesmo galho, antes que pudesse pensar em algo, o 
                leopardo o ataca no pescoço, onde os dois caem da arvore, quebrando 
                braços e costelas. o leopardo volta a agarrar em seu pescoço.`);
                heroi.ferimento(100)
                vivo = false;

            break;
    
    }
    
    
    return vivo;
}