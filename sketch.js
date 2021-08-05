var box1,box2
function setup() 
{
  createCanvas(400, 400);
  box1 = new Box(200,200,30,40,5,3)
  box2 = new Box(200,100,15,60,-3,-2)
}

function draw() 
{
  background(220);
box1.show()
box1.Move()
box1.move_up()
box1.bounce()
box1.bounce_x()
box2.show()
box2.Move()
box2.move_up()
box2.bounce()
box2.bounce_x()
}

