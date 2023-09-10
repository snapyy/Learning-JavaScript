const canvas=document.getElementById('canvas1');
const ctx=canvas.getContext('2d');
canvas.width=500;
canvas.height=700;
const explosions =[];
let canvasPosition=canvas.getBoundingClientRect(); // Built in javaScript method it returns an object provided information about the size of an element  and its position relative to the viewport.
// console.log(canvasPosition); you can see this in the console.
class Explosion{
    constructor(x,y){
        // Event happend when two things are collide or mouse click event.
        // this.x=x;
        // this.y=y;
        this.spriteWidth=200; // A single frame in my sprite sheet i calculated by taking width of my sprite sheet and i divided by the number of frames. our sprite sheet is 1000 pixel  and has 5 frames , if we divided 1000/5 then each frame width will be 200px.
        this.spriteHeight=179;
        this.width=this.spriteWidth*0.7;
        this.height=this.spriteHeight*0.7;
        // In the below two lines fixing the position of animation vertically and horizontally.
         this.x=x;
        this.y=y;
        this.image=new Image();
        this.image.src='/images/boom.png';
        this.frame=0;
        this.timer=0;
        this.angle=Math.random()*6.2; // radience of 360.
        this.sound= new Audio();
        this.sound.src='/music/boom.wav';
    }
    update(){
        if(this.frame===0)this.sound.play();
        this.timer++; 
        if(this.timer%10===0){
        this.frame++; // This will increase frame horizontally to create animations.
        };  
    }
    draw(){
        ctx.save(); // saving the current state of canvas to make sure the following changes affect only one day call
        ctx.translate(this.x,this.y); // Rotating animation in a center of cursor.
        ctx.rotate(this.angle); // each of them will rotated by a different random anglue value which is define in a Explosions class.
        ctx.drawImage(this.image,this.spriteWidth*this.frame,0,this.spriteWidth,this.spriteHeight,0-this.width/2,0-this.height/2,this.width,this.height); 
        ctx.restore();  //restore canvas context to the original save point to make sure this translate and rotate only affects one draw call of one object.
    }
}
window.addEventListener('click',function(e){
    
    // console.log(e); // when ever i click on the screen it will display coordinate of the particular part.
    // ctx.fillStyle='white';
// ctx.fillRect(e.x-canvasPosition.left-25,e.x-canvasPosition.top-25 ,50,50); // e.x and e.y is built function , which will give you the coordinates of click event.  
// In the upper line we are trying to spot the click event exactly using canvasPosition variable , which is derived from built in function used to know position of an object in viewport relative.


// Drawing animated cartoon explosions now 


// console.log(explosions); // This line will show in console that our program is creating a object for animations and delete also due to the code in the below function in that there is if statement .
createAnimation(e);
});

// Below line will work when cursor is moving on the screen .
// window.addEventListener('mousemove',function(e){
// createAnimation(e)
// });
function createAnimation(e){
    let positionX=e.x-canvasPosition.left;
    let positionY=e.y-canvasPosition.top;
    explosions.push(new Explosion(positionX,positionY));
// console.log(explosions); // This line will show in console that our program is creating a object for animations and delete also due to the code in the below function in that there is if statement .
};

function animate(){
    ctx.clearRect(0,0,canvas.width,canvas.height)
    for(let i=0;i<explosions.length;i++){
        explosions[i].update();
        explosions[i].draw();
        // On every click we are creating a object , so we have to remove it after animation is done , 
        if(explosions[i].frame>5){ // explosions start from 0 index and we have 5 frames in a spritesheet so after reaching that 
            explosions.splice(i,1); // we use splice method just wants index of one object we want to remove from array then we use this way. 
            i--; // To make sure the next object in the array is correctly updated and animated after we removed its neighbopr we need to adjust index -1
        }
    }
    requestAnimationFrame(animate);
};
animate();
