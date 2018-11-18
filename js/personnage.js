class Personnage {

	constructor(x, y, persoImage, vie) {
		this.x = x;
		this.y = y;
		this.persoImage = new Image();
		this.persoImage.src = persoImage;
		this.vie = vie;
	}
  
	deplacer(dx, dy) {
		this.x += dx*5;
		this.y += dy*5;
	}
	

	dessiner(ctx) {
		ctx.drawImage(this.persoImage, this.x, this.y);
	}
}