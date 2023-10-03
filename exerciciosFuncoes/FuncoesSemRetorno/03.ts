/*
03. Crie uma função chamada mostrarNumeros que receba dois parâmetros, inicio e
fim. Essa função deve exibir todos os números inteiros no intervalo de inicio a fim
(inclusive) no console.
*/

//habilitando o readline-sync
import readline from 'readline-sync';

//criando a função mostrarNumeros
function mostrarNumeros(inicio: number, fim: number): void {
    for(let i = inicio; i <= fim; i++) {
        console.log(`${i}`);
    }
}

//criando variáveis que serão o parâmetros reais
let ini: number = readline.questionInt('Digite um número inteiro inicial: ');
let end: number = readline.questionInt('Digite um número inteiro final: ');

//chamando a função com tais variáveis como parâmetros
mostrarNumeros(ini, end);

