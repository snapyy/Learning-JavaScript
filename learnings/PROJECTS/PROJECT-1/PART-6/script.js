// In the below addEventListner , here is the load event which only fires when the whole page has been loaded including all dependent resources such as style sheets and images .
document.addEventListener('DOMContentLoaded', function () {
    const canvas = document.getElementById('canvas1');
    const ctx = canvas.getContext('2d');
    canvas.width = 500;
    canvas.height = 800;

    class Game {
        constructor(ctx, width, height) {
            this.ctx = ctx;
            this.width = width;
            this.height = height;
            this.enemies = [];
            // Below line , variable will define number of milliseconds between adding  each new enemy into the game in every 400 milliseconds
            this.enemyInterval = 500;
            // Below line , enemy timer count    milliseconds from 0 to 400 over and over 
            this.enemyTimer = 0;
            // In Below line ,types of enemys  variable which holds the enemys. 
            this.enemyTypes=['worm','ghost','spider'];
        }
        update(deltaTime) {
            // In the below line , we are deleting enemys after its markedForDeletion. 
            this.enemies = this.enemies.filter(object => !object.markedForDeletion);
            if (this.enemyTimer > this.enemyInterval) {
                this.#addNewEnemy();
                this.enemyTimer = 0;
                console.log(this.enemies)
            } else {
                this.enemyTimer += deltaTime;
            }
            this.enemies.forEach(object => object.update(deltaTime));
        }
        draw() {
            this.enemies.forEach(object => object.draw(this.ctx));
        }
        // Function that name is start from # is private class 
        #addNewEnemy() {
            // In the below line , we are randomizing the output of enemy 
            const randomEnemy=this.enemyTypes[Math.floor(Math.random()*this.enemyTypes.length)];
            // In the below line , we are pushing enemys and creating new same type of enemys
            if(randomEnemy=='worm') this.enemies.push(new Worm(this));
           else if(randomEnemy=='ghost') this.enemies.push(new Ghost(this));
           else if(randomEnemy=='spider') this.enemies.push(new Spider(this));
            // this.enemies.sort(function (a, b) {
            //     return a.y - b.y;
            // });
        }
    }

    class Enemy {
        constructor(game) {
            this.game = game;
            // console.log(this.game);
            this.markedForDeletion = false;
            this.frameX;
            this.maxFrame=5;
            this.frameInterval=100;
            this.frameTimer=0;
        }
        update(deltaTime) {
            this.x -= this.vx * deltaTime;
            // In the below line , if the enemy has moved across the screen and behind left edge of canvas if it has i will set its marked for deletion property to true.
            if (this.x < 0 - this.width) this.markedForDeletion = true;
            if(this.frameTimer>this.frameInterval){
                if(this.frameX<this.maxFrame)this.frameX++;
                else this.frameX=0;
                this.frameTimer=0;
            }else{
                this.frameTimer+=deltaTime;
            }
        }
        draw(ctx) {
         
            ctx.drawImage(this.image, this.frameX*this.spriteWidth, 0, this.spriteWidth, this.spriteHeight, this.x, this.y, this.width, this.height);
        }
    }

    class Worm extends Enemy {
        constructor(game) {
            super(game);
            this.spriteWidth = 229;
            this.spriteHeight = 171;
            this.width = this.spriteWidth / 2;
            this.height = this.spriteHeight / 2;
            this.x = this.game.width;
            this.y = this.game.height-this.height;
            this.image = worm;
            // In the below line , randomizing the speed of worms .
            this.vx = Math.random() * 0.2 + 0.1; //vx stands for velocity x axis

        }
    }
    class Ghost extends Enemy {
        constructor(game) {
            super(game);
            this.spriteWidth = 261;
            this.spriteHeight = 209;
            this.x = this.game.width;
            this.y = Math.random() * this.game.height*0.6;
            this.width = this.spriteWidth / 2;
            this.height = this.spriteHeight / 2;
            this.image = ghost;
            // In the below line , randomizing the speed of worms .
            this.vx = Math.random() * 0.2 + 0.1; //vx stands for velocity x axis
            this.angle=0;
            this.curve=Math.random()*3;
        }
        update(deltaTime){
            super.update(deltaTime);
            this.y+=Math.sin(this.angle)*this.curve;
            this.angle+=0.04;
           
        }
        draw(ctx){
            // In the below line , we saving the state of the game.
            ctx.save();
            // In the below line we are setting opacity of all enemy globallly.
            ctx.globalAlpha=0.7;
            super.draw(ctx);
            // Restoring after applying opacity in the ghost.
            ctx.restore();
        }
    }
    class Spider extends Enemy {
        constructor(game) {
            super(game);
            this.spriteWidth = 310;
            this.spriteHeight = 175;
            this.width = this.spriteWidth / 2;
            this.height = this.spriteHeight / 2;
            this.x = Math.random()*this.game.width;
            this.y = 0-this.height;
            this.image = spider;
            // In the below line , randomizing the speed of worms .
            this.vx = 0; //vx stands for velocity x axis
            this.vy=Math.random()*0.1+0.1;
            this.maxLength=Math.random()*this.game.height;
        }

    update(deltaTime){
        super.update(deltaTime);
        if (this.y < 0 - this.height*2) this.markedForDeletion = true;
        this.y+=this.vy*deltaTime;
        if(this.y>this.maxLength)this.vy*=-1;
    }
    draw(ctx){
        ctx.beginPath();
        ctx.moveTo(this.x+this.width/2,0);
        ctx.lineTo(this.x+this.width/2,this.y+10);
        ctx.stroke();
        super.draw(ctx);
    }
    }
    const game = new Game(ctx, canvas.width, canvas.height);
    let lastTime = 1;
    function animate(timeStamp) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        const deltaTime = timeStamp - lastTime;
        lastTime = timeStamp;

        game.update(deltaTime);
        game.draw();
        requestAnimationFrame(animate);
    };
    animate(0);

});
