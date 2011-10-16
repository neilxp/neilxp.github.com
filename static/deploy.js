	var a;
    $estr = function () {return js.Boot.__string_rec(this, "");};
    easel = {};
    easel.util = {};
    easel.util.AssetPack = function (b, c) {if (b !== $_) {this._collection = new Hash;for (var d = this, e = c.length, f = 0; f < c.length;) {var g = [c[f]];++f;var h = [new Image];h[0].onload = function (i, m) {return function () {d._collection.set(m[0], i[0]);e -= 1;e == 0 && d.onLoad();};}(h, g);h[0].onerror = function () {return function () {e -= 1;e == 0 && d.onLoad();};}();h[0].src = b + g[0];}}};
    easel.util.AssetPack.__name__ = ["easel", "util", "AssetPack"];
    easel.util.AssetPack.prototype._collection = null;
    easel.util.AssetPack.prototype.get = function (b) {return this._collection.get(b);};
    easel.util.AssetPack.prototype.onLoad = function () {};
    easel.util.AssetPack.prototype.__class__ = easel.util.AssetPack;
    easel.display = {};
    easel.display.Sprite = function (b) {if (b !== $_) {this.transform = [];this.visible = true;this.scaleX = this.alpha = 1;this._isTransformDirty = true;this.scaleY = 1;this._isTransformDirty = true;this.rotation = 0;this._isTransformDirty = true;this.centerX = 0;this._isTransformDirty = true;this.centerY = 0;this._isTransformDirty = true;this.x = 0;this._isTransformDirty = true;this.y = 0;this._isTransformDirty = true;this.shadow = false;this.boundingBox = [0, 0, 0, 0];}};
    easel.display.Sprite.__name__ = ["easel", "display", "Sprite"];
    a = easel.display.Sprite.prototype;
    a._backBuffer = null;
    a._isContentsDirty = null;
    a._isTransformDirty = null;
    a.alpha = null;
    a.boundingBox = null;
    a.cacheAsBitmap = null;
    a.centerX = null;
    a.centerY = null;
    a.composite = null;
    a.detach = function () {this.parent != null && this.parent.remove(this);};
    a.dirtyContents = function () {this._isContentsDirty = true;};
    a.dirtyTransform = function () {this._isTransformDirty = true;};
    a.draw = function () {};
    a.getHeight = function () {return this.boundingBox[3];};
    a.getWidth = function () {return this.boundingBox[2];};
    a.height = null;
    a.isCacheAsBitmap = function () {return this._backBuffer != null;};
    a.mask = null;
    a.packBounds = function () {if (this.shadow) {this.boundingBox[0] = Math.min(this.boundingBox[0] + this.shadowOffsetX - 5, this.boundingBox[0]);this.boundingBox[1] = Math.min(this.boundingBox[1] + this.shadowOffsetY - 5, this.boundingBox[1]);this.boundingBox[2] = Math.max(this.boundingBox[2] + this.shadowOffsetX + 5, this.boundingBox[2]);this.boundingBox[3] = Math.max(this.boundingBox[3] + this.shadowOffsetY + 5, this.boundingBox[3]);}};
    a.parent = null;
    a.redrawBackBuffer = function () {if (this._backBuffer == null) {this._backBuffer = js.Lib.document.createElement("canvas");}var b = this._backBuffer.getContext("2d");this.packBounds(b);this._backBuffer.width = Math.ceil(this.boundingBox[2]);this._backBuffer.height = Math.ceil(this.boundingBox[3]);b.translate(- this.boundingBox[0], - this.boundingBox[1]);if (this.shadow) {b.shadowColor = this.shadowColor;b.shadowOffsetX = this.shadowOffsetX;b.shadowOffsetY = this.shadowOffsetY;b.shadowBlur = this.shadowBlur;}this.draw(b);this._isContentsDirty = false;};
    a.render = function (b) {if (this.visible && this.alpha > 0) {b.save();this._isTransformDirty && this.updateTransform();this._isContentsDirty && this._backBuffer != null && this.redrawBackBuffer();var c = this.transform;b.transform(c[0], c[1], c[2], c[3], c[4], c[5]);if (this.mask != null) {this.mask.render(b);b.clip();}if (this.alpha < 1) {b.globalAlpha *= this.alpha;}if (this.composite != null) {b.globalCompositeOperation = this.composite;}if (this._backBuffer != null) {b.drawImage(this._backBuffer, 0, 0);} else {if (this.shadow) {b.shadowColor = this.shadowColor;b.shadowOffsetX = this.shadowOffsetX;b.shadowOffsetY = this.shadowOffsetY;b.shadowBlur = this.shadowBlur;}this.draw(b);}b.restore();}};
    a.rotation = null;
    a.scaleX = null;
    a.scaleY = null;
    a.setCacheAsBitmap = function (b) {if (b) {this.redrawBackBuffer();} else {this._backBuffer = null;}return b;};
    a.setCenterX = function (b) {this.centerX = b;this._isTransformDirty = true;return b;};
    a.setCenterY = function (b) {this.centerY = b;this._isTransformDirty = true;return b;};
    a.setRotation = function (b) {this.rotation = b;this._isTransformDirty = true;return b;};
    a.setScaleX = function (b) {this.scaleX = b;this._isTransformDirty = true;return b;};
    a.setScaleY = function (b) {this.scaleY = b;this._isTransformDirty = true;return b;};
    a.setShadowBlur = function (b) {this.shadowBlur = b;this._isContentsDirty = true;return b;};
    a.setShadowColor = function (b) {this.shadowColor = b;this._isContentsDirty = true;return b;};
    a.setShadowOffsetX = function (b) {this.shadowOffsetX = b;this._isContentsDirty = true;return b;};
    a.setShadowOffsetY = function (b) {this.shadowOffsetY = b;this._isContentsDirty = true;return b;};
    a.setX = function (b) {this.x = b;this._isTransformDirty = true;return b;};
    a.setY = function (b) {this.y = b;this._isTransformDirty = true;return b;};
    a.shadow = null;
    a.shadowBlur = null;
    a.shadowColor = null;
    a.shadowOffsetX = null;
    a.shadowOffsetY = null;
    a.transform = null;
    a.updateTransform = function () {var b = Math.cos(this.rotation), c = Math.sin(this.rotation), d = - this.centerX, e = - this.centerY;if (this._backBuffer != null) {d += this.boundingBox[0];e += this.boundingBox[1];}this.transform[0] = this.scaleX * b;this.transform[1] = this.scaleX * c;this.transform[2] = this.scaleY * - c;this.transform[3] = this.scaleY * b;this.transform[4] = Math.floor(d * this.transform[0] + e * this.transform[2] + this.x);this.transform[5] = Math.floor(d * this.transform[1] + e * this.transform[3] + this.y);this._isTransformDirty = false;};
    a.visible = null;
    a.width = null;
    a.x = null;
    a.y = null;
    a.__class__ = easel.display.Sprite;
    easel.display.Container = function () {};
    easel.display.Container.__name__ = ["easel", "display", "Container"];
    a = easel.display.Container.prototype;
    a.add = null;
    a.contains = null;
    a.remove = null;
    a.removeAll = null;
    a.__class__ = easel.display.Container;
    easel.display.Group = function (b) {if (b !== $_) {easel.display.Sprite.apply(this, []);this._children = [];}};
    easel.display.Group.__name__ = ["easel", "display", "Group"];
    easel.display.Group.__super__ = easel.display.Sprite;
    for (var k in easel.display.Sprite.prototype) {
        easel.display.Group.prototype[k] = easel.display.Sprite.prototype[k];
    }
    a = easel.display.Group.prototype;
    a._children = null;
    a.add = function (b) {b.parent != null && b.parent.remove(b);for (var c = 0, d = this._children; c < d.length;) {var e = d[c];++c;if (e == b) {return;}}this._children.push(b);b.parent = this;};
    a.contains = function (b) {for (var c = 0, d = this._children; c < d.length;) {var e = d[c];++c;if (b == e) {return true;}}return false;};
    a.draw = function (b) {for (var c = 0, d = this._children; c < d.length;) {var e = d[c];++c;e.render(b);}};
    a.getNumChildren = function () {return this._children.length;};
    a.iterator = function () {return this._children.iterator();};
    a.packBounds = function (b) {for (var c = [0, 0, 0, 0], d = 0, e = this._children; d < e.length;) {var f = e[d];++d;f.packBounds();var g = f.boundingBox;c[0] = Math.min(g[0] + f.x, c[0]);c[1] = Math.min(g[1] + f.y, c[1]);c[2] = Math.max(g[2] + g[0] + f.x, c[2]);c[3] = Math.max(g[3] + g[1] + f.y, c[3]);}this.boundingBox = c;easel.display.Sprite.prototype.packBounds.apply(this, [b]);};
    a.remove = function (b) {if (this._children.remove(b)) {b.parent = null;return true;} else {return false;}};
    a.removeAll = function () {for (var b = 0, c = this._children; b < c.length;) {var d = c[b];++b;d.parent = null;}this._children = [];};
    a.__class__ = easel.display.Group;
    easel.display.Group.__interfaces__ = [easel.display.Container];
    Reflect = function () {};
    Reflect.__name__ = ["Reflect"];
    Reflect.hasField = function (b, c) {if (b.hasOwnProperty != null) {return b.hasOwnProperty(c);}for (b = Reflect.fields(b).iterator(); b.hasNext();) {if (b.next() == c) {return true;}}return false;};
    Reflect.field = function (b, c) {var d = null;try {d = b[c];} catch (e) {}return d;};
    Reflect.setField = function (b, c, d) {b[c] = d;};
    Reflect.callMethod = function (b, c, d) {return c.apply(b, d);};
    Reflect.fields = function (b) {if (b == null) {return [];}var c = [];if (b.hasOwnProperty) {for (var d in b) {b.hasOwnProperty(d) && c.push(d);}} else {var e;try {e = b.__proto__;} catch (f) {e = null;}if (e != null) {b.__proto__ = null;}for (d in b) {d != "__proto__" && c.push(d);}if (e != null) {b.__proto__ = e;}}return c;};
    Reflect.isFunction = function (b) {return typeof b == "function" && b.__name__ == null;};
    Reflect.compare = function (b, c) {return b == c ? 0 : b > c ? 1 : -1;};
    Reflect.compareMethods = function (b, c) {if (b == c) {return true;}if (!Reflect.isFunction(b) || !Reflect.isFunction(c)) {return false;}return b.scope == c.scope && b.method == c.method && b.method != null;};
    Reflect.isObject = function (b) {if (b == null) {return false;}var c = typeof b;return c == "string" || c == "object" && !b.__enum__ || c == "function" && b.__name__ != null;};
    Reflect.deleteField = function (b, c) {if (!Reflect.hasField(b, c)) {return false;}delete b[c];return true;};
    Reflect.copy = function (b) {for (var c = {}, d = 0, e = Reflect.fields(b); d < e.length;) {var f = e[d];++d;c[f] = Reflect.field(b, f);}return c;};
    Reflect.makeVarArgs = function (b) {return function () {for (var c = [], d = 0, e = arguments.length; d < e;) {var f = d++;c.push(arguments[f]);}return b(c);};};
    Reflect.prototype.__class__ = Reflect;
    easel.display.ImageSprite = function (b, c) {if (b !== $_) {if (c == null) {c = 1;}easel.display.Sprite.apply(this, []);this.boundingBox = [0, 0, b.width / c, b.height];this._image = b;this._frames = c;}};
    easel.display.ImageSprite.__name__ = ["easel", "display", "ImageSprite"];
    easel.display.ImageSprite.__super__ = easel.display.Sprite;
    for (k in easel.display.Sprite.prototype) {
        easel.display.ImageSprite.prototype[k] = easel.display.Sprite.prototype[k];
    }
    easel.display.ImageSprite.fromCanvas = function (b, c, d, e, f) {var g = js.Lib.document.createElement("canvas");g.getContext("2d").drawImage(b, c, d, e, f, 0, 0, e, f);return new easel.display.ImageSprite(g);};
    a = easel.display.ImageSprite.prototype;
    a._frames = null;
    a._image = null;
    a.draw = function (b) {if (this._frames > 1) {var c = Math.floor(this.boundingBox[2]), d = Math.floor(this.boundingBox[3]);b.drawImage(this._image, this.frame * c, 0, c, d, 0, 0, c, d);} else {b.drawImage(this._image, 0, 0);}};
    a.frame = null;
    a.frameHeight = null;
    a.frameWidth = null;
    a.getNumFrames = function () {return this._frames;};
    a.numFrames = null;
    a.setFrame = function (b) {return this.frame = b;};
    a.__class__ = easel.display.ImageSprite;
