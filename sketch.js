const Engine = Matter.Engine,
      World = Matter.World,
      Events = Matter.Events,
      Bodies = Matter.Bodies

var engine,world; 
var particles = [];
var plinkos=[];
var rows=[];
var ground;
var rows;
var score = 0;

var rowsHeight = 150;

function setup() {

  
  createCanvas(900,500);
  
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(200,500,1700,10);

  for(var j = 40; j<= 900; j = j+50){
    plinkos.push(new Plinko(j , 55))
  };
  for(var j = 15; j<= width-10; j = j+50){
    plinkos.push(new Plinko(j ,85))
  }
  for(var j = 40; j<= width-10; j = j+50){
    plinkos.push(new Plinko(j ,120))
  }
  for(var j = 15; j<= width-10; j = j+50){
    plinkos.push(new Plinko(j ,150))
  }
  for(var j = 40; j<= width-10; j = j+50){
    plinkos.push(new Plinko(j ,185))
  }
  for(var j = 15; j<= width-10; j = j+50){
    plinkos.push(new Plinko(j ,225))
  }
  for(var j = 40; j<= width-10; j = j+50){
    plinkos.push(new Plinko(j ,265))
  }
  for(var j = 15; j<= width-10; j = j+50){
    plinkos.push(new Plinko(j ,305))
  }
  for(var k = 0; k <=width; k = k+80){
    rows.push(new Rows(k, height-rowsHeight/2, 10, rowsHeight));
  }
}

function draw() {
  background(0);
  if(frameCount % 30 === 0){
    particle = new Particle(random(130, 800), 0, 7);
    particles.push(particle);
  
    if(particle.y>350){
      score=score+500;
    };
  
  }

  text(" 500 ", 5, 550);
 fill("white")
  text(" 500 ", 27, 350);
  text(" 500 ", 100, 350);
  text(" 500 ", 180, 350);
  text(" 500 ", 260, 350);
  text(" 100 ", 350, 350);
  text(" 100 ", 420, 350);
  text(" 100 ", 500, 350);
  text(" 200 ", 580, 350);
  text(" 200 ", 750, 350);
  text(" 200 ", 825, 350);
  text(" 200 ", 670, 350);



  textSize(30)
text("score = " + score,10,30)

  Engine.update(engine, 25);
  for(var i = 0; i < particles.length; i++){
    particles[i].display();
  }

 
  for(var k = 0; k<rows.length;k++){
    rows[k].display();
 }


  for(var j = 0; j<plinkos.length;j++){
    plinkos[j].display();
 }





//rows.display();
 ground.display();

  drawSprites();
}