/**
 * Considere que:
 * os produtos devem implementar uma interface comum
 * o cliente deve utilizar apenas a fábrica para criar instâncias do tipo abstrato de interface
 * todo computador deve ter, com getters, os atributos: ram, hd, cpu e type
 * há dois tipos de computadores: pc e server
 * RAM e HD devem estar em GB
 * CPU deve estar em GHz
 * através do tipo informado, a fábrica decide qual tipo de computador irá instanciar
 * quando o método .toString() for aplicado a um computador, ele deve imprimir seus atributos 
 */

//habilitação do readline-sync
import readline from 'readline-sync';


//interface comum para implementação dos atributos dos produtos
interface Computador {
    //atributos
    ram: string;
    hd: string;
    cpu: string;
    tipo: string;
}

//classes concretas dos produtos
class PC implements Computador {
    private _ram: number = 16;
    private _hd: number = 256;
    private _cpu: number = 2.8;
    private _tipo: string = 'PC';

    //getters
    get ram(): string {
        return `${this._ram}GB`;
    }

    get hd(): string {
        return `${this._hd}GB`;
    }

    get cpu(): string {
        return `${this._cpu}GHz`;
    }

    get tipo(): string {
        return `${this._tipo}`;
    }
}

class Server implements Computador {
    private _ram: number = 32;
    private _hd: number = 500;
    private _cpu: number = 5;
    private _tipo: string = 'Server';

    //getters
    get ram(): string {
        return `${this._ram}GB`;
    }

    get hd(): string {
        return `${this._hd}GB`;
    }

    get cpu(): string {
        return `${this._cpu}GHz`;
    }

    get tipo(): string {
        return `${this._tipo}`;
    }
}

//interface da fábrica de computadores
interface fabricaAbstrata {
    //método para criação de computadores
    criarComputador(tipo: number): Computador;
    }

//classes concretas para fabricar PC e Server
class fabricaConcreta implements fabricaAbstrata {
    criarComputador(tipo: number): Computador | null {
        switch(tipo) {
            case 1:
                return new PC();
                break;
            case 2:
                return new Server();
                break;
            default:
                console.log('\nTipo de computador invalido!');
                return null;
                break;
        }
    }
}

//utilização da fábrica
console.log('\n\tFABRICA DE COMPUTADORES\n');

let tipo: number = readline.questionInt('Digite o numero do tipo de Computador a ser fabricado:\n1. PC\n2. Server\n=> ');

const fabrica = new fabricaConcreta();

const computador = fabrica.criarComputador(tipo);

if(computador == null) {
    console.log('');
} else {
    console.log('\n\tComputador fabricado com sucesso:');
    console.log(`-------------------------
TIPO: ${computador.tipo}
RAM:  ${computador.ram}
CPU:  ${computador.cpu}
HD:   ${computador.hd}
-------------------------`);
}

