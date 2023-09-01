//variavelPlayer
let xPlayer = 100;
let yPlayer = 366;
let pontosPlayer = 0;


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
    yPlayer = 400;
  }
}
