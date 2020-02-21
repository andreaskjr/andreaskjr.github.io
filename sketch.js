// Variable
let img;
let input;
let border;
// Indlæs image border effekt
    function preload() {
      border = loadImage('https://i.imgur.com/8FupOgP.png');
    }
// Setup med "gem billede" knap
    function setup() {
      createCanvas(400,400);
      input = createFileInput(handleFile);
      input.position(400,0);
      button = createButton('Save Image');
      button.position(400,19);
      button.mousePressed(SAVE);
    }
// Selve funktionen der laver billedet om til sort/hvid og smider border ovenpå.
    function draw() {
      background(255);
      if (img) {
        image(img, 0, 0, width, height);
        c = map(mouseX,0,483,0,1);
        filter(GRAY, c);
        image(border, 0, 0, width, height);
      }
    }
// Fil kan uploades
function handleFile(file) {
  if (file.type === 'image') {
    img = createImg(file.data,'');
    img.hide();
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