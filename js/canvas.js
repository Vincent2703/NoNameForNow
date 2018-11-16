window.onload = init;

let canvas, ctx, w, h,incrementX,incrementY;
incrementX = 0;
incrementY = 0;
let x=20;
let y =20;
let vitesseMarche=10;

let player = new Image();
player.src = "images/characters/player.png"


function init() {
  
  canvas = document.querySelector("#carte");
  ctx = canvas.getContext("2d");
  
  w = canvas.width;
  h = canvas.height;

  window.addEventListener('keydown',handleKeydown,false);
  window.addEventListener('keyup',handleKeyup,false);
  
  ctx.drawImage(player, x, y);
    
  // on demarre la boucle d'animation
  requestAnimationFrame(mainloop); //Créer la fonction
}

function handleKeydown(evt)
{
	switch(evt.key)
	{
		case "ArrowLeft":
			incrementY = 0;
			incrementX = -vitesseMarche;
		break;
		case "ArrowRight":
			incrementY = 0;
			incrementX = vitesseMarche;
		break;
		case "ArrowUp":
			incrementY = -vitesseMarche;
			incrementX = 0;
		break;
		case "ArrowDown":
			incrementY = vitesseMarche;
			incrementX = 0;
		break;
	}
}
function handleKeyup(evt)
{
	incrementX = 0;
	incrementY = 0;
}

function mainloop() {
	// On efface le canvas
	ctx.clearRect(0,0,canvas.width, canvas.height);
	// Dessiner
	ctx.drawImage(player,x,y);
	// Bouger
	x+= incrementX;
	y+= incrementY;
	// 
	requestAnimationFrame(mainloop);
}