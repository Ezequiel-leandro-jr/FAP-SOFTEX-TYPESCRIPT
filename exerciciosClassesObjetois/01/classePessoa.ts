/*
01. Crie uma classe Pessoa com os atributos nome, idade e email.
*/

//habilitando o readline-sync
import readline from 'readline-sync';

//criando classe pessoa
class Pessoa {
    //atributos
    nome: string;
    idade: number;
    email: string;

    //método construtor
    constructor(nome: string, idade: number, email: string) {
        this.nome = nome;
        this.idade = idade;
        this.email = email;
    }

}

//exportando a classe Pessoa
export {Pessoa};