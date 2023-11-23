import { Personagem } from "./personagem";

export class Mago implements Personagem {
    constructor(
        public nome: string,
        public genero: string,
        public classe = 'Mago',
        public arma = 'cajado',
        public tipo: string,){
            this.nome = nome;
            this.genero = genero;
            this.classe = classe;
            this.arma = arma;
            this.tipo = tipo;
        }

    atacar(): void {
        console.log(`O ${this.classe} ${this.nome} ataca com seu ${this.arma}!`);
    }
    defender(): void {
        console.log(`O ${this.classe} ${this.nome} esquiva-se do oponente!`);
    }
    mover(): void {
        console.log(`O ${this.classe} ${this.nome} move-se com seus próprios pés...`);
    }
    magia(): void {
        console.log(`O ${this.classe} ${this.nome} conjura uma magia de ${this.tipo} através do seu ${this.arma}!`);
    }
    voar(): void {
        console.log(`O ${this.classe} ${this.nome} está voando sobre o terreno com sua magia...`);
    }
}