window.onload = init;

let canvas, ctx, w, h;

let joueur;

window.addEventListener('keydown', touchePressee, false);
//let listenerKeyUp = window.addEventListener('keyup', toucheRelachee, false);

function init() {
  

  canvas = document.querySelector("#carte");

  ctx = canvas.getContext("2d");

  w = canvas.width;
  h = canvas.height;

  //création du joueur
  joueur = new Personnage(20,20,"images/characters/player.png", 10); //x, y, image, vie

     // on demarre la boucle d'animation
  requestAnimationFrame(bouclePrincipale); //Créer la fonction

}


function touchePressee(evt)
{
	switch(evt.key)
	{
		case "ArrowLeft":
			joueur.deplacer(-1,0);
		break;
		case "ArrowRight":
			joueur.deplacer(1, 0);
		break;
		case "ArrowUp":
			joueur.deplacer(0, -1);
		break;
		case "ArrowDown":
			joueur.deplacer(0, 1);
		break;
	}
}

function toucheRelachee()
{
	joueur.deplacer(0, 0);
}

function collisionsBordures() {
	if(joueur.x <= 0){
		return false;
	}else{
		return true;
	}
}


function bouclePrincipale() {
	//ctx.save();
	
	//listenerKeyDown;
	//listenerKeyUp;


	ctx.clearRect(0,0,canvas.width, canvas.height);
	
	
	joueur.dessiner(ctx);
	

	requestAnimationFrame(bouclePrincipale);
	
	//ctx.restore();
}

