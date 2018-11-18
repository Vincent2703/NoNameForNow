window.onload = init;

let canvas, ctx, w, h;
incrementX = 0;
incrementY = 0;
let player,mage;

function init() {
  

  canvas = document.querySelector("#carte");

  ctx = canvas.getContext("2d");

  w = canvas.width;
  h = canvas.height;

  //création du joueur
  player = new personnage(20,20,10,"images/characters/player.png");
  document.onkeydown = function(evt) { handleKeydown(evt, player) };
  document.onkeyup = (evt) => { handleKeyup(evt, player)};
     // on demarre la boucle d'animation
  requestAnimationFrame(mainloop); //Créer la fonction
  

  //création du premier ennemi
  mage = new personnage(400,20,10,"images/characters/mage.png");
  setInterval(moveE,500);
  requestAnimationFrame(mainloop);
  
  
   

}


function handleKeydown(evt, player)
{
	switch(evt.key)
	{
		case "ArrowLeft":
			player.move(-1,0);
		break;
		case "ArrowRight":
			player.move(1, 0);
		break;
		case "ArrowUp":
			player.move(0, -1);
		break;
		case "ArrowDown":
			player.move(0, 1);
		break;
	}
}

function handleKeyup(evt, player)
{
	player.move(0, 0);
}

function mainloop() {
	// On efface le canvas
	ctx.clearRect(0,0,canvas.width, canvas.height);
	// Dessiner
	player.draw(ctx);
	mage.draw(ctx);
	// Bouger
	//x+= incrementX;
	//y+= incrementY;

	requestAnimationFrame(mainloop);
}

function moveE(){
	ctx.beginPath();
	mage.moveEnnemi();
	collision();
	requestAnimationFrame(moveE);
}

function collision()
{
	mage.collisionEnnemi();
}




