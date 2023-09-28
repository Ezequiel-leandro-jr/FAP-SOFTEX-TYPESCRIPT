//importando a biblioteca readline-sync
import readline from "readline-sync";

//criando os dois arrays do exercício[
let pet: Array<string> = ['gato', 'cachorro', 'beta', 'tartaruga', 'hamster', 'coelho', 'passarinho', 'iguana', 'aranha'];
let tipo: Array<string> = ['mamífero', 'peixe', 'quelônio', 'roedor', 'ave', 'réptil', 'aracnídeo'];
let petipo: Array<string> = new Array();
let str: string;
let petipoSlice: Array<string> = new Array();
let petipoSplice: Array<string> = new Array();

//principais métodos em Array
console.log(pet);
console.log(tipo);

tipo.push('felino');
console.log(`\n${tipo}\n`);//Adiciona um ou mais elementos ao final do array.

console.log(`\n${pet.pop()}\n`);//Remove e retorna o último elemento do array.

console.log(`\n${pet.shift()}\n`);//Remove e retorna o primeiro elemento do array.

tipo.unshift('felino');
console.log(`\n${tipo}\n`);//Adiciona um ou mais elementos no início do array.


petipo = petipo.concat(pet, tipo);
console.log(`\n${petipo}\n`);//Combina dois ou mais arrays, criando um novo array resultante.

str = pet.join('\n');
console.log(`\n${str}\n`);//Converte todos os elementos do array em uma única string, separados por um delimitador.

petipoSlice = petipo.slice(4, 12);
console.log(`\n${petipoSlice}\n`);//Retorna uma cópia de parte do array, definida por índices de início e fim.
console.log(`\nPETIPO pós-slice: ${petipo}\n`);

petipoSplice = petipo.splice(4, 12)
console.log(`\n${petipoSplice}\n`);//Altera o conteúdo do array, adicionando, removendo ou substituindo elementos.
console.log(`\nPETIPO pós-splice: ${petipo}\n`);

console.log(`\n${petipo.indexOf('hamster')}\n`);//Retorna o índice da primeira ocorrência de um elemento no array.

console.log(`\n${petipo.lastIndexOf('felino')}\n`);//Retorna o índice da última ocorrência de um elemento no array.




