/*
04. Crie uma classe Círculo com o atributo raio e métodos para calcular a área e a
circunferência.
*/

//habilitando o readline-sync
import readline from 'readline-sync';

//criando classe Círculo
class Circulo {
    //atributos
    raio: number;

    //método construtor
    constructor(raio: number) {
        this.raio = raio;
    }

    //GETs e SETs
    get getRaio(): number {
        return this.raio;
    }

    set setRaio(raio: number) {
        this.raio = raio;
    }

    //métodos para calcular área e circunferência
    areaCirculo(raio: number): number {
        let A = 3.14 * (raio**2);
        return A;
    }

    circunferenciaCirculo(raio: number): number {
        let C = 2*3.14*raio;
        return C;
    }
}

//exportando a classe Circulo
export {Circulo};