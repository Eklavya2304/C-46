function Enemey1 (){
if(frameCount % 268 === 0){
var enemey1 = createSprite(1000,580,10,10);
enemey1.addImage(enemeyImage);
enemey1.scale = 0.7;
enemey1.velocityX = -3;
Enemey1Group.add(enemey1);
}


}


function Enemey2(){

if(frameCount % 500 === 0){

var enemey2 = createSprite(1000,330,10,10);
enemey2.addImage(enemey2Image);
enemey2.scale = 0.6;
enemey2.velocityX = -3;
enemey2.y = random(300 , 500);
Enemey2Group.add(enemey2) 

}


}


function SpawnluckyBlock(){

if(frameCount % 2000 === 0){    
var luckyblock = createSprite(700,340,10,10);
luckyblock.addImage(luckyblockImage);
luckyblock.scale = 0.1
luckyblock.velocityX = -6;
luckyBlockGroup.add(luckyblock);

}

}

function shootFireball(){

var fireball = createSprite(100,100,10,10);
fireball.addImage(fireballImage);
fireball.scale = 0.2;
fireball.velocityX = +4 ; 
fireball.x = player.x;
fireball.y = player.y;
fireballGroup.add(fireball);

}


