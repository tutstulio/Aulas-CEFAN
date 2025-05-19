// Inicia as estruturas para ler dados digitados no terminal (prompt de comandos)
const readline = require("readline");
const prompt = require("prompt-sync")();

var nota1, nota2, media;    // inicia as variáveis do programa

// Salva as notas digitadas pelo usuário
nota1 = Number(prompt("Digite a nota da primeira prova: "));
nota2 = Number(prompt("Digite a nota da segunda prova: "));

// Calcula a média de duas notas
media = (nota1 + nota2) / 2;

// Compara o valor da média e diz a situação do usuário
if (media >= 7) {
    console.log("Passou direto!");
}
else if (media >= 4) {
    console.log("Tá de recuperação");
}
else {
    console.log("Tomou na jabiraca");
}

console.log("Pois sua média foi " + media);