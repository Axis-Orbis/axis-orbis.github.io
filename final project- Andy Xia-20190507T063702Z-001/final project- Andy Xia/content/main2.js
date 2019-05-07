"use strict";
//final project thing

//setup canvas and graphics context
let cnv = document.getElementById("myCanvas");
let ctx = cnv.getContext("2d");

//global variables
    let AKeyIsPressed = false;
    let DKeyIsPressed = false;
    let SKeyIsPressed = false;
    let WKeyIsPressed = false;
    let spawnEnemyOne = false;
    let SpaceKeyIsPressed = false; 
    let enemyOneIsAlive = true;
    let deleteEnemyOne = false;
    let randNum = Math.random();
    let randNum2 = Math.random();
    let randNum3 = Math.random();
    let randNum4 = Math.random();
    let enemySpawnRestrict = 600;
    
    let background = document.getElementById("backgroundImg");
    let playerImg = document.getElementById("playerImg");
    let enemyOne = document.getElementById("enemyOne");
    let projectile = document.getElementById("projectile"); 

 //start game
document.getElementById("btn").addEventListener("click", startGame);
function startGame(){
    //set canvas size
    cnv.width = 1024;
    cnv.height = 750;

    //set variables for players
    let enemyMoveSpeed = 5;
    let playerMoveSpeed = 8;
    let score = 0;
    AKeyIsPressed = false;
    DKeyIsPressed = false;
    SKeyIsPressed = false;
    WKeyIsPressed = false;
    let rectLimitX = cnv.width - 20;
    let rectLimitY = cnv.height - 22;
    
    //global variables for the square (use as crash detection)
    let rectX = (cnv.width /2)- 10;
    let rectY = cnv.height - 20;

    // let projectileX = rectX + 5;
    let projectileY = rectY - 20;
    
    // variables for the enemy    
    let enemyOneX = (randNum * 1024) ;
    let enemyOneY = (randNum * 600) ;
    let enemyMovementX = 1;
    let enemyMovementY = 1;

    //main loop 60 fps
requestAnimationFrame(loop);

function loop(){
    //draw a background
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, cnv.width, cnv.height);
    ctx.drawImage(background, 0,0 );
   
//draw player image
    ctx.drawImage(playerImg,rectX, rectY);
    document.getElementById("score").innerHTML = score;
    // randNum = Math.random();
//enemy movement and spawning
    if (enemyOneIsAlive){
    ctx.drawImage(enemyOne, enemyOneX, enemyOneY);
    deleteEnemyOne = false;
      if(enemyOneX<= 0){
        enemyMovementX = 1;
    }else if (enemyOneX>=874){
        enemyMovementX = -1;
    }
    if(enemyOneY<=0 && enemyMovementY!=0){
        enemyMovementY = 1;
    }else if(enemyOneY>=600 && enemyMovementY!=0){
        enemyMovementY = -1;
    }   
        enemyOneX= enemyOneX + enemyMoveSpeed*enemyMovementX;
        enemyOneY= enemyOneY + enemyMoveSpeed*enemyMovementY;
    }  
     if (deleteEnemyOne){
        enemyOneIsAlive = false;
        enemyOneX=1024;
        enemyOneY=750;
    }
     if (spawnEnemyOne){ 
        enemyOneIsAlive = true;
        spawnEnemyOne = false;
        
        enemyOneX = (randNum * 1024);
        enemyOneY = (randNum2 * 600);
        randNum = Math.random();
        randNum2 = Math.random();
    }
  
if(enemyOneX>= 874 && enemyOneIsAlive){
    enemyOneX = 874;
}else if (enemyOneY>= enemySpawnRestrict && enemyOneIsAlive){
    enemyOneY = enemySpawnRestrict;
}
//player movement    
if (AKeyIsPressed && rectX > 0){

rectX-=playerMoveSpeed;  

}
 if(DKeyIsPressed && rectX < rectLimitX){
    rectX+=playerMoveSpeed;
}
 if(WKeyIsPressed && rectY > 0){
rectY-= playerMoveSpeed;

}
 if(SKeyIsPressed && rectY < rectLimitY){
rectY+=playerMoveSpeed;
}
if (rectY<=enemyOneY + 74 && rectY>=enemyOneY && rectX>=enemyOneX && rectX <=enemyOneX + 150){
    score-= 100;
    playerMoveSpeed-=0.5;
    enemyMoveSpeed--;
    rectX = (cnv.width /2)- 10;
    rectY = cnv.height - 20;
}

//draw a moving projectile
if(SpaceKeyIsPressed){
ctx.drawImage(projectile, rectX + 5, projectileY);
projectileY-=playerMoveSpeed + 2;

} else if(SpaceKeyIsPressed==false){
    projectileY = rectY;
}

if (projectileY<=0){
    SpaceKeyIsPressed=false;
    projectileY=rectY -30;

}else if (projectileY<=enemyOneY + 74 && projectileY>=enemyOneY && rectX>=enemyOneX && rectX <=enemyOneX + 150 && SpaceKeyIsPressed){
    SpaceKeyIsPressed = false;
    enemyOneIsAlive = false;
    projectileY=rectY-20;
    deleteEnemyOne = true;
    spawnEnemyOne = true;
    score+= 100;
    randNum3=Math.random();
    randNum4=Math.random();
    if (randNum3<=0.5){
        enemyMovementX = -1;
        }else{enemyMovementX = 1;}
        if(randNum4<=(1/3)){
        enemyMovementY = -1;
        }else if(randNum4<(2/3)){
        enemyMovementY = 0;
        }else{
        enemyMovementY = 1;
        }
        enemyMoveSpeed++;
        playerMoveSpeed+=0.5;
    }
//score and movespeed
if (score < -500){
    alert("Game Over!");
    score=0;
    game=false;}

if(enemyMoveSpeed>=70){
    enemyMoveSpeed=70;}

if (playerMoveSpeed>=30){
    playerMoveSpeed=30;}

    requestAnimationFrame(loop);}}

