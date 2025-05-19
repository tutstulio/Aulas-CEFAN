// Inicia as estruturas para ler dados digitados no terminal (prompt de comandos)
const readline = require("readline");
const prompt = require("prompt-sync")();

const SENHA = "abracadabra";    // senha supersecreta

var senha = prompt("Digite a senha: "); // salva a resposta do usuário no terminal

// Compara a resposta com a senha
if (senha === SENHA) {
    console.log("ACERTOU MISERAVI!");
}
else {
    console.log("Errrooooouuu!");
}