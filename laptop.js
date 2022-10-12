Status="";
laptop="";

function preload()
{
    laptop = loadImage("laptop.jpg");
}

function setup()
{
    canvas = createCanvas(870, 400);
    canvas.position(460, 300);
    object_detector = ml5.objectDetector("cocossd", modelLoaded);
    document.getElementById("status").innerHTML = "Status: Detecting Objects";
}

function modelLoaded()
{
    console.log("Model Loaded Successfully!");
    Status = true;
    object_detector.detect(laptop, gotResults);
}

function gotResults(results, error)
{
    if(error)
    {
        console.error(error);
    }
    console.log(results);
}

function draw()
{
    image(laptop, 0, 0, 500, 400);
}