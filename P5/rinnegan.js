function setup()
{
  createCanvas(400, 400); // cria janela de 400x400 pixels
}

function draw()
{
    // Cor do plano de fundo
    background(150);

    // Desenha dois olhos com rinnegan
    for (let r = 50; r > 0; r -= 10) {
        fill(r*250/50, r*150/50, r*250/50); // degradé com fator de escala (regra de três)
        for (let i = -1; i <= 1; i++) {
            if (i != 0) {
                circle(mouseX + 80*i, mouseY, 2*r); // desenha vários círculos
            }
        }
    }
}