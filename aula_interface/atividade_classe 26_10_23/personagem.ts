export interface Personagem {
    nome: string,
    genero?: string,
    classe: string,
    arma: string,

    atacar(): void;
    defender(): void;
    mover(): void;
}
