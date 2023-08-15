const canvas=document.getElementById('canvas1'); // reference of element which is created in html file.
const ctx=canvas.getContext('2d'); // creating a shortcut for context variable is "ctx" passing "2d" for set of drawing methods 
//console.log(ctx); //  calling ctx which has some properties , if you just uncomment it then you can see in the console , that there is font, filter ,linecap etc are there which is from 2d , so using all these things we can draw on canvas

// There are lots of method you can see in the console but , we are going to use drawImage method to make this game.

// Setting canvas width and Height by default it is set to 300 * 150 . 
const CANVAS_WIDTH=canvas.width =600; // "canvas." giving size to canvas
const CANVAS_HEIGHT=canvas.height=600;// same here as above line.


// In the below line , creating a custom variable to get image. playerImage is the name of the image . 
// This is built in class constructor it will create html element same as you would create if you put image tag, img tag in index html markup.
const playerImage=new Image();

//In below line , giving path of image .
playerImage.src='shadow_dog.png';

const spriteWidth=575;
const spriteHeight=523;
let frameX=0;
let frameY=1;

// This is animation loop function
function animate(){

    // In below line , it takes four arguements to specify , what area on canvas we want to clear in x-axis and y axis. , width of canvas , height of canvas.
    ctx.clearRect(0,0,CANVAS_WIDTH,CANVAS_HEIGHT);
    // ctx.fillRect(50,50,100,100);

    // Below line is the refernce for the lower code which below 
    // ctx.drawImage(image,sx,sy,sw,sh,dx,dy,dw,dh);

    // In the below line.Now we can draw
    ctx.drawImage(playerImage,frameX*spriteWidth,frameY*spriteHeight,spriteWidth,spriteHeight,0,0,spriteWidth,spriteHeight);
    if(frameX<6) frameX++;
    else frameX=0;

    // In the below line , Built in method which will simply run a function we pass to it.
    requestAnimationFrame(animate);
};
animate();      