// tetris definition ------
    tetris = {};
    tetris.BoardEvent = {__ename__: ["tetris", "BoardEvent"], __constructs__: ["PieceMoved", "PieceDropped", "PiecePlaced", "PieceRotated", "NextPiece", "RowsCleared", "ScoreChanged", "LevelChanged", "GameOver"]};
    tetris.BoardEvent.GameOver = ["GameOver", 8];
    tetris.BoardEvent.GameOver.toString = $estr;
    tetris.BoardEvent.GameOver.__enum__ = tetris.BoardEvent;
    tetris.BoardEvent.LevelChanged = ["LevelChanged", 7];
    tetris.BoardEvent.LevelChanged.toString = $estr;
    tetris.BoardEvent.LevelChanged.__enum__ = tetris.BoardEvent;
    tetris.BoardEvent.NextPiece = function (b, c) {b = ["NextPiece", 4, b, c];b.__enum__ = tetris.BoardEvent;b.toString = $estr;return b;};
    tetris.BoardEvent.PieceDropped = function (b) {b = ["PieceDropped", 1, b];b.__enum__ = tetris.BoardEvent;b.toString = $estr;return b;};
    tetris.BoardEvent.PieceMoved = function (b, c, d) {b = ["PieceMoved", 0, b, c, d];b.__enum__ = tetris.BoardEvent;b.toString = $estr;return b;};
    tetris.BoardEvent.PiecePlaced = function (b) {b = ["PiecePlaced", 2, b];b.__enum__ = tetris.BoardEvent;b.toString = $estr;return b;};
    tetris.BoardEvent.PieceRotated = function (b) {b = ["PieceRotated", 3, b];b.__enum__ = tetris.BoardEvent;b.toString = $estr;return b;};
    tetris.BoardEvent.RowsCleared = function (b) {b = ["RowsCleared", 5, b];b.__enum__ = tetris.BoardEvent;b.toString = $estr;return b;};
    tetris.BoardEvent.ScoreChanged = ["ScoreChanged", 6];
    tetris.BoardEvent.ScoreChanged.toString = $estr;
    tetris.BoardEvent.ScoreChanged.__enum__ = tetris.BoardEvent;
    easel.util.BasicDispatcher = function (b) {if (b !== $_) {this._handlers = [];}};
    easel.util.BasicDispatcher.__name__ = ["easel", "util", "BasicDispatcher"];
    a = easel.util.BasicDispatcher.prototype;
    a._handlers = null;
    a.addHandler = function (b) {this.removeHandler(b);this._handlers.push(b);};
    a.dispatch = function (b) {for (var c = 0, d = this._handlers; c < d.length;) {var e = d[c];++c;e(b);}};
    a.removeHandler = function (b) {this._handlers.remove(b);};
    a.__class__ = easel.util.BasicDispatcher;

