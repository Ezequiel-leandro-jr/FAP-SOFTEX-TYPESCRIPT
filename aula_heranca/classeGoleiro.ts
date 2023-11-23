import { Jogador } from "./classeJogador";

export class Goleiro extends Jogador {
    constructor(
        protected nome: string, 
        protected idade: number, 
        protected posicao: string, 
        protected titular: boolean) {
            super(nome, idade, posicao, titular);
    }

    //método atuar sobrescrito
    atuar(): string {
        return `O ${this.getPosicao} ${this.getNome} está defendendo!`;   
    }
}