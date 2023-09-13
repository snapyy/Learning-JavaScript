const canvas=document.getElementById('canvas1');
const ctx=canvas.getContext('2d');
canvas.width=window.innerWidth;
canvas.height=window.innerHeight;

// Creating new canvas for collision dectection through color.
const collisionCanvas=document.getElementById('collisionCanvas');
const collisionCtx=collisionCanvas.getContext('2d');
collisionCanvas.width=window.innerWidth;
collisionCanvas.height=window.innerHeight;

// In the below line , creating a variable which will hold the value of score.
let score =0;
let gameOver=false;
// In the below line , we are globally setting the size of text on canvas .
ctx.font='50px Impact';
// In the below line , a variable that will accumulate millisecond values between frames until it reaches my interval value and trigger next frame.
let timeToNextRaven=0;
let ravenInterval=500;
// In the below line , a variable which will hold the value of  timestamp from the previous loop the initial value will be 0;
let lastTime=0;
// In the below line , it will hold all the objects of all the ravens
let ravens=[]; 

class Raven{
    // In the below constructor will create one blank new object every time it is called and it will assign it properties and values as we define them within constructor.
    constructor(){
        this.spriteWidth=271;
        this.spriteHeight=194;
        // In the below , we are giving random size to raven  for e.g every raven is not in the same size. 
        this.sizeModifier=Math.random()*0.6+0.4; 
        this.width=this.spriteWidth*this.sizeModifier;
        this.height=this.spriteHeight*this.sizeModifier;
        this.x=canvas.width;
        //vertical y coordinate will be a random number between 0 and canvas height since rectangles on canvas are drawn from top left corner going right and down i don't want any ravens to be partially hidden below the bottom edge of 
        this.y=Math.random()*(canvas.height-this.height); 
        // In the below line , x will be horizontal speed basically it will be a random number between 3 and 8.
        this.directionX=Math.random()*5+3;
        // In the below line , ravens will bounce up and down as they fly so the initial vertical speed i call direction y for example will be a random between minus 2.5 and plus 2.5 --> Minus values will move upwards and plus values will move the raven downwards.
        this.directionY=Math.random()*5-2.5;
        // In the below line , this variable will used to delete the object after creating it and use it , because if we don't delete object then it is going to use more computational power and cannot run on every device.
        this.markedForDeletion=false;
        this.image=new Image();
        this.image.src='/images/raven.png'; // Fetching the image for raven.
        this.frame=0; // Starting frame of raven
        this.maxFrame=4; // Maximum frame for raven  , from upper line to this raven's animation will be done.
        this.timeSinceFlap=0;
        this.flapInterval=Math.random()*50+50; // Randomizing the flapinterval for every raven
        // In the below line , all the three colors has 0-255 range , in which we are randomizing and creating some colors for ravens. (red,green,blue)
        this.randomColors=[Math.floor(Math.random()*255),Math.floor(Math.random()*255),Math.floor(Math.random()*255)];
        //In the below line , we are concatenating the colors rgba color declarting using the upper values.indexing them in array.
        this.color='rgb(' +this.randomColors[0]+','+ this.randomColors[1]+ ',' +this.randomColors[2]+ ')';
        this.hasTrail=Math.random()>0.5;
    }
    //Update method will move the raven around and adjust any values that needs to adjusted before we draw the next frame
    update(deltatime){
        // In the below if statement , i want them to move all the way across the screen and when they touch bottom or top edge of game area i want them to kind of bounce and revers their vertical movement to the opposite direction.
        if(this.y<0 || this.y>canvas.height-this.height){
            this.directionY=this.directionY*-1; //setting opposite direction.   
        }
        this.x-=this.directionX;
        this.y+=this.directionY; // Due to this , there will be vertical moments in the raven.
        if(this.x<0-this.width)this.markedForDeletion=true;
        this.timeSinceFlap+=deltatime;
        if(this.timeSinceFlap>this.flapInterval){
            if(this.frame>this.maxFrame)this.frame=0;
            else this.frame++;
            this.timeSinceFlap=0;
            if(this.hasTrail){
                for(let i=0;i<5;i++){
                    particles.push(new Particle(this.x,this.y,this.width,this.color)); 
                }
            }
    
        }
        if(this.x<0-this.width) gameOver=true;
    }
    //Draw method will take these updated values from update method and any drawing code we put here will represent single raven object visually .
    draw(){
        collisionCtx.fillStyle=this.color;
        collisionCtx.fillRect(this.x,this.y,this.width,this.height);
        ctx.drawImage(this.image,this.frame*this.spriteWidth,0,this.spriteWidth,this.spriteHeight,this.x,this.y,this.width,this.height);
    }
}
let explosions=[];
class Explosions{
    constructor(x,y,size){
        this.image =new Image();
        this.image.src='/images/boom.png';
        this.spriteWidth=200;
        this.spriteHeight=179;
        this.size=size;
        this.x=x;
        this.y=x;   
        this.sound=new Audio();
        this.sound.src='/music/boom.wav';
        this.timeSinceLastFrame=0;
        this.frameInterval=200;
        this.markedForDeletion=false;
    }
    update(deltatime){
        if(this.frame===0) this.sound.play();
        this.timeSinceLastFrame+=deltatime;
        if(this.timeSinceLastFrame>this.frameInterval){
            this.frame++;
            this.timeSinceLastFrame=0;
            if(this.frame>5)this.markedForDeletion=true;
        }
        
    }
    draw(){
        ctx.drawImage(this.image,this.frame*this.spriteWidth,this.spriteHeight,0,this.spriteWidth,this.spriteHeight,this.x,this.y-this.size/4,this.size,this.size);
    }
}
let particles=[];
class Particle{
    constructor(x,y,size,color){
        this.size=size;
        this.x=x+this.size/2+Math.random()*50-25;
        this.y=y+this.size/3+Math.random()*50-25    ;
        this.radius=Math.random()*this.size/10;
        this.maxRadius=Math.random()*20+35;  
        this.markedForDeletion=false;
        this.speedX=Math.random()*1+0.5;
        this.color=color;
    }
    update(){
            this.x+=this.speedX;
            this.radius+=0.3;
            if(this.radius>this.maxRadius-5) this.markedForDeletion=true;
    }
    draw(){
        ctx.save();
        ctx.globalAlpha=1-this.radius/this.maxRadius;
        ctx.beginPath();
        ctx.fillStyle=this.color;
        ctx.arc(this.x,this.y,this.radius,0,Math.PI*2);
        ctx.fill();
        ctx.restore();
    }
}
function drawScore(){
    // In the below line , are trying to show the score , with some highlight black background by setting it color and changes its coordinates. and we drawing all these things on canvas.
    ctx.fillStyle='black';
    ctx.fillText('Score: '+score,50,75);
    ctx.fillStyle='white'
    ctx.fillText('Score: '+score,55,80)
}
function drawGameOver(){
    ctx.textAlign='center';
    ctx.fillStyle='black';
    ctx.fillText('GAME OVER, Your score is ' +score,canvas.width/2,canvas.height/2);

// In the below line , we are giving shadow to our upper text.

ctx.textAlign='center';
    ctx.fillStyle='white';
    ctx.fillText('GAME OVER, Your score is ' +score,canvas.width/2+5,canvas.height/2+5);

}
// In the below function , it contains information about the click event happened for example x and y coordinate in relation to viewport.i get coorindates of my click whenever i click somewhere in the game area 
window.addEventListener('click',function(e){
// console.log(e.x,e.y);
// In the below line we are decting what color is the pixel we are clicking on  . getImageData is built method simply scans area canvas and returns an array like object called uint8 clamped array.it's a simple data structure full of unassigned 8-bit integers, its clamped which means it can contain only integers ,whole numbers between certain value range specifically between 0 to 255 value range
const detectPixelColor=collisionCtx.getImageData(e.x,e.y,1,1);  // we need coordinate of one pixel on which we click , that's why 1,1.
console.log(detectPixelColor); // mouse click and it gives us auto-generated object contain three properties data property which is an array currently it has four numbers inside and within height of scanned area in our case one pixel . The way color data is structured is that each four elements in this data array represent one pixel specifically its red ,green , blue and alpha value . if you use css you know that any color can be created combining a certain amount of red , green and blue the only difference between css rgba declation and the upper thing is that in css opacity is a value between 0 and 1 . here in the upper thing opactiy alpha is also a number between 0 and 255 , 0 is transparent , 255 is fully visible .
const pc=detectPixelColor.data;
ravens.forEach(object=>{
    if(object.randomColors[0]===pc[0] && object.randomColors[1]===pc[1] && object.randomColors[2]===pc[2]){
        //collisionDetected
        object.markedForDeletion=true;
        score++;
        explosions.push(new Explosions(object.x,object.y,object.width));
        console.log(explosions)
    }
});
});

