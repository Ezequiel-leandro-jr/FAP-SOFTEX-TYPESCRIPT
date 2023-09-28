let nome: string = 'Ezequiel'; //o typescript possui tipagem forte. Você pode declarar o tipo ou ele apreende o tipo do primeiro valor!

const pi: number = 3.14; //a constante aqui no typescript não pode alterar o seu valor

console.log(`Boa tarde, ${nome}!`);

let variavel: string | number; //aqui, este pipeline (|) indica que tal variavel pode aceitar valores tipo numerico ou string
let dado: any; //any indica que pode aceitar qualquer tipo de valor