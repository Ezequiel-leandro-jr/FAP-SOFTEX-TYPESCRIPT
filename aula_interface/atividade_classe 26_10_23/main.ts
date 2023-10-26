import { Guerreiro } from "./guerreiro";
import { Mago } from "./mago";
import readline from "readline-sync";

function main(): void {
    console.log(`\tCRIANDO SEU PERSONAGEM\n`);

    let opcao: number = readline.questionInt(`
Que personagem você quer criar:
1. Guerreiro
2. Mago
=> `);

    switch(opcao) {
        case 1:
            const guerreiro = new Guerreiro();
    }


}
