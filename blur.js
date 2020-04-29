function setup() {
    createCanvas(400, 400);
    background(0);
    noStroke()
    x = 10;
    y = 10;
    a = 100
    
}
  
  function draw() {
    fill(0, 20)
    rect(0,0,width,height);
    fill(167, 87, 168);
    ellipse(x, y, 10, 10)
    x += 1;
    y += 1;

}