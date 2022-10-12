Status="";
AC="";
objects = [];

function preload()
{
    AC = loadImage("AC.jpg");
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
    object_detector.detect(AC, gotResults);
}

function gotResults(results, error)
{
    if(error)
    {
        console.error(error);
    }
    console.log(results);
    objects = results;
}

function draw()
{
    image(AC, 0, 0, 500, 400);
    if(Status != "")
    {
        for(i=0; i < objects.length; i++)
        {
            document.getElementById("status").innerHTML = "Status: Detecting Objects";

            fill("#A020F0");
            percent = floor(objects[i].confidence * 100);
            text(objects[i].label + " " + percent + "%" + objects[i].x - 800, objects[i].y - 175);
            noFill();
            stroke("#A020F0");
            rect(objects[i].x - 800, objects[i].y - 175, objects[i].width, objects[i].height);
        }
    }
}

function back()
{
    window.location("index.html");
}