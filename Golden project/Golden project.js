    const Engine = Matter.Engine;
    const World= Matter.World;
    const Bodies = Matter.Bodies;
    const Constraint = Matter.Constraint;

    var engine, world;

    var player;
    var playerAnimation;
    var ground,groundImage;

    function preload(){

    playerAnimation = loadAnimation("images/animated 1.png" , "images/animated 2.png" , "images/animated 3.png" , 
    "images/animated 4.png" , "images/animated 5.png" ,  "images/animated 6.png")
    groundImage = loadImage("images/Background.jpg");
    }

    function setup(){
        var canvas = createCanvas(1000,800);
        engine = Engine.create();
        world = engine.world;

        ground = createSprite(500,400,200,100);
        ground.addImage(groundImage);
        ground.velocityX = -3;

        player = createSprite(200,200,50,50);
        player.addAnimation("running" , playerAnimation);
        player.scale = 1.5;
        }

    function draw(){
        background(255);
        Engine.update(engine);
        //strokeWeight(4);

        if(ground.x < 485){

      ground.x = ground.width/2;

        }

        console.log(ground.x);

    drawSprites();

    }



