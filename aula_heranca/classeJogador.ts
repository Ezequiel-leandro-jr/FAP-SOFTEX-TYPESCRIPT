export class Jogador {
    constructor(
        protected nome: string, 
        protected idade: number, 
        protected posicao: string, 
        protected titular: boolean) {
        this.nome = nome,
        this.idade = idade,
        this.posicao = posicao,
        this.titular = titular
    }

    //setters e getters
    set setNome(nome: string) {
        this.nome = nome;
    }

    set setIdade(idade: number) {
        this.idade = idade;
    }

    set setPosicao(posicao: string) {
        this.posicao = posicao;
    }

    set setTitular(titular: string) {
        titular = titular.toLowerCase();
        if(titular === 'sim') {
            this.titular = true;
        } else {
            this.titular = false;
        }
    }

    get getNome() {
        return this.nome;
    }

    get getIdade() {
        return this.idade;
    }

    get getPosicao() {
        return this.posicao;
    }

    get getTitular() {
        return this.titular;
    }

    //métodos
    atuar(): string {
        return `O ${this.getPosicao} ${this.getNome} está jogando!`;
    }

    entrar(): string {
        return `O ${this.getPosicao} ${this.getNome} vai entrar em campo!`;
    }

    sair(): string {
        return `O ${this.getPosicao} ${this.getNome} será substituído!`;
    }

}