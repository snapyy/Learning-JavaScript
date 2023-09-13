document.addEventListener('DOMContentLoaded',function(){
    const canvas=document.getElementById('canvas1');
    canvas.width=500;
    canvas.height=800;
    
    class Game{
        constructor(){
            this.enemies=[];
        }
        update(){
    
        }
        draw(){
    
        }
        // Function that name is start from # is private class 
        #addNewEnemy(){
    
        }
    }
    
    class Enemy{
        constructor(){
    
        }
        update(){
    
        }
        draw(){
    
        }
    }
    
    function animate(){
        ctx.clearRect(0,0,canvas.width,canvas.height);
    
        requestAnimationFrame(animate);
    }
});
