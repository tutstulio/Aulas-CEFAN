// Executa uma única vez
function setup()
{
  createCanvas(400, 400); // cria janela de 400x400 pixels
}

// Executa em loop (60 FPS)
function draw()
{
  // Cores RGB = (red, green, blue) -> 0 a 255
  background(25);   // cor do plano de fundo
  fill(255, 2, 50); // cor dos elementos desenhados na tela
  
  // Desenha círculo de raio = 50 pixels, com centro no mouse
  circle(mouseX, mouseY, 100);
}
