song = "";
song = "";

leftWristX=0;
leftWristY=0;
rightWristX=0;
rightWristY=0;

function preload()
{
song=loadSound("music.mp3");
song=loadSound("music2.mp3");
}

function setup()
{
canvas=createCanvas(600, 500);
canvas.center();

video=createCapture(VIDEO);
video.hide();

poseNet = ml5.poseNet(video,modelLoaded);
poseNet.on('pose',gotPoses);
}

function draw()
{
image(video,0, 0, 600, 500);

fill('2DFFFF');
stroke('2DFFFF');
if (scoreleftwrist>0.2)
{
circle(leftWristX,leftWristY,20);
innumberleftwristY=Number(leftWristY);
RemoveDecimals=floor(innumberleftwristY);
if (song1=false)
play("song1")
}
}

function play()
{3
song.play();
song.setSong(1);
}

function modelLoaded()
{
console.log("poseNet is initiallized");
}

function gotPoses(results)
{
if (results.length>0){
console.log(results);
scoreleftwrist=results[0].pose.keypoints[9].score;
console.log("scoreleftwrist="+scoreleftwrist);
rightWristX=results[0].pose.rightWrist.X;
rightWristy=results[0].pose.rightWrist.Y;
console.log("rightWristX="+rightWristX+"rightWristY="+rightWristY);
leftWristX=results[0].pose.leftWrist.X;
leftWristy=results[0].pose.leftWrist.Y;
console.log("leftWristX="+leftWristX+"leftWristY="+leftWristY);
}
}