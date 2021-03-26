    const Engine = Matter.Engine;
    const World= Matter.World;
    const Bodies = Matter.Bodies;
    const Constraint = Matter.Constraint;

    var engine, world;

    var player;
    var playerAnimation;
    var playerJump;
    var playerAttack;
    var ground,groundImage;
    var heart, heart2 , heart3 , heartImage;
    var Enemey1Group;
    var Enemey2Group;
    var luckyBlockGroup;
    var fireballGroup;
    var lives = 2;
    var gameState ;

    function preload(){

    playerAnimation = loadAnimation("images/animated 1.png" , "images/animated 2.png" , "images/animated 3.png" , 
    "images/animated 4.png" , "images/animated 5.png" ,  "images/animated 6.png")
    playerJump = loadAnimation("images/jump1.png" , "images/jump2.png")
    playerAttack = loadAnimation("images/attack1.png" , "images/attack2.png");
    groundImage = loadImage("images/Background.jpg");
    heartImage = loadImage("images/heart.png");
    enemeyImage = loadImage("images/Enemy 3.gif"); 
    enemey2Image = loadImage("images/Enemy 2.gif");
    luckyblockImage = loadImage("images/Lucky block.png");
    fireballImage = loadImage("images/fire ball.png");
    gameoverImage = loadImage("images/Gameover.png");
    
    }

    function setup(){
        var canvas = createCanvas(700,800);
        
        engine = Engine.create();
        world = engine.world;

        ground = createSprite(1500,350,200,100);
        
        

        player = createSprite(90,600,50,50);
        player.addAnimation("running" , playerAnimation);
        player.addAnimation("jumping" , playerJump);
        player.scale = 1;
        player.setCollider("rectangle" , 0,0,70,70)
        player.debug = false;

        ground.addImage(groundImage);
        ground.scale = 1.5;
        ground.x = ground.width/2;

        invisibleGround = createSprite(300,630,1000000000000,10);
        invisibleGround.visible = false;
        invisibleGround.debug = false;

        heart = createSprite(75,120,50,50);
        heart.addImage(heartImage);
        heart.scale = 0.07;

        heart2 = createSprite(120,120,50,50);
        heart2.addImage(heartImage);
        heart2.scale = 0.07;

        heart3 = createSprite(165,120,50,50);
        heart3.addImage(heartImage);
        heart3.scale = 0.07;

        Enemey1Group = new Group();
        Enemey2Group = new Group();
        luckyBlockGroup = new Group();
        fireballGroup = new Group();
        
        }

    function draw(){
        background("lightblue");

        Engine.update(engine);
        ground.velocityX = -2;
     
     
     
     
     
     
        if (fireballGroup.isTouching(Enemey1Group)){

       Enemey1Group.destroyEach();
       fireballGroup.destroyEach();     

      }

      if (fireballGroup.isTouching(Enemey2Group)){

        Enemey2Group.destroyEach();
        fireballGroup.destroyEach();     
 
       }

       if (Enemey1Group.isTouching(player) || Enemey2Group.isTouching(player)){

        if (Enemey1Group.isTouching(player)){

        Enemey1Group.destroyEach();

        }

        if (Enemey2Group.isTouching(player)){

          Enemey2Group.destroyEach();
  
          }

          
       console.log(lives);
       if (lives === 2){
         heart3.visible = false;
         heart3.destroy();
         lives = lives-1;
       }
       else if (lives === 1){
       heart2.visible = false;
       heart2.destroy();
       lives = lives-1;
      }

      else if (lives === 0){
        heart.visible = false;
        heart.destroy();
        lives = lives-1;
        gameState = "end";
      }


       }

       if (player.isTouching(luckyBlockGroup)){

        player.collide(luckyBlockGroup);
        luckyBlockGroup.visible = false;
        
      }
   
     // Enemey2Group.setVelocityYEach(random(300,500));
        if(keyDown("space") & player.y >= 400){
       player.velocityY = -10;
       player.changeAnimation("jumping" , playerJump);
       }

       player.changeAnimation("running" , playerAnimation);
       
     player.velocityY = player.velocityY + 0.8;
     player.collide(invisibleGround);
       
        if(ground.x < 0){

      ground.x = ground.width/2;

        }

        if (keyDown("s")){
          shootFireball();
        }
       
        //console.log(player.y);

       
        
       
       
       
        if(player.y > 600){

       player.y = 600;
       player.collide(invisibleGround);

        }

        
      
        
        

       



    
    
       
        
        
        
       
       

        Enemey1();
        Enemey2();
        SpawnluckyBlock();
        

    drawSprites();
    if (gameState === "end"){

      //background (255);
      ground.velocityX = 0;
      player.destroy();
      Enemey1Group.setVelocityXEach(0);
      Enemey2Group.setVelocityXEach(0);
       gameOver = createSprite(350,200 , 50 , 50);
      gameOver.scale = 0.5;
      gameOver.addImage(gameoverImage);  
    }


    }


   