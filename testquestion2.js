function setup(){
    createCanvas(600,600);
    background(100);
}
var colour=0
function draw(){
    fill(colour);
    stroke(255,0,0);
    strokeWeight(10);
    circle(150,200,100);
    triangle(300,150,250,250,350,250);
    rect(400,150,100,100); 
}
