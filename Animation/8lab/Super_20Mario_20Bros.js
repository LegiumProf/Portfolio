(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"Super_20Mario_20Bros_atlas_1", frames: [[0,0,1721,287],[0,289,1698,114],[0,405,657,237],[659,405,657,237],[1318,405,657,237],[0,644,657,237],[659,644,657,237],[1318,644,657,237],[0,883,657,237],[0,1122,657,237],[0,1361,657,237],[0,1600,657,237],[659,883,657,237],[1318,883,657,237],[659,1122,657,237],[1318,1122,657,237],[659,1361,657,237],[1318,1361,657,237],[659,1600,657,237],[1318,1600,657,237]]},
		{name:"Super_20Mario_20Bros_atlas_2", frames: [[0,239,1140,136],[1841,1094,207,156],[1371,1431,207,156],[1811,1094,20,114],[0,1333,460,136],[1152,956,774,136],[1152,1094,657,136],[1718,239,301,136],[1318,0,574,237],[1728,377,301,136],[1142,239,574,237],[1728,515,301,136],[0,377,574,237],[1728,653,301,136],[576,478,574,237],[1728,791,301,136],[0,616,574,237],[1235,1232,301,136],[1152,478,574,237],[1538,1232,301,136],[576,717,574,237],[462,1370,301,136],[0,855,574,237],[0,1471,301,136],[1152,717,574,237],[0,0,657,237],[765,1370,301,136],[576,956,574,237],[576,1232,657,136],[659,0,657,237],[1068,1370,301,136],[0,1094,574,237],[1973,1329,64,61],[1371,1370,600,59],[1941,1252,71,75],[1894,0,68,75],[1894,77,56,75],[1973,1392,51,75],[1894,154,56,75],[1952,81,56,75],[1952,158,56,75],[1964,0,59,79],[1928,929,102,107],[1841,1252,98,107]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.currentSoundStreamInMovieclip;
	this.soundStreamDuration = new Map();
	this.streamSoundSymbolsList = [];

	this.gotoAndPlayForStreamSoundSync = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.gotoAndPlay = function(positionOrLabel){
		this.clearAllSoundStreams();
		var pos = this.timeline.resolve(positionOrLabel);
		if (pos != null) { this.startStreamSoundsForTargetedFrame(pos); }
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		this.clearAllSoundStreams();
		this.startStreamSoundsForTargetedFrame(this.currentFrame);
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
		this.clearAllSoundStreams();
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
		this.clearAllSoundStreams();
	}
	this.startStreamSoundsForTargetedFrame = function(targetFrame){
		for(var index=0; index<this.streamSoundSymbolsList.length; index++){
			if(index <= targetFrame && this.streamSoundSymbolsList[index] != undefined){
				for(var i=0; i<this.streamSoundSymbolsList[index].length; i++){
					var sound = this.streamSoundSymbolsList[index][i];
					if(sound.endFrame > targetFrame){
						var targetPosition = Math.abs((((targetFrame - sound.startFrame)/lib.properties.fps) * 1000));
						var instance = playSound(sound.id);
						var remainingLoop = 0;
						if(sound.offset){
							targetPosition = targetPosition + sound.offset;
						}
						else if(sound.loop > 1){
							var loop = targetPosition /instance.duration;
							remainingLoop = Math.floor(sound.loop - loop);
							if(targetPosition == 0){ remainingLoop -= 1; }
							targetPosition = targetPosition % instance.duration;
						}
						instance.loop = remainingLoop;
						instance.position = Math.round(targetPosition);
						this.InsertIntoSoundStreamData(instance, sound.startFrame, sound.endFrame, sound.loop , sound.offset);
					}
				}
			}
		}
	}
	this.InsertIntoSoundStreamData = function(soundInstance, startIndex, endIndex, loopValue, offsetValue){ 
 		this.soundStreamDuration.set({instance:soundInstance}, {start: startIndex, end:endIndex, loop:loopValue, offset:offsetValue});
	}
	this.clearAllSoundStreams = function(){
		this.soundStreamDuration.forEach(function(value,key){
			key.instance.stop();
		});
 		this.soundStreamDuration.clear();
		this.currentSoundStreamInMovieclip = undefined;
	}
	this.stopSoundStreams = function(currentFrame){
		if(this.soundStreamDuration.size > 0){
			var _this = this;
			this.soundStreamDuration.forEach(function(value,key,arr){
				if((value.end) == currentFrame){
					key.instance.stop();
					if(_this.currentSoundStreamInMovieclip == key) { _this.currentSoundStreamInMovieclip = undefined; }
					arr.delete(key);
				}
			});
		}
	}

	this.computeCurrentSoundStreamInstance = function(currentFrame){
		if(this.currentSoundStreamInMovieclip == undefined){
			var _this = this;
			if(this.soundStreamDuration.size > 0){
				var maxDuration = 0;
				this.soundStreamDuration.forEach(function(value,key){
					if(value.end > maxDuration){
						maxDuration = value.end;
						_this.currentSoundStreamInMovieclip = key;
					}
				});
			}
		}
	}
	this.getDesiredFrame = function(currentFrame, calculatedDesiredFrame){
		for(var frameIndex in this.actionFrames){
			if((frameIndex > currentFrame) && (frameIndex < calculatedDesiredFrame)){
				return frameIndex;
			}
		}
		return calculatedDesiredFrame;
	}

	this.syncStreamSounds = function(){
		this.stopSoundStreams(this.currentFrame);
		this.computeCurrentSoundStreamInstance(this.currentFrame);
		if(this.currentSoundStreamInMovieclip != undefined){
			var soundInstance = this.currentSoundStreamInMovieclip.instance;
			if(soundInstance.position != 0){
				var soundValue = this.soundStreamDuration.get(this.currentSoundStreamInMovieclip);
				var soundPosition = (soundValue.offset?(soundInstance.position - soundValue.offset): soundInstance.position);
				var calculatedDesiredFrame = (soundValue.start)+((soundPosition/1000) * lib.properties.fps);
				if(soundValue.loop > 1){
					calculatedDesiredFrame +=(((((soundValue.loop - soundInstance.loop -1)*soundInstance.duration)) / 1000) * lib.properties.fps);
				}
				calculatedDesiredFrame = Math.floor(calculatedDesiredFrame);
				var deltaFrame = calculatedDesiredFrame - this.currentFrame;
				if((deltaFrame >= 0) && this.ignorePause){
					cjs.MovieClip.prototype.play.call(this);
					this.ignorePause = false;
				}
				else if(deltaFrame >= 2){
					this.gotoAndPlayForStreamSoundSync(this.getDesiredFrame(this.currentFrame,calculatedDesiredFrame));
				}
				else if(deltaFrame <= -2){
					cjs.MovieClip.prototype.stop.call(this);
					this.ignorePause = true;
				}
			}
		}
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.CachedBmp_58 = function() {
	this.initialize(ss["Super_20Mario_20Bros_atlas_2"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_57 = function() {
	this.initialize(ss["Super_20Mario_20Bros_atlas_2"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_56 = function() {
	this.initialize(ss["Super_20Mario_20Bros_atlas_2"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_55 = function() {
	this.initialize(img.CachedBmp_55);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3841,595);


(lib.CachedBmp_54 = function() {
	this.initialize(ss["Super_20Mario_20Bros_atlas_2"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_53 = function() {
	this.initialize(ss["Super_20Mario_20Bros_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_52 = function() {
	this.initialize(ss["Super_20Mario_20Bros_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_51 = function() {
	this.initialize(img.CachedBmp_51);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2547,826);


(lib.CachedBmp_50 = function() {
	this.initialize(img.CachedBmp_50);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2547,826);


(lib.CachedBmp_49 = function() {
	this.initialize(img.CachedBmp_49);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2746,888);


(lib.CachedBmp_48 = function() {
	this.initialize(ss["Super_20Mario_20Bros_atlas_2"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_47 = function() {
	this.initialize(ss["Super_20Mario_20Bros_atlas_2"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_46 = function() {
	this.initialize(ss["Super_20Mario_20Bros_atlas_2"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_45 = function() {
	this.initialize(ss["Super_20Mario_20Bros_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_44 = function() {
	this.initialize(ss["Super_20Mario_20Bros_atlas_2"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_43 = function() {
	this.initialize(ss["Super_20Mario_20Bros_atlas_2"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_42 = function() {
	this.initialize(img.CachedBmp_42);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3850,2178);


(lib.CachedBmp_41 = function() {
	this.initialize(img.CachedBmp_41);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2090,178);


(lib.CachedBmp_40 = function() {
	this.initialize(ss["Super_20Mario_20Bros_atlas_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_39 = function() {
	this.initialize(ss["Super_20Mario_20Bros_atlas_1"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_38 = function() {
	this.initialize(ss["Super_20Mario_20Bros_atlas_2"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_37 = function() {
	this.initialize(ss["Super_20Mario_20Bros_atlas_2"]);
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_36 = function() {
	this.initialize(ss["Super_20Mario_20Bros_atlas_1"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_35 = function() {
	this.initialize(ss["Super_20Mario_20Bros_atlas_1"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_34 = function() {
	this.initialize(ss["Super_20Mario_20Bros_atlas_2"]);
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_33 = function() {
	this.initialize(ss["Super_20Mario_20Bros_atlas_2"]);
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_32 = function() {
	this.initialize(ss["Super_20Mario_20Bros_atlas_1"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_31 = function() {
	this.initialize(ss["Super_20Mario_20Bros_atlas_1"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_30 = function() {
	this.initialize(ss["Super_20Mario_20Bros_atlas_2"]);
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_29 = function() {
	this.initialize(ss["Super_20Mario_20Bros_atlas_2"]);
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_28 = function() {
	this.initialize(ss["Super_20Mario_20Bros_atlas_1"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_27 = function() {
	this.initialize(ss["Super_20Mario_20Bros_atlas_1"]);
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_26 = function() {
	this.initialize(ss["Super_20Mario_20Bros_atlas_2"]);
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_25 = function() {
	this.initialize(ss["Super_20Mario_20Bros_atlas_2"]);
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_24 = function() {
	this.initialize(ss["Super_20Mario_20Bros_atlas_1"]);
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_23 = function() {
	this.initialize(ss["Super_20Mario_20Bros_atlas_1"]);
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_22 = function() {
	this.initialize(ss["Super_20Mario_20Bros_atlas_2"]);
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_21 = function() {
	this.initialize(ss["Super_20Mario_20Bros_atlas_2"]);
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_20 = function() {
	this.initialize(ss["Super_20Mario_20Bros_atlas_1"]);
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_19 = function() {
	this.initialize(ss["Super_20Mario_20Bros_atlas_1"]);
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_18 = function() {
	this.initialize(ss["Super_20Mario_20Bros_atlas_2"]);
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_17 = function() {
	this.initialize(ss["Super_20Mario_20Bros_atlas_2"]);
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_16 = function() {
	this.initialize(ss["Super_20Mario_20Bros_atlas_1"]);
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_15 = function() {
	this.initialize(ss["Super_20Mario_20Bros_atlas_1"]);
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_14 = function() {
	this.initialize(ss["Super_20Mario_20Bros_atlas_2"]);
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_13 = function() {
	this.initialize(ss["Super_20Mario_20Bros_atlas_2"]);
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_12 = function() {
	this.initialize(ss["Super_20Mario_20Bros_atlas_1"]);
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_11 = function() {
	this.initialize(ss["Super_20Mario_20Bros_atlas_1"]);
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_10 = function() {
	this.initialize(ss["Super_20Mario_20Bros_atlas_2"]);
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_9 = function() {
	this.initialize(ss["Super_20Mario_20Bros_atlas_2"]);
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_8 = function() {
	this.initialize(ss["Super_20Mario_20Bros_atlas_1"]);
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_7 = function() {
	this.initialize(ss["Super_20Mario_20Bros_atlas_2"]);
	this.gotoAndStop(25);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_6 = function() {
	this.initialize(ss["Super_20Mario_20Bros_atlas_2"]);
	this.gotoAndStop(26);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_5 = function() {
	this.initialize(ss["Super_20Mario_20Bros_atlas_2"]);
	this.gotoAndStop(27);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_4 = function() {
	this.initialize(ss["Super_20Mario_20Bros_atlas_2"]);
	this.gotoAndStop(28);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_3 = function() {
	this.initialize(ss["Super_20Mario_20Bros_atlas_2"]);
	this.gotoAndStop(29);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_2 = function() {
	this.initialize(ss["Super_20Mario_20Bros_atlas_2"]);
	this.gotoAndStop(30);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1 = function() {
	this.initialize(ss["Super_20Mario_20Bros_atlas_2"]);
	this.gotoAndStop(31);
}).prototype = p = new cjs.Sprite();



(lib.Картабезблока1 = function() {
	this.initialize(img.Картабезблока1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2588,896);


(lib.Картабезблока2pngкопия2 = function() {
	this.initialize(img.Картабезблока2pngкопия2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2588,896);


(lib.Картабезкирпича = function() {
	this.initialize(img.Картабезкирпича);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2588,896);


(lib.Карта = function() {
	this.initialize(img.Карта);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2588,896);


(lib.Кирпич = function() {
	this.initialize(ss["Super_20Mario_20Bros_atlas_2"]);
	this.gotoAndStop(32);
}).prototype = p = new cjs.Sprite();



(lib.Пол = function() {
	this.initialize(ss["Super_20Mario_20Bros_atlas_2"]);
	this.gotoAndStop(33);
}).prototype = p = new cjs.Sprite();



(lib.ПрыжокPhotoRoompngPhotoRoom = function() {
	this.initialize(ss["Super_20Mario_20Bros_atlas_2"]);
	this.gotoAndStop(34);
}).prototype = p = new cjs.Sprite();



(lib.Шаг1PhotoRoompngPhotoRoom = function() {
	this.initialize(ss["Super_20Mario_20Bros_atlas_2"]);
	this.gotoAndStop(35);
}).prototype = p = new cjs.Sprite();



(lib.Шаг2PhotoRoompngPhotoRoompngкопия = function() {
	this.initialize(ss["Super_20Mario_20Bros_atlas_2"]);
	this.gotoAndStop(36);
}).prototype = p = new cjs.Sprite();



(lib.Шаг3PhotoRoompngPhotoRoom = function() {
	this.initialize(ss["Super_20Mario_20Bros_atlas_2"]);
	this.gotoAndStop(37);
}).prototype = p = new cjs.Sprite();



(lib.Removebgai_1699464996924 = function() {
	this.initialize(ss["Super_20Mario_20Bros_atlas_2"]);
	this.gotoAndStop(38);
}).prototype = p = new cjs.Sprite();



(lib.Removebgai_1699464996924pngкопия = function() {
	this.initialize(ss["Super_20Mario_20Bros_atlas_2"]);
	this.gotoAndStop(39);
}).prototype = p = new cjs.Sprite();



(lib.Removebgai_1699464996924pngкопия2 = function() {
	this.initialize(ss["Super_20Mario_20Bros_atlas_2"]);
	this.gotoAndStop(40);
}).prototype = p = new cjs.Sprite();



(lib.Removebgai_1699465013687 = function() {
	this.initialize(ss["Super_20Mario_20Bros_atlas_2"]);
	this.gotoAndStop(41);
}).prototype = p = new cjs.Sprite();



(lib.th_03_pixian_aipngкопия = function() {
	this.initialize(ss["Super_20Mario_20Bros_atlas_2"]);
	this.gotoAndStop(42);
}).prototype = p = new cjs.Sprite();



(lib.th_05_pixian_ai = function() {
	this.initialize(ss["Super_20Mario_20Bros_atlas_2"]);
	this.gotoAndStop(43);
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
	this.instance = new lib.CachedBmp_58();
	this.instance.setTransform(-284.9,-33.85,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Символ1, new cjs.Rectangle(-284.9,-33.8,570,68), null);


(lib.НачалоМарио = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Шаг1PhotoRoompngPhotoRoom();
	this.instance.setTransform(0,0,1.3074,1.3074);

	this.instance_1 = new lib.Шаг2PhotoRoompngPhotoRoompngкопия();
	this.instance_1.setTransform(6,-6,1.366,1.366);

	this.instance_2 = new lib.Шаг3PhotoRoompngPhotoRoom();
	this.instance_2.setTransform(16,0,1.2933,1.2933);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},4).to({state:[{t:this.instance_2}]},4).to({state:[{t:this.instance}]},4).to({state:[{t:this.instance_1}]},3).to({state:[{t:this.instance_2}]},3).to({state:[{t:this.instance}]},3).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance_2}]},2).to({state:[{t:this.instance}]},2).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-6,88.9,104.1);


(lib.Монетка = function(mode,startPosition,loop,reversed) {
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
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#B47F1F").s().p("AiRC+Qg7hOAAhwQAAhvA7hOQA9hPBUAAQBVAAA8BPQA8BOAABvQAABwg8BOQg8BPhVAAQhUAAg9hPg");
	this.shape.setTransform(20.5,26.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AilDQQhDhWAAh6QAAh4BDhXQBFhWBgAAQBhAABDBWQBFBXAAB4QAAB6hFBWQhDBWhhAAQhgAAhFhWg");
	this.shape_1.setTransform(23.4,29.425);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#754610").s().p("AiRC+Qg7hPAAhvQAAhuA7hQQA9hOBUAAQBVAAA7BOQA9BQAABuQAABvg9BPQg7BPhVAAQhUAAg9hPg");
	this.shape_2.setTransform(20.5,26.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#381707").s().p("AiRC+Qg7hPAAhvQAAhuA7hQQA9hOBUAAQBVAAA7BOQA9BQAABuQAABvg9BPQg7BPhVAAQhUAAg9hPg");
	this.shape_3.setTransform(20.5,26.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#B47F1F").s().p("AiRC+Qg7hPAAhvQAAhuA7hQQA9hOBUAAQBVAAA7BOQA9BQAABuQAABvg9BPQg7BPhVAAQhUAAg9hPg");
	this.shape_4.setTransform(20.5,26.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_1},{t:this.shape_2}]},12).to({state:[{t:this.shape_1},{t:this.shape_3}]},11).to({state:[{t:this.shape_1},{t:this.shape_2}]},12).to({state:[{t:this.shape_1},{t:this.shape_4}]},12).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,46.7,58.8);


(lib.Мариобежит = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Шаг1PhotoRoompngPhotoRoom();
	this.instance.setTransform(0,0,1.3074,1.3074);

	this.instance_1 = new lib.Шаг2PhotoRoompngPhotoRoompngкопия();
	this.instance_1.setTransform(6,-6,1.366,1.366);

	this.instance_2 = new lib.Шаг3PhotoRoompngPhotoRoom();
	this.instance_2.setTransform(16,0,1.2933,1.2933);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-6,88.9,104.1);


(lib.Грибочек = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.th_05_pixian_ai();

	this.instance_1 = new lib.th_03_pixian_aipngкопия();
	this.instance_1.setTransform(-2,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},10).wait(10));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2,0,102,107);


(lib.Анимация22 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Removebgai_1699465013687();
	this.instance.setTransform(-40.8,-54.65,1.3833,1.3833);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-40.8,-54.6,81.6,109.30000000000001);


(lib.Анимация21 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Removebgai_1699465013687();
	this.instance.setTransform(-40.8,-54.65,1.3833,1.3833);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-40.8,-54.6,81.6,109.30000000000001);


(lib.Анимация20 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Картабезкирпича();
	this.instance.setTransform(-2048.15,-544.9,1.5828,1.2163);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2048.1,-544.9,4096.299999999999,1089.8);


(lib.Анимация19 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Картабезкирпича();
	this.instance.setTransform(-2048.15,-544.9,1.5828,1.2163);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2048.1,-544.9,4096.299999999999,1089.8);


(lib.Анимация16 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Картабезблока2pngкопия2();
	this.instance.setTransform(-2044.9,-544.5,1.5803,1.2154);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2044.9,-544.5,4089.9,1089);


(lib.Анимация15 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Картабезблока2pngкопия2();
	this.instance.setTransform(-2044.9,-544.5,1.5803,1.2154);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2044.9,-544.5,4089.9,1089);


(lib.Анимация14 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.CachedBmp_57();
	this.instance.setTransform(-51.55,-38.9,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-51.5,-38.9,103.5,78);


(lib.Анимация13 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.CachedBmp_56();
	this.instance.setTransform(-51.55,-38.9,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-51.5,-38.9,103.5,78);


(lib.Анимация12 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Картабезблока1();
	this.instance.setTransform(-2042.05,-540,1.5781,1.2053);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2042,-540,4084.1,1080);


(lib.Анимация11 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Картабезблока1();
	this.instance.setTransform(-2042.05,-540,1.5781,1.2053);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2042,-540,4084.1,1080);


(lib.Анимация6 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.ПрыжокPhotoRoompngPhotoRoom();
	this.instance.setTransform(-48.3,-51.05,1.3613,1.3613);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-48.3,-51,96.69999999999999,102.1);


(lib.Анимация4 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Карта();
	this.instance.setTransform(-2043.15,-540.3,1.5789,1.206);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2043.1,-540.3,4086.3,1080.6);


(lib.Анимация3 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Карта();
	this.instance.setTransform(-2043.15,-540.3,1.5789,1.206);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2043.1,-540.3,4086.3,1080.6);


// stage content:
(lib.SuperMarioBros2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0,95,160,177,220,289];
	this.streamSoundSymbolsList[95] = [{id:"_8BitUniverseSuperMarioBrosTheme",startFrame:95,endFrame:220,loop:1,offset:0}];
	this.streamSoundSymbolsList[160] = [{id:"z_ukidlya_ideoz_ukmonetokmariomp3cutnet",startFrame:160,endFrame:173,loop:1,offset:0}];
	this.streamSoundSymbolsList[177] = [{id:"z_ukidlya_ideoz_ukmonetokmariomp3cutnet",startFrame:177,endFrame:192,loop:1,offset:0}];
	this.streamSoundSymbolsList[220] = [{id:"mariosmertmp3cutnet",startFrame:220,endFrame:288,loop:1,offset:0}];
	this.streamSoundSymbolsList[289] = [{id:"supermariogameover",startFrame:289,endFrame:390,loop:1,offset:0}];
	// timeline functions:
	this.frame_0 = function() {
		this.clearAllSoundStreams();
		 
	}
	this.frame_95 = function() {
		var soundInstance = playSound("_8BitUniverseSuperMarioBrosTheme",0);
		this.InsertIntoSoundStreamData(soundInstance,95,220,1);
	}
	this.frame_160 = function() {
		var soundInstance = playSound("z_ukidlya_ideoz_ukmonetokmariomp3cutnet",0);
		this.InsertIntoSoundStreamData(soundInstance,160,173,1);
	}
	this.frame_177 = function() {
		var soundInstance = playSound("z_ukidlya_ideoz_ukmonetokmariomp3cutnet",0);
		this.InsertIntoSoundStreamData(soundInstance,177,192,1);
	}
	this.frame_220 = function() {
		var soundInstance = playSound("mariosmertmp3cutnet",0);
		this.InsertIntoSoundStreamData(soundInstance,220,288,1);
	}
	this.frame_289 = function() {
		var soundInstance = playSound("supermariogameover",0);
		this.InsertIntoSoundStreamData(soundInstance,289,390,1);
		/* Нажмите для перехода к веб-странице
		При нажатии на указанный экземпляр символа производится загрузка веб-страницы в новом окне обозревателя.
		
		Инструкции:
		1. Замените http://www.adobe.com на адрес желаемой веб-страницы.
		   Не удаляйте кавычки ("").
		*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(95).call(this.frame_95).wait(65).call(this.frame_160).wait(17).call(this.frame_177).wait(43).call(this.frame_220).wait(69).call(this.frame_289).wait(101));

	// RESTART
	this.movieClip_1 = new lib.Символ1();
	this.movieClip_1.name = "movieClip_1";
	this.movieClip_1.setTransform(963,847.85);
	this.movieClip_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.movieClip_1).wait(289).to({_off:false},0).wait(101));

	// Грибочек
	this.instance = new lib.Грибочек();
	this.instance.setTransform(2063,916.5,1,1,0,0,0,49,53.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(192).to({_off:false},0).to({x:1191.85,y:920.1},27).to({_off:true},70).wait(101));

	// Монетка
	this.instance_1 = new lib.Монетка();
	this.instance_1.setTransform(701.5,116.95,1,1,0,0,0,23.4,29.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(390));

	// Надписи
	this.instance_2 = new lib.CachedBmp_4();
	this.instance_2.setTransform(1435.55,35.4,0.5,0.5);

	this.instance_3 = new lib.CachedBmp_3();
	this.instance_3.setTransform(1035.95,35.4,0.5,0.5);

	this.instance_4 = new lib.CachedBmp_2();
	this.instance_4.setTransform(731.35,81.15,0.5,0.5);

	this.instance_5 = new lib.CachedBmp_1();
	this.instance_5.setTransform(156,35.4,0.5,0.5);

	this.instance_6 = new lib.CachedBmp_8();
	this.instance_6.setTransform(1435.55,35.4,0.5,0.5);

	this.instance_7 = new lib.CachedBmp_7();
	this.instance_7.setTransform(1035.95,35.4,0.5,0.5);

	this.instance_8 = new lib.CachedBmp_6();
	this.instance_8.setTransform(731.35,81.15,0.5,0.5);

	this.instance_9 = new lib.CachedBmp_5();
	this.instance_9.setTransform(156,35.4,0.5,0.5);

	this.instance_10 = new lib.CachedBmp_12();
	this.instance_10.setTransform(1435.55,35.4,0.5,0.5);

	this.instance_11 = new lib.CachedBmp_11();
	this.instance_11.setTransform(1035.95,35.4,0.5,0.5);

	this.instance_12 = new lib.CachedBmp_10();
	this.instance_12.setTransform(731.35,81.15,0.5,0.5);

	this.instance_13 = new lib.CachedBmp_9();
	this.instance_13.setTransform(156,35.4,0.5,0.5);

	this.instance_14 = new lib.CachedBmp_16();
	this.instance_14.setTransform(1435.55,35.4,0.5,0.5);

	this.instance_15 = new lib.CachedBmp_15();
	this.instance_15.setTransform(1035.95,35.4,0.5,0.5);

	this.instance_16 = new lib.CachedBmp_14();
	this.instance_16.setTransform(731.35,81.15,0.5,0.5);

	this.instance_17 = new lib.CachedBmp_13();
	this.instance_17.setTransform(156,35.4,0.5,0.5);

	this.instance_18 = new lib.CachedBmp_20();
	this.instance_18.setTransform(1435.55,35.4,0.5,0.5);

	this.instance_19 = new lib.CachedBmp_19();
	this.instance_19.setTransform(1035.95,35.4,0.5,0.5);

	this.instance_20 = new lib.CachedBmp_18();
	this.instance_20.setTransform(731.35,81.15,0.5,0.5);

	this.instance_21 = new lib.CachedBmp_17();
	this.instance_21.setTransform(156,35.4,0.5,0.5);

	this.instance_22 = new lib.CachedBmp_24();
	this.instance_22.setTransform(1435.55,35.4,0.5,0.5);

	this.instance_23 = new lib.CachedBmp_23();
	this.instance_23.setTransform(1035.95,35.4,0.5,0.5);

	this.instance_24 = new lib.CachedBmp_22();
	this.instance_24.setTransform(731.35,81.15,0.5,0.5);

	this.instance_25 = new lib.CachedBmp_21();
	this.instance_25.setTransform(156,35.4,0.5,0.5);

	this.instance_26 = new lib.CachedBmp_28();
	this.instance_26.setTransform(1435.55,35.4,0.5,0.5);

	this.instance_27 = new lib.CachedBmp_27();
	this.instance_27.setTransform(1035.95,35.4,0.5,0.5);

	this.instance_28 = new lib.CachedBmp_26();
	this.instance_28.setTransform(731.35,81.15,0.5,0.5);

	this.instance_29 = new lib.CachedBmp_25();
	this.instance_29.setTransform(156,35.4,0.5,0.5);

	this.instance_30 = new lib.CachedBmp_32();
	this.instance_30.setTransform(1435.55,35.4,0.5,0.5);

	this.instance_31 = new lib.CachedBmp_31();
	this.instance_31.setTransform(1035.95,35.4,0.5,0.5);

	this.instance_32 = new lib.CachedBmp_30();
	this.instance_32.setTransform(731.35,81.15,0.5,0.5);

	this.instance_33 = new lib.CachedBmp_29();
	this.instance_33.setTransform(156,35.4,0.5,0.5);

	this.instance_34 = new lib.CachedBmp_36();
	this.instance_34.setTransform(1435.55,35.4,0.5,0.5);

	this.instance_35 = new lib.CachedBmp_35();
	this.instance_35.setTransform(1035.95,35.4,0.5,0.5);

	this.instance_36 = new lib.CachedBmp_34();
	this.instance_36.setTransform(731.35,81.15,0.5,0.5);

	this.instance_37 = new lib.CachedBmp_33();
	this.instance_37.setTransform(156,35.4,0.5,0.5);

	this.instance_38 = new lib.CachedBmp_40();
	this.instance_38.setTransform(1435.55,35.4,0.5,0.5);

	this.instance_39 = new lib.CachedBmp_39();
	this.instance_39.setTransform(1035.95,35.4,0.5,0.5);

	this.instance_40 = new lib.CachedBmp_38();
	this.instance_40.setTransform(731.35,81.15,0.5,0.5);

	this.instance_41 = new lib.CachedBmp_37();
	this.instance_41.setTransform(156,35.4,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2}]}).to({state:[{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6}]},95).to({state:[{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10}]},24).to({state:[{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14}]},24).to({state:[{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18}]},17).to({state:[{t:this.instance_25},{t:this.instance_24},{t:this.instance_23},{t:this.instance_22}]},7).to({state:[{t:this.instance_29},{t:this.instance_28},{t:this.instance_27},{t:this.instance_26}]},10).to({state:[{t:this.instance_33},{t:this.instance_32},{t:this.instance_31},{t:this.instance_30}]},14).to({state:[{t:this.instance_37},{t:this.instance_36},{t:this.instance_35},{t:this.instance_34}]},24).to({state:[{t:this.instance_41},{t:this.instance_40},{t:this.instance_39},{t:this.instance_38}]},74).wait(101));

	// Game_over
	this.instance_42 = new lib.CachedBmp_41();
	this.instance_42.setTransform(437.45,495.55,0.5,0.5);
	this.instance_42._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_42).wait(289).to({_off:false},0).wait(101));

	// Чёрный_экран
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("EihtBeqMAAAi9TMFDbAAAMAAAC9Tg");
	this.shape.setTransform(956.575,537.15);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(289).to({_off:false},0).wait(101));

	// Умирающий_марио
	this.instance_43 = new lib.Анимация21("synched",0);
	this.instance_43.setTransform(1114.8,932.65);
	this.instance_43._off = true;

	this.instance_44 = new lib.Анимация22("synched",0);
	this.instance_44.setTransform(1114.8,1148.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_43}]},220).to({state:[{t:this.instance_43}]},9).to({state:[{t:this.instance_44}]},13).to({state:[]},26).wait(122));
	this.timeline.addTween(cjs.Tween.get(this.instance_43).wait(220).to({_off:false},0).to({y:683.25},9,cjs.Ease.quadOut).to({_off:true,y:1148.3},13,cjs.Ease.cubicIn).wait(148));

	// Прыгающий_Марио
	this.instance_45 = new lib.Анимация6("synched",0);
	this.instance_45.setTransform(995.3,915.05);
	this.instance_45._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_45).wait(155).to({_off:false},0).to({y:776.3},5).to({y:915.05},5).to({_off:true},1).wait(6).to({_off:false},0).to({y:776.3},5).to({y:915.05},5).to({startPosition:0},1).to({y:776.3},5).to({y:915.05},5).to({startPosition:0},1).to({x:991.6,y:692.05},5).to({y:762.9},5).to({_off:true},1).wait(185));

	// Марио
	this.instance_46 = new lib.Removebgai_1699464996924pngкопия2();
	this.instance_46.setTransform(216,868,1.344,1.344);

	this.instance_47 = new lib.НачалоМарио();
	this.instance_47.setTransform(247.5,919,1,1,0,0,0,44.5,49);
	this.instance_47._off = true;

	this.instance_48 = new lib.Мариобежит();
	this.instance_48.setTransform(995.55,919,1,1,0,0,0,44.5,49);
	this.instance_48._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_46}]},95).to({state:[{t:this.instance_47}]},14).to({state:[{t:this.instance_48}]},30).to({state:[]},16).to({state:[{t:this.instance_48}]},11).to({state:[]},6).to({state:[{t:this.instance_48}]},33).to({state:[{t:this.instance_48}]},4).to({state:[{t:this.instance_48}]},6).to({state:[{t:this.instance_48}]},4).to({state:[]},1).wait(170));
	this.timeline.addTween(cjs.Tween.get(this.instance_47).wait(109).to({_off:false},0).to({_off:true,x:995.55},30,cjs.Ease.cubicIn).wait(251));
	this.timeline.addTween(cjs.Tween.get(this.instance_48).wait(109).to({_off:false},30,cjs.Ease.cubicIn).to({_off:true},16).wait(11).to({_off:false},0).to({_off:true},6).wait(33).to({_off:false,x:991.55,y:763.1},0).wait(4).to({y:915.6},6).to({x:1122.15},4).to({_off:true},1).wait(170));

	// Кирпич
	this.instance_49 = new lib.Кирпич();
	this.instance_49.setTransform(937,652,1.603,1.2695);
	this.instance_49._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_49).wait(188).to({_off:false},0).to({scaleX:1.6028,scaleY:1.2694,x:880,y:614},2).to({scaleX:1.6027,scaleY:1.2692,x:824,y:651},2).to({scaleX:1.6025,scaleY:1.2691,x:766.85,y:650.75},2).to({_off:true},1).wait(195));

	// Блок2
	this.instance_50 = new lib.Анимация13("synched",0);
	this.instance_50.setTransform(1009.45,690.85);
	this.instance_50._off = true;

	this.instance_51 = new lib.Анимация14("synched",0);
	this.instance_51.setTransform(832.05,690.4);
	this.instance_51._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_50).wait(177).to({_off:false},0).to({x:950.55,y:657.9},2).to({x:891.55,y:690.75},2).to({_off:true,x:832.05,y:690.4},2).wait(207));
	this.timeline.addTween(cjs.Tween.get(this.instance_51).wait(181).to({_off:false},2).to({x:713.05,y:691.1},4).to({x:516.1},7).to({x:4.15},21).to({_off:true},74).wait(101));

	// Монетка2
	this.instance_52 = new lib.Монетка();
	this.instance_52.setTransform(1012.65,695.85,1,1,0,0,0,23.4,29.4);
	this.instance_52._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_52).wait(177).to({_off:false},0).to({x:953.35,y:502.45},2).to({x:891.6,y:690.75},2).to({_off:true},1).wait(208));

	// Блок
	this.instance_53 = new lib.Анимация13("synched",0);
	this.instance_53.setTransform(1016.55,693.95);
	this.instance_53._off = true;

	this.instance_54 = new lib.Анимация14("synched",0);
	this.instance_54.setTransform(832.05,693.95);
	this.instance_54._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_53).wait(160).to({_off:false},0).to({x:955.05,y:657.9},2).to({x:893.55,y:693.95},2).to({_off:true,x:832.05},2).wait(224));
	this.timeline.addTween(cjs.Tween.get(this.instance_54).wait(164).to({_off:false},2).to({x:207.6},21).to({x:10.65},7).to({x:-501.3},21).to({_off:true},34).wait(141));

	// Монетка1
	this.instance_55 = new lib.Монетка();
	this.instance_55.setTransform(1012.65,684.45,1,1,0,0,0,23.4,29.4);
	this.instance_55._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_55).wait(160).to({_off:false},0).to({x:955.7,y:460.85},2).to({x:893.6,y:693.95},2).to({_off:true},1).wait(225));

	// Карта_без_кирпича
	this.instance_56 = new lib.Анимация19("synched",0);
	this.instance_56.setTransform(557.15,535.1);
	this.instance_56._off = true;

	this.instance_57 = new lib.Анимация20("synched",0);
	this.instance_57.setTransform(389.2,535.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_56}]},188).to({state:[{t:this.instance_57}]},6).to({state:[]},1).to({state:[]},25).wait(170));
	this.timeline.addTween(cjs.Tween.get(this.instance_56).wait(188).to({_off:false},0).to({_off:true,x:389.2},6).wait(196));

	// Карта_без_блока_2
	this.instance_58 = new lib.Анимация15("synched",0);
	this.instance_58.setTransform(879.9,535.5);
	this.instance_58._off = true;

	this.instance_59 = new lib.Анимация16("synched",0);
	this.instance_59.setTransform(582.9,535.5);
	this.instance_59._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_58).wait(177).to({_off:false},0).to({_off:true,x:582.9},10).wait(203));
	this.timeline.addTween(cjs.Tween.get(this.instance_59).wait(177).to({_off:false},10).to({_off:true},1).wait(6).to({_off:false,x:385.95},0).to({x:-124.95},21).to({_off:true},74).wait(101));

	// Карта_без_блока_1
	this.instance_60 = new lib.Анимация11("synched",0);
	this.instance_60.setTransform(1393.05,540);
	this.instance_60._off = true;

	this.instance_61 = new lib.Анимация12("synched",0);
	this.instance_61.setTransform(1209.55,540);
	this.instance_61._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_60).wait(160).to({_off:false},0).to({_off:true,x:1209.55},6).wait(224));
	this.timeline.addTween(cjs.Tween.get(this.instance_61).wait(160).to({_off:false},6).to({x:580.4},21).to({_off:true},1).wait(202));

	// Карта
	this.instance_62 = new lib.Карта();
	this.instance_62.setTransform(0,-1,1.5789,1.206);

	this.instance_63 = new lib.Анимация3("synched",0);
	this.instance_63.setTransform(2043.15,539.3);
	this.instance_63._off = true;

	this.instance_64 = new lib.Анимация4("synched",0);
	this.instance_64.setTransform(1210.65,539.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_62}]},95).to({state:[{t:this.instance_63}]},44).to({state:[{t:this.instance_64}]},27).to({state:[]},1).wait(223));
	this.timeline.addTween(cjs.Tween.get(this.instance_63).wait(139).to({_off:false},0).to({_off:true,x:1210.65,y:539.7},27).wait(224));

	// Чёрное_начало
	this.instance_65 = new lib.CachedBmp_48();
	this.instance_65.setTransform(880.85,544.25,0.5,0.5);

	this.instance_66 = new lib.Removebgai_1699464996924pngкопия();
	this.instance_66.setTransform(809.45,537);

	this.instance_67 = new lib.CachedBmp_47();
	this.instance_67.setTransform(766.5,370.6,0.5,0.5);

	this.instance_68 = new lib.Монетка();
	this.instance_68.setTransform(701.5,116.95,1,1,0,0,0,23.4,29.4);

	this.instance_69 = new lib.CachedBmp_46();
	this.instance_69.setTransform(1435.55,35.4,0.5,0.5);

	this.instance_70 = new lib.CachedBmp_45();
	this.instance_70.setTransform(1035.95,35.4,0.5,0.5);

	this.instance_71 = new lib.CachedBmp_44();
	this.instance_71.setTransform(731.35,81.15,0.5,0.5);

	this.instance_72 = new lib.CachedBmp_43();
	this.instance_72.setTransform(156,35.4,0.5,0.5);

	this.instance_73 = new lib.CachedBmp_42();
	this.instance_73.setTransform(2.85,2.9,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_73},{t:this.instance_72},{t:this.instance_71},{t:this.instance_70},{t:this.instance_69},{t:this.instance_68},{t:this.instance_67},{t:this.instance_66},{t:this.instance_65}]},48).to({state:[]},47).wait(295));

	// Начало
	this.instance_74 = new lib.Removebgai_1699464996924();
	this.instance_74.setTransform(207,847);

	this.instance_75 = new lib.Пол();
	this.instance_75.setTransform(0,917,3.1983,2.771);

	this.instance_76 = new lib.CachedBmp_55();
	this.instance_76.setTransform(-58.1,676.05,0.5,0.5);

	this.instance_77 = new lib.CachedBmp_54();
	this.instance_77.setTransform(560.05,1193.35,0.5,0.5);

	this.instance_78 = new lib.CachedBmp_53();
	this.instance_78.setTransform(529.8,661.2,0.5,0.5);

	this.instance_79 = new lib.CachedBmp_52();
	this.instance_79.setTransform(789.7,593.1,0.5,0.5);

	this.instance_80 = new lib.CachedBmp_51();
	this.instance_80.setTransform(323.35,154.7,0.5,0.5);

	this.instance_81 = new lib.CachedBmp_50();
	this.instance_81.setTransform(334.3,175.35,0.5,0.5);

	this.instance_82 = new lib.CachedBmp_49();
	this.instance_82.setTransform(271.6,148.95,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_82},{t:this.instance_81},{t:this.instance_80},{t:this.instance_79},{t:this.instance_78},{t:this.instance_77},{t:this.instance_76},{t:this.instance_75},{t:this.instance_74}]}).to({state:[]},48).wait(342));

	// Фон
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#526DBC","#8E8FF6"],[0,1],0,545.3,0,-545.3).s().p("EiWFBVNMAAAiqZMEsLAAAMAAACqZg");
	this.shape_1.setTransform(959.425,544.025);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).to({_off:true},249).wait(141));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(-1209.8,471.4,5296.1,779.0000000000001);
// library properties:
lib.properties = {
	id: 'EA3767226C5A6B4C9FE482B85A2B2912',
	width: 1920,
	height: 1080,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/CachedBmp_55.png", id:"CachedBmp_55"},
		{src:"images/CachedBmp_51.png", id:"CachedBmp_51"},
		{src:"images/CachedBmp_50.png", id:"CachedBmp_50"},
		{src:"images/CachedBmp_49.png", id:"CachedBmp_49"},
		{src:"images/CachedBmp_42.png", id:"CachedBmp_42"},
		{src:"images/CachedBmp_41.png", id:"CachedBmp_41"},
		{src:"images/Картабезблока1.png", id:"Картабезблока1"},
		{src:"images/Картабезблока2pngкопия2.png", id:"Картабезблока2pngкопия2"},
		{src:"images/Картабезкирпича_.png", id:"Картабезкирпича"},
		{src:"images/Карта_.png", id:"Карта"},
		{src:"images/Super_20Mario_20Bros_atlas_1.png", id:"Super_20Mario_20Bros_atlas_1"},
		{src:"images/Super_20Mario_20Bros_atlas_2.png", id:"Super_20Mario_20Bros_atlas_2"},
		{src:"sounds/_8BitUniverseSuperMarioBrosTheme.mp3", id:"_8BitUniverseSuperMarioBrosTheme"},
		{src:"sounds/mariosmertmp3cutnet.mp3", id:"mariosmertmp3cutnet"},
		{src:"sounds/supermariogameover.mp3", id:"supermariogameover"},
		{src:"sounds/z_ukidlya_ideoz_ukmonetokmariomp3cutnet.mp3", id:"z_ukidlya_ideoz_ukmonetokmariomp3cutnet"}
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
an.compositions['EA3767226C5A6B4C9FE482B85A2B2912'] = {
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