var form;
var score = 0;

function setup() {
  createCanvas(800,400);
 form = new Form();
}

function draw() {
  background(255,255,255);  

    if(frameCount % 1 === 0){
        score += 1;
    }


  text("Score:" + score,700,40);

    

  form.display();


  drawSprites();
}