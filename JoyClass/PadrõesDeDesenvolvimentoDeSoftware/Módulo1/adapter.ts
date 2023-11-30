// Interface Galinha
interface Galinha {
    cacarejo(): void;
  }
  
  // Classe concreta Galinha
  class GalinhaComum implements Galinha {
    cacarejo(): void {
      console.log('Cocoricó!');
    }
  }
  
  // Interface Pato
  interface Pato {
    grasno(): void;
  }
  
  // Classe concreta Pato
  class PatoComum implements Pato {
    grasno(): void {
      console.log('Quack');
    }
  }
  
  // Adaptador para transformar Pato em Galinha
  class AdaptadorPato implements Galinha {
    private pato: Pato;
  
    constructor(pato: Pato) {
      this.pato = pato;
    }
  
    cacarejo(): void {
      this.pato.grasno();
    }
  }
  
  // Demonstração do uso do AdaptadorPato
  class AdaptadorPatoDemo {
    static main(): void {
      const patoComum = new PatoComum();
      const adaptadorPato = new AdaptadorPato(patoComum);
  
      console.log('Pato comum faz:');
      patoComum.grasno();
  
      console.log('\nUsando AdaptadorPato, parece uma Galinha:');
      adaptadorPato.cacarejo();
    }
  }
  
  // Executando a demonstração
  AdaptadorPatoDemo.main();
  