//Exemplo 01: Funções sem parâmetros e sem retorno
function fun01(): void {
    console.log('Esta é minha primeira função Typescript.');
}

fun01();

//Exemplo 02: Funções com parâmetros e sem retorno
function fun02(nome: string): void {
    console.log(`Boa tarde, ${nome}!`);
}

fun02('Ezequiel');

//Exemplo 03: Funções sem parâmetros e com retorno
function fun03(): number {
    return 10;
}

let retorno: number = fun03();
console.log(retorno);

//Exemplo 04: Funções com parâmetros e com retorno
function fun04(nome: string, idade: number): string {
    return `Meu nome é ${nome} e eu tenho ${idade} anos de idade...`;
}

let cumprimento: string = fun04('Ezequiel', 31);
console.log(cumprimento);
