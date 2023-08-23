// Parallax effect is when foregorund layer , moves Faster than the background Layer.

const canvas=document.getElementById('canvas1');
const ctx=canvas.getContext('2d');
const CANVAS_WIDTH=canvas.width=800;
const CANVAS_HEIGHT=canvas.height=700;

let gameSpeed =5; // This variable will be used controlling speed.

// importing images into our canvas project .
const backgroundLayer1=new Image(); 
backgroundLayer1.src='/backgroundLayers/layer-1.png';
const backgroundLayer2=new Image();
backgroundLayer2.src='/backgroundLayers/layer-2.png';
const backgroundLayer3=new Image();
backgroundLayer3.src='/backgroundLayers/layer-3.png';
const backgroundLayer4=new Image();
backgroundLayer4.src='/backgroundLayers/layer-4.png';
const backgroundLayer5=new Image();
backgroundLayer5.src='/backgroundLayers/layer-5.png';

 let x=0; // This x variable which will server as horizontal position for one of my background images.
 let x2=2400; // This is also a same image which will use to loop the background endlessly.
// Below code content all the code i need to draw my backgrounds

function animate(){
    // In the below line , we are clearing the image by removing previous frames then we have to use below line.
    // it expects four argument to determine what part of canvas i want to delete. In our case i want clear entire canvas.
    ctx.clearRect(0,0,CANVAS_WIDTH,CANVAS_HEIGHT);
//drawing from coordinate 0 0 so from the top left corner of canvas.
   ctx.drawImage(backgroundLayer4,x,0);
   ctx.drawImage(backgroundLayer4,x2,0);


//    x--; // Using this x variable every time animation loop runs i decrease x by 1 . this will make our image move to the left in a negative direction on horizontal x-axis.
if(x<-2400)x=2400+x2-gameSpeed; // if the background is at the end repeat it again from starting point. size of image is 2400 pixels wide. And -gameSpeed will control the gap between two same images.
else x-=gameSpeed; // background will run as per the speed variable which is declare globally.
if(x2<-2400) x2=2400+x-gameSpeed; // -gameSpeed also here , we are going to cut gameSpeed to control the gap between two images. +x will  will know the position the position of first image and then , it will calculate and apply the 2nd image. In the upper if statement it is vice versa.
else x2-=gameSpeed; 
   //calling built in function which is calling this function , so this way it will call in loop.
    requestAnimationFrame(animate);
};
animate();
