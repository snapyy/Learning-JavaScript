/** @type {HTMLCanvasElement}*/ // In this line ,this way i tell vs code this is a canvas project and it will suggest built-in html canvas methods for me.
const canvas=document.getElementById('canvas1');
const ctx=canvas.getContext('2d');
CANVAS_WIDTH=canvas.width=500;
CANVAS_HEIGHT=canvas.height=1000;

// In the below line , simple javaScript Object this is storing position and size of one enemy .
/*
This is just for under standing , in the below we are going to create for all enemys
enemy1={
    x:10, // horizontal coordinate on canvas , where we draw that enemy 
    y:10, // vertical coordinate on canvas , where we draw that enemy
    width:200,  
    height:200,
}
*/

// In the below class we are going to create all the enemys .
class Enemy{
    constructor(){
        this.x=10;
        this.y=50;
        this.width=100;
        this.height=100;
    }
}

function animate(){
    ctx.clearRect(0,0,CANVAS_WIDTH,CANVAS_HEIGHT); // Deleting old paint previous frames from canvas FROM THE COORDINATES 0,0 of canvas height and width.
    enemy1.x++; // In this line , we are increasing the element on x-axis horizontally.
    enemy1.y++; // it is increasing in vertical position  by 1 for every frame.
    ctx.fillRect(enemy1.x,enemy1.y,enemy1.width,enemy1.height); 
    requestAnimationFrame(animate); // By using this line , we are looping this function.
}
animate();
