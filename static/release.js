$estr = function() { return js.Boot.__string_rec(this,''); }
easel = {}
easel.util = {}
easel.util.AssetPack = function(base,items) { if( base === $_ ) return; {
	this._collection = new Hash();
	var self = this;
	var pending = items.length;
	{
		var _g = 0;
		while(_g < items.length) {
			var href = [items[_g]];
			++_g;
			var image = [new Image()];
			image[0].onload = function(image,href) {
				return function(_) {
					self._collection.set(href[0],image[0]);
					pending -= 1;
					if(pending == 0) {
						self.onLoad();
					}
				}
			}(image,href);
			image[0].onerror = function() {
				return function(_) {
					null;
					pending -= 1;
					if(pending == 0) {
						self.onLoad();
					}
				}
			}();
			image[0].src = base + href[0];
		}
	}
}}
easel.util.AssetPack.__name__ = ["easel","util","AssetPack"];
easel.util.AssetPack.prototype._collection = null;
easel.util.AssetPack.prototype.get = function(href) {
	return this._collection.get(href);
}
easel.util.AssetPack.prototype.onLoad = function() {
	null;
}
easel.util.AssetPack.prototype.__class__ = easel.util.AssetPack;
easel.display = {}
easel.display.Sprite = function(p) { if( p === $_ ) return; {
	this.transform = new Array();
	this.visible = true;
	this.alpha = 1;
	{
		this.scaleX = 1;
		this._isTransformDirty = true;
		1;
	}
	{
		this.scaleY = 1;
		this._isTransformDirty = true;
		1;
	}
	{
		this.rotation = 0;
		this._isTransformDirty = true;
		0;
	}
	{
		this.centerX = 0;
		this._isTransformDirty = true;
		0;
	}
	{
		this.centerY = 0;
		this._isTransformDirty = true;
		0;
	}
	{
		this.x = 0;
		this._isTransformDirty = true;
		0;
	}
	{
		this.y = 0;
		this._isTransformDirty = true;
		0;
	}
	this.shadow = false;
	this.boundingBox = [0,0,0,0];
}}
easel.display.Sprite.__name__ = ["easel","display","Sprite"];
easel.display.Sprite.prototype._backBuffer = null;
easel.display.Sprite.prototype._isContentsDirty = null;
easel.display.Sprite.prototype._isTransformDirty = null;
easel.display.Sprite.prototype.alpha = null;
easel.display.Sprite.prototype.boundingBox = null;
easel.display.Sprite.prototype.cacheAsBitmap = null;
easel.display.Sprite.prototype.centerX = null;
easel.display.Sprite.prototype.centerY = null;
easel.display.Sprite.prototype.composite = null;
easel.display.Sprite.prototype.detach = function() {
	if(this.parent != null) {
		this.parent.remove(this);
	}
}
easel.display.Sprite.prototype.dirtyContents = function() {
	this._isContentsDirty = true;
}
easel.display.Sprite.prototype.dirtyTransform = function() {
	this._isTransformDirty = true;
}
easel.display.Sprite.prototype.draw = function(ctx) {
	null;
}
easel.display.Sprite.prototype.getHeight = function() {
	return this.boundingBox[3];
}
easel.display.Sprite.prototype.getWidth = function() {
	return this.boundingBox[2];
}
easel.display.Sprite.prototype.height = null;
easel.display.Sprite.prototype.isCacheAsBitmap = function() {
	return this._backBuffer != null;
}
easel.display.Sprite.prototype.mask = null;
easel.display.Sprite.prototype.packBounds = function(ctx) {
	if(this.shadow) {
		this.boundingBox[0] = Math.min(this.boundingBox[0] + this.shadowOffsetX - 5,this.boundingBox[0]);
		this.boundingBox[1] = Math.min(this.boundingBox[1] + this.shadowOffsetY - 5,this.boundingBox[1]);
		this.boundingBox[2] = Math.max(this.boundingBox[2] + this.shadowOffsetX + 5,this.boundingBox[2]);
		this.boundingBox[3] = Math.max(this.boundingBox[3] + this.shadowOffsetY + 5,this.boundingBox[3]);
	}
}
easel.display.Sprite.prototype.parent = null;
easel.display.Sprite.prototype.redrawBackBuffer = function() {
	if(this._backBuffer == null) {
		this._backBuffer = js.Lib.document.createElement("canvas");
	}
	var ctx = this._backBuffer.getContext("2d");
	this.packBounds(ctx);
	this._backBuffer.width = Math.ceil(this.boundingBox[2]);
	this._backBuffer.height = Math.ceil(this.boundingBox[3]);
	null;
	ctx.translate(-this.boundingBox[0],-this.boundingBox[1]);
	if(this.shadow) {
		ctx.shadowColor = this.shadowColor;
		ctx.shadowOffsetX = this.shadowOffsetX;
		ctx.shadowOffsetY = this.shadowOffsetY;
		ctx.shadowBlur = this.shadowBlur;
	}
	this.draw(ctx);
	null;
	this._isContentsDirty = false;
}
easel.display.Sprite.prototype.render = function(ctx) {
	if(this.visible && this.alpha > 0) {
		ctx.save();
		if(this._isTransformDirty) {
			this.updateTransform();
		}
		if(this._isContentsDirty && this._backBuffer != null) {
			this.redrawBackBuffer();
		}
		var t = this.transform;
		ctx.transform(t[0],t[1],t[2],t[3],t[4],t[5]);
		if(this.mask != null) {
			this.mask.render(ctx);
			ctx.clip();
		}
		if(this.alpha < 1) {
			ctx.globalAlpha *= this.alpha;
		}
		if(this.composite != null) {
			ctx.globalCompositeOperation = this.composite;
		}
		if(this._backBuffer != null) {
			ctx.drawImage(this._backBuffer,0,0);
		}
		else {
			if(this.shadow) {
				ctx.shadowColor = this.shadowColor;
				ctx.shadowOffsetX = this.shadowOffsetX;
				ctx.shadowOffsetY = this.shadowOffsetY;
				ctx.shadowBlur = this.shadowBlur;
			}
			this.draw(ctx);
		}
		ctx.restore();
	}
}
easel.display.Sprite.prototype.rotation = null;
easel.display.Sprite.prototype.scaleX = null;
easel.display.Sprite.prototype.scaleY = null;
easel.display.Sprite.prototype.setCacheAsBitmap = function(on) {
	if(on) {
		this.redrawBackBuffer();
	}
	else {
		this._backBuffer = null;
	}
	return on;
}
easel.display.Sprite.prototype.setCenterX = function(centerX) {
	this.centerX = centerX;
	this._isTransformDirty = true;
	return centerX;
}
easel.display.Sprite.prototype.setCenterY = function(centerY) {
	this.centerY = centerY;
	this._isTransformDirty = true;
	return centerY;
}
easel.display.Sprite.prototype.setRotation = function(rotation) {
	this.rotation = rotation;
	this._isTransformDirty = true;
	return rotation;
}
easel.display.Sprite.prototype.setScaleX = function(scaleX) {
	this.scaleX = scaleX;
	this._isTransformDirty = true;
	return scaleX;
}
easel.display.Sprite.prototype.setScaleY = function(scaleY) {
	this.scaleY = scaleY;
	this._isTransformDirty = true;
	return scaleY;
}
easel.display.Sprite.prototype.setShadowBlur = function(shadowBlur) {
	this.shadowBlur = shadowBlur;
	this._isContentsDirty = true;
	return shadowBlur;
}
easel.display.Sprite.prototype.setShadowColor = function(shadowColor) {
	this.shadowColor = shadowColor;
	this._isContentsDirty = true;
	return shadowColor;
}
easel.display.Sprite.prototype.setShadowOffsetX = function(shadowOffsetX) {
	this.shadowOffsetX = shadowOffsetX;
	this._isContentsDirty = true;
	return shadowOffsetX;
}
easel.display.Sprite.prototype.setShadowOffsetY = function(shadowOffsetY) {
	this.shadowOffsetY = shadowOffsetY;
	this._isContentsDirty = true;
	return shadowOffsetY;
}
easel.display.Sprite.prototype.setX = function(x) {
	this.x = x;
	this._isTransformDirty = true;
	return x;
}
easel.display.Sprite.prototype.setY = function(y) {
	this.y = y;
	this._isTransformDirty = true;
	return y;
}
easel.display.Sprite.prototype.shadow = null;
easel.display.Sprite.prototype.shadowBlur = null;
easel.display.Sprite.prototype.shadowColor = null;
easel.display.Sprite.prototype.shadowOffsetX = null;
easel.display.Sprite.prototype.shadowOffsetY = null;
easel.display.Sprite.prototype.transform = null;
easel.display.Sprite.prototype.updateTransform = function() {
	var cos = Math.cos(this.rotation);
	var sin = Math.sin(this.rotation);
	var cx = -this.centerX;
	var cy = -this.centerY;
	if(this._backBuffer != null) {
		cx += this.boundingBox[0];
		cy += this.boundingBox[1];
	}
	this.transform[0] = this.scaleX * cos;
	this.transform[1] = this.scaleX * sin;
	this.transform[2] = this.scaleY * -sin;
	this.transform[3] = this.scaleY * cos;
	this.transform[4] = Math.floor(cx * this.transform[0] + cy * this.transform[2] + this.x);
	this.transform[5] = Math.floor(cx * this.transform[1] + cy * this.transform[3] + this.y);
	this._isTransformDirty = false;
}
easel.display.Sprite.prototype.visible = null;
easel.display.Sprite.prototype.width = null;
easel.display.Sprite.prototype.x = null;
easel.display.Sprite.prototype.y = null;
easel.display.Sprite.prototype.__class__ = easel.display.Sprite;
easel.display.Container = function() { }
easel.display.Container.__name__ = ["easel","display","Container"];
easel.display.Container.prototype.add = null;
easel.display.Container.prototype.contains = null;
easel.display.Container.prototype.remove = null;
easel.display.Container.prototype.removeAll = null;
easel.display.Container.prototype.__class__ = easel.display.Container;
easel.display.Group = function(p) { if( p === $_ ) return; {
	easel.display.Sprite.apply(this,[]);
	this._children = [];
}}
easel.display.Group.__name__ = ["easel","display","Group"];
easel.display.Group.__super__ = easel.display.Sprite;
for(var k in easel.display.Sprite.prototype ) easel.display.Group.prototype[k] = easel.display.Sprite.prototype[k];
easel.display.Group.prototype._children = null;
easel.display.Group.prototype.add = function(sprite) {
	if(sprite.parent != null) {
		sprite.parent.remove(sprite);
	}
	{
		var _g = 0, _g1 = this._children;
		while(_g < _g1.length) {
			var child = _g1[_g];
			++_g;
			if(child == sprite) {
				return;
			}
		}
	}
	this._children.push(sprite);
	sprite.parent = this;
}
easel.display.Group.prototype.contains = function(sprite) {
	{
		var _g = 0, _g1 = this._children;
		while(_g < _g1.length) {
			var x = _g1[_g];
			++_g;
			if(sprite == x) {
				return true;
			}
		}
	}
	return false;
}
easel.display.Group.prototype.draw = function(ctx) {
	var _g = 0, _g1 = this._children;
	while(_g < _g1.length) {
		var child = _g1[_g];
		++_g;
		child.render(ctx);
	}
}
easel.display.Group.prototype.getNumChildren = function() {
	return this._children.length;
}
easel.display.Group.prototype.iterator = function() {
	return this._children.iterator();
}
easel.display.Group.prototype.packBounds = function(ctx) {
	var bounds = [0,0,0,0];
	{
		var _g = 0, _g1 = this._children;
		while(_g < _g1.length) {
			var child = _g1[_g];
			++_g;
			child.packBounds();
			var bb = child.boundingBox;
			bounds[0] = Math.min(bb[0] + child.x,bounds[0]);
			bounds[1] = Math.min(bb[1] + child.y,bounds[1]);
			bounds[2] = Math.max(bb[2] + bb[0] + child.x,bounds[2]);
			bounds[3] = Math.max(bb[3] + bb[1] + child.y,bounds[3]);
		}
	}
	this.boundingBox = bounds;
	null;
	easel.display.Sprite.prototype.packBounds.apply(this,[ctx]);
}
easel.display.Group.prototype.remove = function(sprite) {
	if(this._children.remove(sprite)) {
		sprite.parent = null;
		return true;
	}
	else {
		return false;
	}
}
easel.display.Group.prototype.removeAll = function() {
	{
		var _g = 0, _g1 = this._children;
		while(_g < _g1.length) {
			var sprite = _g1[_g];
			++_g;
			sprite.parent = null;
		}
	}
	this._children = [];
}
easel.display.Group.prototype.__class__ = easel.display.Group;
easel.display.Group.__interfaces__ = [easel.display.Container];
Reflect = function() { }
Reflect.__name__ = ["Reflect"];
Reflect.hasField = function(o,field) {
	if(o.hasOwnProperty != null) return o.hasOwnProperty(field);
	var arr = Reflect.fields(o);
	{ var $it0 = arr.iterator();
	while( $it0.hasNext() ) { var t = $it0.next();
	if(t == field) return true;
	}}
	return false;
}
Reflect.field = function(o,field) {
	var v = null;
	try {
		v = o[field];
	}
	catch( $e1 ) {
		{
			var e = $e1;
			null;
		}
	}
	return v;
}
Reflect.setField = function(o,field,value) {
	o[field] = value;
}
Reflect.callMethod = function(o,func,args) {
	return func.apply(o,args);
}
Reflect.fields = function(o) {
	if(o == null) return new Array();
	var a = new Array();
	if(o.hasOwnProperty) {
		
					for(var i in o)
						if( o.hasOwnProperty(i) )
							a.push(i);
				;
	}
	else {
		var t;
		try {
			t = o.__proto__;
		}
		catch( $e2 ) {
			{
				var e = $e2;
				{
					t = null;
				}
			}
		}
		if(t != null) o.__proto__ = null;
		
					for(var i in o)
						if( i != "__proto__" )
							a.push(i);
				;
		if(t != null) o.__proto__ = t;
	}
	return a;
}
Reflect.isFunction = function(f) {
	return typeof(f) == "function" && f.__name__ == null;
}
Reflect.compare = function(a,b) {
	return ((a == b)?0:((((a) > (b))?1:-1)));
}
Reflect.compareMethods = function(f1,f2) {
	if(f1 == f2) return true;
	if(!Reflect.isFunction(f1) || !Reflect.isFunction(f2)) return false;
	return f1.scope == f2.scope && f1.method == f2.method && f1.method != null;
}
Reflect.isObject = function(v) {
	if(v == null) return false;
	var t = typeof(v);
	return (t == "string" || (t == "object" && !v.__enum__) || (t == "function" && v.__name__ != null));
}
Reflect.deleteField = function(o,f) {
	if(!Reflect.hasField(o,f)) return false;
	delete(o[f]);
	return true;
}
Reflect.copy = function(o) {
	var o2 = { }
	{
		var _g = 0, _g1 = Reflect.fields(o);
		while(_g < _g1.length) {
			var f = _g1[_g];
			++_g;
			o2[f] = Reflect.field(o,f);
		}
	}
	return o2;
}
Reflect.makeVarArgs = function(f) {
	return function() {
		var a = new Array();
		{
			var _g1 = 0, _g = arguments.length;
			while(_g1 < _g) {
				var i = _g1++;
				a.push(arguments[i]);
			}
		}
		return f(a);
	}
}
Reflect.prototype.__class__ = Reflect;
easel.display.ImageSprite = function(image,frames) { if( image === $_ ) return; {
	if(frames == null) frames = 1;
	easel.display.Sprite.apply(this,[]);
	this.boundingBox = [0.0,0.0,image.width / frames,image.height];
	this._image = image;
	this._frames = frames;
}}
easel.display.ImageSprite.__name__ = ["easel","display","ImageSprite"];
easel.display.ImageSprite.__super__ = easel.display.Sprite;
for(var k in easel.display.Sprite.prototype ) easel.display.ImageSprite.prototype[k] = easel.display.Sprite.prototype[k];
easel.display.ImageSprite.fromCanvas = function(source,sx,sy,sw,sh) {
	var canvas = js.Lib.document.createElement("canvas");
	var ctx = canvas.getContext("2d");
	ctx.drawImage(source,sx,sy,sw,sh,0,0,sw,sh);
	return new easel.display.ImageSprite(canvas);
}
easel.display.ImageSprite.prototype._frames = null;
easel.display.ImageSprite.prototype._image = null;
easel.display.ImageSprite.prototype.draw = function(ctx) {
	if(this._frames > 1) {
		var w = Math.floor(this.boundingBox[2]);
		var h = Math.floor(this.boundingBox[3]);
		ctx.drawImage(this._image,this.frame * w,0,w,h,0,0,w,h);
	}
	else {
		ctx.drawImage(this._image,0,0);
	}
}
easel.display.ImageSprite.prototype.frame = null;
easel.display.ImageSprite.prototype.frameHeight = null;
easel.display.ImageSprite.prototype.frameWidth = null;
easel.display.ImageSprite.prototype.getNumFrames = function() {
	return this._frames;
}
easel.display.ImageSprite.prototype.numFrames = null;
easel.display.ImageSprite.prototype.setFrame = function(frame) {
	this.frame = frame;
	return frame;
}
easel.display.ImageSprite.prototype.__class__ = easel.display.ImageSprite;
tetris = {}
tetris.BoardEvent = { __ename__ : ["tetris","BoardEvent"], __constructs__ : ["PieceMoved","PieceDropped","PiecePlaced","PieceRotated","NextPiece","RowsCleared","ScoreChanged","LevelChanged","GameOver"] }
tetris.BoardEvent.GameOver = ["GameOver",8];
tetris.BoardEvent.GameOver.toString = $estr;
tetris.BoardEvent.GameOver.__enum__ = tetris.BoardEvent;
tetris.BoardEvent.LevelChanged = ["LevelChanged",7];
tetris.BoardEvent.LevelChanged.toString = $estr;
tetris.BoardEvent.LevelChanged.__enum__ = tetris.BoardEvent;
tetris.BoardEvent.NextPiece = function(piece,preview) { var $x = ["NextPiece",4,piece,preview]; $x.__enum__ = tetris.BoardEvent; $x.toString = $estr; return $x; }
tetris.BoardEvent.PieceDropped = function(p) { var $x = ["PieceDropped",1,p]; $x.__enum__ = tetris.BoardEvent; $x.toString = $estr; return $x; }
tetris.BoardEvent.PieceMoved = function(p,dx,dy) { var $x = ["PieceMoved",0,p,dx,dy]; $x.__enum__ = tetris.BoardEvent; $x.toString = $estr; return $x; }
tetris.BoardEvent.PiecePlaced = function(p) { var $x = ["PiecePlaced",2,p]; $x.__enum__ = tetris.BoardEvent; $x.toString = $estr; return $x; }
tetris.BoardEvent.PieceRotated = function(p) { var $x = ["PieceRotated",3,p]; $x.__enum__ = tetris.BoardEvent; $x.toString = $estr; return $x; }
tetris.BoardEvent.RowsCleared = function(rows) { var $x = ["RowsCleared",5,rows]; $x.__enum__ = tetris.BoardEvent; $x.toString = $estr; return $x; }
tetris.BoardEvent.ScoreChanged = ["ScoreChanged",6];
tetris.BoardEvent.ScoreChanged.toString = $estr;
tetris.BoardEvent.ScoreChanged.__enum__ = tetris.BoardEvent;
easel.util.BasicDispatcher = function(p) { if( p === $_ ) return; {
	this._handlers = [];
}}
easel.util.BasicDispatcher.__name__ = ["easel","util","BasicDispatcher"];
easel.util.BasicDispatcher.prototype._handlers = null;
easel.util.BasicDispatcher.prototype.addHandler = function(handler) {
	this.removeHandler(handler);
	this._handlers.push(handler);
}
easel.util.BasicDispatcher.prototype.dispatch = function(event) {
	var _g = 0, _g1 = this._handlers;
	while(_g < _g1.length) {
		var h = _g1[_g];
		++_g;
		h(event);
	}
}
easel.util.BasicDispatcher.prototype.removeHandler = function(handler) {
	this._handlers.remove(handler);
}
easel.util.BasicDispatcher.prototype.__class__ = easel.util.BasicDispatcher;
tetris.Board = function(width,height) { if( width === $_ ) return; {
	easel.util.BasicDispatcher.apply(this,[]);
	this._width = width;
	this._height = height;
}}
tetris.Board.__name__ = ["tetris","Board"];
tetris.Board.__super__ = easel.util.BasicDispatcher;
for(var k in easel.util.BasicDispatcher.prototype ) tetris.Board.prototype[k] = easel.util.BasicDispatcher.prototype[k];
tetris.Board.prototype._blocks = null;
tetris.Board.prototype._height = null;
tetris.Board.prototype._piece = null;
tetris.Board.prototype._playing = null;
tetris.Board.prototype._preview = null;
tetris.Board.prototype._rowsCleared = null;
tetris.Board.prototype._width = null;
tetris.Board.prototype.clearFilledRows = function() {
	var filledRows = new Array();
	{
		var _g = 0, _g1 = this._piece.coords;
		while(_g < _g1.length) {
			var coord = _g1[_g];
			++_g;
			var row = this._piece.y + coord[1];
			if(!Lambda.has(filledRows,row)) {
				var filled = true;
				{
					var _g3 = 0, _g2 = this._width;
					while(_g3 < _g2) {
						var col = _g3++;
						if(!this._blocks[row * this._width + col]) {
							filled = false;
							break;
						}
					}
				}
				if(filled) {
					filledRows.push(row);
				}
			}
		}
	}
	if(filledRows.length > 0) {
		filledRows.sort($closure(Reflect,"compare"));
		{
			var _g = 0;
			while(_g < filledRows.length) {
				var row = filledRows[_g];
				++_g;
				var y = row;
				while(y > 0) {
					{
						var _g2 = 0, _g1 = this._width;
						while(_g2 < _g1) {
							var x = _g2++;
							this._blocks[y * this._width + x] = this._blocks[(y - 1) * this._width + x];
						}
					}
					y -= 1;
				}
			}
		}
		filledRows.reverse();
		var count = filledRows.length;
		this.score += this.level * [40,100,300,1200][count - 1];
		this._rowsCleared += count;
		var nextLevel = 1 + Math.floor(this._rowsCleared / 4);
		if(nextLevel != this.level) {
			this.level = nextLevel;
			this.dispatch(tetris.BoardEvent.LevelChanged);
		}
		this.dispatch(tetris.BoardEvent.RowsCleared(filledRows));
		this.dispatch(tetris.BoardEvent.ScoreChanged);
	}
}
tetris.Board.prototype.drop = function() {
	while(this.isValid(this._piece)) {
		this._piece.y += 1;
	}
	this._piece.y -= 1;
	this.dispatch(tetris.BoardEvent.PieceDropped(this._piece));
	this.step();
}
tetris.Board.prototype.dropPiece = function() {
	while(this.isValid(this._piece)) {
		this._piece.y += 1;
	}
	this._piece.y -= 1;
	this.dispatch(tetris.BoardEvent.PieceDropped(this._piece));
}
tetris.Board.prototype.endGame = function() {
	this._playing = false;
	this.dispatch(tetris.BoardEvent.GameOver);
}
tetris.Board.prototype.getHeight = function() {
	return this._height;
}
tetris.Board.prototype.getPieceX = function() {
	return this._piece.x;
}
tetris.Board.prototype.getPieceY = function() {
	return this._piece.y;
}
tetris.Board.prototype.getWidth = function() {
	return this._width;
}
tetris.Board.prototype.height = null;
tetris.Board.prototype.isBlocked = function(x,y) {
	return x < 0 || x >= this._width || y < 0 || y >= this._height || this._blocks[y * this._width + x];
}
tetris.Board.prototype.isValid = function(p) {
	{
		var _g = 0, _g1 = p.coords;
		while(_g < _g1.length) {
			var coord = _g1[_g];
			++_g;
			if(this.isBlocked(p.x + coord[0],p.y + coord[1])) {
				return false;
			}
		}
	}
	return true;
}
tetris.Board.prototype.level = null;
tetris.Board.prototype.movePiece = function(dx,dy) {
	var nx = this._piece.x + dx;
	var ny = this._piece.y + dy;
	{
		var _g = 0, _g1 = this._piece.coords;
		while(_g < _g1.length) {
			var coord = _g1[_g];
			++_g;
			if(this.isBlocked(nx + coord[0],ny + coord[1])) {
				return false;
			}
		}
	}
	this._piece.x = nx;
	this._piece.y = ny;
	this.dispatch(tetris.BoardEvent.PieceMoved(this._piece,dx,dy));
	return true;
}
tetris.Board.prototype.nextPiece = function() {
	this._piece = this._preview;
	this._piece.x = Math.floor(this._width / 2);
	this._piece.y = 2;
	this._preview = tetris.Piece.createRandom();
	if(!this.isValid(this._piece)) {
		this.endGame();
	}
	else {
		this.dispatch(tetris.BoardEvent.NextPiece(this._piece,this._preview));
	}
}
tetris.Board.prototype.pieceX = null;
tetris.Board.prototype.pieceY = null;
tetris.Board.prototype.placePiece = function() {
	{
		var _g = 0, _g1 = this._piece.coords;
		while(_g < _g1.length) {
			var coord = _g1[_g];
			++_g;
			var x = this._piece.x + coord[0];
			var y = this._piece.y + coord[1];
			this._blocks[y * this._width + x] = true;
		}
	}
	this.dispatch(tetris.BoardEvent.PiecePlaced(this._piece));
}
tetris.Board.prototype.rotate = function() {
	var rotated = this._piece.rotate();
	if(rotated != null && this.isValid(rotated)) {
		this._piece = rotated;
		this.dispatch(tetris.BoardEvent.PieceRotated(this._piece));
	}
}
tetris.Board.prototype.score = null;
tetris.Board.prototype.startGame = function() {
	this._blocks = [];
	this._playing = true;
	this._preview = tetris.Piece.createRandom();
	this._rowsCleared = 0;
	this.score = 0;
	this.level = 1;
	this.dispatch(tetris.BoardEvent.LevelChanged);
	this.dispatch(tetris.BoardEvent.ScoreChanged);
	this.nextPiece();
}
tetris.Board.prototype.step = function() {
	if(this._playing && !this.movePiece(0,1)) {
		this.placePiece();
		this.clearFilledRows();
		this.nextPiece();
	}
}
tetris.Board.prototype.width = null;
tetris.Board.prototype.__class__ = tetris.Board;
easel.display.CircleSprite = function(radius) { if( radius === $_ ) return; {
	easel.display.Sprite.apply(this,[]);
	this.boundingBox = [-radius,-radius,2 * radius,2 * radius];
	{
		this.radius = radius;
		this._isContentsDirty = true;
		radius;
	}
}}
easel.display.CircleSprite.__name__ = ["easel","display","CircleSprite"];
easel.display.CircleSprite.__super__ = easel.display.Sprite;
for(var k in easel.display.Sprite.prototype ) easel.display.CircleSprite.prototype[k] = easel.display.Sprite.prototype[k];
easel.display.CircleSprite.prototype.draw = function(ctx) {
	ctx.arc(0,0,this.radius,0,Math.PI * 2,true);
	if(this.fillStyle != null) {
		ctx.fillStyle = this.fillStyle;
		ctx.fill();
	}
}
easel.display.CircleSprite.prototype.fillStyle = null;
easel.display.CircleSprite.prototype.radius = null;
easel.display.CircleSprite.prototype.setFillStyle = function(fillStyle) {
	this.fillStyle = fillStyle;
	this._isContentsDirty = true;
	return fillStyle;
}
easel.display.CircleSprite.prototype.setRadius = function(radius) {
	this.radius = radius;
	this._isContentsDirty = true;
	return radius;
}
easel.display.CircleSprite.prototype.setStrokeStyle = function(strokeStyle) {
	this.strokeStyle = strokeStyle;
	this._isContentsDirty = true;
	return strokeStyle;
}
easel.display.CircleSprite.prototype.strokeStyle = null;
easel.display.CircleSprite.prototype.__class__ = easel.display.CircleSprite;
StringBuf = function(p) { if( p === $_ ) return; {
	this.b = new Array();
}}
StringBuf.__name__ = ["StringBuf"];
StringBuf.prototype.add = function(x) {
	this.b[this.b.length] = x;
}
StringBuf.prototype.addChar = function(c) {
	this.b[this.b.length] = String.fromCharCode(c);
}
StringBuf.prototype.addSub = function(s,pos,len) {
	this.b[this.b.length] = s.substr(pos,len);
}
StringBuf.prototype.b = null;
StringBuf.prototype.toString = function() {
	return this.b.join("");
}
StringBuf.prototype.__class__ = StringBuf;
easel.display.FilledSprite = function(fillStyle,width,height) { if( fillStyle === $_ ) return; {
	if(height == null) height = 0;
	if(width == null) width = 0;
	easel.display.Sprite.apply(this,[]);
	this._width = width;
	this._height = height;
	{
		this.fillStyle = fillStyle;
		this._isContentsDirty = true;
		fillStyle;
	}
}}
easel.display.FilledSprite.__name__ = ["easel","display","FilledSprite"];
easel.display.FilledSprite.__super__ = easel.display.Sprite;
for(var k in easel.display.Sprite.prototype ) easel.display.FilledSprite.prototype[k] = easel.display.Sprite.prototype[k];
easel.display.FilledSprite.prototype._height = null;
easel.display.FilledSprite.prototype._width = null;
easel.display.FilledSprite.prototype.draw = function(ctx) {
	var w = ((this._width > 0)?this._width:ctx.canvas.width);
	var h = ((this._height > 0)?this._height:ctx.canvas.height);
	if(this.fillStyle != null) {
		ctx.fillStyle = this.fillStyle;
		ctx.fillRect(0,0,w,h);
	}
	if(this.strokeStyle) {
		ctx.strokeStyle = this.strokeStyle;
		ctx.strokeRect(0,0,w,h);
	}
}
easel.display.FilledSprite.prototype.fillStyle = null;
easel.display.FilledSprite.prototype.setFillStyle = function(fillStyle) {
	this.fillStyle = fillStyle;
	this._isContentsDirty = true;
	return fillStyle;
}
easel.display.FilledSprite.prototype.setStrokeStyle = function(strokeStyle) {
	this.strokeStyle = strokeStyle;
	this._isContentsDirty = true;
	return strokeStyle;
}
easel.display.FilledSprite.prototype.strokeStyle = null;
easel.display.FilledSprite.prototype.__class__ = easel.display.FilledSprite;
tetris.PieceSprite = function(piece) { if( piece === $_ ) return; {
	easel.display.Group.apply(this,[]);
	this.setX(piece.x * 20);
	this.setY(piece.y * 20);
	this.setCenterX(0.5 * 20);
	this.setCenterY(0.5 * 20);
	var image = tetris.Main.assets.get("blocks.png");
	{
		var _g = 0, _g1 = piece.coords;
		while(_g < _g1.length) {
			var coord = _g1[_g];
			++_g;
			var block = new easel.display.ImageSprite(image,7);
			block.setX(coord[0] * 20);
			block.setY(coord[1] * 20);
			block.setFrame(piece.color);
			this.add(block);
		}
	}
}}
tetris.PieceSprite.__name__ = ["tetris","PieceSprite"];
tetris.PieceSprite.__super__ = easel.display.Group;
for(var k in easel.display.Group.prototype ) tetris.PieceSprite.prototype[k] = easel.display.Group.prototype[k];
tetris.PieceSprite.prototype.__class__ = tetris.PieceSprite;
IntIter = function(min,max) { if( min === $_ ) return; {
	this.min = min;
	this.max = max;
}}
IntIter.__name__ = ["IntIter"];
IntIter.prototype.hasNext = function() {
	return this.min < this.max;
}
IntIter.prototype.max = null;
IntIter.prototype.min = null;
IntIter.prototype.next = function() {
	return this.min++;
}
IntIter.prototype.__class__ = IntIter;
tetris.Piece = function(color,coords) { if( color === $_ ) return; {
	this.color = color;
	this.coords = coords;
}}
tetris.Piece.__name__ = ["tetris","Piece"];
tetris.Piece.createRandom = function() {
	var preset = tetris.Piece.presets[Math.floor(Math.random() * tetris.Piece.presets.length)];
	return new tetris.Piece(preset.color,preset.coords);
}
tetris.Piece.prototype.color = null;
tetris.Piece.prototype.coords = null;
tetris.Piece.prototype.rotate = function() {
	if(this.coords == tetris.Piece.presets[0].coords) {
		return null;
	}
	else {
		var next = [];
		{
			var _g = 0, _g1 = this.coords;
			while(_g < _g1.length) {
				var coord = _g1[_g];
				++_g;
				next.push([-coord[1],coord[0]]);
			}
		}
		var rotated = new tetris.Piece(this.color,next);
		rotated.x = this.x;
		rotated.y = this.y;
		return rotated;
	}
}
tetris.Piece.prototype.x = null;
tetris.Piece.prototype.y = null;
tetris.Piece.prototype.__class__ = tetris.Piece;
easel.display.TextSprite = function(text) { if( text === $_ ) return; {
	if(text == null) text = "";
	easel.display.Sprite.apply(this,[]);
	{
		this.text = text;
		this._isContentsDirty = true;
		text;
	}
	{
		this.font = "12px serif";
		this._isContentsDirty = true;
		"12px serif";
	}
}}
easel.display.TextSprite.__name__ = ["easel","display","TextSprite"];
easel.display.TextSprite.__super__ = easel.display.Sprite;
for(var k in easel.display.Sprite.prototype ) easel.display.TextSprite.prototype[k] = easel.display.Sprite.prototype[k];
easel.display.TextSprite.prototype.align = null;
easel.display.TextSprite.prototype.baseline = null;
easel.display.TextSprite.prototype.draw = function(ctx) {
	ctx.font = this.font;
	if(this.align != null) {
		ctx.textAlign = this.align;
	}
	if(this.baseline != null) {
		ctx.textBaseline = this.baseline;
	}
	if(this.fillStyle != null) {
		ctx.fillStyle = this.fillStyle;
		ctx.fillText(this.text,0,0);
	}
	if(this.strokeStyle != null) {
		ctx.strokeStyle = this.strokeStyle;
		ctx.strokeText(this.text,0,0);
	}
}
easel.display.TextSprite.prototype.fillStyle = null;
easel.display.TextSprite.prototype.font = null;
easel.display.TextSprite.prototype.packBounds = function(ctx) {
	if(ctx != null) {
		ctx.save();
		ctx.font = this.font;
		var metrics = ctx.measureText(this.text);
		ctx.restore();
		this.boundingBox = [0,0,metrics.width,50];
	}
	easel.display.Sprite.prototype.packBounds.apply(this,[ctx]);
}
easel.display.TextSprite.prototype.setAlign = function(align) {
	this.align = align;
	this._isContentsDirty = true;
	return align;
}
easel.display.TextSprite.prototype.setBaseline = function(baseline) {
	this.baseline = baseline;
	this._isContentsDirty = true;
	return baseline;
}
easel.display.TextSprite.prototype.setFillStyle = function(fillStyle) {
	this.fillStyle = fillStyle;
	this._isContentsDirty = true;
	return fillStyle;
}
easel.display.TextSprite.prototype.setFont = function(font) {
	this.font = font;
	this._isContentsDirty = true;
	return font;
}
easel.display.TextSprite.prototype.setStrokeStyle = function(strokeStyle) {
	this.strokeStyle = strokeStyle;
	this._isContentsDirty = true;
	return strokeStyle;
}
easel.display.TextSprite.prototype.setText = function(text) {
	this.text = text;
	this._isContentsDirty = true;
	return text;
}
easel.display.TextSprite.prototype.strokeStyle = null;
easel.display.TextSprite.prototype.text = null;
easel.display.TextSprite.prototype.__class__ = easel.display.TextSprite;
Hash = function(p) { if( p === $_ ) return; {
	this.h = {}
	if(this.h.__proto__ != null) {
		this.h.__proto__ = null;
		delete(this.h.__proto__);
	}
	else null;
}}
Hash.__name__ = ["Hash"];
Hash.prototype.exists = function(key) {
	try {
		key = "$" + key;
		return this.hasOwnProperty.call(this.h,key);
	}
	catch( $e3 ) {
		{
			var e = $e3;
			{
				
				for(var i in this.h)
					if( i == key ) return true;
			;
				return false;
			}
		}
	}
}
Hash.prototype.get = function(key) {
	return this.h["$" + key];
}
Hash.prototype.h = null;
Hash.prototype.iterator = function() {
	return { ref : this.h, it : this.keys(), hasNext : function() {
		return this.it.hasNext();
	}, next : function() {
		var i = this.it.next();
		return this.ref["$" + i];
	}}
}
Hash.prototype.keys = function() {
	var a = new Array();
	
			for(var i in this.h)
				a.push(i.substr(1));
		;
	return a.iterator();
}
Hash.prototype.remove = function(key) {
	if(!this.exists(key)) return false;
	delete(this.h["$" + key]);
	return true;
}
Hash.prototype.set = function(key,value) {
	this.h["$" + key] = value;
}
Hash.prototype.toString = function() {
	var s = new StringBuf();
	s.b[s.b.length] = "{";
	var it = this.keys();
	{ var $it4 = it;
	while( $it4.hasNext() ) { var i = $it4.next();
	{
		s.b[s.b.length] = i;
		s.b[s.b.length] = " => ";
		s.b[s.b.length] = Std.string(this.get(i));
		if(it.hasNext()) s.b[s.b.length] = ", ";
	}
	}}
	s.b[s.b.length] = "}";
	return s.b.join("");
}
Hash.prototype.__class__ = Hash;
easel.media = {}
easel.media.SoundManager = function() { }
easel.media.SoundManager.__name__ = ["easel","media","SoundManager"];
easel.media.SoundManager.play = function(src) {
	var audio;
	if(easel.media.SoundManager.cache.exists(src)) {
		audio = easel.media.SoundManager.cache.get(src);
		audio.currentTime = 0;
	}
	else {
		audio = js.Lib.document.createElement("audio");
		if(!audio.canPlayType) {
			return;
		}
		if(audio.canPlayType("audio/mpeg")) {
			audio.src = src + ".mp3";
		}
		else if(audio.canPlayType("audio/wav")) {
			audio.src = src + ".wav";
		}
		else if(audio.canPlayType("audio/ogg")) {
			audio.src = src + ".ogg";
		}
		else {
			return;
		}
		easel.media.SoundManager.cache.set(src,audio);
	}
	audio.play();
}
easel.media.SoundManager.prototype.__class__ = easel.media.SoundManager;
Std = function() { }
Std.__name__ = ["Std"];
Std["is"] = function(v,t) {
	return js.Boot.__instanceof(v,t);
}
Std.string = function(s) {
	return js.Boot.__string_rec(s,"");
}
Std["int"] = function(x) {
	if(x < 0) return Math.ceil(x);
	return Math.floor(x);
}
Std.parseInt = function(x) {
	var v = parseInt(x);
	if(Math.isNaN(v)) return null;
	return v;
}
Std.parseFloat = function(x) {
	return parseFloat(x);
}
Std.random = function(x) {
	return Math.floor(Math.random() * x);
}
Std.prototype.__class__ = Std;
Lambda = function() { }
Lambda.__name__ = ["Lambda"];
Lambda.array = function(it) {
	var a = new Array();
	{ var $it5 = it.iterator();
	while( $it5.hasNext() ) { var i = $it5.next();
	a.push(i);
	}}
	return a;
}
Lambda.list = function(it) {
	var l = new List();
	{ var $it6 = it.iterator();
	while( $it6.hasNext() ) { var i = $it6.next();
	l.add(i);
	}}
	return l;
}
Lambda.map = function(it,f) {
	var l = new List();
	{ var $it7 = it.iterator();
	while( $it7.hasNext() ) { var x = $it7.next();
	l.add(f(x));
	}}
	return l;
}
Lambda.mapi = function(it,f) {
	var l = new List();
	var i = 0;
	{ var $it8 = it.iterator();
	while( $it8.hasNext() ) { var x = $it8.next();
	l.add(f(i++,x));
	}}
	return l;
}
Lambda.has = function(it,elt,cmp) {
	if(cmp == null) {
		{ var $it9 = it.iterator();
		while( $it9.hasNext() ) { var x = $it9.next();
		if(x == elt) return true;
		}}
	}
	else {
		{ var $it10 = it.iterator();
		while( $it10.hasNext() ) { var x = $it10.next();
		if(cmp(x,elt)) return true;
		}}
	}
	return false;
}
Lambda.exists = function(it,f) {
	{ var $it11 = it.iterator();
	while( $it11.hasNext() ) { var x = $it11.next();
	if(f(x)) return true;
	}}
	return false;
}
Lambda.foreach = function(it,f) {
	{ var $it12 = it.iterator();
	while( $it12.hasNext() ) { var x = $it12.next();
	if(!f(x)) return false;
	}}
	return true;
}
Lambda.iter = function(it,f) {
	{ var $it13 = it.iterator();
	while( $it13.hasNext() ) { var x = $it13.next();
	f(x);
	}}
}
Lambda.filter = function(it,f) {
	var l = new List();
	{ var $it14 = it.iterator();
	while( $it14.hasNext() ) { var x = $it14.next();
	if(f(x)) l.add(x);
	}}
	return l;
}
Lambda.fold = function(it,f,first) {
	{ var $it15 = it.iterator();
	while( $it15.hasNext() ) { var x = $it15.next();
	first = f(x,first);
	}}
	return first;
}
Lambda.count = function(it) {
	var n = 0;
	{ var $it16 = it.iterator();
	while( $it16.hasNext() ) { var _ = $it16.next();
	++n;
	}}
	return n;
}
Lambda.empty = function(it) {
	return !it.iterator().hasNext();
}
Lambda.prototype.__class__ = Lambda;
List = function(p) { if( p === $_ ) return; {
	this.length = 0;
}}
List.__name__ = ["List"];
List.prototype.add = function(item) {
	var x = [item];
	if(this.h == null) this.h = x;
	else this.q[1] = x;
	this.q = x;
	this.length++;
}
List.prototype.clear = function() {
	this.h = null;
	this.q = null;
	this.length = 0;
}
List.prototype.filter = function(f) {
	var l2 = new List();
	var l = this.h;
	while(l != null) {
		var v = l[0];
		l = l[1];
		if(f(v)) l2.add(v);
	}
	return l2;
}
List.prototype.first = function() {
	return (this.h == null?null:this.h[0]);
}
List.prototype.h = null;
List.prototype.isEmpty = function() {
	return (this.h == null);
}
List.prototype.iterator = function() {
	return { h : this.h, hasNext : function() {
		return (this.h != null);
	}, next : function() {
		if(this.h == null) return null;
		var x = this.h[0];
		this.h = this.h[1];
		return x;
	}}
}
List.prototype.join = function(sep) {
	var s = new StringBuf();
	var first = true;
	var l = this.h;
	while(l != null) {
		if(first) first = false;
		else s.b[s.b.length] = sep;
		s.b[s.b.length] = l[0];
		l = l[1];
	}
	return s.b.join("");
}
List.prototype.last = function() {
	return (this.q == null?null:this.q[0]);
}
List.prototype.length = null;
List.prototype.map = function(f) {
	var b = new List();
	var l = this.h;
	while(l != null) {
		var v = l[0];
		l = l[1];
		b.add(f(v));
	}
	return b;
}
List.prototype.pop = function() {
	if(this.h == null) return null;
	var x = this.h[0];
	this.h = this.h[1];
	if(this.h == null) this.q = null;
	this.length--;
	return x;
}
List.prototype.push = function(item) {
	var x = [item,this.h];
	this.h = x;
	if(this.q == null) this.q = x;
	this.length++;
}
List.prototype.q = null;
List.prototype.remove = function(v) {
	var prev = null;
	var l = this.h;
	while(l != null) {
		if(l[0] == v) {
			if(prev == null) this.h = l[1];
			else prev[1] = l[1];
			if(this.q == l) this.q = prev;
			this.length--;
			return true;
		}
		prev = l;
		l = l[1];
	}
	return false;
}
List.prototype.toString = function() {
	var s = new StringBuf();
	var first = true;
	var l = this.h;
	s.b[s.b.length] = "{";
	while(l != null) {
		if(first) first = false;
		else s.b[s.b.length] = ", ";
		s.b[s.b.length] = Std.string(l[0]);
		l = l[1];
	}
	s.b[s.b.length] = "}";
	return s.b.join("");
}
List.prototype.__class__ = List;
js = {}
js.Lib = function() { }
js.Lib.__name__ = ["js","Lib"];
js.Lib.isIE = null;
js.Lib.isOpera = null;
js.Lib.document = null;
js.Lib.window = null;
js.Lib.alert = function(v) {
	alert(js.Boot.__string_rec(v,""));
}
js.Lib.eval = function(code) {
	return eval(code);
}
js.Lib.setErrorHandler = function(f) {
	js.Lib.onerror = f;
}
js.Lib.prototype.__class__ = js.Lib;
js.Boot = function() { }
js.Boot.__name__ = ["js","Boot"];
js.Boot.__unhtml = function(s) {
	return s.split("&").join("&amp;").split("<").join("&lt;").split(">").join("&gt;");
}
js.Boot.__trace = function(v,i) {
	var msg = (i != null?i.fileName + ":" + i.lineNumber + ": ":"");
	msg += js.Boot.__unhtml(js.Boot.__string_rec(v,"")) + "<br/>";
	var d = document.getElementById("haxe:trace");
	if(d == null) alert("No haxe:trace element defined\n" + msg);
	else d.innerHTML += msg;
}
js.Boot.__clear_trace = function() {
	var d = document.getElementById("haxe:trace");
	if(d != null) d.innerHTML = "";
	else null;
}
js.Boot.__closure = function(o,f) {
	var m = o[f];
	if(m == null) return null;
	var f1 = function() {
		return m.apply(o,arguments);
	}
	f1.scope = o;
	f1.method = m;
	return f1;
}
js.Boot.__string_rec = function(o,s) {
	if(o == null) return "null";
	if(s.length >= 5) return "<...>";
	var t = typeof(o);
	if(t == "function" && (o.__name__ != null || o.__ename__ != null)) t = "object";
	switch(t) {
	case "object":{
		if(o instanceof Array) {
			if(o.__enum__ != null) {
				if(o.length == 2) return o[0];
				var str = o[0] + "(";
				s += "\t";
				{
					var _g1 = 2, _g = o.length;
					while(_g1 < _g) {
						var i = _g1++;
						if(i != 2) str += "," + js.Boot.__string_rec(o[i],s);
						else str += js.Boot.__string_rec(o[i],s);
					}
				}
				return str + ")";
			}
			var l = o.length;
			var i;
			var str = "[";
			s += "\t";
			{
				var _g = 0;
				while(_g < l) {
					var i1 = _g++;
					str += ((i1 > 0?",":"")) + js.Boot.__string_rec(o[i1],s);
				}
			}
			str += "]";
			return str;
		}
		var tostr;
		try {
			tostr = o.toString;
		}
		catch( $e17 ) {
			{
				var e = $e17;
				{
					return "???";
				}
			}
		}
		if(tostr != null && tostr != Object.toString) {
			var s2 = o.toString();
			if(s2 != "[object Object]") return s2;
		}
		var k = null;
		var str = "{\n";
		s += "\t";
		var hasp = (o.hasOwnProperty != null);
		for( var k in o ) { ;
		if(hasp && !o.hasOwnProperty(k)) continue;
		if(k == "prototype" || k == "__class__" || k == "__super__" || k == "__interfaces__") continue;
		if(str.length != 2) str += ", \n";
		str += s + k + " : " + js.Boot.__string_rec(o[k],s);
		}
		s = s.substring(1);
		str += "\n" + s + "}";
		return str;
	}break;
	case "function":{
		return "<function>";
	}break;
	case "string":{
		return o;
	}break;
	default:{
		return String(o);
	}break;
	}
}
js.Boot.__interfLoop = function(cc,cl) {
	if(cc == null) return false;
	if(cc == cl) return true;
	var intf = cc.__interfaces__;
	if(intf != null) {
		var _g1 = 0, _g = intf.length;
		while(_g1 < _g) {
			var i = _g1++;
			var i1 = intf[i];
			if(i1 == cl || js.Boot.__interfLoop(i1,cl)) return true;
		}
	}
	return js.Boot.__interfLoop(cc.__super__,cl);
}
js.Boot.__instanceof = function(o,cl) {
	try {
		if(o instanceof cl) {
			if(cl == Array) return (o.__enum__ == null);
			return true;
		}
		if(js.Boot.__interfLoop(o.__class__,cl)) return true;
	}
	catch( $e18 ) {
		{
			var e = $e18;
			{
				if(cl == null) return false;
			}
		}
	}
	switch(cl) {
	case Int:{
		return Math.ceil(o%2147483648.0) === o;
	}break;
	case Float:{
		return typeof(o) == "number";
	}break;
	case Bool:{
		return o === true || o === false;
	}break;
	case String:{
		return typeof(o) == "string";
	}break;
	case Dynamic:{
		return true;
	}break;
	default:{
		if(o == null) return false;
		return o.__enum__ == cl || (cl == Class && o.__name__ != null) || (cl == Enum && o.__ename__ != null);
	}break;
	}
}
js.Boot.__init = function() {
	js.Lib.isIE = (document.all != null && window.opera == null);
	js.Lib.isOpera = (window.opera != null);
	Array.prototype.copy = Array.prototype.slice;
	Array.prototype.insert = function(i,x) {
		this.splice(i,0,x);
	}
	Array.prototype.remove = (Array.prototype.indexOf?function(obj) {
		var idx = this.indexOf(obj);
		if(idx == -1) return false;
		this.splice(idx,1);
		return true;
	}:function(obj) {
		var i = 0;
		var l = this.length;
		while(i < l) {
			if(this[i] == obj) {
				this.splice(i,1);
				return true;
			}
			i++;
		}
		return false;
	});
	Array.prototype.iterator = function() {
		return { cur : 0, arr : this, hasNext : function() {
			return this.cur < this.arr.length;
		}, next : function() {
			return this.arr[this.cur++];
		}}
	}
	var cca = String.prototype.charCodeAt;
	String.prototype.cca = cca;
	String.prototype.charCodeAt = function(i) {
		var x = cca.call(this,i);
		if(isNaN(x)) return null;
		return x;
	}
	var oldsub = String.prototype.substr;
	String.prototype.substr = function(pos,len) {
		if(pos != null && pos != 0 && len != null && len < 0) return "";
		if(len == null) len = this.length;
		if(pos < 0) {
			pos = this.length + pos;
			if(pos < 0) pos = 0;
		}
		else if(len < 0) {
			len = this.length + len - pos;
		}
		return oldsub.apply(this,[pos,len]);
	}
	$closure = js.Boot.__closure;
}
js.Boot.prototype.__class__ = js.Boot;
tetris.Main = function() { }
tetris.Main.__name__ = ["tetris","Main"];
tetris.Main.assets = null;
tetris.Main.main = function() {
	null;
	tetris.Main.assets = new easel.util.AssetPack("./static/",["chrome.png","blocks.png"]);
	tetris.Main.assets.onLoad = function() {
		null;
		var canvas = js.Lib.document.getElementById("screen");
		var stage = new easel.display.Stage(canvas);
		stage.init(new tetris.PlayingScene());
	}
}
tetris.Main.prototype.__class__ = tetris.Main;
easel.display.Scene = function(p) { if( p === $_ ) return; {
	this._root = new easel.display.Group();
}}
easel.display.Scene.__name__ = ["easel","display","Scene"];
easel.display.Scene.prototype._root = null;
easel.display.Scene.prototype.add = function(sprite) {
	this._root.add(sprite);
}
easel.display.Scene.prototype.contains = function(sprite) {
	return this._root.contains(sprite);
}
easel.display.Scene.prototype.load = function() {
	null;
}
easel.display.Scene.prototype.remove = function(sprite) {
	return this._root.remove(sprite);
}
easel.display.Scene.prototype.removeAll = function() {
	this._root.removeAll();
}
easel.display.Scene.prototype.render = function(ctx) {
	ctx.canvas.width = ctx.canvas.width;
	this._root.render(ctx);
}
easel.display.Scene.prototype.stage = null;
easel.display.Scene.prototype.unload = function() {
	null;
}
easel.display.Scene.prototype.update = function(elapsed) {
	null;
}
easel.display.Scene.prototype.__class__ = easel.display.Scene;
easel.display.Scene.__interfaces__ = [easel.display.Container];
tetris.BoardSprite = function(board) { if( board === $_ ) return; {
	easel.display.Group.apply(this,[]);
	this._board = board;
	this._blocks = [];
	board.addHandler($closure(this,"handle"));
}}
tetris.BoardSprite.__name__ = ["tetris","BoardSprite"];
tetris.BoardSprite.__super__ = easel.display.Group;
for(var k in easel.display.Group.prototype ) tetris.BoardSprite.prototype[k] = easel.display.Group.prototype[k];
tetris.BoardSprite.prototype._activePiece = null;
tetris.BoardSprite.prototype._blocks = null;
tetris.BoardSprite.prototype._board = null;
tetris.BoardSprite.prototype.handle = function(event) {
	var $e = (event);
	switch( $e[1] ) {
	case 0:
	var dy = $e[4], dx = $e[3], p = $e[2];
	{
		this._activePiece.setX(20 * p.x);
		this._activePiece.setY(20 * p.y);
	}break;
	case 1:
	var p = $e[2];
	{
		this._activePiece.setX(20 * p.x);
		this._activePiece.setY(20 * p.y);
	}break;
	case 4:
	var p = $e[2];
	{
		this._activePiece = new tetris.PieceSprite(p);
		this.add(this._activePiece);
	}break;
	case 5:
	var rows = $e[2];
	{
		var toRemove = [];
		var explosions = new easel.display.Group();
		rows.push(0);
		{
			var _g1 = 0, _g = rows.length - 1;
			while(_g1 < _g) {
				var r = _g1++;
				var row = rows[r];
				var boom = new easel.display.FilledSprite("#ffffff",this._board._width * 20,20);
				boom.setY(row * 20 - 20 / 2);
				boom.setX(-20 / 2);
				explosions.add(boom);
				{
					var _g3 = 0, _g2 = this._board._width;
					while(_g3 < _g2) {
						var col = _g3++;
						var block = [this._blocks[row * this._board._width + col]];
						if(block[0] != null) {
							toRemove.push(block[0]);
						}
					}
				}
				var ii = row - 1;
				while(ii > rows[r + 1]) {
					{
						var _g3 = 0, _g2 = this._board._width;
						while(_g3 < _g2) {
							var jj = _g3++;
							this._blocks[this._board._width * (ii + r + 1) + jj] = this._blocks[this._board._width * ii + jj];
							var block = [this._blocks[this._board._width * ii + jj]];
							if(block[0] != null) {
								JSTweener.addTween(block[0],{ y : (ii + r + 1) * 20, time : 0.5, delay : 0.25, onUpdate : function(block) {
									return function() {
										block[0]._isTransformDirty = true;
									}
								}(block), transition : "easeinexpo"});
							}
						}
					}
					ii -= 1;
				}
			}
		}
		explosions.alpha = 0;
		this.add(explosions);
		var label = new easel.display.TextSprite();
		label.setText(tetris.BoardSprite.ONOMATOPOEIA[Math.floor(Math.random() * tetris.BoardSprite.ONOMATOPOEIA.length)]);
		{
			label.baseline = "top";
			label._isContentsDirty = true;
			"top";
		}
		{
			label.align = "center";
			label._isContentsDirty = true;
			"center";
		}
		{
			label.font = "bold 16px sans-serif";
			label._isContentsDirty = true;
			"bold 16px sans-serif";
		}
		{
			label.fillStyle = "red";
			label._isContentsDirty = true;
			"red";
		}
		label.setX(this._activePiece.x);
		label.setY(this._activePiece.y);
		this.add(label);
		JSTweener.addTween(label,{ rotation : (Math.random() - 0.5) * (Math.PI / 4), scaleX : 1.5, scaleY : 1.5, y : label.y - 20, onUpdate : function() {
			label._isTransformDirty = true;
		}, onComplete : function() {
			label.detach();
		}});
		var self = this;
		JSTweener.addTween(explosions,{ alpha : 0.8, time : 0.5, transition : "linear", onComplete : function() {
			{
				var _g = 0;
				while(_g < toRemove.length) {
					var block = toRemove[_g];
					++_g;
					self.remove(block);
				}
			}
			self.remove(explosions);
		}});
	}break;
	case 3:
	var p = $e[2];
	{
		this.remove(this._activePiece);
		this.handle(tetris.BoardEvent.NextPiece(p,null));
		{
			var _g = this._activePiece;
			_g.setRotation(_g.rotation - Math.PI / 2);
		}
		var obj = this._activePiece;
		JSTweener.addTween(obj,{ time : 0.4, rotation : obj.rotation + Math.PI / 2, onUpdate : function() {
			obj._isTransformDirty = true;
		}});
	}break;
	case 2:
	var p = $e[2];
	{
		var image = tetris.Main.assets.get("blocks.png");
		{
			var _g = 0, _g1 = p.coords;
			while(_g < _g1.length) {
				var coord = _g1[_g];
				++_g;
				var block = new easel.display.ImageSprite(image,7);
				var bx = p.x + coord[0];
				var by = p.y + coord[1];
				this._blocks[by * this._board._width + bx] = block;
				block.setX(bx * 20);
				block.setY(by * 20);
				block.setCenterX(0.5 * 20);
				block.setCenterY(0.5 * 20);
				block.setFrame(p.color);
				this.add(block);
			}
		}
		var sprite = this._activePiece;
		sprite.composite = "xor";
		sprite.alpha = 0.8;
		JSTweener.addTween(sprite,{ alpha : 0.1, time : 0.6, onComplete : function() {
			sprite.detach();
		}});
		this.add(sprite);
	}break;
	default:{
		null;
	}break;
	}
}
tetris.BoardSprite.prototype.__class__ = tetris.BoardSprite;
tetris.PlayingScene = function(p) { if( p === $_ ) return; {
	easel.display.Scene.apply(this,[]);
}}
tetris.PlayingScene.__name__ = ["tetris","PlayingScene"];
tetris.PlayingScene.__super__ = easel.display.Scene;
for(var k in easel.display.Scene.prototype ) tetris.PlayingScene.prototype[k] = easel.display.Scene.prototype[k];
tetris.PlayingScene.prototype._board = null;
tetris.PlayingScene.prototype._boardSprite = null;
tetris.PlayingScene.prototype._lastTick = null;
tetris.PlayingScene.prototype._level = null;
tetris.PlayingScene.prototype._preview = null;
tetris.PlayingScene.prototype._score = null;
tetris.PlayingScene.prototype._stepDelay = null;
tetris.PlayingScene.prototype.handler = function(event) {
	var $e = (event);
	switch( $e[1] ) {
	case 5:
	{
		easel.media.SoundManager.play("static/clear");
	}break;
	case 8:
	{
		easel.media.SoundManager.play("static/gameover");
		this.stage.setScene(new tetris.GameOverScene());
	}break;
	case 3:
	{
		easel.media.SoundManager.play("static/rotate");
	}break;
	case 2:
	{
		easel.media.SoundManager.play("static/place");
	}break;
	case 4:
	var preview = $e[3];
	{
		if(this._preview != null) {
			this.remove(this._preview);
		}
		this._preview = new tetris.PieceSprite(preview);
		this._preview.setX(275);
		this._preview.setY(80);
		this.add(this._preview);
		var circle = new easel.display.CircleSprite(1);
		this._preview.mask = circle;
		var p = this._preview;
		JSTweener.addTween(circle,{ radius : 100, time : 0.5, transition : "linear", onComplete : function() {
			p.mask = null;
		}});
	}break;
	case 6:
	{
		null;
		this._score.setText("" + this._board.score);
	}break;
	case 7:
	{
		easel.media.SoundManager.play("static/levelup");
		this._stepDelay = 1000 / this._board.level;
		var sprite = this._level;
		sprite.setText("L" + this._board.level);
		{
			sprite.scaleX = 10;
			sprite._isTransformDirty = true;
			10;
		}
		JSTweener.addTween(sprite,{ scaleX : 1, onUpdate : function() {
			sprite._isTransformDirty = true;
		}});
	}break;
	default:{
		null;
	}break;
	}
}
tetris.PlayingScene.prototype.load = function() {
	js.Lib.document.onkeydown = $closure(this,"onKeyDown");
	js.Lib.document.getElementById("screen").onclick = $closure(this,"onClick");
	this.add(new easel.display.ImageSprite(tetris.Main.assets.get("chrome.png")));
	this._board = new tetris.Board(10,20);
	this._boardSprite = new tetris.BoardSprite(this._board);
	this._boardSprite.setCenterX(-20 / 2);
	this._boardSprite.setCenterY(-20 / 2);
	this._boardSprite.setX(13);
	this._boardSprite.setY(9);
	this.add(this._boardSprite);
	this._score = new easel.display.TextSprite("0");
	this._score.setFont("bold 32px monospace");
	this._score.setFillStyle("#00ff00");
	this._score.setX(220);
	this._score.setY(186);
	this._score.setRotation(-Math.PI / 16);
	this._score.setBaseline("top");
	this._score.setCacheAsBitmap(true);
	this.add(this._score);
	this._level = new easel.display.TextSprite("0");
	this._level.setFont("bold 48px cursive");
	this._level.setFillStyle("#00c000");
	this._level.setStrokeStyle("white");
	this._level.setBaseline("middle");
	this._level.setAlign("center");
	this._level.setX(267);
	this._level.setY(365);
	this._level.setRotation(Math.PI / 32);
	this.add(this._level);
	this._board.addHandler($closure(this,"handler"));
	this._board.startGame();
}
tetris.PlayingScene.prototype.onClick = function(event) {
	var x = (event.clientX - this._boardSprite.x) / 20;
	var y = (event.clientY - this._boardSprite.y) / 20;
	if(y < this._board._piece.y) {
		this._board.rotate();
	}
	else if(y > this._board._height - 2) {
		this._board.drop();
	}
	else if(x < this._board._piece.x) {
		this._board.movePiece(-1,0);
	}
	else if(x > this._board._piece.x + 1) {
		this._board.movePiece(1,0);
	}
}
tetris.PlayingScene.prototype.onKeyDown = function(event) {
	switch(event.keyCode) {
	case 37:{
		this._board.movePiece(-1,0);
	}break;
	case 39:{
		this._board.movePiece(1,0);
	}break;
	case 38:{
		this._board.rotate();
	}break;
	case 40:{
		this._board.drop();
	}break;
	default:{
		return;
	}break;
	}
	event.preventDefault();
}
tetris.PlayingScene.prototype.unload = function() {
	js.Lib.document.onkeydown = null;
	js.Lib.document.getElementById("screen").onclick = null;
}
tetris.PlayingScene.prototype.update = function(elapsed) {
	this._lastTick += elapsed;
	while(this._lastTick > this._stepDelay) {
		this._lastTick -= this._stepDelay;
		this._board.step();
	}
}
tetris.PlayingScene.prototype.__class__ = tetris.PlayingScene;
tetris.GameOverScene = function(p) { if( p === $_ ) return; {
	easel.display.Scene.apply(this,[]);
}}
tetris.GameOverScene.__name__ = ["tetris","GameOverScene"];
tetris.GameOverScene.__super__ = easel.display.Scene;
for(var k in easel.display.Scene.prototype ) tetris.GameOverScene.prototype[k] = easel.display.Scene.prototype[k];
tetris.GameOverScene.prototype.load = function() {
	var label = new easel.display.TextSprite("Game Over");
	{
		label.align = "center";
		label._isContentsDirty = true;
		"center";
	}
	{
		label.baseline = "middle";
		label._isContentsDirty = true;
		"middle";
	}
	{
		label.font = "bold 52px cursive";
		label._isContentsDirty = true;
		"bold 52px cursive";
	}
	{
		label.fillStyle = "black";
		label._isContentsDirty = true;
		"black";
	}
	{
		label.scaleX = 0.01;
		label._isTransformDirty = true;
		0.01;
	}
	{
		label.scaleY = 0.01;
		label._isTransformDirty = true;
		0.01;
	}
	label.setX(this.stage.ctx.canvas.width / 2);
	label.setY(this.stage.ctx.canvas.height / 2);
	this.add(label);
	var sub = new easel.display.TextSprite("Click to Replay");
	{
		sub.align = "center";
		sub._isContentsDirty = true;
		"center";
	}
	{
		sub.baseline = "middle";
		sub._isContentsDirty = true;
		"middle";
	}
	{
		sub.font = "bold 16px monospace";
		sub._isContentsDirty = true;
		"bold 16px monospace";
	}
	{
		sub.fillStyle = "black";
		sub._isContentsDirty = true;
		"black";
	}
	sub.setX(this.stage.ctx.canvas.width / 2);
	sub.setY(this.stage.ctx.canvas.height / 2 + 50);
	this.add(sub);
	var chunksX = 5;
	var chunksY = 5;
	var sw = Math.floor(this.stage.ctx.canvas.width / chunksX);
	var sh = Math.floor(this.stage.ctx.canvas.height / chunksY);
	var source = js.Lib.document.createElement("canvas");
	source.width = this.stage.ctx.canvas.width;
	source.height = this.stage.ctx.canvas.height;
	source.getContext("2d").drawImage(this.stage.ctx.canvas,0,0);
	{
		var _g = 0;
		while(_g < chunksX) {
			var y = _g++;
			{
				var _g1 = 0;
				while(_g1 < chunksY) {
					var x = _g1++;
					var sx = sw * x;
					var sy = sh * y;
					var sprite = [new tetris.ParticleSprite(source,sx,sy,sw,sh)];
					sprite[0].setX(sx + sw / 2);
					sprite[0].setY(sy + sh / 2);
					sprite[0].setCenterX(sw / 2);
					sprite[0].setCenterY(sh / 2);
					this.add(sprite[0]);
					JSTweener.addTween(sprite[0],{ x : sprite[0].x + 30 * (Math.random() - 0.5), y : this.stage.ctx.canvas.height, rotation : Math.random() * 2 * Math.PI + Math.PI, time : 2, transition : "linear", onUpdate : function(sprite) {
						return function() {
							sprite[0]._isTransformDirty = true;
						}
					}(sprite)});
				}
			}
		}
	}
	var self = this;
	JSTweener.addTween(label,{ scaleX : 1, scaleY : 1, delay : 1.5, rotation : Math.PI / 16, onUpdate : function() {
		label._isTransformDirty = true;
	}, onStart : function() {
		js.Lib.document.getElementById("screen").onclick = $closure(self,"onClick");
	}});
}
tetris.GameOverScene.prototype.onClick = function(_) {
	this.stage.setScene(new tetris.PlayingScene());
}
tetris.GameOverScene.prototype.unload = function() {
	js.Lib.document.getElementById("screen").onclick = null;
}
tetris.GameOverScene.prototype.__class__ = tetris.GameOverScene;
tetris.ParticleSprite = function(source,sx,sy,sw,sh) { if( source === $_ ) return; {
	easel.display.Sprite.apply(this,[]);
	this._source = source;
	this._sx = sx;
	this._sy = sy;
	this._sw = sw;
	this._sh = sh;
}}
tetris.ParticleSprite.__name__ = ["tetris","ParticleSprite"];
tetris.ParticleSprite.__super__ = easel.display.Sprite;
for(var k in easel.display.Sprite.prototype ) tetris.ParticleSprite.prototype[k] = easel.display.Sprite.prototype[k];
tetris.ParticleSprite.prototype._sh = null;
tetris.ParticleSprite.prototype._source = null;
tetris.ParticleSprite.prototype._sw = null;
tetris.ParticleSprite.prototype._sx = null;
tetris.ParticleSprite.prototype._sy = null;
tetris.ParticleSprite.prototype.draw = function(ctx) {
	ctx.drawImage(this._source,this._sx,this._sy,this._sw,this._sh,0,0,this._sw,this._sh);
}
tetris.ParticleSprite.prototype.packBounds = function(ctx) {
	null;
}
tetris.ParticleSprite.prototype.__class__ = tetris.ParticleSprite;
easel.display.Stage = function(canvas) { if( canvas === $_ ) return; {
	this.ctx = canvas.getContext("2d");
}}
easel.display.Stage.__name__ = ["easel","display","Stage"];
easel.display.Stage.prototype._current = null;
easel.display.Stage.prototype.ctx = null;
easel.display.Stage.prototype.getHeight = function() {
	return this.ctx.canvas.height;
}
easel.display.Stage.prototype.getWidth = function() {
	return this.ctx.canvas.width;
}
easel.display.Stage.prototype.height = null;
easel.display.Stage.prototype.init = function(firstScene) {
	this.setScene(firstScene);
	var lastTime = 0;
	var self = this;
	var tick = function() {
		var now = new Date().getTime();
		var elapsed = now - lastTime;
		var scene = self._current;
		scene.update(elapsed);
		scene.render(self.ctx);
		lastTime = now;
		window.setTimeout(tick,1000 / 30);
	}
	lastTime = Date.now().getTime();
	tick();
}
easel.display.Stage.prototype.setScene = function(scene) {
	if(this._current != null) {
		this._current.unload();
		this._current.stage = null;
	}
	this._current = scene;
	scene.stage = this;
	scene.load();
}
easel.display.Stage.prototype.width = null;
easel.display.Stage.prototype.__class__ = easel.display.Stage;
$Main = function() { }
$Main.__name__ = ["@Main"];
$Main.prototype.__class__ = $Main;
$_ = {}
js.Boot.__res = {}
js.Boot.__init();
{
	Date.now = function() {
		return new Date();
	}
	Date.fromTime = function(t) {
		var d = new Date();
		d["setTime"](t);
		return d;
	}
	Date.fromString = function(s) {
		switch(s.length) {
		case 8:{
			var k = s.split(":");
			var d = new Date();
			d["setTime"](0);
			d["setUTCHours"](k[0]);
			d["setUTCMinutes"](k[1]);
			d["setUTCSeconds"](k[2]);
			return d;
		}break;
		case 10:{
			var k = s.split("-");
			return new Date(k[0],k[1] - 1,k[2],0,0,0);
		}break;
		case 19:{
			var k = s.split(" ");
			var y = k[0].split("-");
			var t = k[1].split(":");
			return new Date(y[0],y[1] - 1,y[2],t[0],t[1],t[2]);
		}break;
		default:{
			throw "Invalid date format : " + s;
		}break;
		}
	}
	Date.prototype["toString"] = function() {
		var date = this;
		var m = date.getMonth() + 1;
		var d = date.getDate();
		var h = date.getHours();
		var mi = date.getMinutes();
		var s = date.getSeconds();
		return date.getFullYear() + "-" + ((m < 10?"0" + m:"" + m)) + "-" + ((d < 10?"0" + d:"" + d)) + " " + ((h < 10?"0" + h:"" + h)) + ":" + ((mi < 10?"0" + mi:"" + mi)) + ":" + ((s < 10?"0" + s:"" + s));
	}
	Date.prototype.__class__ = Date;
	Date.__name__ = ["Date"];
}
{
	String.prototype.__class__ = String;
	String.__name__ = ["String"];
	Array.prototype.__class__ = Array;
	Array.__name__ = ["Array"];
	Int = { __name__ : ["Int"]}
	Dynamic = { __name__ : ["Dynamic"]}
	Float = Number;
	Float.__name__ = ["Float"];
	Bool = { __ename__ : ["Bool"]}
	Class = { __name__ : ["Class"]}
	Enum = { }
	Void = { __ename__ : ["Void"]}
}
{
	Math.NaN = Number["NaN"];
	Math.NEGATIVE_INFINITY = Number["NEGATIVE_INFINITY"];
	Math.POSITIVE_INFINITY = Number["POSITIVE_INFINITY"];
	Math.isFinite = function(i) {
		return isFinite(i);
	}
	Math.isNaN = function(i) {
		return isNaN(i);
	}
	Math.__name__ = ["Math"];
}
{
	js.Lib.document = document;
	js.Lib.window = window;
	onerror = function(msg,url,line) {
		var f = js.Lib.onerror;
		if( f == null )
			return false;
		return f(msg,[url+":"+line]);
	}
}
tetris.Piece.presets = [new tetris.Piece(1,[[-1,-1],[-1,0],[0,0],[0,-1]]),new tetris.Piece(6,[[-2,0],[-1,0],[0,0],[1,0]]),new tetris.Piece(2,[[0,-1],[1,-1],[0,0],[-1,0]]),new tetris.Piece(0,[[0,-1],[-1,-1],[0,0],[1,0]]),new tetris.Piece(4,[[-1,-1],[-1,0],[0,0],[1,0]]),new tetris.Piece(3,[[1,-1],[-1,0],[0,0],[1,0]]),new tetris.Piece(5,[[0,-1],[-1,0],[0,0],[1,0]])];
easel.media.SoundManager.cache = new Hash();
js.Lib.onerror = null;
tetris.BoardSprite.BLOCK_SIZE = 20;
tetris.BoardSprite.ONOMATOPOEIA = ["BAM","BANG","BLOOP","BLURP","BOFF","BONK","CLANK","CLUNK","GLURP","KAPOW","PAM","PLOP","POW","SPLAT","THUNK","WHAP","WHACK","WHAM","ZAM","ZAP","ZLONK"];
$Main.init = tetris.Main.main();
