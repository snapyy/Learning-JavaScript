// In the below addEventListner , here is the load event which only fires when the whole page has been loaded including all dependent resources such as style sheets and images .
document.addEventListener('DOMContentLoaded',function(){
    const canvas=document.getElementById('canvas1');
    const ctx=canvas.getContext('2d');
    canvas.width=500;
    canvas.height=800;
    
    class Game{
        constructor(ctx,width,height){
            this.ctx=ctx;
            this.width=width;
            this.height=height;
            this.enemies=[];
            // Below line , variable will define number of milliseconds between adding  each new enemy into the game in every 400 milliseconds
           this.enemyInterval=1000; 
           // Below line , enemy timer count    milliseconds from 0 to 400 over and over 
           this.enemyTimer =0;
            
        }
        update(deltaTime){
            // In the below line , we are deleting enemys after its markedForDeletion. 
            this.enemies=this.enemies.filter(object=>!object.markedForDeletion);
            if(this.enemyTimer>this.enemyInterval){
 this.#addNewEnemy();
 this.enemyTimer =0;
 console.log(this.enemies)
            } else{
                this.enemyTimer+=deltaTime;
            }   
            this.enemies.forEach(object=>object.update());
        }
        draw(){
            this.enemies.forEach(object=>object.draw(this.ctx));
        }
        // Function that name is start from # is private class 
        #addNewEnemy(){
            this.enemies.push(new Worm(this));
            this.enemies.sort(function(a,b){
                return b.y-a.y;
            });
        }
    }
    
    class Enemy{
        constructor(game){
            this.game=game;
            // console.log(this.game);
    this.markedForDeletion=false;
        }
        update(deltaTime){
            this.x-=this.vx*deltaTime;
            // In the below line , if the enemy has moved across the screen and behind left edge of canvas if it has i will set its marked for deletion property to true.
            if(this.x<0-this.width) this.markedForDeletion=true;
        }
        draw(ctx){
       
            ctx.drawImage(this.image,0,0,this.spriteWidth,this.spriteHeight,this.x,this.y,this.width,this.height);
        }
    }

    class Worm extends Enemy{
        constructor(game){
            super(game);
            this.spriteWidth=229;
            this.spriteHeight=171;
            this.x=this.game.width;
            this.y=Math.random()*this.game.height;
            this.width=this.spriteWidth/2;
            this.height=this.spriteHeight/2;
            this.image=worm;
            // In the below line , randomizing the speed of worms .
            this.vx=Math.random()*0.1+0.1; //vx stands for velocity x axis
          
        }
    }
    const game=new Game(ctx,canvas.width,canvas.height);
    let lastTime=1; 
    function animate(timeStamp){
        ctx.clearRect(0,0,canvas.width,canvas.height);
        const deltaTime=timeStamp-lastTime;
        lastTime=timeStamp;
       
        game.update(deltaTime);
        game.draw();
        requestAnimationFrame(animate);
    };
    animate(0);
    
});
