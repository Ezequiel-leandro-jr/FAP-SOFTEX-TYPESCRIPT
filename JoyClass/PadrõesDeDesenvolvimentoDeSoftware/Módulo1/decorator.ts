// Interface Sanduiche
interface Sanduiche {
    preco(): number;
  }
  
  // classe concreta para Sanduíche de Frango Assado implementando a interface Sanduiche
  class FrangoAssado implements Sanduiche {
    preco(): number {
      return 4.50;
    }
  }
  
  // classe concreta SanduicheDecorator implementando a interface Sanduiche
  class SanduicheDecorator implements Sanduiche {
    protected sanduiche: Sanduiche;
  
    constructor(sanduiche: Sanduiche) {
      this.sanduiche = sanduiche;
    }
  
    preco(): number {
      return this.sanduiche.preco();
    }
  }
  
  // Classe concreta Pepperoni implementando a classe SanduicheDecorator
  class Pepperoni extends SanduicheDecorator {
    preco(): number {
      return this.sanduiche.preco() + 0.99;
    }
  }
  
  // Classe concreta QueijoMussarelaRalado implementando a classe SanduicheDecorator
  class QueijoMussarelaRalado extends SanduicheDecorator {
    preco(): number {
      return this.sanduiche.preco() + 2.00;
    }
  }
  
  // Função principal para execução do programa
  function main() {
    // Criando um sanduíche de frango assado
    const sanduicheFrangoAssado: Sanduiche = new FrangoAssado();
  
    // Adicionando pepperoni e queijo mussarela ralado
    const sanduicheDecorado: Sanduiche = new QueijoMussarelaRalado(new Pepperoni(sanduicheFrangoAssado));
  
    // Imprimindo o custo total do sanduíche
    console.log(`Sanduíche de Frango Assado, Pepperoni e Queijo Mussarela Ralado custa R$${sanduicheDecorado.preco().toFixed(2)}.`);
  }
  
  main();