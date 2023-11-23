//classe SistemaSeguranca
class SistemaSeguranca {
    private static instancia: SistemaSeguranca;
    private senhaBaseSecreta: string = "senhaSecreta123";
  
    private constructor() {}
  
    public static getInstance(): SistemaSeguranca {
      return this.instancia || (this.instancia = new SistemaSeguranca());
    }
  
    public acessarBaseSecreta(senha: string): void {
      if (senha === this.senhaBaseSecreta) {
        console.log("Acesso concedido à Base Secreta!");
      } else {
        console.log("Acesso negado. Senha incorreta.");
      }
    }
  }
  
  // Programa principal
  const sistemaSeguranca = SistemaSeguranca.getInstance();
  
  // Agente secreto tenta acessar a Base Secreta
  const senhaInseridaCorreta = "senhaSecreta123";
  const senhaInseridaIncorreta = "senhaIncorreta";
  
  sistemaSeguranca.acessarBaseSecreta(senhaInseridaCorreta); // Acesso concedido
  sistemaSeguranca.acessarBaseSecreta(senhaInseridaIncorreta); // Acesso negado