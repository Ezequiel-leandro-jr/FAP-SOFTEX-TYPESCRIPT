//habilitando o readline-sync
import readline from 'readline-sync';

/**
 * FACTORY METHOD NA CRIAÇÃO DE OBJETOS POLÍGONOS
 * Ele verificará a quantidade dos lados de diferentes polígonos e lançará uma descrição, 
 * informando a quantidade de lados.
 * 
 */


/*
Inicialmente, a interface é criada para informar quais são as propriedades dos objetos criados. 
Na interface, temos um método que retorna uma string para mostrar o nome do objeto ao executarmos a programação.
*/
interface DescricaoPoligono {
    getDescricao(): string; //descrição do objeto
}

/*
Com a interface já criada, podemos criar as classes. 
Aqui, temos duas classes que irão representar dois polígonos: um quadrado, triângulo, um pentágono e um hexágono.
*/

class FactoryTriangulo implements DescricaoPoligono {
    getDescricao(): string {
        return 'O polígono é um Triângulo';
    }
}

class FactoryQuadrado implements DescricaoPoligono {
    getDescricao(): string {
        return 'O polígono é um Quadrado';
    }
}

class FactoryPentagono implements DescricaoPoligono {
    getDescricao(): string {
        return 'O polígono é um Pentágono';
    }
}

class FactoryHexagono implements DescricaoPoligono {
    getDescricao(): string {
        return 'O polígono é um Hexágono';
    }
}

/*
* Essa programação é a criação do Factory, que possui um método público estático.
* Nas implementações do Factory, é analisada a quantidade de lados dos polígonos para se obter um retorno.
 */

class FactoryPoligono {
    criarPoligono(numeroDeLados: number): DescricaoPoligono | null {
        switch(numeroDeLados) {
            case 3:
                return new FactoryTriangulo();
                break;
            case 4:
                return new FactoryQuadrado();
                break;
            case 5:
                return new FactoryPentagono();
                break;
            case 6:
                return new FactoryHexagono();
                break;
            default:
                console.log('\nERRO: Número de lados não suportado!\n');
                return null;
                break;
        }
    }
}

/**
 * Exemplo de uso do Factory Method
 */
const fabrica = new FactoryPoligono();

let lados: number = readline.questionInt('Digite o número de lados do polígono: ');

const poligono = fabrica.criarPoligono(lados);

if(poligono == null) {
    console.log(' ');
} else {
    console.log(poligono.getDescricao());
}














