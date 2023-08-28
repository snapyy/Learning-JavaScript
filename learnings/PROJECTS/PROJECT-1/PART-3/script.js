/** @type {HTMLCanvasElement}*/ // In this line ,this way i tell vs code this is a canvas project and it will suggest built-in html canvas methods for me.
const canvas=document.getElementById('canvas1');
const ctx=canvas.getContext('2d');
CANVAS_WIDTH=canvas.width=500;
CANVAS_HEIGHT=canvas.height=1000;


// In the below class we are going to create all the enemys .
class Enemy{
    constructor(){
        this.x=10;
        this.y=50;
        this.width=100;
        this.height=100;
    }
    // In the below line , this method will update coordindate of my objects it will handle position calculation and movement
    update(){
       this.x++; // For every frame increase by one and also increase y by one.
       this.y++;
    }
    // In the below line code , it will animate for every enemy easily without repeating any code . 
    draw(){
        ctx.fillRect(this.x,this.y,this.width,this.height);
    }
};
const enemy1=new Enemy(); // The new keyword will simply look at that class name in the above code it will enter its constructor ,it will create one new blank javaScript object and it will assign it values and properties based on a blueprint inside the constructor .

// In the below line here is another enemy
const enemy2=new Enemy();
function animate(){
    ctx.clearRect(0,0,CANVAS_WIDTH,CANVAS_HEIGHT); // Deleting old paint previous frames from canvas FROM THE COORDINATES 0,0 of canvas height and width.

    // We don't need this below code because we already created a update method in the Enemy class in the above.
    // Below code for enemy one
    // enemy1.x++; // In this line , we are increasing the element on x-axis horizontally.
    // enemy1.y++; // it is increasing in vertical position  by 1 for every frame.

    // Here i am calling the method instead of writing upper code lins for every enemy.
    enemy1.update();

    // Instead of using below  which on the line number 46 ,we can draw it for every enemy. just by calling method draw().
    enemy1.draw();
// Below code for enemy two
// enemy2.x+=0.5;
// enemy2.y+=0.5;
    ctx.fillRect(enemy1.x,enemy1.y,enemy1.width,enemy1.height);  // Drawing the rectangle for enemy one
    // ctx.fillRect(enemy2.x,enemy2.y,enemy2.width,enemy2.height); // Drwaing the rectangle for enemy two
    requestAnimationFrame(animate); // By using this line , we are looping this function.
}
animate();
