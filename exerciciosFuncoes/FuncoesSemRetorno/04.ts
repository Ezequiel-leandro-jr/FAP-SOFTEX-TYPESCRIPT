/*
04. Escreva uma função chamada verificarPar que aceite um número como entrada e
exiba no console se o número é par ou não.
*/

//habilitando o readline-sync
import readline from 'readline-sync';

//criando a função verificarPar
function verificarPar (num: number): void {
    if(num % 2 == 0) {
        console.log(`O número ${num} é par!`);
    } else {
        console.log(`O número ${num} é ímpar!`);
    }
}

//variável que será o parâmetro real
let valor: number = readline.questionInt('Digite um número inteiro: ');

//chamando a função
verificarPar(valor);

