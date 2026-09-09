//Projeto 4 - Adicionando Textos

function setup() {
  createCanvas(400, 400);
}

function draw() {
  if(mouseIsPressed){
    textSize(20)
    fill(0,0,255)
    text("TDS",mouseX,mouseY);
  }
}