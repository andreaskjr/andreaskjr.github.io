// Variable
let img;
let input;
let border;
let slider;
let landingPage;
// Indlæs image border effekt
    function preload() {
      border = loadImage('https://i.imgur.com/8FupOgP.png');
      landingPage = loadImage('https://i.imgur.com/ohSV7nP.png');
    }
// Setup med "gem billede" knap
    function setup() {
      createCanvas(400,400);
      input = createFileInput(handleFile);
      input.position(410,20);
      button = createButton('Save Image');
      button.position(410,50);
      button.mousePressed(SAVE);
      slider = createSlider(0, 255, 255, 0);
      slider.position(410,150);
      slider.style('width', '100px');
      image(landingPage, 0, 0, width, height);
    }
// Selve funktionen der laver billedet om til sort/hvid og smider border ovenpå.
    function draw() {
      if (img) {
        image(img, 0, 0, width, height);
        c = map(mouseX,0,483,0,1);
        filter(GRAY, c);
        image(border, 0, 0, width, height);
        border.loadPixels();
        for (let i = 0; i < border.width; i++) {
          for (let j = 0; j < border.height; j++) {
            tint(255, slider.value());
          }
        }
        border.updatePixels();
      }
    }
// Fil kan uploades
function handleFile(file) {
  if (file.type === 'image') {
    img = createImg(file.data,'');
    img.hide();
    landingPage.hide();
  } else {
    img = null;
  }
}
// Gem billede funktion
function SAVE() {
  textSize(14);
  fill(255, 255, 255);
  textFont('Harrington');
  text('Gammeldags Billede Generator', 200, 390);
  saveCanvas('oldImage', 'jpg');
}
