let canciones = [];
let cancionActual = 0;
const totalCanciones = 3;

// Paleta con tonos rosados y celestes suaves
const fondo = [245, 235, 240];
const radioCuerpo = [220, 140, 160];
const pantalla = [170, 200, 220];
const textoPantalla = [250, 240, 245];
const botonBase = [255, 210, 220];
const botonSimbolo = [180, 120, 140];
const sombraBoton = [210, 180, 200, 130];

function preload() {
  for(let i = 1; i <= totalCanciones; i++) {
    canciones.push(loadSound(`canciones/cancion${i}.mp3`));
  }
}

function setup() {
  createCanvas(600, 400);
  textFont('Georgia');
  textSize(20);
  textAlign(CENTER, CENTER);
  noStroke();

  if (canciones[0]) canciones[0].play();
}

function draw() {
  background(...fondo);

  // Sombra suave para radio
  fill(...sombraBoton);
  rect(106, 108, 400, 200, 24);

  // Cuerpo de la radio en rosa pastel
  fill(...radioCuerpo);
  rect(100, 100, 400, 200, 24);

  // Pantalla celeste con bordes redondeados
  fill(...pantalla);
  rect(230, 150, 140, 40, 12);

  // Texto canción en blanco rosado
  fill(...textoPantalla);
  textSize(24);
  text("Canción " + (cancionActual + 1), 300, 170);

  // Botones con sombra suave
  fill(...sombraBoton);
  ellipse(184, 254, 50, 50);
  ellipse(424, 254, 50, 50);

  // Botones rosa pálido
  fill(...botonBase);
  ellipse(180, 250, 50, 50);
  ellipse(420, 250, 50, 50);

  // Símbolos en rosa medio para contraste
  fill(...botonSimbolo);
  textSize(32);
  text("<", 180, 250);
  text(">", 420, 250);
}

function mousePressed() {
  if(dist(mouseX, mouseY, 180, 250) < 25) {
    cambiarCancion(-1);
  }
  if(dist(mouseX, mouseY, 420, 250) < 25) {
    cambiarCancion(1);
  }
}

function cambiarCancion(direccion) {
  if(canciones[cancionActual].isPlaying()) {
    canciones[cancionActual].stop();
  }
  cancionActual = (cancionActual + direccion + totalCanciones) % totalCanciones;
  canciones[cancionActual].play();
}
