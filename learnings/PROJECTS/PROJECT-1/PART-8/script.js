import Player from "./player.js";
import InputHandler from "./input.js";
// Load event :- will wait for the entire page to be fully loaded and available including page content such as stylesheets,images and so on
window.addEventListener('load',function(){
    const loading= document.getElementById('loading');
    loading.style.display='none';
    const canvas=document.getElementById('canvas1');
    const ctx=canvas.getContext('2d');
    canvas.width=window.innerWidth;
    canvas.height=window.innerHeight;

    const player = new Player(canvas.width,canvas.height);
    player.draw(ctx);

    const input=new InputHandler();
    console.log(input.lastkey);
});
