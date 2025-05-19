// Inicia as estruturas para ler dados digitados no terminal (prompt de comandos)
const readline = require("readline");
const prompt = require("prompt-sync")();

// Criação das constantes do programa
const a = 3;
const b = 7;

// Entrada de dados
var n = prompt(`Digite um número múltiplo de ${a} e ${b}: `);

// Confere se o número digitado é múltiplo de 3 e 7
if ((n % a === 0) && (n % b === 0)) {
    console.log("É múltiplo");
}
else {
    console.log("Não é múltiplo");
}