// tetris.Board
    tetris.Board = function (b, c) {
		if (b !== $_) {
			easel.util.BasicDispatcher.apply(this, []);
			this._width = b;
			this._height = c;
		}
	};
    tetris.Board.__name__ = ["tetris", "Board"];
    tetris.Board.__super__ = easel.util.BasicDispatcher;
    for (k in easel.util.BasicDispatcher.prototype) {
        tetris.Board.prototype[k] = easel.util.BasicDispatcher.prototype[k];
    }
    a = tetris.Board.prototype;
    a._blocks = null;
    a._height = null;
    a._piece = null;
    a._playing = null;
    a._preview = null;
    a._rowsCleared = null;
    a._width = null;
    a.clearFilledRows = function () {
		for (var b = [], c = 0, d = this._piece.coords; c < d.length;) {
			var e = d[c];++c;
			var f = this._piece.y + e[1];
			if (!Lambda.has(b, f)) {
				var g = true, h = 0;
				for (e = this._width; h < e;) {
					var i = h++;
					if (!this._blocks[f * this._width + i]) {
						g = false;
						break;
					}
				}
				g && b.push(f);
			}
		}
		if (b.length > 0) {
			b.sort($closure(Reflect, "compare"));
			for (c = 0; c < b.length;) {
				f = b[c];++c;
				for (f = f; f > 0;) {
					e = 0;
					for (d = this._width; e < d;) {
						g = e++;
						this._blocks[f * this._width + g] = this._blocks[(f - 1) * this._width + g];
					}
					f -= 1;
				}
			}
			b.reverse();
			c = b.length;
			this.score += this.level * [40, 100, 300, 1200][c - 1];
			this._rowsCleared += c;
			c = 1 + Math.floor(this._rowsCleared / 18);
			if (c != this.level) {
				this.level = c;
				this.dispatch(tetris.BoardEvent.LevelChanged);
			}
			this.dispatch(tetris.BoardEvent.RowsCleared(b));
			this.dispatch(tetris.BoardEvent.ScoreChanged);
		}
	};
    a.drop = function () {
		for (; this.isValid(this._piece);) {
			this._piece.y += 1;
		}
		this._piece.y -= 1;
		this.dispatch(tetris.BoardEvent.PieceDropped(this._piece));
		this.step();
	};
    a.dropPiece = function () {
		for (; this.isValid(this._piece);) {
			this._piece.y += 1;
		}
		this._piece.y -= 1;
		this.dispatch(tetris.BoardEvent.PieceDropped(this._piece));
	};
    a.endGame = function () {this._playing = false;this.dispatch(tetris.BoardEvent.GameOver);};
    a.getHeight = function () {return this._height;};
    a.getPieceX = function () {return this._piece.x;};
    a.getPieceY = function () {return this._piece.y;};
    a.getWidth = function () {return this._width;};
    a.height = null;
    a.isBlocked = function (b, c) {return b < 0 || b >= this._width || c < 0 || c >= this._height || this._blocks[c * this._width + b];};
    a.isValid = function (b) {
		for (var c = 0, d = b.coords; c < d.length;) {
			var e = d[c];++c;
			if (this.isBlocked(b.x + e[0], b.y + e[1])) {return false;}
		}
		return true;
	};
    a.level = null;
    a.movePiece = function (b, c) {for (var d = this._piece.x + b, e = this._piece.y + c, f = 0, g = this._piece.coords; f < g.length;) {var h = g[f];++f;if (this.isBlocked(d + h[0], e + h[1])) {return false;}}this._piece.x = d;this._piece.y = e;this.dispatch(tetris.BoardEvent.PieceMoved(this._piece, b, c));return true;};
    a.nextPiece = function () {this._piece = this._preview;this._piece.x = Math.floor(this._width / 2);this._piece.y = 2;this._preview = tetris.Piece.createRandom();this.isValid(this._piece) ? this.dispatch(tetris.BoardEvent.NextPiece(this._piece, this._preview)) : this.endGame();};
    a.pieceX = null;
    a.pieceY = null;
    a.placePiece = function () {for (var b = 0, c = this._piece.coords; b < c.length;) {var d = c[b];++b;this._blocks[(this._piece.y + d[1]) * this._width + (this._piece.x + d[0])] = true;}this.dispatch(tetris.BoardEvent.PiecePlaced(this._piece));};
    a.rotate = function () {var b = this._piece.rotate();if (b != null && this.isValid(b)) {this._piece = b;this.dispatch(tetris.BoardEvent.PieceRotated(this._piece));}};
    a.score = null;
    a.startGame = function () {
		this._blocks = [];
		this._playing = true;
		this._preview = tetris.Piece.createRandom();
		this.score = this._rowsCleared = 0;
		this.level = 1;
		this.dispatch(tetris.BoardEvent.LevelChanged);
		this.dispatch(tetris.BoardEvent.ScoreChanged);
		this.nextPiece();
	};
    a.step = function () {
		if (this._playing && !this.movePiece(0, 1)) {
			this.placePiece();this.clearFilledRows();this.nextPiece();
		}
	};
    a.width = null;
    a.__class__ = tetris.Board;
    easel.display.CircleSprite = function (b) {if (b !== $_) {easel.display.Sprite.apply(this, []);this.boundingBox = [- b, - b, 2 * b, 2 * b];this.radius = b;this._isContentsDirty = true;}};
    easel.display.CircleSprite.__name__ = ["easel", "display", "CircleSprite"];
    easel.display.CircleSprite.__super__ = easel.display.Sprite;
    for (k in easel.display.Sprite.prototype) {
        easel.display.CircleSprite.prototype[k] = easel.display.Sprite.prototype[k];
    }
    a = easel.display.CircleSprite.prototype;
    a.draw = function (b) {b.arc(0, 0, this.radius, 0, Math.PI * 2, true);if (this.fillStyle != null) {b.fillStyle = this.fillStyle;b.fill();}};
    a.fillStyle = null;
    a.radius = null;
    a.setFillStyle = function (b) {this.fillStyle = b;this._isContentsDirty = true;return b;};
    a.setRadius = function (b) {this.radius = b;this._isContentsDirty = true;return b;};
    a.setStrokeStyle = function (b) {this.strokeStyle = b;this._isContentsDirty = true;return b;};
    a.strokeStyle = null;
    a.__class__ = easel.display.CircleSprite;
    StringBuf = function (b) {if (b !== $_) {this.b = [];}};
    StringBuf.__name__ = ["StringBuf"];
    a = StringBuf.prototype;
    a.add = function (b) {this.b[this.b.length] = b;};
    a.addChar = function (b) {this.b[this.b.length] = String.fromCharCode(b);};
    a.addSub = function (b, c, d) {this.b[this.b.length] = b.substr(c, d);};
    a.b = null;
    a.toString = function () {return this.b.join("");};
    a.__class__ = StringBuf;
    easel.display.FilledSprite = function (b, c, d) {if (b !== $_) {if (d == null) {d = 0;}if (c == null) {c = 0;}easel.display.Sprite.apply(this, []);this._width = c;this._height = d;this.fillStyle = b;this._isContentsDirty = true;}};
    easel.display.FilledSprite.__name__ = ["easel", "display", "FilledSprite"];
    easel.display.FilledSprite.__super__ = easel.display.Sprite;
    for (k in easel.display.Sprite.prototype) {
        easel.display.FilledSprite.prototype[k] = easel.display.Sprite.prototype[k];
    }
    a = easel.display.FilledSprite.prototype;
    a._height = null;
    a._width = null;
    a.draw = function (b) {var c = this._width > 0 ? this._width : b.canvas.width, d = this._height > 0 ? this._height : b.canvas.height;if (this.fillStyle != null) {b.fillStyle = this.fillStyle;b.fillRect(0, 0, c, d);}if (this.strokeStyle) {b.strokeStyle = this.strokeStyle;b.strokeRect(0, 0, c, d);}};
    a.fillStyle = null;
    a.setFillStyle = function (b) {this.fillStyle = b;this._isContentsDirty = true;return b;};
    a.setStrokeStyle = function (b) {this.strokeStyle = b;this._isContentsDirty = true;return b;};
    a.strokeStyle = null;
    a.__class__ = easel.display.FilledSprite;
    tetris.PieceSprite = function (b) {if (b !== $_) {easel.display.Group.apply(this, []);this.setX(b.x * 20);this.setY(b.y * 20);this.setCenterX(10);this.setCenterY(10);for (var c = tetris.Main.assets.get("blocks.png"), d = 0, e = b.coords; d < e.length;) {var f = e[d];++d;var g = new easel.display.ImageSprite(c, 7);g.setX(f[0] * 20);g.setY(f[1] * 20);g.setFrame(b.color);this.add(g);}}};
    tetris.PieceSprite.__name__ = ["tetris", "PieceSprite"];
    tetris.PieceSprite.__super__ = easel.display.Group;
    for (k in easel.display.Group.prototype) {
        tetris.PieceSprite.prototype[k] = easel.display.Group.prototype[k];
    }
    tetris.PieceSprite.prototype.__class__ = tetris.PieceSprite;
    IntIter = function (b, c) {if (b !== $_) {this.min = b;this.max = c;}};
    IntIter.__name__ = ["IntIter"];
    a = IntIter.prototype;
    a.hasNext = function () {return this.min < this.max;};
    a.max = null;
    a.min = null;
    a.next = function () {return this.min++;};
    a.__class__ = IntIter;
    tetris.Piece = function (b, c) {if (b !== $_) {this.color = b;this.coords = c;}};
    tetris.Piece.__name__ = ["tetris", "Piece"];
    tetris.Piece.createRandom = function () {var b = tetris.Piece.presets[Math.floor(Math.random() * tetris.Piece.presets.length)];return new tetris.Piece(b.color, b.coords);};
    a = tetris.Piece.prototype;
    a.color = null;
    a.coords = null;
    a.rotate = function () {if (this.coords == tetris.Piece.presets[0].coords) {return null;} else {for (var b = [], c = 0, d = this.coords; c < d.length;) {var e = d[c];++c;b.push([- e[1], e[0]]);}b = new tetris.Piece(this.color, b);b.x = this.x;b.y = this.y;return b;}};
    a.x = null;
    a.y = null;
    a.__class__ = tetris.Piece;
    easel.display.TextSprite = function (b) {if (b !== $_) {if (b == null) {b = "";}easel.display.Sprite.apply(this, []);this.text = b;this._isContentsDirty = true;this.font = "12px serif";this._isContentsDirty = true;}};
    easel.display.TextSprite.__name__ = ["easel", "display", "TextSprite"];
    easel.display.TextSprite.__super__ = easel.display.Sprite;
    for (k in easel.display.Sprite.prototype) {
        easel.display.TextSprite.prototype[k] = easel.display.Sprite.prototype[k];
    }
    a = easel.display.TextSprite.prototype;
    a.align = null;
    a.baseline = null;
    a.draw = function (b) {b.font = this.font;if (this.align != null) {b.textAlign = this.align;}if (this.baseline != null) {b.textBaseline = this.baseline;}if (this.fillStyle != null) {b.fillStyle = this.fillStyle;b.fillText(this.text, 0, 0);}if (this.strokeStyle != null) {b.strokeStyle = this.strokeStyle;b.strokeText(this.text, 0, 0);}};
    a.fillStyle = null;
    a.font = null;
    a.packBounds = function (b) {if (b != null) {b.save();b.font = this.font;var c = b.measureText(this.text);b.restore();this.boundingBox = [0, 0, c.width, 50];}easel.display.Sprite.prototype.packBounds.apply(this, [b]);};
    a.setAlign = function (b) {this.align = b;this._isContentsDirty = true;return b;};
    a.setBaseline = function (b) {this.baseline = b;this._isContentsDirty = true;return b;};
    a.setFillStyle = function (b) {this.fillStyle = b;this._isContentsDirty = true;return b;};
    a.setFont = function (b) {this.font = b;this._isContentsDirty = true;return b;};
    a.setStrokeStyle = function (b) {this.strokeStyle = b;this._isContentsDirty = true;return b;};
    a.setText = function (b) {this.text = b;this._isContentsDirty = true;return b;};
    a.strokeStyle = null;
    a.text = null;
    a.__class__ = easel.display.TextSprite;
    Hash = function (b) {if (b !== $_) {this.h = {};if (this.h.__proto__ != null) {this.h.__proto__ = null;delete this.h.__proto__;}}};
    Hash.__name__ = ["Hash"];
    a = Hash.prototype;
    a.exists = function (b) {try {b = "$" + b;return this.hasOwnProperty.call(this.h, b);} catch (c) {for (var d in this.h) {if (d == b) {return true;}}return false;}};
    a.get = function (b) {return this.h["$" + b];};
    a.h = null;
    a.iterator = function () {return {ref: this.h, it: this.keys(), hasNext: function () {return this.it.hasNext();}, next: function () {return this.ref["$" + this.it.next()];}};};
    a.keys = function () {var b = [];for (var c in this.h) {b.push(c.substr(1));}return b.iterator();};
    a.remove = function (b) {if (!this.exists(b)) {return false;}delete this.h["$" + b];return true;};
    a.set = function (b, c) {this.h["$" + b] = c;};
    a.toString = function () {var b = new StringBuf;b.b[b.b.length] = "{";for (var c = this.keys(); c.hasNext();) {var d = c.next();b.b[b.b.length] = d;b.b[b.b.length] = " => ";b.b[b.b.length] = Std.string(this.get(d));if (c.hasNext()) {b.b[b.b.length] = ", ";}}b.b[b.b.length] = "}";return b.b.join("");};
    a.__class__ = Hash;
    easel.media = {};
    easel.media.SoundManager = function () {};
    easel.media.SoundManager.__name__ = ["easel", "media", "SoundManager"];
    easel.media.SoundManager.play = function (b) {var c;if (easel.media.SoundManager.cache.exists(b)) {c = easel.media.SoundManager.cache.get(b);c.currentTime = 0;} else {c = js.Lib.document.createElement("audio");if (!c.canPlayType) {return;}if (c.canPlayType("audio/mpeg")) {c.src = b + ".mp3";} else if (c.canPlayType("audio/wav")) {c.src = b + ".wav";} else if (c.canPlayType("audio/ogg")) {c.src = b + ".ogg";} else {return;}easel.media.SoundManager.cache.set(b, c);}c.play();};
    easel.media.SoundManager.prototype.__class__ = easel.media.SoundManager;
    Std = function () {};
    Std.__name__ = ["Std"];
    Std.is = function (b, c) {return js.Boot.__instanceof(b, c);};
    Std.string = function (b) {return js.Boot.__string_rec(b, "");};
    Std.int = function (b) {if (b < 0) {return Math.ceil(b);}return Math.floor(b);};
    Std.parseInt = function (b) {b = parseInt(b);if (Math.isNaN(b)) {return null;}return b;};
    Std.parseFloat = function (b) {return parseFloat(b);};
    Std.random = function (b) {return Math.floor(Math.random() * b);};
    Std.prototype.__class__ = Std;
    Lambda = function () {};
    Lambda.__name__ = ["Lambda"];
    Lambda.array = function (b) {var c = [];for (b = b.iterator(); b.hasNext();) {var d = b.next();c.push(d);}return c;};
    Lambda.list = function (b) {var c = new List;for (b = b.iterator(); b.hasNext();) {var d = b.next();c.add(d);}return c;};
    Lambda.map = function (b, c) {var d = new List;for (b = b.iterator(); b.hasNext();) {var e = b.next();d.add(c(e));}return d;};
    Lambda.mapi = function (b, c) {var d = new List, e = 0;for (b = b.iterator(); b.hasNext();) {var f = b.next();d.add(c(e++, f));}return d;};
    Lambda.has = function (b, c, d) {if (d == null) {for (d = b.iterator(); d.hasNext();) {b = d.next();if (b == c) {return true;}}} else {for (var e = b.iterator(); e.hasNext();) {b = e.next();if (d(b, c)) {return true;}}}return false;};
    Lambda.exists = function (b, c) {for (b = b.iterator(); b.hasNext();) {var d = b.next();if (c(d)) {return true;}}return false;};
    Lambda.foreach = function (b, c) {for (b = b.iterator(); b.hasNext();) {var d = b.next();if (!c(d)) {return false;}}return true;};
    Lambda.iter = function (b, c) {for (b = b.iterator(); b.hasNext();) {var d = b.next();c(d);}};
    Lambda.filter = function (b, c) {var d = new List;for (b = b.iterator(); b.hasNext();) {var e = b.next();c(e) && d.add(e);}return d;};
    Lambda.fold = function (b, c, d) {for (b = b.iterator(); b.hasNext();) {var e = b.next();d = c(e, d);}return d;};
    Lambda.count = function (b) {var c = 0;for (b = b.iterator(); b.hasNext();) {b.next();++c;}return c;};
    Lambda.empty = function (b) {return !b.iterator().hasNext();};
    Lambda.prototype.__class__ = Lambda;
    List = function (b) {if (b !== $_) {this.length = 0;}};
    List.__name__ = ["List"];
    a = List.prototype;
    a.add = function (b) {b = [b];if (this.h == null) {this.h = b;} else {this.q[1] = b;}this.q = b;this.length++;};
    a.clear = function () {this.q = this.h = null;this.length = 0;};
    a.filter = function (b) {for (var c = new List, d = this.h; d != null;) {var e = d[0];d = d[1];b(e) && c.add(e);}return c;};
    a.first = function () {return this.h == null ? null : this.h[0];};
    a.h = null;
    a.isEmpty = function () {return this.h == null;};
    a.iterator = function () {return {h: this.h, hasNext: function () {return this.h != null;}, next: function () {if (this.h == null) {return null;}var b = this.h[0];this.h = this.h[1];return b;}};};
    a.join = function (b) {for (var c = new StringBuf, d = true, e = this.h; e != null;) {if (d) {d = false;} else {c.b[c.b.length] = b;}c.b[c.b.length] = e[0];e = e[1];}return c.b.join("");};
    a.last = function () {return this.q == null ? null : this.q[0];};
    a.length = null;
    a.map = function (b) {for (var c = new List, d = this.h; d != null;) {var e = d[0];d = d[1];c.add(b(e));}return c;};
    a.pop = function () {if (this.h == null) {return null;}var b = this.h[0];this.h = this.h[1];if (this.h == null) {this.q = null;}this.length--;return b;};
    a.push = function (b) {this.h = b = [b, this.h];if (this.q == null) {this.q = b;}this.length++;};
    a.q = null;
    a.remove = function (b) {for (var c = null, d = this.h; d != null;) {if (d[0] == b) {if (c == null) {this.h = d[1];} else {c[1] = d[1];}if (this.q == d) {this.q = c;}this.length--;return true;}c = d;d = d[1];}return false;};
    a.toString = function () {var b = new StringBuf, c = true, d = this.h;for (b.b[b.b.length] = "{"; d != null;) {if (c) {c = false;} else {b.b[b.b.length] = ", ";}b.b[b.b.length] = Std.string(d[0]);d = d[1];}b.b[b.b.length] = "}";return b.b.join("");};
    a.__class__ = List;
    js = {};
    js.Lib = function () {};
    js.Lib.__name__ = ["js", "Lib"];
    js.Lib.isIE = null;
    js.Lib.isOpera = null;
    js.Lib.document = null;
    js.Lib.window = null;
    js.Lib.alert = function (b) {alert(js.Boot.__string_rec(b, ""));};
    js.Lib.eval = function (b) {return eval(b);};
    js.Lib.setErrorHandler = function (b) {js.Lib.onerror = b;};
    js.Lib.prototype.__class__ = js.Lib;
    js.Boot = function () {};
    js.Boot.__name__ = ["js", "Boot"];
    js.Boot.__unhtml = function (b) {return b.split("&").join("&amp;").split("<").join("&lt;").split(">").join("&gt;");};
    js.Boot.__trace = function (b, c) {c = c != null ? c.fileName + ":" + c.lineNumber + ": " : "";c += js.Boot.__unhtml(js.Boot.__string_rec(b, "")) + "<br/>";b = document.getElementById("haxe:trace");if (b == null) {alert("No haxe:trace element defined\n" + c);} else {b.innerHTML += c;}};
    js.Boot.__clear_trace = function () {var b = document.getElementById("haxe:trace");if (b != null) {b.innerHTML = "";}};
    js.Boot.__closure = function (b, c) {
		var d = b[c];
		if (d == null) {return null;}
		c = function () {return d.apply(b, arguments);};
		c.scope = b;
		c.method = d;
		return c;
	};
    js.Boot.__string_rec = function (b, c) {if (b == null) {return "null";}if (c.length >= 5) {return "<...>";}var d = typeof b;if (d == "function" && (b.__name__ != null || b.__ename__ != null)) {d = "object";}switch (d) {case "object":if (b instanceof Array) {if (b.__enum__ != null) {if (b.length == 2) {return b[0];}d = b[0] + "(";c += "\t";for (var e = 2, f = b.length; e < f;) {var g = e++;d += g != 2 ? "," + js.Boot.__string_rec(b[g], c) : js.Boot.__string_rec(b[g], c);}return d + ")";}e = b.length;d = "[";c += "\t";for (f = 0; f < e;) {g = f++;d += (g > 0 ? "," : "") + js.Boot.__string_rec(b[g], c);}d += "]";return d;}try {f = b.toString;} catch (h) {return "???";}if (f != null && f != Object.toString) {d = b.toString();if (d != "[object Object]") {return d;}}f = null;d = "{\n";c += "\t";e = b.hasOwnProperty != null;for (f in b) {if (!(e && !b.hasOwnProperty(f))) {if (!(f == "prototype" || f == "__class__" || f == "__super__" || f == "__interfaces__")) {if (d.length != 2) {d += ", \n";}d += c + f + " : " + js.Boot.__string_rec(b[f], c);}}}c = c.substring(1);d += "\n" + c + "}";return d;case "function":return "<function>";case "string":return b;default:return String(b);}};
    js.Boot.__interfLoop = function (b, c) {if (b == null) {return false;}if (b == c) {return true;}var d = b.__interfaces__;if (d != null) {for (var e = 0, f = d.length; e < f;) {var g = e++;g = d[g];if (g == c || js.Boot.__interfLoop(g, c)) {return true;}}}return js.Boot.__interfLoop(b.__super__, c);};
    js.Boot.__instanceof = function (b, c) {try {if (b instanceof c) {if (c == Array) {return b.__enum__ == null;}return true;}if (js.Boot.__interfLoop(b.__class__, c)) {return true;}} catch (d) {if (c == null) {return false;}}switch (c) {case Int:return Math.ceil(b % 2147483648) === b;case Float:return typeof b == "number";case Bool:return b === true || b === false;case String:return typeof b == "string";case Dynamic:return true;default:if (b == null) {return false;}return b.__enum__ == c || c == Class && b.__name__ != null || c == Enum && b.__ename__ != null;}};
    js.Boot.__init = function () {js.Lib.isIE = document.all != null && window.opera == null;js.Lib.isOpera = window.opera != null;Array.prototype.copy = Array.prototype.slice;Array.prototype.insert = function (d, e) {this.splice(d, 0, e);};Array.prototype.remove = Array.prototype.indexOf ? function (d) {d = this.indexOf(d);if (d == -1) {return false;}this.splice(d, 1);return true;} : function (d) {for (var e = 0, f = this.length; e < f;) {if (this[e] == d) {this.splice(e, 1);return true;}e++;}return false;};Array.prototype.iterator = function () {return {cur: 0, arr: this, hasNext: function () {return this.cur < this.arr.length;}, next: function () {return this.arr[this.cur++];}};};var b = String.prototype.charCodeAt;String.prototype.cca = b;String.prototype.charCodeAt = function (d) {d = b.call(this, d);if (isNaN(d)) {return null;}return d;};var c = String.prototype.substr;String.prototype.substr = function (d, e) {if (d != null && d != 0 && e != null && e < 0) {return "";}if (e == null) {e = this.length;}if (d < 0) {d = this.length + d;if (d < 0) {d = 0;}} else if (e < 0) {e = this.length + e - d;}return c.apply(this, [d, e]);};
		$closure = js.Boot.__closure;};
    js.Boot.prototype.__class__ = js.Boot;
    tetris.Main = function () {};
    tetris.Main.__name__ = ["tetris", "Main"];
    tetris.Main.assets = null;
    tetris.Main.main = function () {tetris.Main.assets = new easel.util.AssetPack("./static/", ["chrome.png", "blocks.png"]);tetris.Main.assets.onLoad = function () {var b = js.Lib.document.getElementById("screen");(new easel.display.Stage(b)).init(new tetris.PlayingScene);};};
    tetris.Main.prototype.__class__ = tetris.Main;
    easel.display.Scene = function (b) {if (b !== $_) {this._root = new easel.display.Group;}};
    easel.display.Scene.__name__ = ["easel", "display", "Scene"];
    a = easel.display.Scene.prototype;
    a._root = null;
    a.add = function (b) {this._root.add(b);};
    a.contains = function (b) {return this._root.contains(b);};
    a.load = function () {};
    a.remove = function (b) {return this._root.remove(b);};
    a.removeAll = function () {this._root.removeAll();};
    a.render = function (b) {b.canvas.width = b.canvas.width;this._root.render(b);};
    a.stage = null;
    a.unload = function () {};
    a.update = function () {};
    a.__class__ = easel.display.Scene;
    easel.display.Scene.__interfaces__ = [easel.display.Container];
    tetris.BoardSprite = function (b) {if (b !== $_) {easel.display.Group.apply(this, []);this._board = b;this._blocks = [];b.addHandler($closure(this, "handle"));}};
    tetris.BoardSprite.__name__ = ["tetris", "BoardSprite"];
    tetris.BoardSprite.__super__ = easel.display.Group;
    for (k in easel.display.Group.prototype) {
        tetris.BoardSprite.prototype[k] = easel.display.Group.prototype[k];
    }
    a = tetris.BoardSprite.prototype;
    a._activePiece = null;
    a._blocks = null;
    a._board = null;
    a.handle = function (b) {switch (b[1]) {case 0:var c = b[2];this._activePiece.setX(20 * c.x);this._activePiece.setY(20 * c.y);break;case 1:c = b[2];this._activePiece.setX(20 * c.x);this._activePiece.setY(20 * c.y);break;case 4:c = b[2];this._activePiece = new tetris.PieceSprite(c);this.add(this._activePiece);break;case 5:c = b[2];var d = [], e = new easel.display.Group;c.push(0);b = 0;for (var f = c.length - 1; b < f;) {var g = b++, h = c[g], i = new easel.display.FilledSprite("#ffffff", this._board._width * 20, 20);i.setY(h * 20 - 10);i.setX(-10);e.add(i);for (var m = 0, j = this._board._width; m < j;) {i = m++;i = [this._blocks[h * this._board._width + i]];i[0] != null && d.push(i[0]);}for (h = h - 1; h > c[g + 1];) {m = 0;for (j = this._board._width; m < j;) {i = m++;this._blocks[this._board._width * (h + g + 1) + i] = this._blocks[this._board._width * h + i];i = [this._blocks[this._board._width * h + i]];i[0] != null && JSTweener.addTween(i[0], {y: (h + g + 1) * 20, time: 0.5, delay: 0.25, onUpdate: function (n) {return function () {n[0]._isTransformDirty = true;};}(i), transition: "easeinexpo"});}h -= 1;}}e.alpha = 0;this.add(e);var l = new easel.display.TextSprite;l.setText(tetris.BoardSprite.ONOMATOPOEIA[Math.floor(Math.random() * tetris.BoardSprite.ONOMATOPOEIA.length)]);l.baseline = "top";l._isContentsDirty = true;l.align = "center";l._isContentsDirty = true;l.font = "bold 16px sans-serif";l._isContentsDirty = true;l.fillStyle = "red";l._isContentsDirty = true;l.setX(this._activePiece.x);l.setY(this._activePiece.y);this.add(l);JSTweener.addTween(l, {rotation: (Math.random() - 0.5) * (Math.PI / 4), scaleX: 1.5, scaleY: 1.5, y: l.y - 20, onUpdate: function () {l._isTransformDirty = true;}, onComplete: function () {l.detach();}});var p = this;JSTweener.addTween(e, {alpha: 0.8, time: 0.5, transition: "linear", onComplete: function () {for (var n = 0; n < d.length;) {var r = d[n];++n;p.remove(r);}p.remove(e);}});break;case 3:c = b[2];this.remove(this._activePiece);this.handle(tetris.BoardEvent.NextPiece(c, null));f = this._activePiece;f.setRotation(f.rotation - Math.PI / 2);var q = this._activePiece;JSTweener.addTween(q, {time: 0.4, rotation: q.rotation + Math.PI / 2, onUpdate: function () {q._isTransformDirty = true;}});break;case 2:c = b[2];g = tetris.Main.assets.get("blocks.png");f = 0;for (b = c.coords; f < b.length;) {j = b[f];++f;i = new easel.display.ImageSprite(g, 7);m = c.x + j[0];j = c.y + j[1];this._blocks[j * this._board._width + m] = i;i.setX(m * 20);i.setY(j * 20);i.setCenterX(10);i.setCenterY(10);i.setFrame(c.color);this.add(i);}var o = this._activePiece;o.composite = "xor";o.alpha = 0.8;JSTweener.addTween(o, {alpha: 0.1, time: 0.6, onComplete: function () {o.detach();}});this.add(o);break;default:break;}};
    a.__class__ = tetris.BoardSprite;
    tetris.PlayingScene = function (b) {b !== $_ && easel.display.Scene.apply(this, []);};
    tetris.PlayingScene.__name__ = ["tetris", "PlayingScene"];
    tetris.PlayingScene.__super__ = easel.display.Scene;
    for (k in easel.display.Scene.prototype) {
        tetris.PlayingScene.prototype[k] = easel.display.Scene.prototype[k];
    }
    a = tetris.PlayingScene.prototype;
    a._board = null;
    a._boardSprite = null;
    a._lastTick = null;
    a._level = null;
    a._preview = null;
    a._score = null;
    a._stepDelay = null;
    a.handler = function (b) {
		switch (b[1]) {
			case 5:easel.media.SoundManager.play("static/clear");break;
			case 8:easel.media.SoundManager.play("static/gameover");this.stage.setScene(new tetris.GameOverScene);break;
			case 3:easel.media.SoundManager.play("static/rotate");break;
			case 2:easel.media.SoundManager.play("static/place");break;
			case 4:b = b[3];this._preview != null && this.remove(this._preview);this._preview = new tetris.PieceSprite(b);this._preview.setX(275);this._preview.setY(80);this.add(this._preview);b = new easel.display.CircleSprite(1);this._preview.mask = b;var c = this._preview;JSTweener.addTween(b, {radius: 100, time: 0.5, transition: "linear", onComplete: function () {c.mask = null;}});break;
			case 6:this._score.setText("" + this._board.score);break;
			case 7:
				easel.media.SoundManager.play("static/levelup");
				this._stepDelay = 1000 / this._board.level;
				var d = this._level;
				d.setText("L" + this._board.level);
				d.scaleX = 10;
				d._isTransformDirty = true;
				JSTweener.addTween(d, {scaleX: 1, onUpdate: function () {d._isTransformDirty = true;}});
				break;
			default:break;
		}
	};
    a.load = function () {
		js.Lib.document.onkeydown = $closure(this, "onKeyDown");
		js.Lib.document.getElementById("screen").onclick = $closure(this, "onClick");
		this.add(new easel.display.ImageSprite(tetris.Main.assets.get("chrome.png")));	
		this._board = new tetris.Board(10, 20);
		this._boardSprite = new tetris.BoardSprite(this._board);
		this._boardSprite.setCenterX(-10);
		this._boardSprite.setCenterY(-10);
		this._boardSprite.setX(13);
		this._boardSprite.setY(9);
		this.add(this._boardSprite);
		this._score = new easel.display.TextSprite("0");
		this._score.setFont("bold 32px monospace");
		this._score.setFillStyle("#00ff00");
		this._score.setX(220);
		this._score.setY(186);
		this._score.setRotation(- Math.PI / 16);
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
		this._board.addHandler($closure(this, "handler"));
		this._board.startGame();
	};
    a.onClick = function (b) {var c = (b.clientX - this._boardSprite.x) / 20;b = (b.clientY - this._boardSprite.y) / 20;if (b < this._board._piece.y) {this._board.rotate();} else if (b > this._board._height - 2) {this._board.drop();} else if (c < this._board._piece.x) {this._board.movePiece(-1, 0);} else {c > this._board._piece.x + 1 && this._board.movePiece(1, 0);}};
    a.onKeyDown = function (b) {	
		switch (b.keyCode) {
			case 37:	
				this._board.movePiece(-1, 0);
				break;
			case 39:
				this._board.movePiece(1, 0);
				break;
			case 38:
				this._board.rotate();
				break;
			case 40:
				this._board.drop();
				break;
			default:
				return;
		}b.preventDefault();
	};
    a.unload = function () {js.Lib.document.onkeydown = null;js.Lib.document.getElementById("screen").onclick = null;};
    a.update = function (b) {
		for (this._lastTick += b; this._lastTick > this._stepDelay;) {
			this._lastTick -= this._stepDelay;
			this._board.step();
		}
	};
    a.__class__ = tetris.PlayingScene;
    tetris.GameOverScene = function (b) {b !== $_ && easel.display.Scene.apply(this, []);};
    tetris.GameOverScene.__name__ = ["tetris", "GameOverScene"];
    tetris.GameOverScene.__super__ = easel.display.Scene;
    for (k in easel.display.Scene.prototype) {
        tetris.GameOverScene.prototype[k] = easel.display.Scene.prototype[k];
    }
    tetris.GameOverScene.prototype.load = function () {var b = new easel.display.TextSprite("Game Over");b.align = "center";b._isContentsDirty = true;b.baseline = "middle";b._isContentsDirty = true;b.font = "bold 52px cursive";b._isContentsDirty = true;b.fillStyle = "black";b._isContentsDirty = true;b.scaleX = 0.01;b._isTransformDirty = true;b.scaleY = 0.01;b._isTransformDirty = true;b.setX(this.stage.ctx.canvas.width / 2);b.setY(this.stage.ctx.canvas.height / 2);this.add(b);var c = new easel.display.TextSprite("Click to Replay");c.align = "center";c._isContentsDirty = true;c.baseline = "middle";c._isContentsDirty = true;c.font = "bold 16px monospace";c._isContentsDirty = true;c.fillStyle = "black";c._isContentsDirty = true;c.setX(this.stage.ctx.canvas.width / 2);c.setY(this.stage.ctx.canvas.height / 2 + 50);this.add(c);c = Math.floor(this.stage.ctx.canvas.width / 5);var d = Math.floor(this.stage.ctx.canvas.height / 5), e = js.Lib.document.createElement("canvas");e.width = this.stage.ctx.canvas.width;e.height = this.stage.ctx.canvas.height;e.getContext("2d").drawImage(this.stage.ctx.canvas, 0, 0);for (var f = 0; f < 5;) {for (var g = f++, h = 0; h < 5;) {var i = h++;i = c * i;var m = d * g, j = [new tetris.ParticleSprite(e, i, m, c, d)];j[0].setX(i + c / 2);j[0].setY(m + d / 2);j[0].setCenterX(c / 2);j[0].setCenterY(d / 2);this.add(j[0]);JSTweener.addTween(j[0], {x: j[0].x + 30 * (Math.random() - 0.5), y: this.stage.ctx.canvas.height, rotation: Math.random() * 2 * Math.PI + Math.PI, time: 2, transition: "linear", onUpdate: function (p) {return function () {p[0]._isTransformDirty = true;};}(j)});}}var l = this;JSTweener.addTween(b, {scaleX: 1, scaleY: 1, delay: 1.5, rotation: Math.PI / 16, onUpdate: function () {b._isTransformDirty = true;}, onStart: function () {js.Lib.document.getElementById("screen").onclick = $closure(l, "onClick");}});};
    tetris.GameOverScene.prototype.onClick = function () {this.stage.setScene(new tetris.PlayingScene);};
    tetris.GameOverScene.prototype.unload = function () {js.Lib.document.getElementById("screen").onclick = null;};
    tetris.GameOverScene.prototype.__class__ = tetris.GameOverScene;
    tetris.ParticleSprite = function (b, c, d, e, f) {if (b !== $_) {easel.display.Sprite.apply(this, []);this._source = b;this._sx = c;this._sy = d;this._sw = e;this._sh = f;}};
    tetris.ParticleSprite.__name__ = ["tetris", "ParticleSprite"];
    tetris.ParticleSprite.__super__ = easel.display.Sprite;
    for (k in easel.display.Sprite.prototype) {
        tetris.ParticleSprite.prototype[k] = easel.display.Sprite.prototype[k];
    }
    a = tetris.ParticleSprite.prototype;
    a._sh = null;
    a._source = null;
    a._sw = null;
    a._sx = null;
    a._sy = null;
    a.draw = function (b) {b.drawImage(this._source, this._sx, this._sy, this._sw, this._sh, 0, 0, this._sw, this._sh);};
    a.packBounds = function () {};
    a.__class__ = tetris.ParticleSprite;
    easel.display.Stage = function (b) {if (b !== $_) {this.ctx = b.getContext("2d");}};
    easel.display.Stage.__name__ = ["easel", "display", "Stage"];
    a = easel.display.Stage.prototype;
    a._current = null;
    a.ctx = null;
    a.getHeight = function () {return this.ctx.canvas.height;};
    a.getWidth = function () {return this.ctx.canvas.width;};
    a.height = null;
    a.init = function (b) {
		this.setScene(b);
		var c = 0, d = this, e = function () {
			var f = (new Date).getTime(), g = d._current;
			g.update(f - c);
			g.render(d.ctx);
			c = f;
			window.setTimeout(e, 33.333333333333336);
		};
		c = Date.now().getTime();
		e();
	};
    a.setScene = function (b) {if (this._current != null) {this._current.unload();this._current.stage = null;}this._current = b;b.stage = this;b.load();};
    a.width = null;
    a.__class__ = easel.display.Stage;
    $Main = function () {};
    $Main.__name__ = ["@Main"];
    $Main.prototype.__class__ = $Main;
    $_ = {};
    js.Boot.__res = {};
    js.Boot.__init();
    Date.now = function () {return new Date;};
    Date.fromTime = function (b) {var c = new Date;c.setTime(b);return c;};
    Date.fromString = function (b) {switch (b.length) {case 8:b = b.split(":");var c = new Date;c.setTime(0);c.setUTCHours(b[0]);c.setUTCMinutes(b[1]);c.setUTCSeconds(b[2]);return c;case 10:b = b.split("-");return new Date(b[0], b[1] - 1, b[2], 0, 0, 0);case 19:b = b.split(" ");c = b[0].split("-");b = b[1].split(":");return new Date(c[0], c[1] - 1, c[2], b[0], b[1], b[2]);default:throw "Invalid date format : " + b;}};
    Date.prototype.toString = function () {var b = this, c = b.getMonth() + 1, d = b.getDate(), e = b.getHours(), f = b.getMinutes(), g = b.getSeconds();return b.getFullYear() + "-" + (c < 10 ? "0" + c : "" + c) + "-" + (d < 10 ? "0" + d : "" + d) + " " + (e < 10 ? "0" + e : "" + e) + ":" + (f < 10 ? "0" + f : "" + f) + ":" + (g < 10 ? "0" + g : "" + g);};
    Date.prototype.__class__ = Date;
    Date.__name__ = ["Date"];
    String.prototype.__class__ = String;
    String.__name__ = ["String"];
    Array.prototype.__class__ = Array;
    Array.__name__ = ["Array"];
    Int = {__name__: ["Int"]};
    Dynamic = {__name__: ["Dynamic"]};
    Float = Number;
    Float.__name__ = ["Float"];
    Bool = {__ename__: ["Bool"]};
    Class = {__name__: ["Class"]};
    Enum = {};
    Void = {__ename__: ["Void"]};
    Math.NaN = Number.NaN;
    Math.NEGATIVE_INFINITY = Number.NEGATIVE_INFINITY;
    Math.POSITIVE_INFINITY = Number.POSITIVE_INFINITY;
    Math.isFinite = function (b) {return isFinite(b);};
    Math.isNaN = function (b) {return isNaN(b);};
    Math.__name__ = ["Math"];
    js.Lib.document = document;
    js.Lib.window = window;
    onerror = function (b, c, d) {var e = js.Lib.onerror;if (e == null) {return false;}return e(b, [c + ":" + d]);};
    tetris.Piece.presets = [new tetris.Piece(1, [[-1, -1], [-1, 0], [0, 0], [0, -1]]), new tetris.Piece(6, [[-2, 0], [-1, 0], [0, 0], [1, 0]]), new tetris.Piece(2, [[0, -1], [1, -1], [0, 0], [-1, 0]]), new tetris.Piece(0, [[0, -1], [-1, -1], [0, 0], [1, 0]]), new tetris.Piece(4, [[-1, -1], [-1, 0], [0, 0], [1, 0]]), new tetris.Piece(3, [[1, -1], [-1, 0], [0, 0], [1, 0]]), new tetris.Piece(5, [[0, -1], [-1, 0], [0, 0], [1, 0]])];
    easel.media.SoundManager.cache = new Hash;
    js.Lib.onerror = null;
    tetris.BoardSprite.BLOCK_SIZE = 20;
    tetris.BoardSprite.ONOMATOPOEIA = ["BAM", "BANG", "BLOOP", "BLURP", "BOFF", "BONK", "CLANK", "CLUNK", "GLURP", "KAPOW", "PAM", "PLOP", "POW", "SPLAT", "THUNK", "WHAP", "WHACK", "WHAM", "ZAM", "ZAP", "ZLONK"];
    $Main.init = tetris.Main.main();
    var JSTweener = {
		looping: false, frameRate: 30, objects: [], defaultOptions: {time: 1, transition: "easeoutexpo", delay: 0, onStart: undefined, onStartParams: undefined, onUpdate: undefined, onUpdateParams: undefined, onComplete: undefined, onCompleteParams: undefined}, inited: false, easingFunctionsLowerCase: {}, 
		init: function () {
			this.inited = true;
			for (var b in JSTweener.easingFunctions) {
				this.easingFunctionsLowerCase[b.toLowerCase()] = JSTweener.easingFunctions[b];
			}
		}, 
		addTween: function (b, c) {
			var d = this;
			this.inited || this.init();
			var e = {};
			e.target = b;
			e.targetPropeties = {};
			for (var f in this.defaultOptions) {if (typeof c[f] != "undefined") {e[f] = c[f];
			delete c[f];
			} else {e[f] = this.defaultOptions[f];
			}}e.easing = typeof e.transition == "function" ? e.transition : this.easingFunctionsLowerCase[e.transition.toLowerCase()];
			for (f in c) {var g = b[f];
			e.targetPropeties[f] = {b: g, c: c[f] - g};
			}setTimeout(function () {e.startTime = new Date - 0;
			e.endTime = e.time * 1000 + e.startTime;
			if (typeof e.onStart == "function") {e.onStartParams ? e.onStart.apply(e, e.onStartParams) : e.onStart();
			}d.objects.push(e);
			if (!d.looping) {d.looping = true;
			d.eventLoop.call(d);
			}}, e.delay * 1000);
		}, 
		eventLoop: function () {
			for (var b = new Date - 0, c = 0;
			 c < this.objects.length;
			 c++) {var d = this.objects[c], e = b - d.startTime, f = d.endTime - d.startTime;
			if (e >= f) {for (var g in d.targetPropeties) {var h = d.targetPropeties[g];
			try {d.target[g] = h.b + h.c;
			} catch (i) {}}this.objects.splice(c, 1);
			if (typeof d.onUpdate == "function") {d.onUpdateParams ? d.onUpdate.apply(d, d.onUpdateParams) : d.onUpdate();
			}if (typeof d.onComplete == "function") {d.onCompleteParams ? d.onComplete.apply(d, d.onCompleteParams) : d.onComplete();
			}} else {for (g in d.targetPropeties) {h = d.targetPropeties[g];
			h = d.easing(e, h.b, h.c, f);
			try {d.target[g] = h;
			} catch (m) {}}if (typeof d.onUpdate == "function") {d.onUpdateParams ? d.onUpdate.apply(d, d.onUpdateParams) : d.onUpdate();
			}}}if (this.objects.length > 0) {var j = this;
			setTimeout(function () {j.eventLoop();
			}, 1000 / j.frameRate);
			} else {this.looping = false;
			}
		}};
    JSTweener.Utils = {bezier2: function (b, c, d, e) {return (1 - b) * (1 - b) * c + 2 * b * (1 - b) * d + b * b * e;}, bezier3: function (b, c, d, e, f) {return Math.pow(1 - b, 3) * c + 3 * b * Math.pow(1 - b, 2) * d + 3 * b * b * (1 - b) * e + b * b * b * f;}, allSetStyleProperties: function (b) {var c;c = document.defaultView && document.defaultView.getComputedStyle ? document.defaultView.getComputedStyle(b, null) : b.currentStyle;for (var d in c) {if (!d.match(/^\d+$/)) {try {b.style[d] = c[d];} catch (e) {}}}}};
    JSTweener.easingFunctions = {easeNone: function (b, c, d, e) {return d * b / e + c;}, easeInQuad: function (b, c, d, e) {return d * (b /= e) * b + c;}, easeOutQuad: function (b, c, d, e) {return - d * (b /= e) * (b - 2) + c;}, easeInOutQuad: function (b, c, d, e) {if ((b /= e / 2) < 1) {return d / 2 * b * b + c;}return - d / 2 * (--b * (b - 2) - 1) + c;}, easeInCubic: function (b, c, d, e) {return d * (b /= e) * b * b + c;}, easeOutCubic: function (b, c, d, e) {return d * ((b = b / e - 1) * b * b + 1) + c;}, easeInOutCubic: function (b, c, d, e) {if ((b /= e / 2) < 1) {return d / 2 * b * b * b + c;}return d / 2 * ((b -= 2) * b * b + 2) + c;}, easeOutInCubic: function (b, c, d, e) {if (b < e / 2) {return JSTweener.easingFunctions.easeOutCubic(b * 2, c, d / 2, e);}return JSTweener.easingFunctions.easeInCubic(b * 2 - e, c + d / 2, d / 2, e);}, easeInQuart: function (b, c, d, e) {return d * (b /= e) * b * b * b + c;}, easeOutQuart: function (b, c, d, e) {return - d * ((b = b / e - 1) * b * b * b - 1) + c;}, easeInOutQuart: function (b, c, d, e) {if ((b /= e / 2) < 1) {return d / 2 * b * b * b * b + c;}return - d / 2 * ((b -= 2) * b * b * b - 2) + c;}, easeOutInQuart: function (b, c, d, e) {if (b < e / 2) {return JSTweener.easingFunctions.easeOutQuart(b * 2, c, d / 2, e);}return JSTweener.easingFunctions.easeInQuart(b * 2 - e, c + d / 2, d / 2, e);}, easeInQuint: function (b, c, d, e) {return d * (b /= e) * b * b * b * b + c;}, easeOutQuint: function (b, c, d, e) {return d * ((b = b / e - 1) * b * b * b * b + 1) + c;}, easeInOutQuint: function (b, c, d, e) {if ((b /= e / 2) < 1) {return d / 2 * b * b * b * b * b + c;}return d / 2 * ((b -= 2) * b * b * b * b + 2) + c;}, easeOutInQuint: function (b, c, d, e) {if (b < e / 2) {return JSTweener.easingFunctions.easeOutQuint(b * 2, c, d / 2, e);}return JSTweener.easingFunctions.easeInQuint(b * 2 - e, c + d / 2, d / 2, e);}, easeInSine: function (b, c, d, e) {return - d * Math.cos(b / e * (Math.PI / 2)) + d + c;}, easeOutSine: function (b, c, d, e) {return d * Math.sin(b / e * (Math.PI / 2)) + c;}, easeInOutSine: function (b, c, d, e) {return - d / 2 * (Math.cos(Math.PI * b / e) - 1) + c;}, easeOutInSine: function (b, c, d, e) {if (b < e / 2) {return JSTweener.easingFunctions.easeOutSine(b * 2, c, d / 2, e);}return JSTweener.easingFunctions.easeInSine(b * 2 - e, c + d / 2, d / 2, e);}, easeInExpo: function (b, c, d, e) {return b == 0 ? c : d * Math.pow(2, 10 * (b / e - 1)) + c - d * 0.001;}, easeOutExpo: function (b, c, d, e) {return b == e ? c + d : d * 1.001 * (- Math.pow(2, -10 * b / e) + 1) + c;}, easeInOutExpo: function (b, c, d, e) {if (b == 0) {return c;}if (b == e) {return c + d;}if ((b /= e / 2) < 1) {return d / 2 * Math.pow(2, 10 * (b - 1)) + c - d * 0.0005;}return d / 2 * 1.0005 * (- Math.pow(2, -10 * --b) + 2) + c;}, easeOutInExpo: function (b, c, d, e) {if (b < e / 2) {return JSTweener.easingFunctions.easeOutExpo(b * 2, c, d / 2, e);}return JSTweener.easingFunctions.easeInExpo(b * 2 - e, c + d / 2, d / 2, e);}, easeInCirc: function (b, c, d, e) {return - d * (Math.sqrt(1 - (b /= e) * b) - 1) + c;}, easeOutCirc: function (b, c, d, e) {return d * Math.sqrt(1 - (b = b / e - 1) * b) + c;}, easeInOutCirc: function (b, c, d, e) {if ((b /= e / 2) < 1) {return - d / 2 * (Math.sqrt(1 - b * b) - 1) + c;}return d / 2 * (Math.sqrt(1 - (b -= 2) * b) + 1) + c;}, easeOutInCirc: function (b, c, d, e) {if (b < e / 2) {return JSTweener.easingFunctions.easeOutCirc(b * 2, c, d / 2, e);}return JSTweener.easingFunctions.easeInCirc(b * 2 - e, c + d / 2, d / 2, e);}, easeInElastic: function (b, c, d, e, f, g) {if (b == 0) {return c;}if ((b /= e) == 1) {return c + d;}g || (g = e * 0.3);if (!f || f < Math.abs(d)) {f = d;d = g / 4;} else {d = g / (2 * Math.PI) * Math.asin(d / f);}return - (f * Math.pow(2, 10 * (b -= 1)) * Math.sin((b * e - d) * 2 * Math.PI / g)) + c;}, easeOutElastic: function (b, c, d, e, f, g) {var h;if (b == 0) {return c;}if ((b /= e) == 1) {return c + d;}g || (g = e * 0.3);if (!f || f < Math.abs(d)) {f = d;h = g / 4;} else {h = g / (2 * Math.PI) * Math.asin(d / f);}return f * Math.pow(2, -10 * b) * Math.sin((b * e - h) * 2 * Math.PI / g) + d + c;}, easeInOutElastic: function (b, c, d, e, f, g) {var h;if (b == 0) {return c;}if ((b /= e / 2) == 2) {return c + d;}g || (g = e * 0.3 * 1.5);if (!f || f < Math.abs(d)) {f = d;h = g / 4;} else {h = g / (2 * Math.PI) * Math.asin(d / f);}if (b < 1) {return -0.5 * f * Math.pow(2, 10 * (b -= 1)) * Math.sin((b * e - h) * 2 * Math.PI / g) + c;}return f * Math.pow(2, -10 * (b -= 1)) * Math.sin((b * e - h) * 2 * Math.PI / g) * 0.5 + d + c;}, easeOutInElastic: function (b, c, d, e, f, g) {if (b < e / 2) {return JSTweener.easingFunctions.easeOutElastic(b * 2, c, d / 2, e, f, g);}return JSTweener.easingFunctions.easeInElastic(b * 2 - e, c + d / 2, d / 2, e, f, g);}, easeInBack: function (b, c, d, e, f) {if (f == undefined) {f = 1.70158;}return d * (b /= e) * b * ((f + 1) * b - f) + c;}, easeOutBack: function (b, c, d, e, f) {if (f == undefined) {f = 1.70158;}return d * ((b = b / e - 1) * b * ((f + 1) * b + f) + 1) + c;}, easeInOutBack: function (b, c, d, e, f) {if (f == undefined) {f = 1.70158;}if ((b /= e / 2) < 1) {return d / 2 * b * b * (((f *= 1.525) + 1) * b - f) + c;}return d / 2 * ((b -= 2) * b * (((f *= 1.525) + 1) * b + f) + 2) + c;}, easeOutInBack: function (b, c, d, e, f) {if (b < e / 2) {return JSTweener.easingFunctions.easeOutBack(b * 2, c, d / 2, e, f);}return JSTweener.easingFunctions.easeInBack(b * 2 - e, c + d / 2, d / 2, e, f);}, easeInBounce: function (b, c, d, e) {return d - JSTweener.easingFunctions.easeOutBounce(e - b, 0, d, e) + c;}, easeOutBounce: function (b, c, d, e) {return (b /= e) < 0.36363636363636365 ? d * 7.5625 * b * b + c : b < 0.7272727272727273 ? d * (7.5625 * (b -= 0.5454545454545454) * b + 0.75) + c : b < 0.9090909090909091 ? d * (7.5625 * (b -= 0.8181818181818182) * b + 0.9375) + c : d * (7.5625 * (b -= 0.9545454545454546) * b + 0.984375) + c;}, easeInOutBounce: function (b, c, d, e) {return b < e / 2 ? JSTweener.easingFunctions.easeInBounce(b * 2, 0, d, e) * 0.5 + c : JSTweener.easingFunctions.easeOutBounce(b * 2 - e, 0, d, e) * 0.5 + d * 0.5 + c;}, easeOutInBounce: function (b, c, d, e) {if (b < e / 2) {return JSTweener.easingFunctions.easeOutBounce(b * 2, c, d / 2, e);}return JSTweener.easingFunctions.easeInBounce(b * 2 - e, c + d / 2, d / 2, e);}};
    JSTweener.easingFunctions.linear = JSTweener.easingFunctions.easeNone;
