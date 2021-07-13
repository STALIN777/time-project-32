const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;
var Time;


var bg , bgimg;

function preload()
{
  getBackgroundImg();
}

function setup()
{
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw()
{

  if(bgimg!=null)
  {
    background(bgimg);

  }
  
//text("Time","time")
    
  Engine.update(engine);

    getBackgroundImg();


}

async function getBackgroundImg()
{

    // write code to fetch time from API
    var reply = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata")

    //change the data in JSON format
    var relpy_JSON = await reply.json();

    // write code slice the datetime
    var datetime =relpy_JSON.datetime;

    var time = datetime.slice(11,13)   
    console.log(time); 

    // add conditions to change the background images from sunrise to sunset

    if(time>=04 && time<05)
    {
      bg ="sunrise1.png"
    }
   
    else if(time>=05 && time<06)
    {
      bg ="sunrise2.png"
    } 

    else if(time>=06 && time<07)
    {
      bg ="sunrise3.png"
    }

    else if(time>=07 && time<08)
    {
      bg ="sunrise4.png"
    }

    else if(time>=8 && time<10)
    {
      bg ="sunrise5.png"
    }

    else if(time>=10 && time<16)
    {
      bg ="sunrise6.png"
    }

    else if(time>=16 && time<17)
    {
      bg ="sunset7.png"
    }
     
    else if(time>=17 && time<18)
    {
      bg ="sunset9.png"
      // sunset8.png and sunset9.png are the same pics maam so added one of them
    }

    else if(time>=18 && time<19 )
    {
      bg ="sunset10.png"
    }

    else if(time>=19 && time<01)
     {
       bg ="sunset11.png"
     }
     
    else if(time>=01 && time<03)
    {
       bg ="sunset12.png"
    }

    //load the image in backgroundImg variable here
    bgimg = loadImage(bg);

}
