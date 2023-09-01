//Imagens
let imagemEstrada;
let imagemCarro;
let imagemPlayer;

//variavelCarro
let xCarro = 500;
let wCarro = 50;
let hCarro = 40;

//variavelPlayer
let xPlayer = 100;
let yPlayer = 366;
let pontosPlayer = 0;

//functions:
function preload() {
  imagemEstrada = loadImage("imagens/estrada.png");
  imagemPlayer = loadImage("imagens/ator-1.png");
  imagemCarro = loadImage("imagens/carro-1.png");
}

function setup() {
  createCanvas(500, 400);
}

function draw() {
  background(imagemEstrada);
  image(imagemPlayer, xPlayer, yPlayer, 35, 30);
  image(imagemCarro, xCarro, 40, wCarro, hCarro);
  movimentaCarro();
  movimentaPlayer();
  addPontosPlayer();
  incluiPlacar()
}

function movimentaCarro() {
  xCarro -= 5;
  if (xCarro < 0) {
    xCarro = 500;
  }
}

function movimentaPlayer() {
  //cima
  if (keyIsDown(38)) {
    yPlayer -= 5;
  }

  //baixo
  if (keyIsDown(40)) {
    yPlayer += 5;
  }

  //esquerda
  if (keyIsDown(37)) {
    xPlayer -= 5;
  }

  //direita
  if (keyIsDown(39)) {
    xPlayer += 5;
  }
}

function addPontosPlayer() {
  if (yPlayer < 1) {
    pontosPlayer += 1;
    xPlayer = 100;
    yPlayer = 366;
  }
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

function colidirCarro(){
  if(xCarro == xPlayer && yCarro == yPlayer){
    xPlayer = 100;
    yPlayer = 366;
  }
}