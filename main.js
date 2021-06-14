noseX=0;
noseY=0;
leftwristX=0;
rightwristX=0;
difference=0;
function setup(){
    video=createCapture(VIDEO);
    video.size(550,550);

    canvas=createCanvas(550,450);
    canvas.position(560,130);

    posenet=ml5.poseNet(video,modelloaded);
    posenet.on("pose", gotPoses);
}
function draw(){
    background('#34eb80');

    document.getElementById("square_size").innerHTML="Width and height of the square will be= "+difference+"px";
    fill('#f5dd42');
   stroke('#f5dd42');
   square(noseX,noseY,difference);
}
function modelloaded(){
    console.log('Posenet is initialized ');
}
function gotPoses(results){
    if(results.length>0){
        console.log(results);
        noseX=results[0].pose.nose.x;
        noseY=results[0].pose.nose.y;

        leftwristX=results[0].pose.leftWrist.x;
        rightwristX=results[0].pose.rightWrist.x;
        difference=floor(leftwristX-rightwristX);
    }
}