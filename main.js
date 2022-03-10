var noseX=0;
var noseY=0;
var difference=0;
var rightWristX=0;
var leftWristX=0;
function setup(){
    video=createCapture(VIDEO);
    video.size(550,500);
    canvas=createCanvas(550,500);
    canvas.position(560,150);
    posenet=ml5.poseNet(video,modelLoaded);
    posenet.on('pose',gotPoses);
}
function draw(){
    background("#18A100");
    fill("pink");
    stroke("pink");
    square(noseX,noseY,difference);
    document.getElementById("square_sides").innerHTML="The size of the square is "+difference;
}
function modelLoaded(){
    console.log("posenet is initialized")
}
function gotPoses(results){
    console.log("banana");
    if(results.lenght>0){
        console.log(results);
        noseX=results[0].pose.nose.x;
        noseY=results[0].pose.nose.y;
        console.log(noseX);
        console.log(noseY);
        leftWristX=results[0].pose.leftWrist.x;
        rightWristX=results[0].pose.rightWrist.x;
        difference=floor(leftWristX-rightWristX);
    }
}