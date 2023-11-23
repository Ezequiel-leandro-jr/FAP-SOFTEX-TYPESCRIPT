import { Jogador} from "./classeJogador";
import { Atacante } from "./classeAtacante";
import { Goleiro } from "./classeGoleiro";
import readline from "readline-sync";

function main() {
    const goleiro = new Goleiro('', 0, 'goleiro', false);
    const atacante = new Atacante('', 0, 'atacante', false);

    goleiro.setNome = readline.question(`Nome do Goleiro: `);
    goleiro.setIdade = readline.questionInt(`Idade do Goleiro: `);
    goleiro.setTitular = readline.question(`O Goleiro é titular <sim/nao>? : `);

    console.clear();

    atacante.setNome = readline.question(`Nome do Atacante: `);
    atacante.setIdade = readline.questionInt(`Idade do Atacante: `);
    atacante.setTitular = readline.question(`O Atacante é titular <sim/nao>? : `);

    console.clear();

    console.log(goleiro.atuar());
    console.log(goleiro.sair());
    console.log(atacante.entrar());
    console.log(atacante.atuar());
}

main();
