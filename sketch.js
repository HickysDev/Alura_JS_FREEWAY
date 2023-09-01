//functions:

function setup() {
  createCanvas(500, 400);
}

function draw() {
  background(imagemEstrada);
  retornaCarro();
  movimentaPlayer();
  addPontosPlayer();
  incluiPlacar();
  //colidirCarro();
  mostraImagens();
  mostraCarro();
  movimentaCarro();
}

function incluiPlacar() {
  stroke(255);
  textAlign(CENTER);
  textSize(20);
  fill(color(255, 140, 0));
  rect(230, 5, 40, 30);
  fill(255);
  text(pontosPlayer, 250, 26);
  fill(255);
}
