// music maker thing
"use strict";
//canvas setup
let cnv = document.getElementById("myCanvas1");
let ctx = cnv.getContext("2d");
cnv.width = 426;
cnv.height = 240;


//note, still need to add stuff for the clap, snare, tom, and the tink


//varaibles for the visualiser
let color = "white";
let sizeY = 10; 
let posX = 38;
let posY = cnv.height - sizeY - 5 ;


let background = document.getElementById("backgroundImg");
let do1 =0;
let re1 =0;
let mi1 =0;
let fa1 =0;
let so1 =0;
let clap1 =0;
let snare1 =0;
let tom1 =0;
let tink1 =0;

//differnt types of sounds
let baseSound=0;
let mediumSound=0;
let highSound=0;

document.getElementById("btn").addEventListener("click", changeColor);
function changeColor(){
   color= document.getElementById("color").value;
}



requestAnimationFrame(loop);
 function loop(){
//draw a background
// ctx.fillStyle = "white";
// ctx.fillRect(0, 0, cnv.width, cnv.height);
  //draw a background
  
  ctx.fillRect(0, 0, cnv.width, cnv.height);
  ctx.drawImage(background, 0,0 );

//audio visualiser
ctx.fillStyle=color;
    ctx.fillRect(posX, posY - 2*baseSound, 20, sizeY + 2*baseSound);
    ctx.fillRect(posX + 30, posY - 1.75*baseSound, 20, sizeY + 1.75*baseSound);
    ctx.fillRect(posX + 60, posY - 1.5*baseSound -  0.25*mediumSound, 20, sizeY + 1.5*baseSound + 0.25*mediumSound);
    ctx.fillRect(posX + 90, posY - 1.25*baseSound -  0.75*mediumSound, 20, sizeY + 1.25*baseSound +  0.75*mediumSound);
    ctx.fillRect(posX + 120, posY - baseSound-0.25*highSound - 1.25*mediumSound, 20, sizeY + baseSound + 0.25*highSound + 1.25*mediumSound);
    ctx.fillRect(posX + 150, posY - 0.75*baseSound - 0.5*highSound - 1.75*mediumSound, 20, sizeY  + 0.75*baseSound + 0.5*highSound + 1.75*mediumSound);
    ctx.fillRect(posX + 180, posY - 0.5*baseSound - 0.75*highSound - 1.75*mediumSound, 20, sizeY + 0.5*baseSound+ 0.75*highSound + 1.75*mediumSound);
    ctx.fillRect(posX + 210, posY - 0.25*baseSound - highSound -  1.25*mediumSound, 20, sizeY + 0.25*baseSound + highSound +  1.25*mediumSound);
    ctx.fillRect(posX + 240, posY - 1.25*highSound - 0.75*mediumSound, 20, sizeY+ 1.25*highSound + 0.75*mediumSound);
    ctx.fillRect(posX + 270, posY - 1.5*highSound - 0.25*mediumSound, 20, sizeY+ 1.5*highSound +  0.25*mediumSound);
    ctx.fillRect(posX + 300, posY - 1.75*highSound, 20, sizeY+ 1.75*highSound);
    ctx.fillRect(posX + 330, posY - 2*highSound, 20, sizeY + 2*highSound);





    baseSound = do1 + tom1;
    mediumSound = do1 + 2*re1 + 2*mi1 + 2*fa1+ so1;
    highSound = fa1 + 2*so1; 

    if (baseSound>=70){
        baseSound=70;
    } if (mediumSound>=70){
        mediumSound=70;
    }  if (highSound>=70){
        highSound=70;
    }

    requestAnimationFrame(loop);
 }




//listen to key elements on the page

document.addEventListener("keydown", playSound);
document.addEventListener("keyup", keyup);
// Event Function
function playSound(event){
    console.log(event.keyCode);

    if (event.keyCode == 65) {//a
        //play a-clap
        let audio = document.getElementById("do");
        //resets the audio to the beginning of the audio
        audio.currentTime = 0;
        audio.play();
        document.getElementById("A").classList.add("playing");
        do1+=4;
    }else

    if (event.keyCode == 83) {//s
        //play s-hihat
        let audio = document.getElementById("re");
        audio.currentTime = 0;
        audio.play();
        document.getElementById("S").classList.add("playing");
        re1+=4;
    }else

    if (event.keyCode == 68) {//d
        //play d-kick
        let audio = document.getElementById("mi");
        audio.currentTime = 0;
        audio.play();
        document.getElementById("D").classList.add("playing");
        mi1+=4;
    }else

    if (event.keyCode == 70) {//f
        //play f-openhat
        let audio = document.getElementById("fa");
        audio.currentTime = 0;
        audio.play();
        document.getElementById("F").classList.add("playing");
        fa1+=4;
    } else

    if (event.keyCode == 86) {//v
        //play g-boom
        let audio = document.getElementById("so");
        audio.currentTime = 0;
        audio.play();
        document.getElementById("V").classList.add("playing");
        so1+=4;
    }else

    if (event.keyCode == 72) {//h
        //play h-ride
        let audio = document.getElementById("clap");
        audio.currentTime = 0;
        audio.play();
        document.getElementById("H").classList.add("playing");
        mediumSound+=7;
    } else

    if (event.keyCode == 74) {//j
        //play j-snare
        let audio = document.getElementById("kick");
        audio.currentTime = 0;
        audio.play();
        document.getElementById("J").classList.add("playing");
        highSound+=10;
    } else

    if (event.keyCode == 75) {//k
        //play k-tom
        let audio = document.getElementById("boom");
        audio.currentTime = 0;
        audio.play();
        document.getElementById("K").classList.add("playing");
        tom1+=5;
    } else

    if (event.keyCode == 76) {//l
        //play l-tink
        let audio = document.getElementById("tink");
        audio.currentTime = 0;
        audio.play();
        document.getElementById("L").classList.add("playing");
        mediumSound+=10;
        highSound+=7;
    }

  
   
}
function keyup(event){
    console.log(event.keyCode);

    if (event.keyCode == 65) {//a
       do1=0;
        document.getElementById("A").classList.remove("playing");
    }else

    if (event.keyCode == 83) {//s
        re1=0;
        document.getElementById("S").classList.remove("playing");
    }else

    if (event.keyCode == 68) {//d
       mi1=0;
        document.getElementById("D").classList.remove("playing");
    }else

    if (event.keyCode == 70) {//f
        fa1=0;
        
        document.getElementById("F").classList.remove("playing");
    } else

    if (event.keyCode == 86) {//v
       so1=0;
        document.getElementById("V").classList.remove("playing");
    }else

    if (event.keyCode == 72) {//h
      
        document.getElementById("H").classList.remove("playing");
    } else

    if (event.keyCode == 74) {//j
        
        document.getElementById("J").classList.remove("playing");
    } else

    if (event.keyCode == 75) {//k
        document.getElementById("K").classList.remove("playing");
        tom1=0;
    } else

    if (event.keyCode == 76) {//l 
        document.getElementById("L").classList.remove("playing");
        
    }
    baseSound = do1 + tom1;
    mediumSound = do1 + 2*re1 + 2*mi1 + 2*fa1+ so1;
    highSound = fa1 + 2*so1; 
   
}