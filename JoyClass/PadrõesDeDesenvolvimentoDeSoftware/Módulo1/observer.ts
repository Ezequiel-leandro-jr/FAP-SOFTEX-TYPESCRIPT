// Interface Observer
interface Observer {
    update(): void;
  }
  
  // Classe Subject
  class Editor {
    private observers: Observer[] = [];
  
    addObserver(observer: Observer): void {
      this.observers.push(observer);
    }
  
    removeObserver(observer: Observer): void {
      const index = this.observers.indexOf(observer);
      if (index !== -1) {
        this.observers.splice(index, 1);
      }
    }
  
    notify(): void {
      this.observers.forEach(observer => observer.update());
    }
  }
  
  // Subclasse da classe Editor
  class TextEditor extends Editor {
    private lines: string[] = [];
  
    insertLine(lineNumber: number, text: string): void {
      this.lines.splice(lineNumber, 0, text);
      this.notify();
    }
  
    removeLine(lineNumber: number): void {
      this.lines.splice(lineNumber, 1);
      this.notify();
    }
  
    getLines(): string[] {
      return [...this.lines];
    }
  
    openFile(): void {
      // Simula o evento "open"
      this.notify();
    }
  
    saveFile(): void {
      // Simula o evento "save"
      console.log("Conteúdo salvo:", this.lines.join('\n'));
    }
  }
  
  // Implementação do Observer
  class ConsoleObserver implements Observer {
    private editor: TextEditor;
  
    constructor(editor: TextEditor) {
      this.editor = editor;
      this.editor.addObserver(this);
    }
  
    update(): void {
      console.log("Conteúdo atualizado:");
      this.editor.getLines().forEach((line, index) => {
        console.log(`${index + 1}: ${line}`);
      });
    }
  }
  
  // Uso do TextEditor
  const textEditor = new TextEditor();
  const consoleObserver = new ConsoleObserver(textEditor);
  
  textEditor.openFile();
  
  // Receber linhas de texto do usuário até que "EOF" seja inserido
  let lineNumber = 1;
  let userInput = "";
  while (userInput !== "EOF") {
    userInput = prompt(`Insira texto para a linha ${lineNumber} (ou "EOF" para encerrar):`);
    if (userInput !== "EOF") {
      textEditor.insertLine(lineNumber - 1, userInput);
      lineNumber++;
    }
  }
  
  textEditor.saveFile();
  