// In the below line , it creates animation loop and it will take arguement i call timestamp this will be a numeric value in milliseconds . so one second will be number 1000 , this functions works any code inside this animation function will run over and over updating and drawing our game frame by frame. 

// Instead of having one raven i want to create a new raven periodically and i want to make sure that periodically event is triggered at the same interval on very slow old computers and on brand new gaming super pcs to make sure the timings in my game are consistent and based on time and milliseconds rather than on the power of my computer and its ability to serve frames at a certain speed i will use timestamps i will compare how many milliseconds elapsed since the last loop and only when we reach certain amount of time between frames only then we will draw next frame.
function animate(timestamp){
    // In the below line , between every frame is clear old paint all the drawings from the previous frame , so clear rectangle and i want to clear the entire canvas from coordinates 0,0, to canvas width and canvas height. 
    ctx.clearRect(0,0,canvas.width,canvas.height);
    collisionCtx.clearRect(0,0,canvas.width,canvas.height);

    // In the below line code , inside this function animation loop , i will calculate delta time this will be a value in a milliseconds between timestamp from this loop amd saved timestamp value from the previous loop
    let deltatime=timestamp-lastTime;
    //In the below line , after calculating delta time i will assign last time variable from global declartion of variable lastTime to the new timeStamp passed here in this loop.so that we have that value ready to compare in the next loop  
    lastTime=timestamp;
    timeToNextRaven+=deltatime;
    // In the below line , when time to next raven reaches this raven interval then i will pass it new raven which will trigger my raven class constructor create one new raven object and it will push it inside raven's array, when that happens i set time to next raven back to zero so it can start counting again from the beginning .
if(timeToNextRaven>ravenInterval){
    ravens.push(new Raven());
    timeToNextRaven=0; 
    // In the below function , we are sorting the array by its size .this will compare every element in the array and sort them in ascending or descending order.ascending order in default , we are using this order in our case.
    ravens.sort(function(a,b){
        return a.width-b.width;
    });
};
drawScore();
// In the below line , we are creating array literal  , using [] square brackets in that ... are called spread operator , now we are spreading my ravens array inside this new quick array , spread operator allows us to spread iterable such as this ravens array to be expanded into another array 
[...particles,...ravens,... explosions].forEach(object=>object.update(deltatime)); // For each is used to iterate all the object, so this line of code will cycle through the entire ravens array and it will trigger update method on all of them.since we are inside animation loop this will happen over and over for each animation frame.
[...particles,...ravens,...explosions].forEach(object=>object.draw()); //same as above

// In the below line , we are deleting raven object we created after using it and replace it with content of the same ravens array but only with those objects that have marked for deletion property set to false , *excalmation mark means false*
ravens=ravens.filter(object=>!object.markedForDeletion); 
explosions=explosions.filter(object=>!object.markedForDeletion);    
particles=particles.filter(object=>!object.markedForDeletion);
// In the below line , if the game is not over then requestAnimationFrame will that will call animate again create an endless animation loop.
   if(!gameOver) requestAnimationFrame(animate);
   else drawGameOver();
}

animate(0);

