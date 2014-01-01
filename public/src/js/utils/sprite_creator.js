var SpriteCreator = (function() {
	var spriteCreator = {};
	
	spriteCreator.addToModel = function(model) {
		
		var sprite = new Kinetic.Sprite({
			x: model.sprite.x,
			y: model.sprite.y,
			image: imageManager.getImage(model.sprite.src),
			animation: model.defaultAnimation,
			animations: model.animations,
			frameRage: model.sprite.frameRate,
			index: model.sprite.index
		});
		model.layer.add(sprite);
		
		return sprite;
	};
	
	return spriteCreator;
}());