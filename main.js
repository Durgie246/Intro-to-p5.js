function preload()
{

}

function setup()
{
    canvas = createCanvas(  640, 480);
    canvas.position(110, 250);
    video = createCapture(VIDEO);
    video.hide();

}

function draw()
{
    image(video, 230, 150, 220, 200);
    fill(255, 0 ,0);
    stroke(255, 0 , 0);
    circle(0, 0, 100);
    circle(0,640, 100);
    circle(0, 480, 100);
    circle(480, 640, 100);

    fill(0, 128 ,0);
    stroke(0, 128 , 0);
    circle9(90, 420,460, 20);
    circle(90, 40 , 460,  20);
    circle(40, 90, 20, 300);
    circle(580, 90,20, 300);

}

function take_snapshot()
{
    save ("student_name.png");
}



