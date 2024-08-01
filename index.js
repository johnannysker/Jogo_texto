const Heroi = require("./heroi");
const Historia = require("./history/historia");
const Historia2 = require("./history/historia2");
const Historia3 = require("./history/historia3");
const Historia4 = require("./history/historia4");
const Historia5 = require("./history/historia5");
const historiaFinal = require("./history/historiaFinal");
const prompt = require("prompt-sync")();


console.log(`
        *** AVENTURA NO NOVA ÁFRICA ***
    
            O sol começa a se pôr, pintando o céu de laranja e rosa. 
        Um biólogo de 35 anos que foi a algumas semanas recém 
        contratado pelo zoológico Nova África, observa pensativo...`);
console.log("");
const nome = prompt("Seu nome é: ");

const heroi = new Heroi(100, nome, 3);

const desafio1 = Historia(heroi);
if (desafio1) {
    const desafio2 = Historia2(heroi);
    if (desafio2) {
        const desafio3 = Historia3(heroi);
        if (desafio3) {
            const desafio4 = Historia4(heroi);
            if (desafio4) {
                const desafio5 = Historia5(heroi);
                if (desafio5) {
                    const desafioFinal = historiaFinal(heroi);
                    if (desafioFinal) {
                        console.log("PARABÉNS VOCE FINALIZOU O JOGO!")
                    }
                }
            }
        }
    }
} else {
    console.log("                  ***   GAME OVER   ***");
}



