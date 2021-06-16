video='';

function preload(){
    video=createVideo("video.mp4");;
    video.hide()
}
function setup(){
    canvas=createCanvas(380,380);
    canvas.center();
}
function draw(){
    image(video,0,0,380,380);
}
function start(){
    objectDetector=ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML="Detecting";
}
function modelLoaded(){
    console.log("MODEL LOADED");
    status=true;
    video.loop();
    video.speed(1);
    video.volume(3);
}