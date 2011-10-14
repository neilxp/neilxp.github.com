$estr = function() { return js.Boot.__string_rec(this,''); }
easel = {}
easel.util = {}
easel.util.AssetPack = function(base,items) { if( base === $_ ) return; {
	$s.push("easel.util.AssetPack::new");
	var $spos = $s.length;
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
				$s.push("easel.util.AssetPack::new@16");
				var $spos = $s.length;
				{
					var $tmp = function(_) {
						$s.push("easel.util.AssetPack::new@16@16");
						var $spos = $s.length;
						self._collection.set(href[0],image[0]);
						pending -= 1;
						if(pending == 0) {
							self.onLoad();
						}
						$s.pop();
					}
					$s.pop();
					return $tmp;
				}
				$s.pop();
			}(image,href);
			image[0].onerror = function(href) {
				$s.push("easel.util.AssetPack::new@23");
				var $spos = $s.length;
				{
					var $tmp = function(_) {
						$s.push("easel.util.AssetPack::new@23@23");
						var $spos = $s.length;
						haxe.Log.trace("Error loading " + base + href[0],{ fileName : "AssetPack.hx", lineNumber : 24, className : "easel.util.AssetPack", methodName : "new"});
						pending -= 1;
						if(pending == 0) {
							self.onLoad();
						}
						$s.pop();
					}
					$s.pop();
					return $tmp;
				}
				$s.pop();
			}(href);
			image[0].src = base + href[0];
		}
	}
	$s.pop();
}}
easel.util.AssetPack.__name__ = ["easel","util","AssetPack"];
easel.util.AssetPack.prototype._collection = null;
easel.util.AssetPack.prototype.get = function(href) {
	$s.push("easel.util.AssetPack::get");
	var $spos = $s.length;
	{
		var $tmp = this._collection.get(href);
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
easel.util.AssetPack.prototype.onLoad = function() {
	$s.push("easel.util.AssetPack::onLoad");
	var $spos = $s.length;
	null;
	$s.pop();
}
easel.util.AssetPack.prototype.__class__ = easel.util.AssetPack;
easel.display = {}
easel.display.Sprite = function(p) { if( p === $_ ) return; {
	$s.push("easel.display.Sprite::new");
	var $spos = $s.length;
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
	$s.pop();
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
	$s.push("easel.display.Sprite::detach");
	var $spos = $s.length;
	if(this.parent != null) {
		this.parent.remove(this);
	}
	$s.pop();
}
easel.display.Sprite.prototype.dirtyContents = function() {
	$s.push("easel.display.Sprite::dirtyContents");
	var $spos = $s.length;
	this._isContentsDirty = true;
	$s.pop();
}
easel.display.Sprite.prototype.dirtyTransform = function() {
	$s.push("easel.display.Sprite::dirtyTransform");
	var $spos = $s.length;
	this._isTransformDirty = true;
	$s.pop();
}
easel.display.Sprite.prototype.draw = function(ctx) {
	$s.push("easel.display.Sprite::draw");
	var $spos = $s.length;
	null;
	$s.pop();
}
easel.display.Sprite.prototype.getHeight = function() {
	$s.push("easel.display.Sprite::getHeight");
	var $spos = $s.length;
	{
		var $tmp = this.boundingBox[3];
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
easel.display.Sprite.prototype.getWidth = function() {
	$s.push("easel.display.Sprite::getWidth");
	var $spos = $s.length;
	{
		var $tmp = this.boundingBox[2];
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
easel.display.Sprite.prototype.height = null;
easel.display.Sprite.prototype.isCacheAsBitmap = function() {
	$s.push("easel.display.Sprite::isCacheAsBitmap");
	var $spos = $s.length;
	{
		var $tmp = this._backBuffer != null;
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
easel.display.Sprite.prototype.mask = null;
easel.display.Sprite.prototype.packBounds = function(ctx) {
	$s.push("easel.display.Sprite::packBounds");
	var $spos = $s.length;
	if(this.shadow) {
		this.boundingBox[0] = Math.min(this.boundingBox[0] + this.shadowOffsetX - 5,this.boundingBox[0]);
		this.boundingBox[1] = Math.min(this.boundingBox[1] + this.shadowOffsetY - 5,this.boundingBox[1]);
		this.boundingBox[2] = Math.max(this.boundingBox[2] + this.shadowOffsetX + 5,this.boundingBox[2]);
		this.boundingBox[3] = Math.max(this.boundingBox[3] + this.shadowOffsetY + 5,this.boundingBox[3]);
	}
	$s.pop();
}
easel.display.Sprite.prototype.parent = null;
easel.display.Sprite.prototype.redrawBackBuffer = function() {
	$s.push("easel.display.Sprite::redrawBackBuffer");
	var $spos = $s.length;
	if(this._backBuffer == null) {
		this._backBuffer = js.Lib.document.createElement("canvas");
	}
	var ctx = this._backBuffer.getContext("2d");
	this.packBounds(ctx);
	this._backBuffer.width = Math.ceil(this.boundingBox[2]);
	this._backBuffer.height = Math.ceil(this.boundingBox[3]);
	haxe.Log.trace("Drawing backbuffer " + this.boundingBox,{ fileName : "Sprite.hx", lineNumber : 220, className : "easel.display.Sprite", methodName : "redrawBackBuffer"});
	ctx.translate(-this.boundingBox[0],-this.boundingBox[1]);
	if(this.shadow) {
		ctx.shadowColor = this.shadowColor;
		ctx.shadowOffsetX = this.shadowOffsetX;
		ctx.shadowOffsetY = this.shadowOffsetY;
		ctx.shadowBlur = this.shadowBlur;
	}
	this.draw(ctx);
	haxe.Log.trace(this.transform,{ fileName : "Sprite.hx", lineNumber : 235, className : "easel.display.Sprite", methodName : "redrawBackBuffer"});
	this._isContentsDirty = false;
	$s.pop();
}
easel.display.Sprite.prototype.render = function(ctx) {
	$s.push("easel.display.Sprite::render");
	var $spos = $s.length;
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
	$s.pop();
}
easel.display.Sprite.prototype.rotation = null;
easel.display.Sprite.prototype.scaleX = null;
easel.display.Sprite.prototype.scaleY = null;
easel.display.Sprite.prototype.setCacheAsBitmap = function(on) {
	$s.push("easel.display.Sprite::setCacheAsBitmap");
	var $spos = $s.length;
	if(on) {
		this.redrawBackBuffer();
	}
	else {
		this._backBuffer = null;
	}
	{
		$s.pop();
		return on;
	}
	$s.pop();
}
easel.display.Sprite.prototype.setCenterX = function(centerX) {
	$s.push("easel.display.Sprite::setCenterX");
	var $spos = $s.length;
	this.centerX = centerX;
	this._isTransformDirty = true;
	{
		$s.pop();
		return centerX;
	}
	$s.pop();
}
easel.display.Sprite.prototype.setCenterY = function(centerY) {
	$s.push("easel.display.Sprite::setCenterY");
	var $spos = $s.length;
	this.centerY = centerY;
	this._isTransformDirty = true;
	{
		$s.pop();
		return centerY;
	}
	$s.pop();
}
easel.display.Sprite.prototype.setRotation = function(rotation) {
	$s.push("easel.display.Sprite::setRotation");
	var $spos = $s.length;
	this.rotation = rotation;
	this._isTransformDirty = true;
	{
		$s.pop();
		return rotation;
	}
	$s.pop();
}
easel.display.Sprite.prototype.setScaleX = function(scaleX) {
	$s.push("easel.display.Sprite::setScaleX");
	var $spos = $s.length;
	this.scaleX = scaleX;
	this._isTransformDirty = true;
	{
		$s.pop();
		return scaleX;
	}
	$s.pop();
}
easel.display.Sprite.prototype.setScaleY = function(scaleY) {
	$s.push("easel.display.Sprite::setScaleY");
	var $spos = $s.length;
	this.scaleY = scaleY;
	this._isTransformDirty = true;
	{
		$s.pop();
		return scaleY;
	}
	$s.pop();
}
easel.display.Sprite.prototype.setShadowBlur = function(shadowBlur) {
	$s.push("easel.display.Sprite::setShadowBlur");
	var $spos = $s.length;
	this.shadowBlur = shadowBlur;
	this._isContentsDirty = true;
	{
		$s.pop();
		return shadowBlur;
	}
	$s.pop();
}
easel.display.Sprite.prototype.setShadowColor = function(shadowColor) {
	$s.push("easel.display.Sprite::setShadowColor");
	var $spos = $s.length;
	this.shadowColor = shadowColor;
	this._isContentsDirty = true;
	{
		$s.pop();
		return shadowColor;
	}
	$s.pop();
}
easel.display.Sprite.prototype.setShadowOffsetX = function(shadowOffsetX) {
	$s.push("easel.display.Sprite::setShadowOffsetX");
	var $spos = $s.length;
	this.shadowOffsetX = shadowOffsetX;
	this._isContentsDirty = true;
	{
		$s.pop();
		return shadowOffsetX;
	}
	$s.pop();
}
easel.display.Sprite.prototype.setShadowOffsetY = function(shadowOffsetY) {
	$s.push("easel.display.Sprite::setShadowOffsetY");
	var $spos = $s.length;
	this.shadowOffsetY = shadowOffsetY;
	this._isContentsDirty = true;
	{
		$s.pop();
		return shadowOffsetY;
	}
	$s.pop();
}
easel.display.Sprite.prototype.setX = function(x) {
	$s.push("easel.display.Sprite::setX");
	var $spos = $s.length;
	this.x = x;
	this._isTransformDirty = true;
	{
		$s.pop();
		return x;
	}
	$s.pop();
}
easel.display.Sprite.prototype.setY = function(y) {
	$s.push("easel.display.Sprite::setY");
	var $spos = $s.length;
	this.y = y;
	this._isTransformDirty = true;
	{
		$s.pop();
		return y;
	}
	$s.pop();
}
easel.display.Sprite.prototype.shadow = null;
easel.display.Sprite.prototype.shadowBlur = null;
easel.display.Sprite.prototype.shadowColor = null;
easel.display.Sprite.prototype.shadowOffsetX = null;
easel.display.Sprite.prototype.shadowOffsetY = null;
easel.display.Sprite.prototype.transform = null;
easel.display.Sprite.prototype.updateTransform = function() {
	$s.push("easel.display.Sprite::updateTransform");
	var $spos = $s.length;
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
	$s.pop();
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
	$s.push("easel.display.Group::new");
	var $spos = $s.length;
	easel.display.Sprite.apply(this,[]);
	this._children = [];
	$s.pop();
}}
easel.display.Group.__name__ = ["easel","display","Group"];
easel.display.Group.__super__ = easel.display.Sprite;
for(var k in easel.display.Sprite.prototype ) easel.display.Group.prototype[k] = easel.display.Sprite.prototype[k];
easel.display.Group.prototype._children = null;
easel.display.Group.prototype.add = function(sprite) {
	$s.push("easel.display.Group::add");
	var $spos = $s.length;
	if(sprite.parent != null) {
		sprite.parent.remove(sprite);
	}
	{
		var _g = 0, _g1 = this._children;
		while(_g < _g1.length) {
			var child = _g1[_g];
			++_g;
			if(child == sprite) {
				{
					$s.pop();
					return;
				}
			}
		}
	}
	this._children.push(sprite);
	sprite.parent = this;
	$s.pop();
}
easel.display.Group.prototype.contains = function(sprite) {
	$s.push("easel.display.Group::contains");
	var $spos = $s.length;
	{
		var _g = 0, _g1 = this._children;
		while(_g < _g1.length) {
			var x = _g1[_g];
			++_g;
			if(sprite == x) {
				{
					$s.pop();
					return true;
				}
			}
		}
	}
	{
		$s.pop();
		return false;
	}
	$s.pop();
}
easel.display.Group.prototype.draw = function(ctx) {
	$s.push("easel.display.Group::draw");
	var $spos = $s.length;
	var _g = 0, _g1 = this._children;
	while(_g < _g1.length) {
		var child = _g1[_g];
		++_g;
		child.render(ctx);
	}
	$s.pop();
}
easel.display.Group.prototype.getNumChildren = function() {
	$s.push("easel.display.Group::getNumChildren");
	var $spos = $s.length;
	{
		var $tmp = this._children.length;
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
easel.display.Group.prototype.iterator = function() {
	$s.push("easel.display.Group::iterator");
	var $spos = $s.length;
	{
		var $tmp = this._children.iterator();
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
easel.display.Group.prototype.packBounds = function(ctx) {
	$s.push("easel.display.Group::packBounds");
	var $spos = $s.length;
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
	haxe.Log.trace("Packed: " + bounds,{ fileName : "Group.hx", lineNumber : 82, className : "easel.display.Group", methodName : "packBounds"});
	easel.display.Sprite.prototype.packBounds.apply(this,[ctx]);
	$s.pop();
}
easel.display.Group.prototype.remove = function(sprite) {
	$s.push("easel.display.Group::remove");
	var $spos = $s.length;
	if(this._children.remove(sprite)) {
		sprite.parent = null;
		{
			$s.pop();
			return true;
		}
	}
	else {
		{
			$s.pop();
			return false;
		}
	}
	$s.pop();
}
easel.display.Group.prototype.removeAll = function() {
	$s.push("easel.display.Group::removeAll");
	var $spos = $s.length;
	{
		var _g = 0, _g1 = this._children;
		while(_g < _g1.length) {
			var sprite = _g1[_g];
			++_g;
			sprite.parent = null;
		}
	}
	this._children = [];
	$s.pop();
}
easel.display.Group.prototype.__class__ = easel.display.Group;
easel.display.Group.__interfaces__ = [easel.display.Container];
Reflect = function() { }
Reflect.__name__ = ["Reflect"];
Reflect.hasField = function(o,field) {
	$s.push("Reflect::hasField");
	var $spos = $s.length;
	if(o.hasOwnProperty != null) {
		var $tmp = o.hasOwnProperty(field);
		$s.pop();
		return $tmp;
	}
	var arr = Reflect.fields(o);
	{ var $it0 = arr.iterator();
	while( $it0.hasNext() ) { var t = $it0.next();
	if(t == field) {
		$s.pop();
		return true;
	}
	}}
	{
		$s.pop();
		return false;
	}
	$s.pop();
}
Reflect.field = function(o,field) {
	$s.push("Reflect::field");
	var $spos = $s.length;
	var v = null;
	try {
		v = o[field];
	}
	catch( $e1 ) {
		{
			var e = $e1;
			{
				$e = [];
				while($s.length >= $spos) $e.unshift($s.pop());
				$s.push($e[0]);
				null;
			}
		}
	}
	{
		$s.pop();
		return v;
	}
	$s.pop();
}
Reflect.setField = function(o,field,value) {
	$s.push("Reflect::setField");
	var $spos = $s.length;
	o[field] = value;
	$s.pop();
}
Reflect.callMethod = function(o,func,args) {
	$s.push("Reflect::callMethod");
	var $spos = $s.length;
	{
		var $tmp = func.apply(o,args);
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
Reflect.fields = function(o) {
	$s.push("Reflect::fields");
	var $spos = $s.length;
	if(o == null) {
		var $tmp = new Array();
		$s.pop();
		return $tmp;
	}
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
					$e = [];
					while($s.length >= $spos) $e.unshift($s.pop());
					$s.push($e[0]);
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
	{
		$s.pop();
		return a;
	}
	$s.pop();
}
Reflect.isFunction = function(f) {
	$s.push("Reflect::isFunction");
	var $spos = $s.length;
	{
		var $tmp = typeof(f) == "function" && f.__name__ == null;
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
Reflect.compare = function(a,b) {
	$s.push("Reflect::compare");
	var $spos = $s.length;
	{
		var $tmp = ((a == b)?0:((((a) > (b))?1:-1)));
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
Reflect.compareMethods = function(f1,f2) {
	$s.push("Reflect::compareMethods");
	var $spos = $s.length;
	if(f1 == f2) {
		$s.pop();
		return true;
	}
	if(!Reflect.isFunction(f1) || !Reflect.isFunction(f2)) {
		$s.pop();
		return false;
	}
	{
		var $tmp = f1.scope == f2.scope && f1.method == f2.method && f1.method != null;
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
Reflect.isObject = function(v) {
	$s.push("Reflect::isObject");
	var $spos = $s.length;
	if(v == null) {
		$s.pop();
		return false;
	}
	var t = typeof(v);
	{
		var $tmp = (t == "string" || (t == "object" && !v.__enum__) || (t == "function" && v.__name__ != null));
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
Reflect.deleteField = function(o,f) {
	$s.push("Reflect::deleteField");
	var $spos = $s.length;
	if(!Reflect.hasField(o,f)) {
		$s.pop();
		return false;
	}
	delete(o[f]);
	{
		$s.pop();
		return true;
	}
	$s.pop();
}
Reflect.copy = function(o) {
	$s.push("Reflect::copy");
	var $spos = $s.length;
	var o2 = { }
	{
		var _g = 0, _g1 = Reflect.fields(o);
		while(_g < _g1.length) {
			var f = _g1[_g];
			++_g;
			o2[f] = Reflect.field(o,f);
		}
	}
	{
		$s.pop();
		return o2;
	}
	$s.pop();
}
Reflect.makeVarArgs = function(f) {
	$s.push("Reflect::makeVarArgs");
	var $spos = $s.length;
	{
		var $tmp = function() {
			$s.push("Reflect::makeVarArgs@366");
			var $spos = $s.length;
			var a = new Array();
			{
				var _g1 = 0, _g = arguments.length;
				while(_g1 < _g) {
					var i = _g1++;
					a.push(arguments[i]);
				}
			}
			{
				var $tmp = f(a);
				$s.pop();
				return $tmp;
			}
			$s.pop();
		}
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
Reflect.prototype.__class__ = Reflect;
haxe = {}
haxe.Log = function() { }
haxe.Log.__name__ = ["haxe","Log"];
haxe.Log.trace = function(v,infos) {
	$s.push("haxe.Log::trace");
	var $spos = $s.length;
	js.Boot.__trace(v,infos);
	$s.pop();
}
haxe.Log.clear = function() {
	$s.push("haxe.Log::clear");
	var $spos = $s.length;
	js.Boot.__clear_trace();
	$s.pop();
}
haxe.Log.prototype.__class__ = haxe.Log;
easel.display.ImageSprite = function(image,frames) { if( image === $_ ) return; {
	$s.push("easel.display.ImageSprite::new");
	var $spos = $s.length;
	if(frames == null) frames = 1;
	easel.display.Sprite.apply(this,[]);
	this.boundingBox = [0.0,0.0,image.width / frames,image.height];
	this._image = image;
	this._frames = frames;
	$s.pop();
}}
easel.display.ImageSprite.__name__ = ["easel","display","ImageSprite"];
easel.display.ImageSprite.__super__ = easel.display.Sprite;
for(var k in easel.display.Sprite.prototype ) easel.display.ImageSprite.prototype[k] = easel.display.Sprite.prototype[k];
easel.display.ImageSprite.fromCanvas = function(source,sx,sy,sw,sh) {
	$s.push("easel.display.ImageSprite::fromCanvas");
	var $spos = $s.length;
	var canvas = js.Lib.document.createElement("canvas");
	var ctx = canvas.getContext("2d");
	ctx.drawImage(source,sx,sy,sw,sh,0,0,sw,sh);
	{
		var $tmp = new easel.display.ImageSprite(canvas);
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
easel.display.ImageSprite.prototype._frames = null;
easel.display.ImageSprite.prototype._image = null;
easel.display.ImageSprite.prototype.draw = function(ctx) {
	$s.push("easel.display.ImageSprite::draw");
	var $spos = $s.length;
	if(this._frames > 1) {
		var w = Math.floor(this.boundingBox[2]);
		var h = Math.floor(this.boundingBox[3]);
		ctx.drawImage(this._image,this.frame * w,0,w,h,0,0,w,h);
	}
	else {
		ctx.drawImage(this._image,0,0);
	}
	$s.pop();
}
easel.display.ImageSprite.prototype.frame = null;
easel.display.ImageSprite.prototype.frameHeight = null;
easel.display.ImageSprite.prototype.frameWidth = null;
easel.display.ImageSprite.prototype.getNumFrames = function() {
	$s.push("easel.display.ImageSprite::getNumFrames");
	var $spos = $s.length;
	{
		var $tmp = this._frames;
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
easel.display.ImageSprite.prototype.numFrames = null;
easel.display.ImageSprite.prototype.setFrame = function(frame) {
	$s.push("easel.display.ImageSprite::setFrame");
	var $spos = $s.length;
	this.frame = frame;
	{
		$s.pop();
		return frame;
	}
	$s.pop();
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
	$s.push("easel.util.BasicDispatcher::new");
	var $spos = $s.length;
	this._handlers = [];
	$s.pop();
}}
easel.util.BasicDispatcher.__name__ = ["easel","util","BasicDispatcher"];
easel.util.BasicDispatcher.prototype._handlers = null;
easel.util.BasicDispatcher.prototype.addHandler = function(handler) {
	$s.push("easel.util.BasicDispatcher::addHandler");
	var $spos = $s.length;
	this.removeHandler(handler);
	this._handlers.push(handler);
	$s.pop();
}
easel.util.BasicDispatcher.prototype.dispatch = function(event) {
	$s.push("easel.util.BasicDispatcher::dispatch");
	var $spos = $s.length;
	var _g = 0, _g1 = this._handlers;
	while(_g < _g1.length) {
		var h = _g1[_g];
		++_g;
		h(event);
	}
	$s.pop();
}
easel.util.BasicDispatcher.prototype.removeHandler = function(handler) {
	$s.push("easel.util.BasicDispatcher::removeHandler");
	var $spos = $s.length;
	this._handlers.remove(handler);
	$s.pop();
}
easel.util.BasicDispatcher.prototype.__class__ = easel.util.BasicDispatcher;
tetris.Board = function(width,height) { if( width === $_ ) return; {
	$s.push("tetris.Board::new");
	var $spos = $s.length;
	easel.util.BasicDispatcher.apply(this,[]);
	this._width = width;
	this._height = height;
	$s.pop();
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
	$s.push("tetris.Board::clearFilledRows");
	var $spos = $s.length;
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
	$s.pop();
}
tetris.Board.prototype.drop = function() {
	$s.push("tetris.Board::drop");
	var $spos = $s.length;
	while(this.isValid(this._piece)) {
		this._piece.y += 1;
	}
	this._piece.y -= 1;
	this.dispatch(tetris.BoardEvent.PieceDropped(this._piece));
	this.step();
	$s.pop();
}
tetris.Board.prototype.dropPiece = function() {
	$s.push("tetris.Board::dropPiece");
	var $spos = $s.length;
	while(this.isValid(this._piece)) {
		this._piece.y += 1;
	}
	this._piece.y -= 1;
	this.dispatch(tetris.BoardEvent.PieceDropped(this._piece));
	$s.pop();
}
tetris.Board.prototype.endGame = function() {
	$s.push("tetris.Board::endGame");
	var $spos = $s.length;
	this._playing = false;
	this.dispatch(tetris.BoardEvent.GameOver);
	$s.pop();
}
tetris.Board.prototype.getHeight = function() {
	$s.push("tetris.Board::getHeight");
	var $spos = $s.length;
	{
		var $tmp = this._height;
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
tetris.Board.prototype.getPieceX = function() {
	$s.push("tetris.Board::getPieceX");
	var $spos = $s.length;
	{
		var $tmp = this._piece.x;
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
tetris.Board.prototype.getPieceY = function() {
	$s.push("tetris.Board::getPieceY");
	var $spos = $s.length;
	{
		var $tmp = this._piece.y;
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
tetris.Board.prototype.getWidth = function() {
	$s.push("tetris.Board::getWidth");
	var $spos = $s.length;
	{
		var $tmp = this._width;
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
tetris.Board.prototype.height = null;
tetris.Board.prototype.isBlocked = function(x,y) {
	$s.push("tetris.Board::isBlocked");
	var $spos = $s.length;
	{
		var $tmp = x < 0 || x >= this._width || y < 0 || y >= this._height || this._blocks[y * this._width + x];
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
tetris.Board.prototype.isValid = function(p) {
	$s.push("tetris.Board::isValid");
	var $spos = $s.length;
	{
		var _g = 0, _g1 = p.coords;
		while(_g < _g1.length) {
			var coord = _g1[_g];
			++_g;
			if(this.isBlocked(p.x + coord[0],p.y + coord[1])) {
				{
					$s.pop();
					return false;
				}
			}
		}
	}
	{
		$s.pop();
		return true;
	}
	$s.pop();
}
tetris.Board.prototype.level = null;
tetris.Board.prototype.movePiece = function(dx,dy) {
	$s.push("tetris.Board::movePiece");
	var $spos = $s.length;
	var nx = this._piece.x + dx;
	var ny = this._piece.y + dy;
	{
		var _g = 0, _g1 = this._piece.coords;
		while(_g < _g1.length) {
			var coord = _g1[_g];
			++_g;
			if(this.isBlocked(nx + coord[0],ny + coord[1])) {
				{
					$s.pop();
					return false;
				}
			}
		}
	}
	this._piece.x = nx;
	this._piece.y = ny;
	this.dispatch(tetris.BoardEvent.PieceMoved(this._piece,dx,dy));
	{
		$s.pop();
		return true;
	}
	$s.pop();
}
tetris.Board.prototype.nextPiece = function() {
	$s.push("tetris.Board::nextPiece");
	var $spos = $s.length;
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
	$s.pop();
}
tetris.Board.prototype.pieceX = null;
tetris.Board.prototype.pieceY = null;
tetris.Board.prototype.placePiece = function() {
	$s.push("tetris.Board::placePiece");
	var $spos = $s.length;
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
	$s.pop();
}
tetris.Board.prototype.rotate = function() {
	$s.push("tetris.Board::rotate");
	var $spos = $s.length;
	var rotated = this._piece.rotate();
	if(rotated != null && this.isValid(rotated)) {
		this._piece = rotated;
		this.dispatch(tetris.BoardEvent.PieceRotated(this._piece));
	}
	$s.pop();
}
tetris.Board.prototype.score = null;
tetris.Board.prototype.startGame = function() {
	$s.push("tetris.Board::startGame");
	var $spos = $s.length;
	this._blocks = [];
	this._playing = true;
	this._preview = tetris.Piece.createRandom();
	this._rowsCleared = 0;
	this.score = 0;
	this.level = 1;
	this.dispatch(tetris.BoardEvent.LevelChanged);
	this.dispatch(tetris.BoardEvent.ScoreChanged);
	this.nextPiece();
	$s.pop();
}
tetris.Board.prototype.step = function() {
	$s.push("tetris.Board::step");
	var $spos = $s.length;
	if(this._playing && !this.movePiece(0,1)) {
		this.placePiece();
		this.clearFilledRows();
		this.nextPiece();
	}
	$s.pop();
}
tetris.Board.prototype.width = null;
tetris.Board.prototype.__class__ = tetris.Board;
StringBuf = function(p) { if( p === $_ ) return; {
	$s.push("StringBuf::new");
	var $spos = $s.length;
	this.b = new Array();
	$s.pop();
}}
StringBuf.__name__ = ["StringBuf"];
StringBuf.prototype.add = function(x) {
	$s.push("StringBuf::add");
	var $spos = $s.length;
	this.b[this.b.length] = x;
	$s.pop();
}
StringBuf.prototype.addChar = function(c) {
	$s.push("StringBuf::addChar");
	var $spos = $s.length;
	this.b[this.b.length] = String.fromCharCode(c);
	$s.pop();
}
StringBuf.prototype.addSub = function(s,pos,len) {
	$s.push("StringBuf::addSub");
	var $spos = $s.length;
	this.b[this.b.length] = s.substr(pos,len);
	$s.pop();
}
StringBuf.prototype.b = null;
StringBuf.prototype.toString = function() {
	$s.push("StringBuf::toString");
	var $spos = $s.length;
	{
		var $tmp = this.b.join("");
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
StringBuf.prototype.__class__ = StringBuf;
easel.display.CircleSprite = function(radius) { if( radius === $_ ) return; {
	$s.push("easel.display.CircleSprite::new");
	var $spos = $s.length;
	easel.display.Sprite.apply(this,[]);
	this.boundingBox = [-radius,-radius,2 * radius,2 * radius];
	{
		this.radius = radius;
		this._isContentsDirty = true;
		radius;
	}
	$s.pop();
}}
easel.display.CircleSprite.__name__ = ["easel","display","CircleSprite"];
easel.display.CircleSprite.__super__ = easel.display.Sprite;
for(var k in easel.display.Sprite.prototype ) easel.display.CircleSprite.prototype[k] = easel.display.Sprite.prototype[k];
easel.display.CircleSprite.prototype.draw = function(ctx) {
	$s.push("easel.display.CircleSprite::draw");
	var $spos = $s.length;
	ctx.arc(0,0,this.radius,0,Math.PI * 2,true);
	if(this.fillStyle != null) {
		ctx.fillStyle = this.fillStyle;
		ctx.fill();
	}
	$s.pop();
}
easel.display.CircleSprite.prototype.fillStyle = null;
easel.display.CircleSprite.prototype.radius = null;
easel.display.CircleSprite.prototype.setFillStyle = function(fillStyle) {
	$s.push("easel.display.CircleSprite::setFillStyle");
	var $spos = $s.length;
	this.fillStyle = fillStyle;
	this._isContentsDirty = true;
	{
		$s.pop();
		return fillStyle;
	}
	$s.pop();
}
easel.display.CircleSprite.prototype.setRadius = function(radius) {
	$s.push("easel.display.CircleSprite::setRadius");
	var $spos = $s.length;
	this.radius = radius;
	this._isContentsDirty = true;
	{
		$s.pop();
		return radius;
	}
	$s.pop();
}
easel.display.CircleSprite.prototype.setStrokeStyle = function(strokeStyle) {
	$s.push("easel.display.CircleSprite::setStrokeStyle");
	var $spos = $s.length;
	this.strokeStyle = strokeStyle;
	this._isContentsDirty = true;
	{
		$s.pop();
		return strokeStyle;
	}
	$s.pop();
}
easel.display.CircleSprite.prototype.strokeStyle = null;
easel.display.CircleSprite.prototype.__class__ = easel.display.CircleSprite;
easel.display.FilledSprite = function(fillStyle,width,height) { if( fillStyle === $_ ) return; {
	$s.push("easel.display.FilledSprite::new");
	var $spos = $s.length;
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
	$s.pop();
}}
easel.display.FilledSprite.__name__ = ["easel","display","FilledSprite"];
easel.display.FilledSprite.__super__ = easel.display.Sprite;
for(var k in easel.display.Sprite.prototype ) easel.display.FilledSprite.prototype[k] = easel.display.Sprite.prototype[k];
easel.display.FilledSprite.prototype._height = null;
easel.display.FilledSprite.prototype._width = null;
easel.display.FilledSprite.prototype.draw = function(ctx) {
	$s.push("easel.display.FilledSprite::draw");
	var $spos = $s.length;
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
	$s.pop();
}
easel.display.FilledSprite.prototype.fillStyle = null;
easel.display.FilledSprite.prototype.setFillStyle = function(fillStyle) {
	$s.push("easel.display.FilledSprite::setFillStyle");
	var $spos = $s.length;
	this.fillStyle = fillStyle;
	this._isContentsDirty = true;
	{
		$s.pop();
		return fillStyle;
	}
	$s.pop();
}
easel.display.FilledSprite.prototype.setStrokeStyle = function(strokeStyle) {
	$s.push("easel.display.FilledSprite::setStrokeStyle");
	var $spos = $s.length;
	this.strokeStyle = strokeStyle;
	this._isContentsDirty = true;
	{
		$s.pop();
		return strokeStyle;
	}
	$s.pop();
}
easel.display.FilledSprite.prototype.strokeStyle = null;
easel.display.FilledSprite.prototype.__class__ = easel.display.FilledSprite;
tetris.PieceSprite = function(piece) { if( piece === $_ ) return; {
	$s.push("tetris.PieceSprite::new");
	var $spos = $s.length;
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
	$s.pop();
}}
tetris.PieceSprite.__name__ = ["tetris","PieceSprite"];
tetris.PieceSprite.__super__ = easel.display.Group;
for(var k in easel.display.Group.prototype ) tetris.PieceSprite.prototype[k] = easel.display.Group.prototype[k];
tetris.PieceSprite.prototype.__class__ = tetris.PieceSprite;
haxe.Firebug = function() { }
haxe.Firebug.__name__ = ["haxe","Firebug"];
haxe.Firebug.detect = function() {
	$s.push("haxe.Firebug::detect");
	var $spos = $s.length;
	try {
		{
			var $tmp = console != null && console.error != null;
			$s.pop();
			return $tmp;
		}
	}
	catch( $e3 ) {
		{
			var e = $e3;
			{
				$e = [];
				while($s.length >= $spos) $e.unshift($s.pop());
				$s.push($e[0]);
				{
					$s.pop();
					return false;
				}
			}
		}
	}
	$s.pop();
}
haxe.Firebug.redirectTraces = function() {
	$s.push("haxe.Firebug::redirectTraces");
	var $spos = $s.length;
	haxe.Log.trace = $closure(haxe.Firebug,"trace");
	js.Lib.setErrorHandler($closure(haxe.Firebug,"onError"));
	$s.pop();
}
haxe.Firebug.onError = function(err,stack) {
	$s.push("haxe.Firebug::onError");
	var $spos = $s.length;
	var buf = err + "\n";
	{
		var _g = 0;
		while(_g < stack.length) {
			var s = stack[_g];
			++_g;
			buf += "Called from " + s + "\n";
		}
	}
	haxe.Firebug.trace(buf,null);
	{
		$s.pop();
		return true;
	}
	$s.pop();
}
haxe.Firebug.trace = function(v,inf) {
	$s.push("haxe.Firebug::trace");
	var $spos = $s.length;
	var type = (inf != null && inf.customParams != null?inf.customParams[0]:null);
	if(type != "warn" && type != "info" && type != "debug" && type != "error") type = (inf == null?"error":"log");
	console[type](((inf == null?"":inf.fileName + ":" + inf.lineNumber + " : ")) + Std.string(v));
	$s.pop();
}
haxe.Firebug.prototype.__class__ = haxe.Firebug;
tetris.Piece = function(color,coords) { if( color === $_ ) return; {
	$s.push("tetris.Piece::new");
	var $spos = $s.length;
	this.color = color;
	this.coords = coords;
	$s.pop();
}}
tetris.Piece.__name__ = ["tetris","Piece"];
tetris.Piece.createRandom = function() {
	$s.push("tetris.Piece::createRandom");
	var $spos = $s.length;
	var preset = tetris.Piece.presets[Math.floor(Math.random() * tetris.Piece.presets.length)];
	{
		var $tmp = new tetris.Piece(preset.color,preset.coords);
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
tetris.Piece.prototype.color = null;
tetris.Piece.prototype.coords = null;
tetris.Piece.prototype.rotate = function() {
	$s.push("tetris.Piece::rotate");
	var $spos = $s.length;
	if(this.coords == tetris.Piece.presets[0].coords) {
		{
			$s.pop();
			return null;
		}
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
		{
			$s.pop();
			return rotated;
		}
	}
	$s.pop();
}
tetris.Piece.prototype.x = null;
tetris.Piece.prototype.y = null;
tetris.Piece.prototype.__class__ = tetris.Piece;
IntIter = function(min,max) { if( min === $_ ) return; {
	$s.push("IntIter::new");
	var $spos = $s.length;
	this.min = min;
	this.max = max;
	$s.pop();
}}
IntIter.__name__ = ["IntIter"];
IntIter.prototype.hasNext = function() {
	$s.push("IntIter::hasNext");
	var $spos = $s.length;
	{
		var $tmp = this.min < this.max;
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
IntIter.prototype.max = null;
IntIter.prototype.min = null;
IntIter.prototype.next = function() {
	$s.push("IntIter::next");
	var $spos = $s.length;
	{
		var $tmp = this.min++;
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
IntIter.prototype.__class__ = IntIter;
easel.display.TextSprite = function(text) { if( text === $_ ) return; {
	$s.push("easel.display.TextSprite::new");
	var $spos = $s.length;
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
	$s.pop();
}}
easel.display.TextSprite.__name__ = ["easel","display","TextSprite"];
easel.display.TextSprite.__super__ = easel.display.Sprite;
for(var k in easel.display.Sprite.prototype ) easel.display.TextSprite.prototype[k] = easel.display.Sprite.prototype[k];
easel.display.TextSprite.prototype.align = null;
easel.display.TextSprite.prototype.baseline = null;
easel.display.TextSprite.prototype.draw = function(ctx) {
	$s.push("easel.display.TextSprite::draw");
	var $spos = $s.length;
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
	$s.pop();
}
easel.display.TextSprite.prototype.fillStyle = null;
easel.display.TextSprite.prototype.font = null;
easel.display.TextSprite.prototype.packBounds = function(ctx) {
	$s.push("easel.display.TextSprite::packBounds");
	var $spos = $s.length;
	if(ctx != null) {
		ctx.save();
		ctx.font = this.font;
		var metrics = ctx.measureText(this.text);
		ctx.restore();
		this.boundingBox = [0,0,metrics.width,50];
	}
	easel.display.Sprite.prototype.packBounds.apply(this,[ctx]);
	$s.pop();
}
easel.display.TextSprite.prototype.setAlign = function(align) {
	$s.push("easel.display.TextSprite::setAlign");
	var $spos = $s.length;
	this.align = align;
	this._isContentsDirty = true;
	{
		$s.pop();
		return align;
	}
	$s.pop();
}
easel.display.TextSprite.prototype.setBaseline = function(baseline) {
	$s.push("easel.display.TextSprite::setBaseline");
	var $spos = $s.length;
	this.baseline = baseline;
	this._isContentsDirty = true;
	{
		$s.pop();
		return baseline;
	}
	$s.pop();
}
easel.display.TextSprite.prototype.setFillStyle = function(fillStyle) {
	$s.push("easel.display.TextSprite::setFillStyle");
	var $spos = $s.length;
	this.fillStyle = fillStyle;
	this._isContentsDirty = true;
	{
		$s.pop();
		return fillStyle;
	}
	$s.pop();
}
easel.display.TextSprite.prototype.setFont = function(font) {
	$s.push("easel.display.TextSprite::setFont");
	var $spos = $s.length;
	this.font = font;
	this._isContentsDirty = true;
	{
		$s.pop();
		return font;
	}
	$s.pop();
}
easel.display.TextSprite.prototype.setStrokeStyle = function(strokeStyle) {
	$s.push("easel.display.TextSprite::setStrokeStyle");
	var $spos = $s.length;
	this.strokeStyle = strokeStyle;
	this._isContentsDirty = true;
	{
		$s.pop();
		return strokeStyle;
	}
	$s.pop();
}
easel.display.TextSprite.prototype.setText = function(text) {
	$s.push("easel.display.TextSprite::setText");
	var $spos = $s.length;
	this.text = text;
	this._isContentsDirty = true;
	{
		$s.pop();
		return text;
	}
	$s.pop();
}
easel.display.TextSprite.prototype.strokeStyle = null;
easel.display.TextSprite.prototype.text = null;
easel.display.TextSprite.prototype.__class__ = easel.display.TextSprite;
Hash = function(p) { if( p === $_ ) return; {
	$s.push("Hash::new");
	var $spos = $s.length;
	this.h = {}
	if(this.h.__proto__ != null) {
		this.h.__proto__ = null;
		delete(this.h.__proto__);
	}
	else null;
	$s.pop();
}}
Hash.__name__ = ["Hash"];
Hash.prototype.exists = function(key) {
	$s.push("Hash::exists");
	var $spos = $s.length;
	try {
		key = "$" + key;
		{
			var $tmp = this.hasOwnProperty.call(this.h,key);
			$s.pop();
			return $tmp;
		}
	}
	catch( $e4 ) {
		{
			var e = $e4;
			{
				$e = [];
				while($s.length >= $spos) $e.unshift($s.pop());
				$s.push($e[0]);
				
				for(var i in this.h)
					if( i == key ) return true;
			;
				{
					$s.pop();
					return false;
				}
			}
		}
	}
	$s.pop();
}
Hash.prototype.get = function(key) {
	$s.push("Hash::get");
	var $spos = $s.length;
	{
		var $tmp = this.h["$" + key];
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
Hash.prototype.h = null;
Hash.prototype.iterator = function() {
	$s.push("Hash::iterator");
	var $spos = $s.length;
	{
		var $tmp = { ref : this.h, it : this.keys(), hasNext : function() {
			$s.push("Hash::iterator@214");
			var $spos = $s.length;
			{
				var $tmp = this.it.hasNext();
				$s.pop();
				return $tmp;
			}
			$s.pop();
		}, next : function() {
			$s.push("Hash::iterator@215");
			var $spos = $s.length;
			var i = this.it.next();
			{
				var $tmp = this.ref["$" + i];
				$s.pop();
				return $tmp;
			}
			$s.pop();
		}}
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
Hash.prototype.keys = function() {
	$s.push("Hash::keys");
	var $spos = $s.length;
	var a = new Array();
	
			for(var i in this.h)
				a.push(i.substr(1));
		;
	{
		var $tmp = a.iterator();
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
Hash.prototype.remove = function(key) {
	$s.push("Hash::remove");
	var $spos = $s.length;
	if(!this.exists(key)) {
		$s.pop();
		return false;
	}
	delete(this.h["$" + key]);
	{
		$s.pop();
		return true;
	}
	$s.pop();
}
Hash.prototype.set = function(key,value) {
	$s.push("Hash::set");
	var $spos = $s.length;
	this.h["$" + key] = value;
	$s.pop();
}
Hash.prototype.toString = function() {
	$s.push("Hash::toString");
	var $spos = $s.length;
	var s = new StringBuf();
	s.b[s.b.length] = "{";
	var it = this.keys();
	{ var $it5 = it;
	while( $it5.hasNext() ) { var i = $it5.next();
	{
		s.b[s.b.length] = i;
		s.b[s.b.length] = " => ";
		s.b[s.b.length] = Std.string(this.get(i));
		if(it.hasNext()) s.b[s.b.length] = ", ";
	}
	}}
	s.b[s.b.length] = "}";
	{
		var $tmp = s.b.join("");
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
Hash.prototype.__class__ = Hash;
easel.media = {}
easel.media.SoundManager = function() { }
easel.media.SoundManager.__name__ = ["easel","media","SoundManager"];
easel.media.SoundManager.play = function(src) {
	$s.push("easel.media.SoundManager::play");
	var $spos = $s.length;
	var audio;
	if(easel.media.SoundManager.cache.exists(src)) {
		audio = easel.media.SoundManager.cache.get(src);
		audio.currentTime = 0;
	}
	else {
		audio = js.Lib.document.createElement("audio");
		if(!audio.canPlayType) {
			{
				$s.pop();
				return;
			}
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
			{
				$s.pop();
				return;
			}
		}
		easel.media.SoundManager.cache.set(src,audio);
	}
	audio.play();
	$s.pop();
}
easel.media.SoundManager.prototype.__class__ = easel.media.SoundManager;
Std = function() { }
Std.__name__ = ["Std"];
Std["is"] = function(v,t) {
	$s.push("Std::is");
	var $spos = $s.length;
	{
		var $tmp = js.Boot.__instanceof(v,t);
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
Std.string = function(s) {
	$s.push("Std::string");
	var $spos = $s.length;
	{
		var $tmp = js.Boot.__string_rec(s,"");
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
Std["int"] = function(x) {
	$s.push("Std::int");
	var $spos = $s.length;
	if(x < 0) {
		var $tmp = Math.ceil(x);
		$s.pop();
		return $tmp;
	}
	{
		var $tmp = Math.floor(x);
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
Std.parseInt = function(x) {
	$s.push("Std::parseInt");
	var $spos = $s.length;
	var v = parseInt(x);
	if(Math.isNaN(v)) {
		$s.pop();
		return null;
	}
	{
		$s.pop();
		return v;
	}
	$s.pop();
}
Std.parseFloat = function(x) {
	$s.push("Std::parseFloat");
	var $spos = $s.length;
	{
		var $tmp = parseFloat(x);
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
Std.random = function(x) {
	$s.push("Std::random");
	var $spos = $s.length;
	{
		var $tmp = Math.floor(Math.random() * x);
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
Std.prototype.__class__ = Std;
Lambda = function() { }
Lambda.__name__ = ["Lambda"];
Lambda.array = function(it) {
	$s.push("Lambda::array");
	var $spos = $s.length;
	var a = new Array();
	{ var $it6 = it.iterator();
	while( $it6.hasNext() ) { var i = $it6.next();
	a.push(i);
	}}
	{
		$s.pop();
		return a;
	}
	$s.pop();
}
Lambda.list = function(it) {
	$s.push("Lambda::list");
	var $spos = $s.length;
	var l = new List();
	{ var $it7 = it.iterator();
	while( $it7.hasNext() ) { var i = $it7.next();
	l.add(i);
	}}
	{
		$s.pop();
		return l;
	}
	$s.pop();
}
Lambda.map = function(it,f) {
	$s.push("Lambda::map");
	var $spos = $s.length;
	var l = new List();
	{ var $it8 = it.iterator();
	while( $it8.hasNext() ) { var x = $it8.next();
	l.add(f(x));
	}}
	{
		$s.pop();
		return l;
	}
	$s.pop();
}
Lambda.mapi = function(it,f) {
	$s.push("Lambda::mapi");
	var $spos = $s.length;
	var l = new List();
	var i = 0;
	{ var $it9 = it.iterator();
	while( $it9.hasNext() ) { var x = $it9.next();
	l.add(f(i++,x));
	}}
	{
		$s.pop();
		return l;
	}
	$s.pop();
}
Lambda.has = function(it,elt,cmp) {
	$s.push("Lambda::has");
	var $spos = $s.length;
	if(cmp == null) {
		{ var $it10 = it.iterator();
		while( $it10.hasNext() ) { var x = $it10.next();
		if(x == elt) {
			$s.pop();
			return true;
		}
		}}
	}
	else {
		{ var $it11 = it.iterator();
		while( $it11.hasNext() ) { var x = $it11.next();
		if(cmp(x,elt)) {
			$s.pop();
			return true;
		}
		}}
	}
	{
		$s.pop();
		return false;
	}
	$s.pop();
}
Lambda.exists = function(it,f) {
	$s.push("Lambda::exists");
	var $spos = $s.length;
	{ var $it12 = it.iterator();
	while( $it12.hasNext() ) { var x = $it12.next();
	if(f(x)) {
		$s.pop();
		return true;
	}
	}}
	{
		$s.pop();
		return false;
	}
	$s.pop();
}
Lambda.foreach = function(it,f) {
	$s.push("Lambda::foreach");
	var $spos = $s.length;
	{ var $it13 = it.iterator();
	while( $it13.hasNext() ) { var x = $it13.next();
	if(!f(x)) {
		$s.pop();
		return false;
	}
	}}
	{
		$s.pop();
		return true;
	}
	$s.pop();
}
Lambda.iter = function(it,f) {
	$s.push("Lambda::iter");
	var $spos = $s.length;
	{ var $it14 = it.iterator();
	while( $it14.hasNext() ) { var x = $it14.next();
	f(x);
	}}
	$s.pop();
}
Lambda.filter = function(it,f) {
	$s.push("Lambda::filter");
	var $spos = $s.length;
	var l = new List();
	{ var $it15 = it.iterator();
	while( $it15.hasNext() ) { var x = $it15.next();
	if(f(x)) l.add(x);
	}}
	{
		$s.pop();
		return l;
	}
	$s.pop();
}
Lambda.fold = function(it,f,first) {
	$s.push("Lambda::fold");
	var $spos = $s.length;
	{ var $it16 = it.iterator();
	while( $it16.hasNext() ) { var x = $it16.next();
	first = f(x,first);
	}}
	{
		$s.pop();
		return first;
	}
	$s.pop();
}
Lambda.count = function(it) {
	$s.push("Lambda::count");
	var $spos = $s.length;
	var n = 0;
	{ var $it17 = it.iterator();
	while( $it17.hasNext() ) { var _ = $it17.next();
	++n;
	}}
	{
		$s.pop();
		return n;
	}
	$s.pop();
}
Lambda.empty = function(it) {
	$s.push("Lambda::empty");
	var $spos = $s.length;
	{
		var $tmp = !it.iterator().hasNext();
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
Lambda.prototype.__class__ = Lambda;
List = function(p) { if( p === $_ ) return; {
	$s.push("List::new");
	var $spos = $s.length;
	this.length = 0;
	$s.pop();
}}
List.__name__ = ["List"];
List.prototype.add = function(item) {
	$s.push("List::add");
	var $spos = $s.length;
	var x = [item];
	if(this.h == null) this.h = x;
	else this.q[1] = x;
	this.q = x;
	this.length++;
	$s.pop();
}
List.prototype.clear = function() {
	$s.push("List::clear");
	var $spos = $s.length;
	this.h = null;
	this.q = null;
	this.length = 0;
	$s.pop();
}
List.prototype.filter = function(f) {
	$s.push("List::filter");
	var $spos = $s.length;
	var l2 = new List();
	var l = this.h;
	while(l != null) {
		var v = l[0];
		l = l[1];
		if(f(v)) l2.add(v);
	}
	{
		$s.pop();
		return l2;
	}
	$s.pop();
}
List.prototype.first = function() {
	$s.push("List::first");
	var $spos = $s.length;
	{
		var $tmp = (this.h == null?null:this.h[0]);
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
List.prototype.h = null;
List.prototype.isEmpty = function() {
	$s.push("List::isEmpty");
	var $spos = $s.length;
	{
		var $tmp = (this.h == null);
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
List.prototype.iterator = function() {
	$s.push("List::iterator");
	var $spos = $s.length;
	{
		var $tmp = { h : this.h, hasNext : function() {
			$s.push("List::iterator@196");
			var $spos = $s.length;
			{
				var $tmp = (this.h != null);
				$s.pop();
				return $tmp;
			}
			$s.pop();
		}, next : function() {
			$s.push("List::iterator@199");
			var $spos = $s.length;
			if(this.h == null) {
				$s.pop();
				return null;
			}
			var x = this.h[0];
			this.h = this.h[1];
			{
				$s.pop();
				return x;
			}
			$s.pop();
		}}
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
List.prototype.join = function(sep) {
	$s.push("List::join");
	var $spos = $s.length;
	var s = new StringBuf();
	var first = true;
	var l = this.h;
	while(l != null) {
		if(first) first = false;
		else s.b[s.b.length] = sep;
		s.b[s.b.length] = l[0];
		l = l[1];
	}
	{
		var $tmp = s.b.join("");
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
List.prototype.last = function() {
	$s.push("List::last");
	var $spos = $s.length;
	{
		var $tmp = (this.q == null?null:this.q[0]);
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
List.prototype.length = null;
List.prototype.map = function(f) {
	$s.push("List::map");
	var $spos = $s.length;
	var b = new List();
	var l = this.h;
	while(l != null) {
		var v = l[0];
		l = l[1];
		b.add(f(v));
	}
	{
		$s.pop();
		return b;
	}
	$s.pop();
}
List.prototype.pop = function() {
	$s.push("List::pop");
	var $spos = $s.length;
	if(this.h == null) {
		$s.pop();
		return null;
	}
	var x = this.h[0];
	this.h = this.h[1];
	if(this.h == null) this.q = null;
	this.length--;
	{
		$s.pop();
		return x;
	}
	$s.pop();
}
List.prototype.push = function(item) {
	$s.push("List::push");
	var $spos = $s.length;
	var x = [item,this.h];
	this.h = x;
	if(this.q == null) this.q = x;
	this.length++;
	$s.pop();
}
List.prototype.q = null;
List.prototype.remove = function(v) {
	$s.push("List::remove");
	var $spos = $s.length;
	var prev = null;
	var l = this.h;
	while(l != null) {
		if(l[0] == v) {
			if(prev == null) this.h = l[1];
			else prev[1] = l[1];
			if(this.q == l) this.q = prev;
			this.length--;
			{
				$s.pop();
				return true;
			}
		}
		prev = l;
		l = l[1];
	}
	{
		$s.pop();
		return false;
	}
	$s.pop();
}
List.prototype.toString = function() {
	$s.push("List::toString");
	var $spos = $s.length;
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
	{
		var $tmp = s.b.join("");
		$s.pop();
		return $tmp;
	}
	$s.pop();
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
	$s.push("js.Lib::alert");
	var $spos = $s.length;
	alert(js.Boot.__string_rec(v,""));
	$s.pop();
}
js.Lib.eval = function(code) {
	$s.push("js.Lib::eval");
	var $spos = $s.length;
	{
		var $tmp = eval(code);
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
js.Lib.setErrorHandler = function(f) {
	$s.push("js.Lib::setErrorHandler");
	var $spos = $s.length;
	js.Lib.onerror = f;
	$s.pop();
}
js.Lib.prototype.__class__ = js.Lib;
tetris.Main = function() { }
tetris.Main.__name__ = ["tetris","Main"];
tetris.Main.assets = null;
tetris.Main.main = function() {
	$s.push("tetris.Main::main");
	var $spos = $s.length;
	if(haxe.Firebug.detect()) {
		haxe.Firebug.redirectTraces();
	}
	haxe.Log.trace("Booting up",{ fileName : "Main.hx", lineNumber : 25, className : "tetris.Main", methodName : "main"});
	tetris.Main.assets = new easel.util.AssetPack("./static/",["chrome.png","blocks.png"]);
	tetris.Main.assets.onLoad = function() {
		$s.push("tetris.Main::main@27");
		var $spos = $s.length;
		haxe.Log.trace("Assets loaded",{ fileName : "Main.hx", lineNumber : 28, className : "tetris.Main", methodName : "main"});
		var canvas = js.Lib.document.getElementById("screen");
		var stage = new easel.display.Stage(canvas);
		stage.init(new tetris.PlayingScene());
		$s.pop();
	}
	$s.pop();
}
tetris.Main.prototype.__class__ = tetris.Main;
js.Boot = function() { }
js.Boot.__name__ = ["js","Boot"];
js.Boot.__unhtml = function(s) {
	$s.push("js.Boot::__unhtml");
	var $spos = $s.length;
	{
		var $tmp = s.split("&").join("&amp;").split("<").join("&lt;").split(">").join("&gt;");
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
js.Boot.__trace = function(v,i) {
	$s.push("js.Boot::__trace");
	var $spos = $s.length;
	var msg = (i != null?i.fileName + ":" + i.lineNumber + ": ":"");
	msg += js.Boot.__unhtml(js.Boot.__string_rec(v,"")) + "<br/>";
	var d = document.getElementById("haxe:trace");
	if(d == null) alert("No haxe:trace element defined\n" + msg);
	else d.innerHTML += msg;
	$s.pop();
}
js.Boot.__clear_trace = function() {
	$s.push("js.Boot::__clear_trace");
	var $spos = $s.length;
	var d = document.getElementById("haxe:trace");
	if(d != null) d.innerHTML = "";
	else null;
	$s.pop();
}
js.Boot.__closure = function(o,f) {
	$s.push("js.Boot::__closure");
	var $spos = $s.length;
	var m = o[f];
	if(m == null) {
		$s.pop();
		return null;
	}
	var f1 = function() {
		$s.push("js.Boot::__closure@67");
		var $spos = $s.length;
		{
			var $tmp = m.apply(o,arguments);
			$s.pop();
			return $tmp;
		}
		$s.pop();
	}
	f1.scope = o;
	f1.method = m;
	{
		$s.pop();
		return f1;
	}
	$s.pop();
}
js.Boot.__string_rec = function(o,s) {
	$s.push("js.Boot::__string_rec");
	var $spos = $s.length;
	if(o == null) {
		$s.pop();
		return "null";
	}
	if(s.length >= 5) {
		$s.pop();
		return "<...>";
	}
	var t = typeof(o);
	if(t == "function" && (o.__name__ != null || o.__ename__ != null)) t = "object";
	switch(t) {
	case "object":{
		if(o instanceof Array) {
			if(o.__enum__ != null) {
				if(o.length == 2) {
					var $tmp = o[0];
					$s.pop();
					return $tmp;
				}
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
				{
					var $tmp = str + ")";
					$s.pop();
					return $tmp;
				}
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
			{
				$s.pop();
				return str;
			}
		}
		var tostr;
		try {
			tostr = o.toString;
		}
		catch( $e18 ) {
			{
				var e = $e18;
				{
					$e = [];
					while($s.length >= $spos) $e.unshift($s.pop());
					$s.push($e[0]);
					{
						$s.pop();
						return "???";
					}
				}
			}
		}
		if(tostr != null && tostr != Object.toString) {
			var s2 = o.toString();
			if(s2 != "[object Object]") {
				$s.pop();
				return s2;
			}
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
		{
			$s.pop();
			return str;
		}
	}break;
	case "function":{
		{
			$s.pop();
			return "<function>";
		}
	}break;
	case "string":{
		{
			$s.pop();
			return o;
		}
	}break;
	default:{
		{
			var $tmp = String(o);
			$s.pop();
			return $tmp;
		}
	}break;
	}
	$s.pop();
}
js.Boot.__interfLoop = function(cc,cl) {
	$s.push("js.Boot::__interfLoop");
	var $spos = $s.length;
	if(cc == null) {
		$s.pop();
		return false;
	}
	if(cc == cl) {
		$s.pop();
		return true;
	}
	var intf = cc.__interfaces__;
	if(intf != null) {
		var _g1 = 0, _g = intf.length;
		while(_g1 < _g) {
			var i = _g1++;
			var i1 = intf[i];
			if(i1 == cl || js.Boot.__interfLoop(i1,cl)) {
				$s.pop();
				return true;
			}
		}
	}
	{
		var $tmp = js.Boot.__interfLoop(cc.__super__,cl);
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
js.Boot.__instanceof = function(o,cl) {
	$s.push("js.Boot::__instanceof");
	var $spos = $s.length;
	try {
		if(o instanceof cl) {
			if(cl == Array) {
				var $tmp = (o.__enum__ == null);
				$s.pop();
				return $tmp;
			}
			{
				$s.pop();
				return true;
			}
		}
		if(js.Boot.__interfLoop(o.__class__,cl)) {
			$s.pop();
			return true;
		}
	}
	catch( $e19 ) {
		{
			var e = $e19;
			{
				$e = [];
				while($s.length >= $spos) $e.unshift($s.pop());
				$s.push($e[0]);
				if(cl == null) {
					$s.pop();
					return false;
				}
			}
		}
	}
	switch(cl) {
	case Int:{
		{
			var $tmp = Math.ceil(o%2147483648.0) === o;
			$s.pop();
			return $tmp;
		}
	}break;
	case Float:{
		{
			var $tmp = typeof(o) == "number";
			$s.pop();
			return $tmp;
		}
	}break;
	case Bool:{
		{
			var $tmp = o === true || o === false;
			$s.pop();
			return $tmp;
		}
	}break;
	case String:{
		{
			var $tmp = typeof(o) == "string";
			$s.pop();
			return $tmp;
		}
	}break;
	case Dynamic:{
		{
			$s.pop();
			return true;
		}
	}break;
	default:{
		if(o == null) {
			$s.pop();
			return false;
		}
		{
			var $tmp = o.__enum__ == cl || (cl == Class && o.__name__ != null) || (cl == Enum && o.__ename__ != null);
			$s.pop();
			return $tmp;
		}
	}break;
	}
	$s.pop();
}
js.Boot.__init = function() {
	$s.push("js.Boot::__init");
	var $spos = $s.length;
	js.Lib.isIE = (document.all != null && window.opera == null);
	js.Lib.isOpera = (window.opera != null);
	Array.prototype.copy = Array.prototype.slice;
	Array.prototype.insert = function(i,x) {
		$s.push("js.Boot::__init@199");
		var $spos = $s.length;
		this.splice(i,0,x);
		$s.pop();
	}
	Array.prototype.remove = (Array.prototype.indexOf?function(obj) {
		$s.push("js.Boot::__init@202");
		var $spos = $s.length;
		var idx = this.indexOf(obj);
		if(idx == -1) {
			$s.pop();
			return false;
		}
		this.splice(idx,1);
		{
			$s.pop();
			return true;
		}
		$s.pop();
	}:function(obj) {
		$s.push("js.Boot::__init@207");
		var $spos = $s.length;
		var i = 0;
		var l = this.length;
		while(i < l) {
			if(this[i] == obj) {
				this.splice(i,1);
				{
					$s.pop();
					return true;
				}
			}
			i++;
		}
		{
			$s.pop();
			return false;
		}
		$s.pop();
	});
	Array.prototype.iterator = function() {
		$s.push("js.Boot::__init@219");
		var $spos = $s.length;
		{
			var $tmp = { cur : 0, arr : this, hasNext : function() {
				$s.push("js.Boot::__init@219@223");
				var $spos = $s.length;
				{
					var $tmp = this.cur < this.arr.length;
					$s.pop();
					return $tmp;
				}
				$s.pop();
			}, next : function() {
				$s.push("js.Boot::__init@219@226");
				var $spos = $s.length;
				{
					var $tmp = this.arr[this.cur++];
					$s.pop();
					return $tmp;
				}
				$s.pop();
			}}
			$s.pop();
			return $tmp;
		}
		$s.pop();
	}
	var cca = String.prototype.charCodeAt;
	String.prototype.cca = cca;
	String.prototype.charCodeAt = function(i) {
		$s.push("js.Boot::__init@233");
		var $spos = $s.length;
		var x = cca.call(this,i);
		if(isNaN(x)) {
			$s.pop();
			return null;
		}
		{
			$s.pop();
			return x;
		}
		$s.pop();
	}
	var oldsub = String.prototype.substr;
	String.prototype.substr = function(pos,len) {
		$s.push("js.Boot::__init@240");
		var $spos = $s.length;
		if(pos != null && pos != 0 && len != null && len < 0) {
			$s.pop();
			return "";
		}
		if(len == null) len = this.length;
		if(pos < 0) {
			pos = this.length + pos;
			if(pos < 0) pos = 0;
		}
		else if(len < 0) {
			len = this.length + len - pos;
		}
		{
			var $tmp = oldsub.apply(this,[pos,len]);
			$s.pop();
			return $tmp;
		}
		$s.pop();
	}
	$closure = js.Boot.__closure;
	$s.pop();
}
js.Boot.prototype.__class__ = js.Boot;
tetris.BoardSprite = function(board) { if( board === $_ ) return; {
	$s.push("tetris.BoardSprite::new");
	var $spos = $s.length;
	easel.display.Group.apply(this,[]);
	this._board = board;
	this._blocks = [];
	board.addHandler($closure(this,"handle"));
	$s.pop();
}}
tetris.BoardSprite.__name__ = ["tetris","BoardSprite"];
tetris.BoardSprite.__super__ = easel.display.Group;
for(var k in easel.display.Group.prototype ) tetris.BoardSprite.prototype[k] = easel.display.Group.prototype[k];
tetris.BoardSprite.prototype._activePiece = null;
tetris.BoardSprite.prototype._blocks = null;
tetris.BoardSprite.prototype._board = null;
tetris.BoardSprite.prototype.handle = function(event) {
	$s.push("tetris.BoardSprite::handle");
	var $spos = $s.length;
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
									$s.push("tetris.BoardSprite::handle@98");
									var $spos = $s.length;
									{
										var $tmp = function() {
											$s.push("tetris.BoardSprite::handle@98@98");
											var $spos = $s.length;
											block[0]._isTransformDirty = true;
											$s.pop();
										}
										$s.pop();
										return $tmp;
									}
									$s.pop();
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
			$s.push("tetris.BoardSprite::handle@131");
			var $spos = $s.length;
			label._isTransformDirty = true;
			$s.pop();
		}, onComplete : function() {
			$s.push("tetris.BoardSprite::handle@132");
			var $spos = $s.length;
			label.detach();
			$s.pop();
		}});
		var self = this;
		JSTweener.addTween(explosions,{ alpha : 0.8, time : 0.5, transition : "linear", onComplete : function() {
			$s.push("tetris.BoardSprite::handle@137");
			var $spos = $s.length;
			{
				var _g = 0;
				while(_g < toRemove.length) {
					var block = toRemove[_g];
					++_g;
					self.remove(block);
				}
			}
			self.remove(explosions);
			$s.pop();
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
			$s.push("tetris.BoardSprite::handle@178");
			var $spos = $s.length;
			obj._isTransformDirty = true;
			$s.pop();
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
			$s.push("tetris.BoardSprite::handle@203");
			var $spos = $s.length;
			sprite.detach();
			$s.pop();
		}});
		this.add(sprite);
	}break;
	default:{
		null;
	}break;
	}
	$s.pop();
}
tetris.BoardSprite.prototype.__class__ = tetris.BoardSprite;
easel.display.Scene = function(p) { if( p === $_ ) return; {
	$s.push("easel.display.Scene::new");
	var $spos = $s.length;
	this._root = new easel.display.Group();
	$s.pop();
}}
easel.display.Scene.__name__ = ["easel","display","Scene"];
easel.display.Scene.prototype._root = null;
easel.display.Scene.prototype.add = function(sprite) {
	$s.push("easel.display.Scene::add");
	var $spos = $s.length;
	this._root.add(sprite);
	$s.pop();
}
easel.display.Scene.prototype.contains = function(sprite) {
	$s.push("easel.display.Scene::contains");
	var $spos = $s.length;
	{
		var $tmp = this._root.contains(sprite);
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
easel.display.Scene.prototype.load = function() {
	$s.push("easel.display.Scene::load");
	var $spos = $s.length;
	null;
	$s.pop();
}
easel.display.Scene.prototype.remove = function(sprite) {
	$s.push("easel.display.Scene::remove");
	var $spos = $s.length;
	{
		var $tmp = this._root.remove(sprite);
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
easel.display.Scene.prototype.removeAll = function() {
	$s.push("easel.display.Scene::removeAll");
	var $spos = $s.length;
	this._root.removeAll();
	$s.pop();
}
easel.display.Scene.prototype.render = function(ctx) {
	$s.push("easel.display.Scene::render");
	var $spos = $s.length;
	ctx.canvas.width = ctx.canvas.width;
	this._root.render(ctx);
	$s.pop();
}
easel.display.Scene.prototype.stage = null;
easel.display.Scene.prototype.unload = function() {
	$s.push("easel.display.Scene::unload");
	var $spos = $s.length;
	null;
	$s.pop();
}
easel.display.Scene.prototype.update = function(elapsed) {
	$s.push("easel.display.Scene::update");
	var $spos = $s.length;
	null;
	$s.pop();
}
easel.display.Scene.prototype.__class__ = easel.display.Scene;
easel.display.Scene.__interfaces__ = [easel.display.Container];
tetris.PlayingScene = function(p) { if( p === $_ ) return; {
	$s.push("tetris.PlayingScene::new");
	var $spos = $s.length;
	easel.display.Scene.apply(this,[]);
	$s.pop();
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
	$s.push("tetris.PlayingScene::handler");
	var $spos = $s.length;
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
			$s.push("tetris.PlayingScene::handler@118");
			var $spos = $s.length;
			p.mask = null;
			$s.pop();
		}});
	}break;
	case 6:
	{
		haxe.Log.trace("score " + this._board.score,{ fileName : "PlayingScene.hx", lineNumber : 122, className : "tetris.PlayingScene", methodName : "handler"});
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
			$s.push("tetris.PlayingScene::handler@137");
			var $spos = $s.length;
			sprite._isTransformDirty = true;
			$s.pop();
		}});
	}break;
	default:{
		null;
	}break;
	}
	$s.pop();
}
tetris.PlayingScene.prototype.load = function() {
	$s.push("tetris.PlayingScene::load");
	var $spos = $s.length;
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
	$s.pop();
}
tetris.PlayingScene.prototype.onClick = function(event) {
	$s.push("tetris.PlayingScene::onClick");
	var $spos = $s.length;
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
	$s.pop();
}
tetris.PlayingScene.prototype.onKeyDown = function(event) {
	$s.push("tetris.PlayingScene::onKeyDown");
	var $spos = $s.length;
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
		{
			$s.pop();
			return;
		}
	}break;
	}
	event.preventDefault();
	$s.pop();
}
tetris.PlayingScene.prototype.unload = function() {
	$s.push("tetris.PlayingScene::unload");
	var $spos = $s.length;
	js.Lib.document.onkeydown = null;
	js.Lib.document.getElementById("screen").onclick = null;
	$s.pop();
}
tetris.PlayingScene.prototype.update = function(elapsed) {
	$s.push("tetris.PlayingScene::update");
	var $spos = $s.length;
	this._lastTick += elapsed;
	while(this._lastTick > this._stepDelay) {
		this._lastTick -= this._stepDelay;
		this._board.step();
	}
	$s.pop();
}
tetris.PlayingScene.prototype.__class__ = tetris.PlayingScene;
tetris.GameOverScene = function(p) { if( p === $_ ) return; {
	$s.push("tetris.GameOverScene::new");
	var $spos = $s.length;
	easel.display.Scene.apply(this,[]);
	$s.pop();
}}
tetris.GameOverScene.__name__ = ["tetris","GameOverScene"];
tetris.GameOverScene.__super__ = easel.display.Scene;
for(var k in easel.display.Scene.prototype ) tetris.GameOverScene.prototype[k] = easel.display.Scene.prototype[k];
tetris.GameOverScene.prototype.load = function() {
	$s.push("tetris.GameOverScene::load");
	var $spos = $s.length;
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
						$s.push("tetris.GameOverScene::load@77");
						var $spos = $s.length;
						{
							var $tmp = function() {
								$s.push("tetris.GameOverScene::load@77@77");
								var $spos = $s.length;
								sprite[0]._isTransformDirty = true;
								$s.pop();
							}
							$s.pop();
							return $tmp;
						}
						$s.pop();
					}(sprite)});
				}
			}
		}
	}
	var self = this;
	JSTweener.addTween(label,{ scaleX : 1, scaleY : 1, delay : 1.5, rotation : Math.PI / 16, onUpdate : function() {
		$s.push("tetris.GameOverScene::load@89");
		var $spos = $s.length;
		label._isTransformDirty = true;
		$s.pop();
	}, onStart : function() {
		$s.push("tetris.GameOverScene::load@90");
		var $spos = $s.length;
		js.Lib.document.getElementById("screen").onclick = $closure(self,"onClick");
		$s.pop();
	}});
	$s.pop();
}
tetris.GameOverScene.prototype.onClick = function(_) {
	$s.push("tetris.GameOverScene::onClick");
	var $spos = $s.length;
	this.stage.setScene(new tetris.PlayingScene());
	$s.pop();
}
tetris.GameOverScene.prototype.unload = function() {
	$s.push("tetris.GameOverScene::unload");
	var $spos = $s.length;
	js.Lib.document.getElementById("screen").onclick = null;
	$s.pop();
}
tetris.GameOverScene.prototype.__class__ = tetris.GameOverScene;
tetris.ParticleSprite = function(source,sx,sy,sw,sh) { if( source === $_ ) return; {
	$s.push("tetris.ParticleSprite::new");
	var $spos = $s.length;
	easel.display.Sprite.apply(this,[]);
	this._source = source;
	this._sx = sx;
	this._sy = sy;
	this._sw = sw;
	this._sh = sh;
	$s.pop();
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
	$s.push("tetris.ParticleSprite::draw");
	var $spos = $s.length;
	ctx.drawImage(this._source,this._sx,this._sy,this._sw,this._sh,0,0,this._sw,this._sh);
	$s.pop();
}
tetris.ParticleSprite.prototype.packBounds = function(ctx) {
	$s.push("tetris.ParticleSprite::packBounds");
	var $spos = $s.length;
	null;
	$s.pop();
}
tetris.ParticleSprite.prototype.__class__ = tetris.ParticleSprite;
easel.display.Stage = function(canvas) { if( canvas === $_ ) return; {
	$s.push("easel.display.Stage::new");
	var $spos = $s.length;
	this.ctx = canvas.getContext("2d");
	$s.pop();
}}
easel.display.Stage.__name__ = ["easel","display","Stage"];
easel.display.Stage.prototype._current = null;
easel.display.Stage.prototype.ctx = null;
easel.display.Stage.prototype.getHeight = function() {
	$s.push("easel.display.Stage::getHeight");
	var $spos = $s.length;
	{
		var $tmp = this.ctx.canvas.height;
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
easel.display.Stage.prototype.getWidth = function() {
	$s.push("easel.display.Stage::getWidth");
	var $spos = $s.length;
	{
		var $tmp = this.ctx.canvas.width;
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
easel.display.Stage.prototype.height = null;
easel.display.Stage.prototype.init = function(firstScene) {
	$s.push("easel.display.Stage::init");
	var $spos = $s.length;
	this.setScene(firstScene);
	var fpsTime = 0;
	var fpsFrames = 0;
	var lastTime = 0;
	var self = this;
	var tick = function() {
		$s.push("easel.display.Stage::init@68");
		var $spos = $s.length;
		var now = new Date().getTime();
		var elapsed = now - lastTime;
		var scene = self._current;
		scene.update(elapsed);
		scene.render(self.ctx);
		lastTime = now;
		fpsFrames += 1;
		fpsTime += elapsed;
		if(fpsTime > 1000) {
			haxe.Log.trace("FPS: " + (Math.round(100000 * fpsFrames / fpsTime) / 100),{ fileName : "Stage.hx", lineNumber : 83, className : "easel.display.Stage", methodName : "init"});
			fpsTime = 0;
			fpsFrames = 0;
		}
		window.setTimeout(tick,1000 / 30);
		$s.pop();
	}
	lastTime = Date.now().getTime();
	tick();
	$s.pop();
}
easel.display.Stage.prototype.setScene = function(scene) {
	$s.push("easel.display.Stage::setScene");
	var $spos = $s.length;
	if(this._current != null) {
		this._current.unload();
		this._current.stage = null;
	}
	this._current = scene;
	scene.stage = this;
	scene.load();
	$s.pop();
}
easel.display.Stage.prototype.width = null;
easel.display.Stage.prototype.__class__ = easel.display.Stage;
$Main = function() { }
$Main.__name__ = ["@Main"];
$Main.prototype.__class__ = $Main;
$_ = {}
js.Boot.__res = {}
$s = [];
$e = [];
js.Boot.__init();
{
	Date.now = function() {
		$s.push("@Main::new@124");
		var $spos = $s.length;
		{
			var $tmp = new Date();
			$s.pop();
			return $tmp;
		}
		$s.pop();
	}
	Date.fromTime = function(t) {
		$s.push("@Main::new@127");
		var $spos = $s.length;
		var d = new Date();
		d["setTime"](t);
		{
			$s.pop();
			return d;
		}
		$s.pop();
	}
	Date.fromString = function(s) {
		$s.push("@Main::new@136");
		var $spos = $s.length;
		switch(s.length) {
		case 8:{
			var k = s.split(":");
			var d = new Date();
			d["setTime"](0);
			d["setUTCHours"](k[0]);
			d["setUTCMinutes"](k[1]);
			d["setUTCSeconds"](k[2]);
			{
				$s.pop();
				return d;
			}
		}break;
		case 10:{
			var k = s.split("-");
			{
				var $tmp = new Date(k[0],k[1] - 1,k[2],0,0,0);
				$s.pop();
				return $tmp;
			}
		}break;
		case 19:{
			var k = s.split(" ");
			var y = k[0].split("-");
			var t = k[1].split(":");
			{
				var $tmp = new Date(y[0],y[1] - 1,y[2],t[0],t[1],t[2]);
				$s.pop();
				return $tmp;
			}
		}break;
		default:{
			throw "Invalid date format : " + s;
		}break;
		}
		$s.pop();
	}
	Date.prototype["toString"] = function() {
		$s.push("@Main::new@165");
		var $spos = $s.length;
		var date = this;
		var m = date.getMonth() + 1;
		var d = date.getDate();
		var h = date.getHours();
		var mi = date.getMinutes();
		var s = date.getSeconds();
		{
			var $tmp = date.getFullYear() + "-" + ((m < 10?"0" + m:"" + m)) + "-" + ((d < 10?"0" + d:"" + d)) + " " + ((h < 10?"0" + h:"" + h)) + ":" + ((mi < 10?"0" + mi:"" + mi)) + ":" + ((s < 10?"0" + s:"" + s));
			$s.pop();
			return $tmp;
		}
		$s.pop();
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
		$s.push("@Main::new@73");
		var $spos = $s.length;
		{
			var $tmp = isFinite(i);
			$s.pop();
			return $tmp;
		}
		$s.pop();
	}
	Math.isNaN = function(i) {
		$s.push("@Main::new@85");
		var $spos = $s.length;
		{
			var $tmp = isNaN(i);
			$s.pop();
			return $tmp;
		}
		$s.pop();
	}
	Math.__name__ = ["Math"];
}
{
	js.Lib.document = document;
	js.Lib.window = window;
	onerror = function(msg,url,line) {
		var stack = $s.copy();
		var f = js.Lib.onerror;
		$s.splice(0,$s.length);
		if( f == null ) {
			var i = stack.length;
			var s = "";
			while( --i >= 0 )
				s += "Called from "+stack[i]+"\n";
			alert(msg+"\n\n"+s);
			return false;
		}
		return f(msg,stack);
	}
}
tetris.Piece.presets = [new tetris.Piece(1,[[-1,-1],[-1,0],[0,0],[0,-1]]),new tetris.Piece(6,[[-2,0],[-1,0],[0,0],[1,0]]),new tetris.Piece(2,[[0,-1],[1,-1],[0,0],[-1,0]]),new tetris.Piece(0,[[0,-1],[-1,-1],[0,0],[1,0]]),new tetris.Piece(4,[[-1,-1],[-1,0],[0,0],[1,0]]),new tetris.Piece(3,[[1,-1],[-1,0],[0,0],[1,0]]),new tetris.Piece(5,[[0,-1],[-1,0],[0,0],[1,0]])];
easel.media.SoundManager.cache = new Hash();
js.Lib.onerror = null;
tetris.BoardSprite.BLOCK_SIZE = 20;
tetris.BoardSprite.ONOMATOPOEIA = ["BAM","BANG","BLOOP","BLURP","BOFF","BONK","CLANK","CLUNK","GLURP","KAPOW","PAM","PLOP","POW","SPLAT","THUNK","WHAP","WHACK","WHAM","ZAM","ZAP","ZLONK"];
$Main.init = tetris.Main.main();
