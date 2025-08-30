function setup(){
    createCanvas(600,600);
    background(100);
}
var colour=0;
var x=50;
var y=50;
function draw(){
    
    for(var i=0;i<10;i++){
        fill(colour);
        circle(x,y,50);
        colour=0+25.5*i;//25.5=
        x=50+50*i;
        y=50+50*i;
}

}
