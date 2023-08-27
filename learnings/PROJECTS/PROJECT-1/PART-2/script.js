// Parallax effect is when foregorund layer , moves Faster than the background Layer.

const canvas=document.getElementById('canvas1');
const ctx=canvas.getContext('2d');
const CANVAS_WIDTH=canvas.width=800;
const CANVAS_HEIGHT=canvas.height=700;

let gameSpeed =5; // This variable will be used controlling speed.
let gameFrame=0; // after creating this variable , i will increase it by one for every animation frame. in line number 127.
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

// Calling slider and point javascript towards my new slider .
const slider=document.getElementById('slider');
slider.value=gameSpeed;
// In the below line , we are fetching the current speed of the game and showing it to the user.
const showGameSpeed=document.getElementById('showGameSpeed');
// Speed of the game will change as per the gameSpeed variable.
showGameSpeed.innerHTML=gameSpeed;

// In the below line , listen for change event and in callback function whenever change event occurs on the slider which means whenever user clicks on it change its value.
slider.addEventListener('change',function(e){
// console.log(e.target.value); This is line will print in console related to speed etc.
gameSpeed=e.target.value;
showGameSpeed.innerHTML=e.target.value; 
});
// This is one way to do parallax

//  let x=0; // This x variable which will server as horizontal position for one of my background images.
//  let x2=2400; // This is also a same image which will use to loop the background endlessly.
// // Below code content all the code i need to draw my backgrounds


// function animate(){
//     // In the below line , we are clearing the image by removing previous frames then we have to use below line.
//     // it expects four argument to determine what part of canvas i want to delete. In our case i want clear entire canvas.
//     ctx.clearRect(0,0,CANVAS_WIDTH,CANVAS_HEIGHT);
// //drawing from coordinate 0 0 so from the top left corner of canvas.
// //    ctx.drawImage(backgroundLayer4,x,0);
// //    ctx.drawImage(backgroundLayer4,x2,0);


// //    x--; // Using this x variable every time animation loop runs i decrease x by 1 . this will make our image move to the left in a negative direction on horizontal x-axis.
// // if(x<-2400)x=2400+x2-gameSpeed; // if the background is at the end repeat it again from starting point. size of image is 2400 pixels wide. And -gameSpeed will control the gap between two same images.
// // else x-=gameSpeed; // background will run as per the speed variable which is declare globally.
// // if(x2<-2400) x2=2400+x-gameSpeed; // -gameSpeed also here , we are going to cut gameSpeed to control the gap between two images. +x will  will know the position the position of first image and then , it will calculate and apply the 2nd image. In the upper if statement it is vice versa.
// // else x2-=gameSpeed; 
//    //calling built in function which is calling this function , so this way it will call in loop.
//     requestAnimationFrame(animate);
// };
// animate();


// This another way to do parallax

// In the below class we are going to use same properties with values to repeat background in loop.
class Layer{
constructor(image,speedModifier){ // speedModifier will set how fast my background Image.
    this.x=0; // set x property in this particular property 0
    this.y=0;
    this.width=2400;
    this.height=700;
    // this.x2=this.width;
    this.image=image;
    this.speedModifier=speedModifier;
    this.speed=gameSpeed*this.speedModifier; // Doing this will allow me to passs different speed modifier value for each of my five layer. and that way each layer will move at a different speed but it will still be tied to my global  game speed.
}
// Below line function will move layers horizontally by changing their disk dot x and this dot x2 and it will reset them when the layers move the screen.
update(){
    this.speed=gameSpeed*this.speedModifier;
   /* if(this.x<=-this.width){
        this.x=0; // This line will make sure that there is no gap in the background .
    }*/

    // After removing upper statemnet , completely the backgrounds no longer reset when they leave the screen. and also comment out line number  94

    /*if(this.x2<=-this.width){
        this.x2 =this.width+this.x-this.speed;
    }
    */
    // this.x=Math.floor(this.x-this.speed); // To make background layer to move left i will wrap it in method floor make sure we have to decimal points in there.
    // this.x2=Math.floor(this.x-this.speed); // Same thing as above.

    // In upper line , we can also calculate position x differently.
    // this.x=this.x-this.speed; // After this , i am going to create a variable called gameFrame Variable.

    //All the code will be written in a single line .

    this.x=gameFrame*this.speed%this.width; // after this we have to change in line number 127
 }
// Below line function job will be to take information about this layer object and to draw it on the canvas every time update method runs to change horizontal x position draw will run again to redraw the image after new position to make sure my game speed is dynamic and always reacting to the current value of my global gameSpeed variable .
draw(){
ctx.drawImage(this.image,this.x,this.y,this.width,this.height);
ctx.drawImage(this.image,this.x+this.width,this.y,this.width,this.height); // Drawing same image in horizontal coordinate.
}
}
const layer1=new Layer(backgroundLayer1,0.5); // Calling the constructor and giving argument to perform opearation which we declared in the class.
const layer2=new Layer(backgroundLayer2,0.4);
const layer3=new Layer(backgroundLayer3,0.6);
const layer4=new Layer(backgroundLayer4,0.8);
const layer5=new Layer(backgroundLayer5,1);

const gameObjects=[layer1,layer2,layer3,layer4,layer5];
const gameObject=[]
function animate(){
    ctx.clearRect(0,0,CANVAS_WIDTH,CANVAS_HEIGHT);
    // If i am going to apply for every layer it will make code very lengthy
    // layer4.update();
    // layer4.draw();
    // layer5.update();
    // layer5.draw();

    // Instead of repeating for all we are going to use for each loop
    gameObjects.forEach(object =>{
        object.update();
        object.draw();
    });
    gameFrame--; // after increasing this , we are going to update in update function .
    requestAnimationFrame(animate);
};
animate();
