//importando a readline-sync
import readline from 'readline-sync';

// Interface Strategy
interface Strategy {
    execute(num1: number, num2: number): number;
  }
  
  // Classe concreta para a operação de Soma
  class Adicao implements Strategy {
    execute(num1: number, num2: number): number {
      return num1 + num2;
    }
  }
  
  // Classe concreta para a operação de Subtração
  class Subtracao implements Strategy {
    execute(num1: number, num2: number): number {
      return num1 - num2;
    }
  }
  
  // Classe concreta para a operação de Multiplicação
  class Multiplicacao implements Strategy {
    execute(num1: number, num2: number): number {
      return num1 * num2;
    }
  }
  
  // Contexto que utiliza a Strategy
  class Calculadora {
    private strategy: Strategy;
  
    setStrategy(strategy: Strategy): void {
      this.strategy = strategy;
    }
  
    calcular(num1: number, num2: number): number {
      if (!this.strategy) {
        throw new Error('Estratégia não definida.');
      }
  
      return this.strategy.execute(num1, num2);
    }
  }
  
  // Aplicação
  function main(): void {
    const calculadora = new Calculadora();
  
    const num1 = readline.questionFloat('Digite o primeiro número:');
    const num2 = readline.questionFloat('Digite o segundo número:');
    const operacao = prompt('Digite a operação (+, -, *):');
  
    let strategy: Strategy;
  
    switch (operacao) {
      case '+':
        strategy = new Adicao();
        break;
      case '-':
        strategy = new Subtracao();
        break;
      case '*':
        strategy = new Multiplicacao();
        break;
      default:
        console.log('Operação inválida.');
        return;
    }
  
    calculadora.setStrategy(strategy);
    const resultado = calculadora.calcular(num1, num2);
  
    console.log(`Resultado da operação: ${resultado}`);
  }
  
  // Executa a aplicação
  main();
  