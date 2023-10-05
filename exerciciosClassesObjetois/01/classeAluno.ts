/*
02. Crie uma classe Aluno que herda da classe Pessoa e tenha um atributo adicional matricula.
*/

//habilitando o readline-sync
import readline from 'readline-sync';

//importando a classe Pessoa
import { Pessoa } from './classePessoa';

//criando a classe Aluno herdando Pessoa
class Aluno extends Pessoa {
    //atributos
    matricula: string;

    constructor(nome: string, idade: number, email: string, matricula: string) {
        super(nome, idade, email);
        this.matricula = matricula;
    }
}