// Guarda um número inteiro de três algarismos
var n = 123;

// Separa e exibe cada algarismo na ordem contrária
// O algoritmo divide, trunca e tira o resto de 10 do número para isolar cada algarismo
console.log(`O número invertido é ${n % 10}${Math.trunc(n/10) % 10}${Math.trunc(n/100) % 10}`);