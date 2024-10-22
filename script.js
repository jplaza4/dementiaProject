function setup() {
  createCanvas(400, 600);
  let img;
  let font;
  let button;
  let button2;
  let button3;
  let button4;
  drawPage1();

}
function drawPage1() {
  removeElements();
  background('#99CC99');
  textSize(50);
  textFont(font);
  fill('#A38365');
  text('Memory', 130, 200);
  image(img, 125, 225, 150, 150);
  text('Lane', 150, 450);
  button = createButton("Press Here To Continue");
  button.position(125, 525);
  button.size(150, 50);
  button.style('font-size', '20px');
  button.style('background-color', '#FDFBD4');
  button.style('border', 'none');
  button.style('color', '#A38365');
  button.style('font-family', 'KIdDOS-Regular');
  button.style('border-radius', '50px');
  button.style('padding', '1px 20px');
  button.mousePressed(drawPage2);
}
function drawPage2() {
  removeElements();
  background('#BEE9BE');
  button = createButton("Main Menu");
  button.position(145, 525);
  button.size(100, 50);
  button.style('font-size', '20px');
  button.style('background-color', '#FDFBD4');
  button.style('border', 'none');
  button.style('color', '#A38365');
  button.style('font-family', 'KIdDOS-Regular');
  button.style('border-radius', '50px');
  button.style('padding', '1px 20px');
  button.mousePressed(drawPage1);
  button2 = createButton("Puzzle");
  button2.position(52, 55);
  button2.size(300, 70);
  button2.style('font-size', '20px');
  button2.style('background-color', '#FDFBD4');
  button2.style('border', 'none');
  button2.style('color', '#A38365');
  button2.style('font-family', 'KIdDOS-Regular');
  button2.style('border-radius', '50px');
  button2.style('padding', '1px 20px');
  button2.mousePressed(drawPage3);
  button3 = createButton("Reminiscence Therapy");
  button3.position(52, 200);
  button3.size(300, 70);
  button3.style('font-size', '20px');
  button3.style('background-color', '#FDFBD4');
  button3.style('border', 'none');
  button3.style('color', '#A38365');
  button3.style('font-family', 'KIdDOS-Regular');
  button3.style('border-radius', '50px');
  button3.style('padding', '1px 20px');
  button3.mousePressed(drawPage4);
  button4 = createButton("Guided Breathing");
  button4.position(52, 355);
  button4.size(300, 70);
  button4.style('font-size', '20px');
  button4.style('background-color', '#FDFBD4');
  button4.style('border', 'none');
  button4.style('color', '#A38365');
  button4.style('font-family', 'KIdDOS-Regular');
  button4.style('border-radius', '50px');
  button4.style('padding', '1px 20px');
  button4.mousePressed(drawPage5);
}
function drawPage3() {
  removeElements();
  background('#BEE9BE');
  button = createButton("Back");
  button.position(145, 525);
  button.size(100, 50);
  button.style('font-size', '20px');
  button.style('background-color', '#FDFBD4');
  button.style('border', 'none');
  button.style('color', '#A38365');
  button.style('font-family', 'KIdDOS-Regular');
  button.style('border-radius', '50px');
  button.style('padding', '1px 20px');
  button.mousePressed(drawPage2);
  fill('rgb(151,151,235)');
  rect(50, 100, 300, 300);
  textFont(font);
  textSize(32);
  fill(255);
  text("puzzle[PLACEHOLDER]", 50, 300);
}
function drawPage4() {
  removeElements();
  background('#BEE9BE');
  button = createButton("Back");
  button.position(145, 525);
  button.size(100, 50);
  button.style('font-size', '20px');
  button.style('background-color', '#FDFBD4');
  button.style('border', 'none');
  button.style('color', '#A38365');
  button.style('font-family', 'KIdDOS-Regular');
  button.style('border-radius', '50px');
  button.style('padding', '1px 20px');
  button.mousePressed(drawPage2);
  fill('rgb(108,185,121)');
  rect(50, 100, 300, 300);
  textFont(font);
  textSize(32);
  fill(255);
  text("Therapy[PLACEHOLDER]", 50, 300);
}
function drawPage5() {
  removeElements();
  background('#BEE9BE');
  button = createButton("Back");
  button.position(145, 525);
  button.size(100, 50);
  button.style('font-size', '20px');
  button.style('background-color', '#FDFBD4');
  button.style('border', 'none');
  button.style('color', '#A38365');
  button.style('font-family', 'KIdDOS-Regular');
  button.style('border-radius', '50px');
  button.style('padding', '1px 20px');
  button.mousePressed(drawPage2);
  fill('rgb(242,128,128)');
  rect(30, 100, 340, 300);
  textFont(font);
  textSize(32);
  fill(255);
  text("GUIDBRTH[PLACEHOLDER]", 35, 300);
}



function preload() {

  img = loadImage("human-brain-clip-art-portable-network-graphics-image-png-favpng-8qKCfNxymk1vVc2cbq8xzRDq1-removebg-preview.png");
  font = loadFont('KIdDOS-Regular.ttf');

}

function draw() {

}