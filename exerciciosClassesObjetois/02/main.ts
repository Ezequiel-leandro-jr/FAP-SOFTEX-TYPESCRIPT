/*
03. Crie uma classe Retangulo com os atributos largura e altura e métodos para calcular
a área e o perímetro.
04. Crie uma classe Círculo com o atributo raio e métodos para calcular a área e a
circunferência.
*/

//habilitando o readline-sync
import readline from 'readline-sync';

//importando a classe Retangulo
import {Retangulo} from "./classeRetangulo";
import { Circulo } from './classeCirculo';

//variaveis globais de largura e altura para atribuição dos valores pelo usuário
console.log(`\tCALCULANDO A ÁREA E O PERÍMETRO DE UM RETÂNGULO\n`);
let largura: number = readline.questionFloat('Digite a largura do retângulo: ');
let altura: number = readline.questionFloat('Digite a altura do retângulo: ');

//criando objeto retangulo
const retangulo1 = new Retangulo(largura, altura);

//calculando a área e o perímetro do retângulo
console.log(`
ÁREA: ${retangulo1.areaRetangulo(retangulo1.getLargura, retangulo1.getAltura).toFixed(2)}
PERÍMETRO ${retangulo1.perimetroRetangulo(retangulo1.getLargura, retangulo1.getAltura).toFixed(2)}`);
readline.question('\n\t<ENTER para continuar...>', {hideEchoBack: true, mask: ''});

console.clear();

console.log('\tCALCULANDO A ÁREA E A CIRCUNFERÊNCIA DO CÍRCULO\n');

//criando objeto circulo
const circulo1 = new Circulo(0);

//atribuindo o valor do raio do círculo
circulo1.setRaio = readline.questionFloat('Digite o valor do raio do círculo: ');

//calculando a área e a circunferência do círculo
console.log(`
ÁREA: ${circulo1.areaCirculo(circulo1.getRaio).toFixed(2)}
CIRCUNFERÊNCIA: ${circulo1.circunferenciaCirculo(circulo1.getRaio).toFixed(2)}`);
readline.question('\n\t<ENTER para continuar...>', {hideEchoBack: true, mask: ''});



