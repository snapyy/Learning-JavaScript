/** @type {HTMLCanvasElement}*/ // In this line ,this way i tell vs code this is a canvas project and it will suggest built-in html canvas methods for me.
const canvas=document.getElementById('canvas1');
const ctx=canvas.getContext('2d');
CANVAS_WIDTH=canvas.width=500;
CANVAS_HEIGHT=canvas.height=1000;
const numberOfEnemeies=100;
const enemeiesArray=[];

// Importing new images for enemys 
const enemyImage=new Image();
enemyImage.src='/enemies/enemy1.png'
let gameFrame=0;
this.flapSpeed=Math.floor(Math.random()*3+1);
// In the below class we are going to create all the enemys .
class Enemy{
    constructor(){
        this.x=Math.random()*canvas.width; // This line will create random x- axis coordinate when ever i create a new enemy it can apply.
        this.y=Math.random()*canvas.height; // This line will create random y- axis coordinate  same goes here . 
      
        this.speed=Math.random()*4-2; // Random number between minus 2 and plus 2 , because some of enemys have to go in the left side and some of enemys have to go in right side , for right there is normal number and for left there is negative number.
        this.spriteWidth=293; // width of one frame of enemy1 png .
        this.spriteHeight=155;// Height of one frame of enemy1 png.
        this.width=this.spriteWidth/2.5; // setting the size of enemys 
        this.height=this.spriteHeight/2.5; // setting the size of enemys
        this.frame=0;
    }
    // In the below line , this method will update coordindate of my objects it will handle position calculation and movement
    update(){
       this.x+=this.speed; // For every frame increase by one and also increase y by one.
       this.y+=this.speed;

       // aniamte sprites 
       if(gameFrame%this.flapSpeed===0){
        this.frame>4?this.frame=0 : this.frame++;
       }
        
    }
    // In the below line code , it will animate for every enemy easily without repeating any code . 
    draw(){
        // ctx.strokeRect(this.x,this.y,this.width,this.height); // This will make a box around enemys 
        // In the below line ,calling built in draw image canvas method use to animate our butt sprite sheet.
        // In the below line , in this version of draw image method we are passing it nine arguments in total the first is the image we want to draw , the next four represent the area we want to crop out from the source sprite sheet and the last four arguement determine where on canvas we want to place that cropped out frame onto.
        ctx.drawImage(enemyImage,this.frame*this.spriteWidth,0,this.spriteWidth,this.spriteHeight,this.x,this.y,this.width,this.height);
    }
};
// const enemy1=new Enemy(); // The new keyword will simply look at that class name in the above code it will enter its constructor ,it will create one new blank javaScript object and it will assign it values and properties based on a blueprint inside the constructor .

// In the below line, We are going to create lots enemeies using for loop. 
for(let i=0;i<numberOfEnemeies;i++){
enemeiesArray.push(new Enemy());
}

// In the below line here is another enemy
const enemy2=new Enemy();
function animate(){
    ctx.clearRect(0,0,CANVAS_WIDTH,CANVAS_HEIGHT); // Deleting old paint previous frames from canvas FROM THE COORDINATES 0,0 of canvas height and width.

    // We don't need this below code because we already created a update method in the Enemy class in the above.
    // Below code for enemy one
    // enemy1.x++; // In this line , we are increasing the element on x-axis horizontally.
    // enemy1.y++; // it is increasing in vertical position  by 1 for every frame.

    // Here i am calling the method instead of writing upper code lins for every enemy.
    // enemy1.update();

    // Instead of using below  which on the line number 46 ,we can draw it for every enemy. just by calling method draw().
    // enemy1.draw();
// Below code for enemy two
// enemy2.x+=0.5;
// enemy2.y+=0.5;
    // ctx.fillRect(enemy1.x,enemy1.y,enemy1.width,enemy1.height);  // Drawing the rectangle for enemy one
    // ctx.fillRect(enemy2.x,enemy2.y,enemy2.width,enemy2.height); // Drwaing the rectangle for enemy two

    // In the below line , we are going to apply draw() and update() method through for each loop for all enemys
    enemeiesArray.forEach(enemy=>{
        enemy.update();
        enemy.draw();
    });
    gameFrame++;
    requestAnimationFrame(animate); // By using this line , we are looping this function.
}
animate();
