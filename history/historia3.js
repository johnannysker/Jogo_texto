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
        Saindo do lago vagarosamente, sentido dores no joelho, ${heroi.nome}
        procura sua lanterna, após procurar por alguns minutos, decide seguir
        sem alanter, pois a luminosidade da lua fornece alguma visibilidade. 
        Olhando ao seu redor para se localizar, avista entre as arvores o que 
        parece ser uma casa de madeira, olando para o lado, você nota que está 
        mais perto da torre de observação, mas, ainda teria que subir o barranco. 
        O barranco e íngrime demais, você terá que tentar dar a volta e 
        se arriscar a encontrar as hienas.
        `);
        console.log("");
    console.log("O QUE FAZER AGORA ?");
    console.log(`
            1 - Procurar um lado menos íngrime do barranco para subir.
            2 - Ir ate a casa na floresta.
            3 - Ficar onde está e aguardar o amanhecer.`);
    console.log("");

    let vivo = true;
    opc = verificarNum();

    switch(opc){
        case 1:
            console.log(`
                ${heroi.nome} começa a andar as margens do barranco, depois de alguns metros, 
                encontra sua lanterna, o que ajuda a verificar o barranco, 
                procurando um lado que seja possível escalar, passa bem perto da torre 
                de observação, mas ainda dentro do barranco, nota que tem uma luz no 
                interio da torre, que ocila, decide gritar por socorro, na 
                esperança que alguém na torre o escute, sua voz se perde no 
                vento da savana e ninguém na torre aparece. Continua a seguir, procurando, 
                ${heroi.nome} percebe que está se afastando da torre, ate que encontra uma
                passagem de fácil acesso para subir, você logo segue para a torre, ao
                terminar a subida e surpreendido por um estrondo que se aproxima, 
                começa correr, um elefante em disparada sai por trás de um morro e o atropela, 
                quebrando suas constelas e o pescoço.`);
                heroi.ferimento(100);
                vivo = false;
            break;
        case 2:
            
            console.log(`
                ${heroi.nome} Decide ir ate a casa na floresta, dando passos cautelosos, 
                avança lentamente, depois de alguns metros, encontra sua lanterna,
                chegando na cabana, percebe que a cabana foi destruida a algum 
                tempo. explorando a cabana, encontra um rolo de cordas um mapa 
                do zoológico é uma cama coberta de palhas e madeira, você 
                decide fazer uma fogueira e passar a noite alí.`);
                heroi.restaurarVida();
                heroi.addFerramenta("CORDAS");
                heroi.addFerramenta("LANTERNA");
                heroi.addFerramenta("MAPA");
                heroi.verStatus();
            break;
        case 3:
            console.log(`
                ${heroi.nome} procura um canto reservado entre os arbusto, 
                depois alguns metros encotra sua lanterna, mas para poupar
                energia decide usar a luz da lua, que fornece um pouco de 
                visibilidade, você fica tentado a ir ate a casa na floresta, 
                mas teme que tenha algum animal a espreita, pois como biologo,
                sabe que alguns predadores caçam a noite, depois de alguns 
                minutos, os grunhidos e uivos de animais se intensificam 
                na noite, deixando você sem descanso e alerta durante todo
                o período da noite, mas depois de algumas horas o amanhecer 
                inicia na savana.`);
                heroi.addFerramenta("LANTERNA")
                heroi.ferimento(10)
                heroi.verStatus();
            break;
    }
    
    
    return vivo;
}