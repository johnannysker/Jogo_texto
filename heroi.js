const Personagem = require("./personagem");
class Heroi extends Personagem{
    constructor(vida, nome, dardos){
        super(vida, nome);
        this.dardos = dardos;
        this.Ferramentas = ["LANTERNA"];
    
    }

    atiraDardo(){
        if(this.dardos > 0){
            this.dardos -= 1;
        }else {
            console.log("Voce não tem mais dardos!");
        }
    }

    temFerramenta(ferramenta){
        return Ferramentas.includes(ferramenta);
        
    }

    restaurarVida(){
        if(this.vida < 100){
            this.vida = 100;
        }
    }

    ferimento(valor){
        this.vida -= valor;
        if(this.vida <= 0){
            console.log(`
                        VOCÊ ESTÀ MORTO!`);
            
        }
    }

    verStatus(){
        console.log(`
            * STATUS *
            Nome: ${this.nome}
            Vida: ${this.vida}
            Dardos: ${this.dardos}
            Ferramentas:`);
        this.Ferramentas.forEach((Fer, i) => {
            console.log(`           ${i+1} - ${Fer}`)
            });
    }

    
    removerItemDeFerramentas(itemParaRemover) {
        const indice = this.Ferramentas.indexOf(itemParaRemover);
        if (indice !== -1) {
            this.Ferramentas.splice(indice, 1);
            console.log(`Item "${itemParaRemover}" removido do array.`);
        } else {
            console.log(`Item "${itemParaRemover}" não encontrado no array.`);
        }
    }

    addFerramenta(Fer){
        this.Ferramentas.push(Fer);
    }

}

module.exports = Heroi;