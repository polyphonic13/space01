var SpriteCreator = (function() {
	var spriteCreator = {};
	
	spriteCreator.addToModel = function(model) {
		// trace('SpriteCreator/addToModel, frameRate = ' + model.sprite.frameRate);
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
		sprite.setFrameRate(model.sprite.frameRate);
		
		return sprite;
	};
	
	return spriteCreator;
}());