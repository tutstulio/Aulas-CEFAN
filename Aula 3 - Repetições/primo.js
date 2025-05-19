let n = Math.trunc(Math.random() * 20); // número inteiro randômico de 0 a 20
let count = 0;                          // variável auxiliar para contar divisores

// Para cada antescessor do número em questão, conta se o antescessor for um divisor
for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
        count++;
    }
}

// Confere se o número n é primo (divisível por 1 e ele mesmo)
if (count > 2) {
    console.log(n + " não é primo");
}
else {
    console.log(n + " é primo!");
}