(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"Car_atlas_1", frames: [[902,0,852,480],[0,902,1680,456],[0,0,900,900]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib._1675418146_gaskvascompdorogafonoviirisunok13 = function() {
	this.initialize(ss["Car_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.noroot = function() {
	this.initialize(ss["Car_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.unnamedPhotoRoompngPhotoRoom = function() {
	this.initialize(ss["Car_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Символ3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.instance = new lib._1675418146_gaskvascompdorogafonoviirisunok13();
	this.instance.setTransform(9580,0,2.249,2.249);

	this.instance_1 = new lib._1675418146_gaskvascompdorogafonoviirisunok13();
	this.instance_1.setTransform(7664,1,2.249,2.249);

	this.instance_2 = new lib._1675418146_gaskvascompdorogafonoviirisunok13();
	this.instance_2.setTransform(5748,0,2.249,2.249);

	this.instance_3 = new lib._1675418146_gaskvascompdorogafonoviirisunok13();
	this.instance_3.setTransform(3832,0,2.249,2.249);

	this.instance_4 = new lib._1675418146_gaskvascompdorogafonoviirisunok13();
	this.instance_4.setTransform(1916,0,2.249,2.249);

	this.instance_5 = new lib._1675418146_gaskvascompdorogafonoviirisunok13();
	this.instance_5.setTransform(0,0,2.249,2.249);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Символ3, new cjs.Rectangle(0,0,11496.1,1080.5), null);


(lib.Символ2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.instance = new lib.unnamedPhotoRoompngPhotoRoom();
	this.instance.setTransform(900,900,1,1,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Символ2, new cjs.Rectangle(0,0,900,900), null);


(lib.Символ1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.instance = new lib.unnamedPhotoRoompngPhotoRoom();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Символ1, new cjs.Rectangle(0,0,900,900), null);


(lib.Колесо = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_2
	this.instance = new lib.Символ2();
	this.instance.setTransform(450,450,1,1,0,0,0,450,450);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(5).to({_off:false},0).wait(1).to({rotation:45,y:450.05},0).wait(1).to({rotation:90,y:450},0).wait(1).to({rotation:135,x:449.95},0).wait(1).to({rotation:180,x:450},0).wait(1));

	// Слой_1
	this.instance_1 = new lib.Символ1();
	this.instance_1.setTransform(450,419.75,1,1,0,0,0,450,450);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({rotation:45,y:427.35},0).wait(1).to({rotation:90,y:434.9},0).wait(1).to({rotation:135,x:449.95,y:442.4},0).wait(1).to({rotation:180,x:450,y:450},0).to({_off:true},1).wait(5));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-186.5,-209,1272.9,1295.4);


(lib.Car = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.instance = new lib.Колесо();
	this.instance.setTransform(1312,394.3,0.3622,0.3622,0,0,0,450.1,450.1);

	this.instance_1 = new lib.Колесо();
	this.instance_1.setTransform(240.85,375.9,0.3622,0.3622,0,0,0,450.1,450.1);

	this.instance_2 = new lib.noroot();
	this.instance_2.setTransform(0,-11);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Car, new cjs.Rectangle(0,-11,1680,557.2), null);


(lib.Символ4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.instance = new lib.Колесо();
	this.instance.setTransform(90.2,143.3,0.1382,0.1382,0,0,0,450.4,420);

	this.instance_1 = new lib.unnamedPhotoRoompngPhotoRoom();
	this.instance_1.setTransform(435,92,0.1313,0.1313);

	this.instance_2 = new lib.noroot();
	this.instance_2.setTransform(0,0,0.3777,0.3777);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Символ4, new cjs.Rectangle(0,0,634.5,210.2), null);


// stage content:
(lib.Машина2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_3
	this.instance = new lib.Car();
	this.instance.setTransform(973.35,-350.7,1,1,0,0,0,840,228);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},51).wait(105));

	// car3
	this.instance_1 = new lib.Car();
	this.instance_1.setTransform(526.1,861.05,0.3804,0.3804,0,0,0,840.1,267.8);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(45).to({_off:false},0).wait(1).to({regX:840,regY:306.9,x:526.05,y:875.9},0).wait(7).to({x:565.6},0).wait(1).to({x:605.1},0).wait(1).to({x:644.6},0).wait(1).to({x:684.15},0).wait(1).to({x:723.65},0).wait(1).to({x:763.15},0).wait(1).to({x:802.7},0).wait(1).to({x:842.2},0).wait(1).to({x:881.7},0).wait(1).to({x:921.25},0).wait(1).to({x:960.75},0).wait(1).to({x:1000.25},0).wait(1).to({x:1039.8},0).wait(1).to({x:1079.3},0).wait(1).to({x:1118.8},0).wait(1).to({x:1158.35},0).wait(1).to({x:1197.85},0).wait(1).to({x:1237.35},0).wait(1).to({x:1276.9},0).wait(1).to({x:1316.4},0).wait(1).to({x:1355.9},0).wait(1).to({x:1395.4},0).wait(1).to({x:1335.7},0).wait(1).to({x:1276},0).wait(1).to({x:1216.3},0).wait(1).to({x:1156.6},0).wait(1).to({x:1096.9},0).wait(1).to({x:1037.15},0).wait(1).to({x:977.45},0).wait(1).to({x:917.75},0).wait(1).to({x:858.05},0).wait(1).to({x:798.35},0).wait(1).to({x:738.65},0).wait(1).to({x:678.9},0).wait(1).to({x:715.1},0).wait(1).to({x:751.3},0).wait(1).to({x:787.5},0).wait(1).to({x:823.7},0).wait(1).to({x:859.9},0).wait(1).to({x:896.1},0).wait(1).to({x:932.3},0).wait(1).to({x:968.5},0).wait(1).to({x:1004.7},0).wait(1).to({x:1040.9},0).wait(1).to({x:1077.1},0).wait(1).to({x:1113.3},0).wait(1).to({x:1149.5},0).wait(1).to({x:1185.7},0).wait(1).to({x:1221.9},0).wait(1).to({x:1258.1},0).wait(1).to({x:1294.3},0).wait(1).to({x:1330.5},0).wait(1).to({x:1366.7},0).wait(1).to({x:1282.55},0).wait(1).to({x:1198.35},0).wait(1).to({x:1114.15},0).wait(1).to({x:1029.95},0).wait(1).to({x:945.8},0).wait(1).to({x:861.6},0).wait(1).to({x:777.4},0).wait(1).to({x:693.2},0).wait(1).to({x:814.3},0).wait(1).to({x:935.4},0).wait(1).to({x:1056.5},0).wait(1).to({x:1177.55},0).wait(1).to({x:1298.65},0).wait(1).to({x:1419.75},0).wait(1).to({x:1540.8},0).wait(1).to({x:1661.9},0).wait(1).to({x:1783},0).wait(1).to({x:1904.05},0).wait(1).to({x:2025.15},0).wait(1).to({x:2146.25},0).wait(1).to({x:2267.3},0).wait(11).to({_off:true},1).wait(18));

	// car2
	this.instance_2 = new lib.Символ4();
	this.instance_2.setTransform(299.2,953.1,1,1,-14.8874,0,0,88.4,195.1);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(40).to({_off:false},0).wait(1).to({regX:317.2,regY:117.7,rotation:-11.1392,x:508.7,y:832.9},0).wait(1).to({rotation:-7.3897,x:516.1,y:846.85},0).wait(1).to({rotation:-3.6402,x:522.55,y:861.25},0).wait(1).to({rotation:0.1093,x:528.15,y:876.1},0).to({_off:true},1).wait(111));

	// Car
	this.instance_3 = new lib.unnamedPhotoRoompngPhotoRoom();
	this.instance_3.setTransform(642,845,0.1313,0.1313);

	this.instance_4 = new lib.unnamedPhotoRoompngPhotoRoom();
	this.instance_4.setTransform(240,838,0.1313,0.1313);

	this.instance_5 = new lib.noroot();
	this.instance_5.setTransform(207,753,0.3777,0.3777);

	this.instance_6 = new lib.Символ4();
	this.instance_6.setTransform(299,950.6,1,1,0,0,0,92,197.6);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5},{t:this.instance_4},{t:this.instance_3}]}).to({state:[{t:this.instance_6}]},24).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[]},1).wait(116));
	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(24).to({_off:false},0).wait(1).to({regX:317.2,regY:117.7,rotation:-4.9632,x:516.45,y:851.5},0).wait(1).to({rotation:-9.9264,x:507.05,y:833.05},0).wait(1).to({rotation:-14.8896,x:496.1,y:815.5},0).wait(12).to({_off:true},1).wait(116));

	// Background
	this.instance_7 = new lib._1675418146_gaskvascompdorogafonoviirisunok13();
	this.instance_7.setTransform(9580,0,2.249,2.249);

	this.instance_8 = new lib._1675418146_gaskvascompdorogafonoviirisunok13();
	this.instance_8.setTransform(7664,1,2.249,2.249);

	this.instance_9 = new lib._1675418146_gaskvascompdorogafonoviirisunok13();
	this.instance_9.setTransform(5748,0,2.249,2.249);

	this.instance_10 = new lib._1675418146_gaskvascompdorogafonoviirisunok13();
	this.instance_10.setTransform(3832,0,2.249,2.249);

	this.instance_11 = new lib._1675418146_gaskvascompdorogafonoviirisunok13();
	this.instance_11.setTransform(1916,0,2.249,2.249);

	this.instance_12 = new lib._1675418146_gaskvascompdorogafonoviirisunok13();
	this.instance_12.setTransform(0,0,2.249,2.249);

	this.instance_13 = new lib.Символ3();
	this.instance_13.setTransform(5748.1,540.2,1,1,0,0,0,5748.1,540.2);
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7}]}).to({state:[{t:this.instance_13}]},24).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(24).to({_off:false},0).wait(1).to({regY:540.3,x:5568.1,y:540.3},0).wait(1).to({x:5388.1},0).wait(1).to({x:5208.1},0).wait(1).to({x:5028.1},0).wait(1).to({x:4848.1},0).wait(1).to({x:4668.1},0).wait(1).to({x:4488.1},0).wait(1).to({x:4308.1},0).wait(1).to({x:4128.1},0).wait(1).to({x:3948.1},0).wait(1).to({x:3768.1},0).wait(1).to({x:3588.1},0).wait(1).to({x:3408.1},0).wait(1).to({x:3228.1},0).wait(1).to({x:3048.1},0).wait(1).to({x:2868.1},0).wait(1).to({x:2688.1},0).wait(1).to({x:2508.1},0).wait(1).to({x:2328.1},0).wait(1).to({x:2148.1},0).wait(1).to({x:1968.1},0).wait(1).to({x:1788.1},0).wait(1).to({x:1608.1},0).wait(1).to({x:1428.1},0).wait(1).to({x:1248.1},0).wait(1).to({x:1068.1},0).wait(1).to({x:888.1},0).wait(1).to({x:708.1},0).wait(1).to({x:528.1},0).wait(1).to({x:348.1},0).wait(1).to({x:168.1},0).wait(1).to({x:-11.9},0).wait(1).to({regY:540.2,x:5748.1,y:540.2},0).wait(1).to({regY:540.3,x:5568.1,y:540.3},0).wait(1).to({x:5388.1},0).wait(1).to({x:5208.1},0).wait(1).to({x:5028.1},0).wait(1).to({x:4848.1},0).wait(1).to({x:4668.1},0).wait(1).to({x:4488.1},0).wait(1).to({x:4308.1},0).wait(1).to({x:4128.1},0).wait(1).to({x:3948.1},0).wait(1).to({x:3768.1},0).wait(1).to({x:3588.1},0).wait(1).to({x:3408.1},0).wait(1).to({x:3228.1},0).wait(1).to({x:3048.1},0).wait(1).to({x:2868.1},0).wait(1).to({x:2688.1},0).wait(1).to({x:2508.1},0).wait(1).to({x:2328.1},0).wait(1).to({x:2148.1},0).wait(1).to({x:1968.1},0).wait(1).to({x:1788.1},0).wait(1).to({x:1608.1},0).wait(1).to({x:1428.1},0).wait(1).to({x:1248.1},0).wait(1).to({x:1068.1},0).wait(1).to({x:888.1},0).wait(1).to({x:708.1},0).wait(1).to({x:528.1},0).wait(1).to({x:348.1},0).wait(1).to({x:168.1},0).wait(1).to({x:-11.9},0).wait(1).to({regY:540.2,x:5748.1,y:540.2},0).wait(1).to({regY:540.3,x:5568.1,y:540.3},0).wait(1).to({x:5388.1},0).wait(1).to({x:5208.1},0).wait(1).to({x:5028.1},0).wait(1).to({x:4848.1},0).wait(1).to({x:4668.1},0).wait(1).to({x:4488.1},0).wait(1).to({x:4308.1},0).wait(1).to({x:4128.1},0).wait(1).to({x:3948.1},0).wait(1).to({x:3768.1},0).wait(1).to({x:3588.1},0).wait(1).to({x:3408.1},0).wait(1).to({x:3228.1},0).wait(1).to({x:3048.1},0).wait(1).to({x:2868.1},0).wait(1).to({x:2688.1},0).wait(1).to({x:2508.1},0).wait(1).to({x:2328.1},0).wait(1).to({x:2148.1},0).wait(1).to({x:1968.1},0).wait(1).to({x:1788.1},0).wait(1).to({x:1608.1},0).wait(1).to({x:1428.1},0).wait(1).to({x:1248.1},0).wait(1).to({x:1068.1},0).wait(1).to({x:888.1},0).wait(1).to({x:708.1},0).wait(1).to({x:528.1},0).wait(1).to({x:348.1},0).wait(1).to({x:168.1},0).wait(1).to({x:-11.9},0).wait(1).to({regY:540.2,x:5748.1,y:540.2},0).wait(1).to({regY:540.3,x:5568.1,y:540.3},0).wait(1).to({x:5388.1},0).wait(1).to({x:5208.1},0).wait(1).to({x:5028.1},0).wait(1).to({x:4848.1},0).wait(1).to({x:4668.1},0).wait(1).to({x:4488.1},0).wait(1).to({x:4308.1},0).wait(1).to({x:4128.1},0).wait(1).to({x:3948.1},0).wait(1).to({x:3768.1},0).wait(1).to({x:3588.1},0).wait(1).to({x:3408.1},0).wait(1).to({x:3228.1},0).wait(1).to({x:3048.1},0).wait(1).to({x:2868.1},0).wait(1).to({x:2688.1},0).wait(1).to({x:2508.1},0).wait(1).to({x:2328.1},0).wait(1).to({x:2148.1},0).wait(1).to({x:1968.1},0).wait(1).to({x:1788.1},0).wait(1).to({x:1608.1},0).wait(1).to({x:1428.1},0).wait(1).to({x:1248.1},0).wait(1).to({x:1068.1},0).wait(1).to({x:888.1},0).wait(1).to({x:708.1},0).wait(1).to({x:528.1},0).wait(1).to({x:348.1},0).wait(1).to({x:168.1},0).wait(1).to({x:-11.9},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(-4800,-49.7,16296.1,1130.2);
// library properties:
lib.properties = {
	id: '67B5BEBDCBF13142AF6F6C361A30A71B',
	width: 1920,
	height: 1080,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/Car_atlas_1.png", id:"Car_atlas_1"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['67B5BEBDCBF13142AF6F6C361A30A71B'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;