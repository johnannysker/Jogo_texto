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
            ${heroi.nome} está finalizando seu trabalho, observando na jaula 
        do Rinoceronte uma fêmea estranhamente agitada. De repente, os 
        alto-falantes se apagam e um rugido ensurdecedor ecoa pelo zoológico. 
        As portas das jaulas se abrem com um estrondo, liberando uma horda de animais 
        selvagens.
        
            As poucas pessoas que visitavam o zoológico, saem em pânico, as luzes de
        emergência são ligadas, mas não ficarão acessas por muito tempo, em oito horas 
        o zoológico ficará no escuro. O Nova África é um zoológico com animais de grande
        porte, todos de origem da savana africana, localizado em uma região remota do 
        Congo. Agora, leões, elefantes, zebras, hienas e ate mesmo os rinocerontes, 
        estarão vagando pelo zoológico.
        
            Rapidamente ${heroi.nome} pega um estojo com três dardos tranquilizantes e uma lanterna 
        e tenta sair da jaula, mas a fêmea rinoceronte está bloqueando a saída, neste
        exato momento os agentes do zoológico, acreditando que todos os visitantes já 
        haviam saído, iniciam o protocólo de segurança, logo após começam a verificar 
        quais funcionários estavam no expediente e se conseguiram sair. 
        
        Na jaula do rinoceronte...`);
    console.log("");
    console.log("COMO VOCÊ PREFERE AGIR COM O RINOCERONTE ?");
    console.log(`
            1 - Tentar se aproximar, afim de acalma-la.
            2 - Aguardar alguns minutos, ate que ela se acalme.
            3 - Usar um dardo tranquilizante.`);
    console.log("");
   
    let vivo = true;
    opc = verificarNum();

    switch(opc){
        case 1:
            console.log(`
                Você tenta se aproximar devagar, fazendo um som com a boca de 
            "sssshhhhhh! Calma, Calma."
            Aparentemente, a rinoceronte esta se acalmando. Mas, 
            em um movimento brusco e rápido ela balança a cabeça de baixo para cima.
            Acertando em cheio seu peito. E com um movimento de chicote da cabeça,
            atira seu corpo para o canto da jaula. `);
            vivo = false
            heroi.ferimento(100);
            break;
        case 2:
            console.log(`
                ${heroi.nome} aguarda alguns minutos, na esperança que a rinoceronte se 
            afaste da entrada, mas começa a ficar impaciente.
            vai ate o canto da jaula, nesse momento a rinoceronte parte em sua direção.
            Fazendo uma finta, você se livra do golpe mortal, mesmo assim,
            o chifre acerta suas costas de raspão, causando um sangramento pequeno.
            Você pula para fora da jaula e sai rápido.`);
            heroi.ferimento(30);
            heroi.verStatus();
            break;
        case 3:
            console.log(`
                ${heroi.nome} se aproxima devagar, faz a mira e atira no pescoço da rinoceronte.
            Se afasta rápidamente, e aguarda em poucos minutos a rinoceronte cair no sono.
            Saindo em seguida da jaula.`);
            heroi.atiraDardo();
            heroi.verStatus();
            break;
    }
    
    
    return vivo;
    


}