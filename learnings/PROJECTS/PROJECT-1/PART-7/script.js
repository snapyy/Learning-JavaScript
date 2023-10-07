//Load Event :- waits for all assets such as spritesheets and images to be fully loaded before it executes code in its callback fucntion.
// Anonymous function :- function without a name.
window.addEventListener('load', function () {
    const canvas = document.getElementById('canvas1');
    // ctx= content instance of built in canvas 2D api that holds all drawing method and properties we will need to animate our game.
    const ctx = canvas.getContext('2d');
    canvas.width = 1400;
    canvas.height = 720;
    let enemies = [];
    let score = 0;
    let gameOver = false;
    const fullScreenButton= this.document.getElementById('fullScreenButton');
    // In the below class , input handler class will apply event listeners to the game and it will keep track of all keys that are currently pressed down .
    class InputHandler {
        constructor() {
            // In the below variable , we will be adding and removing keys from it as they are being pressed and released .
            this.keys = [];
            this.touchY='';
            this.touchTreshold=30;
            //Es6 arrow functions :- don't blind their own 'this', but they inherit the one from their parent scope , this is called lexical scoping .
            window.addEventListener('keydown', e => {
                // In the below line , if the key that was pressed is arrow down and if that key is not yet inside in e.key array only then push it into the array .
                if (e.key === 'ArrowDown' || e.key === 'ArrowUp' || e.key === 'ArrowLeft' || e.key === 'ArrowRight' && this.keys.indexOf(e.key) === -1) {
                    this.keys.push(e.key);
                }else if(e.key==='Enter' && gameOver) restartGame();

            });
            // In the below function , it will register the key till it is press.
            // explaining the exact code below , when we release a key if that key is arrowed down find index of that key inside this dot keys array and use splice to remove one element from that array 
            window.addEventListener('keyup', e => {
                if (e.key === 'ArrowDown' || e.key === 'ArrowUp' || e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
                    // splice takes two arguements :- 1 . arguement index of element we want to remove and 2. how many elements starting from that index we want to remove.
                    this.keys.splice(this.keys.indexOf(e.key), 1);
                }

            });
            window.addEventListener('touchstart',e=>{
                // console.log('start');
                this.touchY=e.changedTouches[0].pageY;

            });
            window.addEventListener('touchmove',e=>{
                // console.log('moving');
                const swipeDistance=e.changedTouches[0].pageY-this.touchY;
                if(swipeDistance<-this.touchTreshold && this.keys.indexOf('swipe up') === -1 ) this.keys.push('swipe up');   
                else if(swipeDistance>this.touchTreshold && this.keys.indexOf('swipe down')=== -1) this.keys.push('swipe down');
                if(gameOver)restartGame();
            });
            window.addEventListener('touchend',e=>{
                // console.log('end');
                this.keys.splice(this.keys.indexOf('swipe up'),1);
                this.keys.splice(this.keys.indexOf('swipe down'),1);
            });
            
        }
    }
    class Player {
        constructor(gameWidth, gameHeight) {
            this.gameWidth = gameWidth;
            this.gameHeight = gameHeight;
            this.width = 200;
            this.height = 200;
            this.x = 100;
            this.y = this.gameHeight - this.height;
            this.image = document.getElementById('playerImage');
            this.frameX = 0;
            this.maxFrame = 8;
            this.frameY = 0;
            this.fps = 20;
            this.frameTimer = 0;
            this.frameInterval = 1000 / this.fps;
            this.speed = 0;
            this.vy = 0;
            this.weight = 1;
           
        }
        restart() {
            this.x = 100;
            this.y = this.gameHeight - this.height;
            this.maxFrame = 8;
            this.frameY = 0;
        }
        draw(context) {
            context.lineWidth=5;
            context.strokeStyle='white';
            context.beginPath();
            context.arc(this.x + this.width / 2, this.y + this.height / 2+20, this.width / 3, 0, Math.PI * 2);
            context.stroke();
            context.drawImage(this.image, this.frameX * this.width, this.frameY * this.height, this.width, this.height, this.x, this.y, this.width, this.height);
        }
        update(input, deltaTime, enemies) {
            // collision dections
            enemies.forEach(enemy => {
                const dx = (enemy.x + enemy.width / 2-20) - (this.x + this.width / 2);
                const dy = (enemy.y + enemy.height / 2) - (this.y + this.height / 2+20);
                const distance = Math.sqrt(dx * dx * dy*dy);
                if (distance < enemy.width / 3 + this.width / 3) {
                    gameOver = true;
                }
            }); 
            // sprite animation 
            if (this.frameTimer > this.frameInterval) {
                if (this.frameX >= this.maxFrame) this.frameX = 0;
                else this.frameX++;
                this.frameTimer = 0;
            } else {
                this.frameTimer += deltaTime;
            }

            // controls
            if (input.keys.indexOf('ArrowRight') > -1) {
                this.speed = 5;
            } else if (input.keys.indexOf('ArrowLeft') > -1) {
                this.speed = -5;
            }
            else if ((input.keys.indexOf('ArrowUp') > -1 ||input.keys.indexOf('swipe up') >-1 )&& this.onGround()) {
                this.vy -= 30;
               
            }
            else {
                this.speed = 0;
            }
            // Horizontal movement 
            this.x += this.speed;
            // In the below if else statement ,we set boundaries for the player so that it cannot go out of width and height of the game.
            if (this.x < 0) this.x = 0;
            else if (this.x > this.gameWidth - this.width) this.x = this.gameWidth - this.width;

            // vertical movement
            this.y += this.vy;
            if (!this.onGround()) {
                this.vy += this.weight;
                this.maxFrame = 5;
                this.frameY = 1;
               
            } else {
                this.vy = 0;
                this.maxFrame = 8;
                this.frameY = 0;
            }
            if (this.y > this.gameHeight - this.height) this.y = this.gameHeight - this.height;
        }
        onGround() {
            return this.y >= this.gameHeight - this.height;
        }
    }
    class Background {
        constructor(gameWidth, gameHeight) {
            this.gameWidth = gameWidth;
            this.gameHeight = gameHeight;
            this.image = document.getElementById('backgroundImage');
            this.x = 0;
            this.y = 0;
            this.width = 2400;
            this.height=720;
            this.speed = 7;
        }
        draw(context) {
            context.drawImage(this.image, this.x, this.y, this.width, this.height);
            context.drawImage(this.image, this.x + this.width - this.speed, this.y, this.width, this.height);

        }
        update() {
            this.x -= this.speed;
            if (this.x < 0 - this.width) this.x = 0;
        }
        restart() {
            this.x = 0;
        }
    }
    class Enemy {
        constructor(gameWidth, gameHeight) {
            this.gameWidth = gameWidth;
            this.gameHeight = gameHeight;
            this.width = 160;
            this.height = 119;
            this.image = document.getElementById('enemyImage');
            this.x = this.gameWidth;
            this.y = this.gameHeight - this.height;
            this.frameX=0;
            this.maxFrame = 5;
            this.fps = 20;
            this.frameTimer = 0;
            this.frameInterval = 1000 / this.fps;
            this.speed = 8;
            this.markedForDeletion = false;
        }
        draw(context) {
            context.drawImage(this.image, this.frameX * this.width, 0, this.width, this.height, this.x, this.y, this.width, this.height);
              context.lineWidth=5;
            context.strokeStyle='white';
            context.beginPath();
            context.arc(this.x + this.width / 2, this.y + this.height / 2+20, this.width / 3, 0, Math.PI * 2);
            context.stroke();
        }
        update(deltaTime) {

            if (this.frameTimer > this.frameInterval) {
                if (this.frameX >= this.maxFrame) this.frameX = 0;
                else this.frameX++;
                this.frameTimer = 0;
            } else {
                this.frameTimer += deltaTime;
            }
            this.x -= this.speed;
            if (this.x < 0 - this.width) {
                this.markedForDeletion = true;
                score++;
            }
        }
    }
    function handleEnemies(deltaTime) {
        if (enemyTimer > enemyInterval + randomEnemyInterval) {
            enemies.push(new Enemy(canvas.width, canvas.height))
           
            randomEnemyInterval = Math.random() * 1000 + 500;
            enemyTimer = 0;
        } else {
            enemyTimer += deltaTime;
        }
        enemies.forEach(enemy => {
            enemy.draw(ctx);
            enemy.update(deltaTime);
        });
        enemies = enemies.filter(enemy => !enemy.markedForDeletion);
    }
    function displayStatusText(context) {
        context.textAlin = 'left';
        context.font = '40px Helvectica';
        context.fillStyle = 'black';
        context.fillText('Score: ' + score, 20, 50);
        context.fillStyle = 'white';
        context.fillText('Score: ' + score, 20, 52);
        if (gameOver) {
            if (gameOver) {
                // Below code chatgpt
                // Set text alignment to center
                context.textAlign = 'center';
                
                // Set text properties
                context.fillStyle = 'black';
                context.font = '30px Arial'; // Adjust font size and style as needed
                
                // Define the text to display
                var text = 'GAME OVER, press Enter or swipe to restart! Try again!';
                
                // Calculate the center coordinates for both x and y
                var centerX = canvas.width / 2;
                var centerY = canvas.height / 2;
                
                // Draw the text at the center
                context.fillText(text, centerX, centerY);
                
                // You can add additional styling or shadow effects as desired
                context.fillStyle = 'white';
                context.fillText(text, centerX + 2, centerY + 2);
            }
            
        }
    }
    function restartGame() {
        player.restart();
        background.restart();
        enemies = [];
        score = 0;
        gameOver = false;
        animate(0);

    }
    function toggleFullScreen(){
        console.log(document.fullscreenElement);
        if(!document.fullscreenElement){
            canvas.requestFullscreen().catch(err=>{
                alert(` Error , can't enable full-screen mode: ${err.message}`);
            });
        }
        else{
            document.exitFullscreen();
        }
    }
    fullScreenButton.addEventListener('click',toggleFullScreen);
    const input = new InputHandler();
    const player = new Player(canvas.width, canvas.height);
    const background = new Background(canvas.width, canvas.height);

    let lastTime = 0;
    let enemyTimer = 0;
    let enemyInterval = 2000;
    let randomEnemyInterval = Math.random() * 1000 + 500;

    function animate(timeStamp) {
        const deltaTime = timeStamp - lastTime;
        lastTime = timeStamp;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        background.draw(ctx);
        background.update();
        player.draw(ctx);
        player.update(input, deltaTime, enemies);
        handleEnemies(deltaTime);
        displayStatusText(ctx);
        if (!gameOver) requestAnimationFrame(animate);
    }
    animate(0);
});
