//Faça um programa que leia 3 números reais e os imprima em ordem crescente

// Inicia os 3 números reais com valores aleatórios de 0 a 1000
var a, b, c; 
a = Math.random() * 1000;
b = Math.random() * 1000;
c = Math.random() * 1000;

// Compara todas as ordens possíveis
if (a < b && a < c) {
	if (b < c) {
		console.log(`${a}, ${b}, ${c}`);	// a, b, c
	}
	else {
        console.log(`${a}, ${c}, ${b}`);	// a, c, b
	}
}

if (b < a && b < c) {
	if (a < c) {
        console.log(`${b}, ${a}, ${c}`);	// b, a, c
	}
	else {
        console.log(`${b}, ${c}, ${a}`);	// b, c, a
	}
}

if (c < a && c < b) {
	if (a < b) {
        console.log(`${c}, ${a}, ${b}`);	// c, a, b
	}
	else {
        console.log(`${c}, ${b}, ${a}`);	// c, b, a
	}
}