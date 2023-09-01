//Imagens
let imagemEstrada;
let imagemCarro;
let imagemCarro2;
let imagemCarro3;
let imagemPlayer;


function preload() {
  imagemEstrada = loadImage("imagens/estrada.png");
  imagemPlayer = loadImage("imagens/ator-1.png");
  imagemCarro = loadImage("imagens/carro-1.png");
  imagemCarro2 = loadImage("imagens/carro-2.png");
  imagemCarro3 = loadImage("imagens/carro-3.png");
  imagemCarros = [imagemCarro, imagemCarro2, imagemCarro3];

}

function mostraImagens(){
  image(imagemPlayer, xPlayer, yPlayer, 35, 30);
  
}