//importando a biblioteca readline-sync
import readline from "readline-sync";

//criando variável numérica
let num: number = readline.questionFloat('Digite um número real com mais de duas casas decimais: ');
let car: string = '';
let numLista: Array<number> = [10.2435245, 7.123123, 10.2435244];
let str: string = `  pOoLaIbAnO  `;
let str2: string = `  TiLaMbUkO  `;

//principais métodos de Number
car = num.toFixed(2); //toFixed() converte o float para duas casas decimais, em tipo string.
console.log(`\n${car}\n`);

car = num.toPrecision(2); //toPrecision() formata um número para string com um certo número total de dígitos significativos.
console.log(`\n${car}\n`);

car = num.toString(); //Converte um número em uma representação de string.
console.log(`\n${car}\n`);

num = parseInt(car);//Converte uma string em um número inteiro, desconsiderando parte decimal.
console.log(`\n${num}\n`);

num = parseFloat(car);//Converte uma string em um número de ponto flutuante (com parte decimal).
console.log(`\n${num}\n`);

console.log(isNaN(num));//Verifica se um valor não é um número (NaN).
console.log('');
console.log(isFinite(num));//Verifica se um número é finito, ou seja, não é NaN, Infinity ou -Infinity.

car = num.toExponential();//Retorna uma string representando o número no formato exponencial.
console.log(`\n${car} \n`);

num = Math.abs(num);//Retorna o valor absoluto (positivo) de um número.
console.log(`\n${num} \n`);

num = Math.round(num);//Arredonda um número para o inteiro mais próximo.
console.log(`\n${num} \n`);

num = Math.floor(num);//Arredonda um número para baixo para o inteiro mais próximo.
console.log(`\n${num} \n`);

num = Math.ceil(num);//Arredonda um número para cima para o inteiro mais próximo.
console.log(`\n${num} \n`);

console.log(`\n${Math.max(numLista[0], numLista[1], numLista[2], num, parseFloat(car))} \n`);//Retorna o maior valor entre dois ou mais números.

console.log(`\n${Math.min(numLista[0], numLista[1], numLista[2], num, parseFloat(car))} \n`);//Retorna o menor valor entre dois ou mais números.

//PRINCIPAIS MÉTODOS STRING
console.log(`\n ${str} \n`);

console.log(`\n ${str.trim()} \n`);//Remove os espaços em branco no início e no final da string.

console.log(`\n ${str.charAt(7)} \n`);//Retorna o caractere na posição especificada dentro da string.

console.log(`\n ${str.concat(str2)} \n`);//Concatena uma ou mais strings para formar uma nova string.

console.log(`\n ${str.indexOf('b')} \n`);//Retorna a posição da primeira ocorrência de um determinado caractere ou substring dentro da string.

console.log(`\n ${str.lastIndexOf('O')} \n`);//Retorna a posição da última ocorrência de um determinado caractere ou substring dentro da string.

console.log(`\n ${str.slice(3)} \n`);//Retorna uma parte da string, começando na posição especificada até a posição final (opcional).

console.log(`\n ${num.toString()} \n`);//Converte um valor para seu equivalente em formato de string.

console.log(`\n ${str.substring(1, 6)} \n`);//Retorna uma parte da string, entre as posições especificadas, sem incluir a posição final.

console.log(`\n ${str.toUpperCase()} \n`);//Converte todos os caracteres da string para maiúsculas.

console.log(`\n ${str.toLowerCase()} \n`);//Converte todos os caracteres da string para minúsculas.
















