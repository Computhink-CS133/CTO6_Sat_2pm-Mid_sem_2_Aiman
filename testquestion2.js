function setup(){
    createCanvas(600,600);
    background(100);
}
var colour=0
var x=0
var y=0
function draw(){
    
    for(var i =0;i<10;i++){
        fill(colour);
        circle(x,y,50);
        colour+=50
        x+=50
        y+=50
}

}
