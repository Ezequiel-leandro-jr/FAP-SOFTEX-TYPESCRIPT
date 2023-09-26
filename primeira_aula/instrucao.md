1. Começa um novo projeto com npm init -y e instala o typescript pelo node: npm install -g typescript
2. você digita tsc -v  para saber a versão do typescript
3. você cria um arquivo .ts com o mesmo nome do arquivo main padrão presente no JSON
4. Escreve um "olá, mundo" 
5. Em seguida faz a "compilação" deste .ts para criar um arquivo .js, usando: tsc main.ts
6. A cada vez que você fizer uma alteração no arquivo .ts deve compilar novamente
7. Para suprir isso, instale npm install -g ts-node
8. no JSON, coloque, abaixo do "test": "start": "ts-node main.ts"
9. Aí nem precisa compilar sempre para .js, apenas digitar npm start
10. Se você não for rodar o main, utilize ts-node nomeDoArquivo.ts


