let playerState ='idle';
const dropdown=document.getElementById('animations');
dropdown.addEventListener('change',function(e){
    playerState=e.target.value;
});
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

// Take width of the entire file and divide it by number of columns i get width of one frame. Our source image or spread sheet is 6876 pixels wide and it has 12 pixels  , 6876 divided by 12 is 573 , so we will take it as 575. 5230 is total height of spread sheet or source image , so we have to divide it by number of rows which is 10 , So 523 will be the height of every element or frame in the spread sheet.
const spriteWidth=575; 
const spriteHeight=523;
// let frameX=0;   // This variable store , frames on x-axis. 
// let frameY=0;   // This variable store , frames on y-axis.
let gameFrame =0;
const  staggerFrame =5; // through this variable we can adjust speed of animation. if you increase it will animate slow , if you decrease it will animate fast.
const spriteAnimation=[]; // This will serve as the main container to hold all data for all my animations 

// In the below line , this will also be an array and i will use it as a place where i can create kind of simple map that will match my docs Sprite Sheet (Which has Character) , we will store row by row from top to bottom for every animation or frame.
const animationsStates=[
    {
        // In below line , the first row name will be idle and the number of frames or animations it has .Same goes for every
        name:'idle',
        frames:7,

    },
    {
        name:'jump',
        frames:7,

    },
    {
        name:'fall',
        frames:7,

    }
    ,
    {
        name:'run',
        frames:9,

    }
    ,
    {
        name:'dizzy',
        frames:11,

    }
    ,
    {
        name:'sit',
        frames:5,

    },
    {
        name:'roll',
        frames:7,

    },
    {
        name:'bite',
        frames:7,

    },
    {
        name:'ko',
        frames:12,

    },
    {
        name:'getHit',
        frames:4,
    }
];

animationsStates.forEach((state,index)=>{
    let frames={
        loc:[],
    }
    for(let j=0;j<state.frames;j++){
        let positionX =j*spriteWidth;
        let positionY=index*spriteHeight;
        frames.loc.push({x:positionX,y:positionY});
    }
    spriteAnimation[state.name]=frames;
});
console.log(animationsStates);
// This is animation loop function
function animate(){

    

 // /////////////////// Below line code , this works but we have to change 2 values , now we are going to apply in another advance way to do that.
// In below line , it takes four arguements to specify , what area on canvas we want to clear in x-axis and y axis. , width of canvas , height of canvas.
// ctx.clearRect(0,0,CANVAS_WIDTH,CANVAS_HEIGHT);
// ctx.fillRect(50,50,100,100);
    // Below line is the refernce for the lower code which below 
    // Below line , is the third version of draw image method accepts nine arguements this gives us the most control over the image , the first arguement is the image you want to draw, next four arguements determine rectugular  area we want to cut out from the source image .Source x Source y Source Width and Source Height and the last four arguements will tell JavaScript Where on our destination canvas  we want to draw just that cropped out part onto destination x destination y destination width and destination height.

    // ctx.drawImage(image,sx,sy,sw,sh,dx,dy,dw,dh);

    // Source x =sx arguement allows us to cycle through sprite sheet horizontally .
    //if i want to swap between different animations the way our spreadsheet is structured i have to travel through vertically we have source y =sy arguement .

    // In the below line.Now we can draw

    // In first image source , after that 4 values to specify a rectangle area to crop out from the original large sprite sheet and last 4 is for telling it where i want that cropped out piece of my sprite sheet to be displayed on canvas.
   


// ctx.drawImage(playerImage,frameX*spriteWidth,frameY*spriteHeight,spriteWidth,spriteHeight,0,0,spriteWidth,spriteHeight);
    // if(gameFrame%staggerFrames==0){ // if reminder gameFrame/staggerFrames =0 then rest of code will run.
    // // if frameX from line 10 is less than in columns 7 increase frame x by 1 frame x++ , else meaning when its equal or larger than seven reset it back zero .
    //     if(frameX<6) frameX++; // frame starts from 0 index value.
    //     else frameX=0;
       
    // }
    // gameFrame++;
    // In the below line , Built in method which will simply run a function we pass to it. and if we call the function within function then it will run again and again.


// Another and Advance way to animate :-

ctx.clearRect(0,0,CANVAS_WIDTH,CANVAS_HEIGHT);

// Below line code output will be like :- 
/*  gameFrame/staggerFrames =???
0/5=0       Math.floor(0)=0             
1/5=0.2     Math.floor(0.1)=0
2/5=0.4     Math.floor(0.4)=0
3/5=0.6     Math.floor(0.6)=0
4/5=0.8     Math.floor(0.8)=0
5/5=1       Math.floor(1)=1
*/
let position =Math.floor(gameFrame/staggerFrame)%spriteAnimation[playerState].loc.length; // getting value in whole numbers without "decimal" value. we are taking 6 because in first row we have 6 frames or elements only. 
let frameX=spriteWidth*position; // cycling horizontally through these values
let frameY=spriteAnimation[playerState].loc[position].y;  
ctx.drawImage(playerImage,frameX,frameY,spriteWidth,spriteHeight,0,0,spriteWidth,spriteHeight);

gameFrame++;
    requestAnimationFrame(animate);
};
animate();  


