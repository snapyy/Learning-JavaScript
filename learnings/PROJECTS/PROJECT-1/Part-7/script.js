//Load Event :- waits for all assets such as spritesheets and images to be fully loaded before it executes code in its callback fucntion.
// Anonymous function :- function without a name.
window.addEventListener('load', function () {
    const canvas = document.getElementById('canvas1');
    // ctx= content instance of built in canvas 2D api that holds all drawing method and properties we will need to animate our game.
    const ctx = canvas.getContext('2d');
    canvas.width = 800;
    canvas.height = 720;

    // In the below class , input handler class will apply event listeners to the game and it will keep track of all keys that are currently pressed down .
    class InputHandler {
        constructor() {
            // In the below variable , we will be adding and removing keys from it as they are being pressed and released .
            this.keys = [];
            //Es6 arrow functions :- don't blind their own 'this', but they inherit the one from their parent scope , this is called lexical scoping .
            window.addEventListener('keydown', e => {
                // In the below line , if the key that was pressed is arrow down and if that key is not yet inside in e.key array only then push it into the array .
                if (e.key === 'ArrowDown' || e.keys === 'ArrowUp' || e.key === 'ArrowLeft' || e.key === 'ArrowRight' && this.keys.indexOf(e.key) === -1) {
                    this.keys.push(e.key);
                }

            });
            // In the below function , it will register the key till it is press.
            // explaining the exact code below , when we release a key if that key is arrowed down find index of that key inside this dot keys array and use splice to remove one element from that array 
            window.addEventListener('keyup', e => {
                if (e.key === 'ArrowDown' || e.key === 'ArrowUp' || e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
                    // splice takes two arguements :- 1 . arguement index of element we want to remove and 2. how many elements starting from that index we want to remove.
                    this.keys.splice(this.keys.indexOf(e.key), 1);
                }

            });
        }
    }
    class Player {
        constructor(gameWidth, gameHeight) {
            this.gameWidth = gameWidth;
            this.gameHeight = gameHeight;
            this.width = 200;
            this.height = 200;
            this.x = 0;
            this.y = this.gameHeight - this.height;
            this.image = document.getElementById('playerImage');
            this.frameX = 0;
            this.frameY = 0;
            this.speed = 0;
            this.vy=0;
            this.weight=1;
        }
        draw(context){
            context.fillStyle = 'white';
            context.fillRect(this.x, this.y, this.width, this.height);
            context.drawImage(this.image, this.frameX * this.width, this.frameY * this.height, this.width, this.height, this.x, this.y, this.width, this.height);
        }
        update(input) {
            if (input.keys.indexOf('ArrowRight') > -1) {
                this.speed = 5;
            } else if (input.keys.indexOf('ArrowLeft')>-1) {
                this.speed = -5;
            }
              else if(input.keys.indexOf('ArrowUp')>-1){
                this.vy-=10;
              }  
             else {
                this.speed = 0;
            }
            // Horizontal movement 
            this.x += this.speed;
            // In the below if else statement ,we set boundaries for the player so that it cannot go out of width and height of the game.
            if(this.x<0) this.x=0;  
            else if(this.x>this.gameWidth-this.width) this.x=this.gameWidth-this.width;

            // vertical movement
            this.y+=this.vy;
            if(!this.onGround()){
                this.vy+=this.weight;
            }else {
                this.vy=0;
            }
            if(this.y>this.gameHeight-this.height) this.y=this.gameHeight-this.height
        }
        onGround(){
            return this.y>=this.gameHeight-this.height;
        }
    }
    class Background {

    }
    class Enemy {

    }
    function handEnemy() {

    }
    function displayStatusText() {

    }
    const input = new InputHandler();
    const player = new Player(canvas.width, canvas.height);
    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        player.draw(ctx);
        player.update(input);
        requestAnimationFrame(animate);
    }
    animate();
});
