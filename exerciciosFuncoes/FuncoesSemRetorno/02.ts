/*
02. Escreva uma função chamada dobro que aceite um parâmetro 'num'
e exiba o dobro desse número no console.
*/

//habilitando o readline-sync
import readline from 'readline-sync';

//criando a função dobro
function dobro(num: number): void {
    console.log(`O dobro de ${num} = ${num*2}`);
}

//criando a variável do número a ser dobrado
let numero: number = readline.questionFloat('Digite um número para saber o seu dobro: ');

//chamando a função
dobro(numero);

