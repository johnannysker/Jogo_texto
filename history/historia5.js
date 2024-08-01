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
            ${heroi.nome} vai em direção do prédio da administração, 
            no caminho, uma mulher sai de repente de um arbusto esbarra 
            em você, se apresenta como uma visitante e que está procura a saida,
            seu nome é Bia, os dois seguem para a torre de observação, você a 
            avisa que pode encontrar hienas pelo caminho, ela diz que sabe um atalho 
            para a torre, ela mostra um atalho por entre os arbustos mas a vinte 
            metros da torre, uma hiena é avistada, é so questão de tempo para que a 
            hiena vejam vocês dois. 
        `);
        console.log("");
    console.log("O QUE FAZER AGORA ?");
    console.log(`
            1 - Voltar e procurar outro caminho.
            2 - Chamar a atenção da hiena para que Bia fuja.
            3 - Atirar um dardo.`);
    console.log("");

    let vivo = true;
    opc = verificarNum();

    switch(opc){
        case 1:
            console.log(`
                ${heroi.nome} puxa Bia para voltar, começam a correr, a hiena os avista
                 e começa a correr em sua direção, antes que pudessem sair da trilha do
                 atalho, Bia é atacada por uma segunda hiena, sendo arrastada por entre 
                 os arbustos, você tenta correr para ajuda-la, mas se ver cercado por 
                 outras três hienas que o atacam simultaneamente, os gritos ecoam, 
                 pela savana.`);
                heroi.ferimento(100);
                vivo = false;
            break;
        case 2:
            if(heroi.Ferramentas.includes("CHAVE GRIFO")){
                console.log(`
                    ${heroi.nome} Decide chamar a atenção da hiena e pede para Bia
                    correr para a torre, você começa a correr para o barranco, 
                    as hienas se juntam na caçada, ${heroi.nome} se esforça para ir
                    mais rápido, olhando para trás, ver Bia subindo a escada da torre, 
                    chegando a beira do barranco, as hienas se aproximam rápidamente,
                    o cerco está completo, você nota que não tem nada que possa suavisar
                    sua queda do barranco, mas antes que pudesse tomar impulso, uma 
                    chuva de pedras começa a atigir as hienas, olhando para os galhos das
                    arvores você ver um bando de chimpanzes gritando e jogando as pedras.
                    ${heroi.nome} comemora com um sonoro "YOOOUUUHHOOOOOO"`);

            }else {
                console.log(`
                        ${heroi.nome} Decide chamar a atenção da hiena e pede para Bia
                    correr para a torre, você começa a correr para o barranco, 
                    as hienas se juntam na caçada, ${heroi.nome} se esforça para ir
                    mais rápido, olhando para trás, ver Bia subindo a escada da torre, 
                    chegando a beira do barranco, as hienas se aproximam rápidamente,
                    o cerco está completo, você nota que não tem nada que possa suavisar
                    sua queda do barranco, mas antes que pudesse tomar impulso, você olha
                    e ver nos galhos das arvores a macaca Ruth junto com seu bando, essa é
                    sua ultima visão antes do ataque final das hienas`);
                    heroi.ferimento(100);
                    vivo = false;
            }
    
                heroi.verStatus();
            break;
        case 3:
            console.log(`
                ${heroi.nome} prepara um dardo, pede para Bia correr para atorre, 
                a hiena corre em sua direção, ele ver Bia subir a escada da torre, 
                a hiena esta o alcansando, você atira e acerta o dardo, a hiena, 
                ataca sua perna, onde você prepara rápidamente ourto dardo e atira.
                na cabeça da hiena, que solta sua perna, onde você aproveita para
                correr e subir a escada da torre de observação.`);
               heroi.atiraDardo()
               heroi.atiraDardo()
                heroi.ferimento(40)
                heroi.verStatus();
            break;
    }
    
    
    return vivo;
}