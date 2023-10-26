- A interrogação ao fim do nome do atributo indica que ele é opcional a ser implementado pela classe que irá herdar a interface
       exemplo: 
                export interface IAnimal {
                    nome: string;
                    idade: number;
                    porte?: string;
                }

-   Uma classe pode herdar apenas uma outra classe-mãe, mas pode herdar mais de uma interface, basta colocar os nomes das interfaces usand vírgulas.
         exemplo:
                  export class  galinha implements IAnimal, IBicho {
                    
                  }

- Você pode criar uma variável que terá a interface como tipo, tendo que implementar seus atributos e métodos
         exemplo:
                const cachorro: IAnimal = {
                    nome: 'Prince',
                    idade: 8,
                    //como porte é opcional, nã foi colocado
                };

- a palavra reservada "implements" é para interface, e "extends" para herança de classes. Uma interface extends outra interface


UML desse assunto:
seta sólida indica uma classe que herda outra ________>
seta ponteada indica uma classe que implementa uma interface ------>