//event stuff for rectX
document.addEventListener("keydown", keydownHandlerPosX)
document.addEventListener("keyup", keyupHandlerPosX)
document.addEventListener("keydown", keydownHandlerNegX)
document.addEventListener("keyup", keyupHandlerNegX)
//event stuff for rectY
document.addEventListener("keydown", keydownHandlerPosY)
document.addEventListener("keyup", keyupHandlerPosY)
document.addEventListener("keydown", keydownHandlerNegY)
document.addEventListener("keyup", keyupHandlerNegY)

//detect key input for player movement(X-axis)
function keydownHandlerPosX(){
    console.log(event.code);
    if (event.keyCode =="65") {
        AKeyIsPressed = true;
    }}   
function keyupHandlerPosX(event) {
    if (event.keyCode =="65") {
        AKeyIsPressed = false;
    }
}function keydownHandlerNegX(){
    console.log(event.code);
    if (event.keyCode =="68") {
        DKeyIsPressed = true;
    }}   
function keyupHandlerNegX(event) {
    if (event.keyCode =="68") {
        DKeyIsPressed = false;
    }}

//detect key input for player movement(X-axis)
function keydownHandlerPosY(){
    console.log(event.code);
    if (event.keyCode =="87") {
        WKeyIsPressed = true;
    }}   
function keyupHandlerPosY(event) {
    if (event.keyCode =="87") {
        WKeyIsPressed = false;
    }
}function keydownHandlerNegY(){
    console.log(event.code);
    if (event.keyCode =="83") { 
        SKeyIsPressed = true;
    }}   
function keyupHandlerNegY(event) {
    if (event.keyCode =="83") {
        SKeyIsPressed = false;
    }}

//projectile things WIP still ned to find, draw, and add animation to an image
document.addEventListener("keydown", keydownHandlerProjectile);

function keydownHandlerProjectile(){
if (event.keyCode =="32"){
 SpaceKeyIsPressed = true;
}}