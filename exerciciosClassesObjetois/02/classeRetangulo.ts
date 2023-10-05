/*
03. Crie uma classe Retangulo com os atributos largura e altura e métodos para calcular
a área e o perímetro.
*/

//habilitando o readline-sync
import readline from 'readline-sync';

//criando classe Retangulo
class Retangulo {
    //atributos
    largura: number;
    altura: number;

    //método construtor
    constructor(largura: number, altura: number) {
        this.largura = largura;
        this.altura = altura;
    }

    //GETs e SETs
    get getLargura(): number {
        return this.largura;
    }

    get getAltura(): number {
        return this.altura;
    }

    set setLargura(largura: number) {
        this.largura = largura;
    }

    set setAltura(altura: number) {
        this.altura = altura;
    }

    //métodos para calcular área e perímetro
    areaRetangulo(altura: number, largura: number): number {
        let A = largura * altura;
        return A;
    }

    perimetroRetangulo(altura: number, largura: number): number {
        let P = 2*(altura + largura);
        return P;
    }
}

//exportando a classe Retangulo
export {Retangulo};
