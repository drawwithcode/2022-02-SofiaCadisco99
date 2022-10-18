//define the array of colors
const colorList = ["#0000CD", "#4169E1", "#1E90FF", "#B0E0E6"];
var iterator = 0;
let aNewText;
let mySong;
let myText = "I RISTORANTI SONO PIENI";
let myText2 = "tasto sinistro per ascoltare tutti i miei segreti";
let myText3 = "tasto destro per fermare la musica";
//define the array of images
let myArray = [myImage1, myImage2, myImage3];

function preload() {
  soundFormats("mp3", "ogg");
  myImage1 = loadImage("./assets/Berlusconi1.png");
  myImage2 = loadImage("./assets/Berlusconi2.png");
  myImage3 = loadImage("./assets/Berlusconi3.png");

  mySong = loadSound("./assets/misonofattodasolo");
}

function setup() {
  let cnv = createCanvas(windowWidth, windowHeight);
  // mousePressed - pre built function
  cnv.mousePressed(canvasPressed);
}

function draw() {
  background("white");

  //cicle that draw rectangles on background with random colors from the colorList
  for (let x = 0; x < windowWidth; x += 20) {
    for (let y = 0; y < windowHeight; y += 50) {
      let colorHex = random(colorList);
      fill(color(colorHex));

      rect(x, y, 10, 10);
    }
  }

  // perlin noise applied to images
  iterator++;
  let x = noise(iterator / 100) * windowHeight;
  let y = 260;
  image(myImage1, x, y, 200, 200);

  //update the value of y
  y = 480;
  image(myImage2, x, y, 200, 200);

  //update the value of y
  y = 40;
  image(myImage3, x, y, 200, 200);

  textSize(52);
  stroke(10);
  textFont("Garamond");
  text(myText, 300 + x, 345);

  textSize(20);
  stroke(10);
  textFont("Helvetica");
  text(myText2, 500 + x, 490);

  text(myText3, 500 + x, 537);
}

//function which allows to play music
function canvasPressed() {
  if (mouseButton == LEFT) {
    if (mySong.isPlaying() == false) {
      mySong.play();
    }
  } else if (mouseButton == RIGHT) {
    if (mySong.isPlaying() == true) {
      mySong.stop();
    }
  }
}
