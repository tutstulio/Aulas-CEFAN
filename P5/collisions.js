// Variáveis do programa
let circleX, circleY;
let speedX, speedY;

function setup()
{
    // Cria janela de 600x400 pixels.
    createCanvas(600, 400);
    
    // Posição inicial
    circleX = 130;
    circleY = 228;
    
    // Velocidade inicial
    speedX = 2.5;
    speedY = 2.5;
}

function draw()
{
    // Cores RGB = (red, green, blue) -> 0 a 255
    background(50);   // cor do plano de fundo
  
    // Verifica os limites da tela
    if (circleX < 0 || circleX > width) {
        speedX = -speedX;
    }
    if (circleY < 0 || circleY > height) {
        speedY = -speedY;
    }

    // Move o círculo
    circleX += speedX;
    circleY += speedY;

    fill(55, 255, 50);              // cor dos elementos desenhados na tela
    circle(circleX, circleY, 70);   // desenha círculo
}