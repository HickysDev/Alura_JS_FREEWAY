//lista com os valores dos carros
let yCarros = [40, 96, 150];
let velCarros = [5, 6, 8];
let xCarros = [500, 500, 500];

//variavelCarroUniversal
let wCarro = 50;
let hCarro = 40;
function mostraCarro() {
  for (let i = 0; i < imagemCarros.length; i++) {
    image(imagemCarros[i], xCarros[i], yCarros[i], wCarro, hCarro);
  }
}
function movimentaCarro() {
  for (let i = 0; i < imagemCarros.length; i++) {
    xCarros[i] -= velCarros[i];
  }
}

function retornaCarro() {
  for (let i = 0; i < imagemCarros.length; i++) {
    if (passouTodaATela(xCarros[i])) {
      xCarros[i] = 600;
    }
  }
}

function passouTodaATela(xCarro){
  return xCarro <- 50
}
