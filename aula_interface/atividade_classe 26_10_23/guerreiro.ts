import { Personagem } from "./personagem";

export class Guerreiro implements Personagem {
    constructor(
        public nome: string,
        public genero?: string,
        public classe = 'Guerreiro',
        public arma = 'espada',){
            this.nome = nome;
            this.genero = genero;
            this.classe = classe;
            this.arma = arma;
        }

    atacar(): void {
        console.log(`O ${this.classe} ${this.nome} ataca com sua ${this.arma}!`);
    }
    defender(): void {
        console.log(`O ${this.classe} ${this.nome} defende-se usando sua ${this.arma}!`);
    }
    mover(): void {
        console.log(`O ${this.classe} ${this.nome} move-se com seus próprios pés...`);
    }
}