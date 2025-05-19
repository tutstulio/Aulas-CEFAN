// Variáveis do programa
let circleX1, circleY1, circleX2, circleY2;
let speedX1, speedY1, speedX2, speedY2;
const diameter = 100;

function setup()
{
    // Cria janela de 640x480 pixels.
    createCanvas(640, 480);
    
    // Posição inicial
    circleX1 = 110;
    circleY1 = 400;
    circleX2 = 300;
    circleY2 = 105;
    
    // Velocidade inicial
    speedX1 = 5;
    speedY1 = 5;
    speedX2 = 5;
    speedY2 = 5;
}

function draw()
{
    // Distância entre dois pontos num plano x-y
    let distance = sqrt((circleX1-circleX2)**2 + (circleY1-circleY2)**2);
    
    // Cores RGB = (red, green, blue) -> 0 a 255
    background(50);   // cor do plano de fundo
  
    // Verifica os limites da tela
    // Círculo 1
    if (circleX1 < 0 || circleX1 > width) {
        speedX1 = -speedX1;
    }
    if (circleY1 < 0 || circleY1 > height) {
        speedY1 = -speedY1;
    }
    // Círculo 2
    if (circleX2 < 0 || circleX2 > width) {
        speedX2 = -speedX2;
    }
    if (circleY2 < 0 || circleY2 > height) {
        speedY2 = -speedY2;
    }

    // Verifica colisão entre os círculos
    if (distance < diameter) {
        speedX1 = -speedX1;
        speedY1 = -speedY1;
        speedX2 = -speedX2;
        speedY2 = -speedY2;
    }

    // Move os círculos
    circleX1 += speedX1;
    circleY1 += speedY1;
    circleX2 += speedX2;
    circleY2 += speedY2;

    // Desenha e colore os círculos
    fill(255, 55, 50);
    circle(circleX1, circleY1, diameter);
    fill(55, 255, 50);
    circle(circleX2, circleY2, diameter);
}