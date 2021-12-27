    nosex = 0
    nosey = 0
 var nose_image 





function preload(){
nose_image  = loadImage("clownnose.png")

}

function setup(){
 canvas = createCanvas(500,500)
 canvas.center()
 video = createCapture(VIDEO)
 video.size(500,500)
 video.hide()

 poseNet = ml5.poseNet(video,modelLoaded)
poseNet.on('pose',gotposes)
}

function modelLoaded() {
    console.log("model is working")
}

function gotposes(results){
if (results.length >  0 ){
    console.log(results)
    nosex = results[0].pose.nose.x
    nosey = results[0].pose.nose.y
    console.log("nose x = " + nosex )
    console.log("nose y = " + nosey)
}
}


function draw(){
 
    image(video,0,0,500,500)
    image(nose_image,nosex-25,nosey-25,50,50)
}

function takeSnapshot(){
    save("filter_image.png")
}