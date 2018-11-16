window.onload = init;

let canvas, ctx;
let vitesseX = 0;
let vitesseY = 0;
let x=20;
let y =20;
let vitesseMarche=4;

let joueur = new Image();
joueur.src = "images/characters/player.png"


function init() {
  
  canvas = document.querySelector("#carte");
  ctx = canvas.getContext("2d");
  
  w = canvas.width;
  h = canvas.height;

  window.addEventListener('keydown',touchesPress,false);
  window.addEventListener('keyup',touchesRelache,false);
  
  ctx.drawImage(joueur, x, y);
    
  // on demarre la boucle d'animation
  requestAnimationFrame(bouclePrincipale); //Créer la fonction
}

function touchesPress(evt)
{
	switch(evt.key)
	{
		case "ArrowLeft":
			vitesseY = 0;
			vitesseX = -vitesseMarche;
		break;
		case "ArrowRight":
			vitesseY = 0;
			vitesseX = vitesseMarche;
		break;
		case "ArrowUp":
			vitesseY = -vitesseMarche;
			vitesseX = 0;
		break;
		case "ArrowDown":
			vitesseY = vitesseMarche;
			vitesseX = 0;
		break;
	}
}
function touchesRelache(evt)
{
	vitesseX = 0;
	vitesseY = 0;
}

function bouclePrincipale() {
	// On efface le canvas
	ctx.clearRect(0,0,canvas.width, canvas.height);
	// Dessiner
	ctx.drawImage(joueur,x,y);
	// Bouger
	x+= vitesseX;
	y+= vitesseY;
	// 
	requestAnimationFrame(bouclePrincipale);
}