window.onload = init;

let canvas, ctx, w, h;

let player = new Image();
player.src = "images/characters/player.png"


function init() {
  
  canvas = document.querySelector("#carte");
  ctx = canvas.getContext("2d");
  
  w = canvas.width;
  h = canvas.height;
  
  ctx.drawImage(player, 20, 20);
    
  // on demarre la boucle d'animation
  requestAnimationFrame(mainloop); //Créer la fonction
}