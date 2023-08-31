/** 
 *  ############################### Trignometry $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
 * 
 * --> is a branch of matematics that studies relationships between side lengths and angles of triangles we use it to create wavy and circular movement in our javaScript animations 
 * 
 * --> We will have a look at math.sine and math.cosine built in javaScript methods sine is trigonometric function of an angle defined in a context of a right triangle all we need to know for now is that market sign returns the sign of a number we pass to it that number represents angle value in radians and it returns numeric value between -1 and plus 1 . so this input angle value it takes if i put it inside animation loop and slowly start increasing it over time by very small amount when i pass this angle value to math.sine it will return series of values that endlessly cycles between -1 and plus 1 making it easy for us to convert these values into wavy movement so called sine wave .
 */



/** @type {HTMLCanvasElement}*/ // In this line ,this way i tell vs code this is a canvas project and it will suggest built-in html canvas methods for me.
const canvas=document.getElementById('canvas1');
const ctx=canvas.getContext('2d');
CANVAS_WIDTH=canvas.width=500;
CANVAS_HEIGHT=canvas.height=1000;
const numberOfEnemeies=20;
const enemeiesArray=[];

// Importing new images for enemys 
// const enemyImage=new Image();
// enemyImage.src='/enemies/enemy1.png'
let gameFrame=0;

// In the below class we are going to create all the enemys .
class Enemy{
    constructor(){
        this.image=new Image();
        this.image.src='/enemies/enemy2.png';
        this.speed=Math.random()*4+1; // Random number between minus 2 and plus 2 , because some of enemys have to go in the left side and some of enemys have to go in right side , for right there is normal number and for left there is negative number.
        this.spriteWidth=266; // width of one frame of enemy1 png .
        this.spriteHeight=188;// Height of one frame of enemy1 png.
        this.width=this.spriteWidth/2.5; // setting the size of enemys 
        this.height=this.spriteHeight/2.5; // setting the size of enemys
        this.x=Math.random()*(canvas.width-this.width); // By this line of code , coordinates will be in 100% within the canvas .this will apply horizontally.
        this.y=Math.random()*(canvas.height-this.height); // Same goes for this as above but it will apply on vertically. 
      
        this.frame=0; 
        this.flapSpeed=Math.floor(Math.random()*3+1);
        this.angle=Math.random()*2; // This is the number that will be increasing and after being passed to my dot sign it will give us that series of value between -1 and plus 1
        this.angleSpeed=Math.random()*0.2;
        this.curve=Math.random()*7; // Getting random variable from 1 to 7 for the characters ups and downs curve.
    }
    // In the below line , this method will update coordindate of my objects it will handle position calculation and movement
    update(){
       this.x-=this.speed; // In this line , they all the enemy 2 is moving towards right hand side. .
       this.y+=this.curve*Math.sin(this.angle); // *3 now we are getting the value of -3 and plus 3 . because this line of code we can make the curve more prominent.
       this.angle+=this.angleSpeed; // now we are increasing the value of angle by 0.2 in every frame.by creating random numbers in line number 40.
       if(this.x+this.width<0)this.x=canvas.width; // In this line , due to this line endless right to left movement of enemy2 is created.

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
        ctx.drawImage(this.image,this.frame*this.spriteWidth,0,this.spriteWidth,this.spriteHeight,this.x,this.y,this.width,this.height);
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




