(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != null && cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != null && cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != null && cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
// symbols:



(lib._4qsheader = function() {
	this.initialize(img._4qsheader);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,518,255);


(lib._4qsheader_large = function() {
	this.initialize(img._4qsheader_large);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,769,378);


(lib._4qs = function() {
	this.initialize(img._4qs);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,329,267);


(lib.blue_box = function() {
	this.initialize(img.blue_box);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,833,368);


(lib.btnplayagain3x = function() {
	this.initialize(img.btnplayagain3x);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,708,202);


(lib.btnstarthere3x = function() {
	this.initialize(img.btnstarthere3x);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,708,202);


(lib.btn_home = function() {
	this.initialize(img.btn_home);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,98,98);


(lib.congratulation_qr = function() {
	this.initialize(img.congratulation_qr);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,336,380);


(lib.congratulation_text1 = function() {
	this.initialize(img.congratulation_text1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,696,83);


(lib.congratulation_text2 = function() {
	this.initialize(img.congratulation_text2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,684,83);


(lib.congratulation_text3 = function() {
	this.initialize(img.congratulation_text3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,705,83);


(lib.congratulation_text4 = function() {
	this.initialize(img.congratulation_text4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,595,131);


(lib.congratulation_text5 = function() {
	this.initialize(img.congratulation_text5);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,168,15);


(lib.drag_drop_instruction = function() {
	this.initialize(img.drag_drop_instruction);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,723,30);


(lib.fail_msg1 = function() {
	this.initialize(img.fail_msg1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,626,33);


(lib.fail_msg2 = function() {
	this.initialize(img.fail_msg2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,654,83);


(lib.fail_msg3 = function() {
	this.initialize(img.fail_msg3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,582,35);


(lib.gift = function() {
	this.initialize(img.gift);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,411,411);


(lib.gift2 = function() {
	this.initialize(img.gift2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,411,411);


(lib.gift_bgpngcopy = function() {
	this.initialize(img.gift_bgpngcopy);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,900,1600);


(lib.green_box = function() {
	this.initialize(img.green_box);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,780,452);


(lib.know = function() {
	this.initialize(img.know);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,311,84);


(lib.landing_text = function() {
	this.initialize(img.landing_text);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,780,253);


(lib.LLT = function() {
	this.initialize(img.LLT);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,203,88);


(lib.LMT = function() {
	this.initialize(img.LMT);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,250,88);


(lib.orange_element = function() {
	this.initialize(img.orange_element);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,868,149);


(lib.pose1 = function() {
	this.initialize(img.pose1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,144,135);


(lib.pose2 = function() {
	this.initialize(img.pose2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,109,123);


(lib.pose3 = function() {
	this.initialize(img.pose3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,75,104);


(lib.pose4 = function() {
	this.initialize(img.pose4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,117,159);


(lib.pose5 = function() {
	this.initialize(img.pose5);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,116,132);


(lib.pose6 = function() {
	this.initialize(img.pose6);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,172,164);


(lib.pose7 = function() {
	this.initialize(img.pose7);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,163,115);


(lib.q1_answer1 = function() {
	this.initialize(img.q1_answer1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,354,93);


(lib.q1_answer2 = function() {
	this.initialize(img.q1_answer2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,354,93);


(lib.q1_answer3 = function() {
	this.initialize(img.q1_answer3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,354,93);


(lib.q1_answer4 = function() {
	this.initialize(img.q1_answer4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,354,93);


(lib.q1_answer_emoji = function() {
	this.initialize(img.q1_answer_emoji);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,268,268);


(lib.q1_answer_emoji2 = function() {
	this.initialize(img.q1_answer_emoji2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,268,268);


(lib.q1_b1 = function() {
	this.initialize(img.q1_b1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,316,83);


(lib.q1_b2 = function() {
	this.initialize(img.q1_b2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,316,83);


(lib.q1_b3 = function() {
	this.initialize(img.q1_b3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,316,83);


(lib.q1_b4 = function() {
	this.initialize(img.q1_b4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,316,83);


(lib.q2_b1 = function() {
	this.initialize(img.q2_b1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,170,341);


(lib.q2_b2 = function() {
	this.initialize(img.q2_b2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,239,193);


(lib.q2_b3 = function() {
	this.initialize(img.q2_b3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,350,84);


(lib.q2_b4 = function() {
	this.initialize(img.q2_b4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,234,258);


(lib.q2_instruction = function() {
	this.initialize(img.q2_instruction);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,735,30);


(lib.question1_1pngcopy = function() {
	this.initialize(img.question1_1pngcopy);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,759,744);


(lib.question1_showanswer = function() {
	this.initialize(img.question1_showanswer);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,759,744);


(lib.question2 = function() {
	this.initialize(img.question2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,759,744);


(lib.question2_showanswer = function() {
	this.initialize(img.question2_showanswer);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,815,993);


(lib.red_element = function() {
	this.initialize(img.red_element);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,767,231);


(lib.show_answer_text = function() {
	this.initialize(img.show_answer_text);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1004,62);


(lib.the = function() {
	this.initialize(img.the);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,98,42);


(lib.ULT = function() {
	this.initialize(img.ULT);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,225,89);


(lib.UMT = function() {
	this.initialize(img.UMT);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,272,89);


(lib.yellow_bg = function() {
	this.initialize(img.yellow_bg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,900,1600);// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
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


(lib.tryagaintext = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFC100").s().p("AgUCKQgIgIAAgOQAAgPAIgHQAIgIAMAAQAPAAAGAIQAIAIAAAOQAAAOgIAIQgHAIgOAAQgNAAgHgIgAgQA1IgKjGIA2AAIgLDGg");
	this.shape.setTransform(88.2,6.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFC100").s().p("AAxBuIAAiEQAAgZgKgNQgLgMgVABQgcAAgOARQgNARAAAnIAABsIguAAIAAjXIAkAAIAHAcIACAAQAKgQASgIQAQgIAXAAQBNAAAABPIAACMg");
	this.shape_1.setTransform(70.1,9.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFC100").s().p("AgWCWIAAjXIAtAAIAADXgAgShpQgHgGAAgMQAAgMAHgHQAGgGAMAAQAMAAAHAGQAHAHAAAMQAAAMgHAGQgHAHgMAAQgMAAgGgHg");
	this.shape_2.setTransform(51.7,5.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFC100").s().p("AhJBfQgSgRABggQAAghAYgQQAYgRAzgCIAlgBIAAgMQAAgUgJgKQgKgLgVAAQgQAAgPAFQgOAFgPAHIgPghQAQgJAXgFQAVgFASAAQAoAAAVASQAVASAAAnIAACQIghAAIgJgeIgBAAQgPAUgRAHQgOAHgZAAQggAAgSgRgAASAGQggABgPAKQgOAKAAAUQAAAOAIAIQAJAIARAAQAZAAAPgOQAPgOAAgZIAAgTg");
	this.shape_3.setTransform(33.9,10);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFC100").s().p("AhRCOQgYgPAAgdQAAgUANgOQAMgNAXgFQgIgEgHgJQgGgJAAgKQAAgLAIgIQAGgIAOgIQgRgIgLgQQgKgQAAgWQAAgkAWgTQAXgTAoAAIATABIAPADIBKAAIAAAZIglAHQAFAGAEAKQADAMAAAKQAAAhgXATQgWATgpABIgSgCQgPAJAAAMQAAAHAHADQAGAEATAAIAmAAQAjAAASAQQATAPAAAcQAAAlgeAUQggAUg2AAQgtAAgXgQgAg0BHQgLAIAAARQAAAOANAIQANAIAYAAQAlAAATgLQASgKAAgSQAAgOgKgGQgLgGgbAAIgiAAQgTAAgMAKgAghh1QgKAMAAAWQgBAUALALQALALATAAQAnAAAAgqQAAgWgKgLQgJgMgUAAQgUABgKAKg");
	this.shape_4.setTransform(11.7,14.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFC100").s().p("AhJBfQgSgRABggQgBghAZgQQAYgRAygCIAmgBIAAgMQAAgUgJgKQgKgLgVAAQgQAAgPAFQgNAFgQAHIgOghQAPgJAXgFQAVgFARAAQAqAAAUASQAWASgBAnIAACQIghAAIgIgeIgCAAQgQAUgPAHQgPAHgZAAQggAAgSgRgAASAGQgfABgQAKQgOAKAAAUQAAAOAJAIQAIAIARAAQAZAAAOgOQAPgOAAgZIAAgTg");
	this.shape_5.setTransform(-11.6,10);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFC100").s().p("AhiCYIAAgkQAJACAPAAQAhAAANgmIAIgUIhWjXIAyAAIAsB6QAKAcACAVIABAAIAHgZIAxiSIAyAAIhcD0QgZBDg6AAQgQAAgOgEg");
	this.shape_6.setTransform(-43.6,14.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFC100").s().p("AhBBuIAAjXIAkAAIAGAmIACAAQALgUAQgLQARgLAVAAQAOAAAIACIgEArQgLgDgJAAQgcAAgQASQgRASAAAdIAABwg");
	this.shape_7.setTransform(-61.7,9.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFC100").s().p("AgXCPIAAj1IhTAAIAAgoIDWAAIAAAoIhVAAIAAD1g");
	this.shape_8.setTransform(-82.9,6.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFC100").s().p("AgVAWQgHgJAAgNQAAgNAHgIQAHgIAOAAQAOAAAIAIQAHAIAAANQAAAOgHAIQgJAIgNAAQgOAAgHgIg");
	this.shape_9.setTransform(60.9,-29.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFC100").s().p("AgVAWQgHgJAAgNQAAgNAHgIQAHgIAOAAQAOAAAIAIQAHAIAAANQAAAOgHAIQgJAIgNAAQgOAAgHgIg");
	this.shape_10.setTransform(49.9,-29.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFC100").s().p("AgVAWQgHgIAAgOQAAgOAHgHQAHgIAOAAQAOAAAIAIQAHAIAAANQAAAOgHAIQgIAIgOAAQgOAAgHgIg");
	this.shape_11.setTransform(38.9,-29.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFC100").s().p("AhOBjIAAgoQAnASAgAAQApAAAAgaQAAgIgEgFQgFgGgLgGQgLgGgSgHQgkgNgOgPQgNgOAAgXQAAgcAWgQQAWgPAmAAQAnAAAhAQIgPAiQgigOgZAAQgjAAAAAUQAAAKAJAIQALAHAeAMQAaAKAMAIQANAJAFALQAGALAAAQQAAAfgXARQgXARgqAAQgsAAgZgNg");
	this.shape_12.setTransform(23.8,-38);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFC100").s().p("AhhCeIAAk3IAmAAIAGAcIACAAQAWggApAAQApAAAWAdQAXAeAAA0QAAA1gXAdQgWAdgpABQgogBgXgdIgCAAIACB6gAgmhoQgNARAAAjIAAAGQAAAnANASQAMARAbAAQAYAAANgUQANgSAAgkQAAglgNgSQgMgTgZAAQgbAAgMAQg");
	this.shape_13.setTransform(2.1,-33.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFC100").s().p("Ag1BiQgXgNgNgaQgMgZAAgiQAAg0AbgdQAageAxAAQAvAAAbAeQAbAeAAAzQAAA0gbAeQgaAegxAAQgdAAgYgOgAgpg2QgNATAAAjQAABKA2AAQA3AAAAhKQAAhJg3AAQgcAAgNATg");
	this.shape_14.setTransform(-23.2,-38);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFC100").s().p("AhiBtQgjgnAAhGQAAhGAjgmQAjgmBAAAQA/AAAjAmQAjAnAABFQAABGgjAmQgiAnhBAAQhAAAgigmgAg+hOQgVAaAAA0QAAA1AVAbQAVAcApgBQAqAAAVgbQAVgaAAg2QAAg0gVgaQgVgcgpAAQgqAAgVAcg");
	this.shape_15.setTransform(-51.2,-41.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#232323").s().p("AgaAbQgLgLAAgQQAAgPALgLQALgLAPAAQAPAAAMALQALALAAAPQAAAQgLALQgMALgPAAQgPAAgLgLgAgMgMQgGAFAAAHQAAAIAGAFQAFAGAHAAQAIAAAFgGQAGgFAAgIQAAgHgGgFQgFgGgIAAQgHAAgFAGg");
	this.shape_16.setTransform(-2.2,-130.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#232323").s().p("AgaAbQgLgMAAgPQAAgPALgLQALgLAPAAQAQAAALALQALALAAAPQAAAPgLAMQgLALgQAAQgPAAgLgLgAgMgNQgGAGAAAHQAAAIAGAGQAFAFAHAAQAIAAAGgFQAFgGAAgIQAAgHgFgGQgGgFgIAAQgHAAgFAFg");
	this.shape_17.setTransform(-127.7,-38.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#232323").s().p("AgaAbQgLgLAAgQQAAgPALgLQALgLAPAAQAQAAALALQALALAAAPQAAAQgLALQgLALgQAAQgPAAgLgLgAgMgNQgGAGAAAHQAAAIAGAFQAFAGAHAAQAIAAAGgGQAFgFAAgIQAAgHgFgGQgGgFgIAAQgHAAgFAFg");
	this.shape_18.setTransform(-77.1,75.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#232323").s().p("AgaAbQgLgLAAgQQAAgPALgLQALgLAPAAQAQAAALALQALALAAAPQAAAQgLALQgLALgQAAQgPAAgLgLgAgNgNQgFAGAAAHQAAAIAFAFQAGAGAHAAQAIAAAFgGQAGgFAAgIQAAgHgGgGQgFgFgIAAQgHAAgGAFg");
	this.shape_19.setTransform(132.3,76.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#232323").s().p("AgaAbQgLgLAAgQQAAgOALgMQALgLAPAAQAQAAALALQALAMAAAOQAAAQgLALQgLALgQAAQgPAAgLgLgAgMgNQgGAGAAAHQAAAIAGAGQAFAFAHAAQAIAAAFgFQAGgGAAgIQAAgHgGgGQgFgFgIAAQgHAAgFAFg");
	this.shape_20.setTransform(100.8,-110);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgaAbQgLgLAAgQQAAgPALgLQALgLAPAAQAQAAALALQALALAAAPQAAAQgLALQgLALgQAAQgPAAgLgLgAgNgMQgFAFAAAHQAAAIAFAGQAGAFAHAAQAIAAAFgFQAGgGAAgIQAAgHgGgFQgFgGgIAAQgHAAgGAGg");
	this.shape_21.setTransform(121.8,-27.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgaAbQgLgLAAgQQAAgPALgLQALgLAPAAQAQAAALALQALALAAAPQAAAQgLALQgLALgQAAQgPAAgLgLgAgNgMQgFAFAAAHQAAAIAFAFQAGAGAHAAQAIAAAFgGQAGgFAAgIQAAgHgGgFQgFgGgIAAQgHAAgGAGg");
	this.shape_22.setTransform(34,78.9);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgaAbQgLgLAAgQQAAgOALgMQALgLAPAAQAQAAALALQALAMAAAOQAAAQgLALQgLALgQAAQgPAAgLgLgAgNgNQgFAGAAAHQAAAIAFAFQAGAGAHAAQAIAAAFgGQAGgFAAgIQAAgHgGgGQgFgFgIAAQgHAAgGAFg");
	this.shape_23.setTransform(-141.9,7.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AghAiQgOgOAAgUQAAgTAOgOQAOgOATAAQAUAAAOAOQAOAOAAATQAAAUgOAOQgOAOgUAAQgTAAgOgOgAgTgTQgJAIAAALQAAAMAJAIQAIAJALAAQAMAAAIgJQAJgIAAgMQAAgLgJgIQgIgJgMAAQgLAAgIAJg");
	this.shape_24.setTransform(-51.8,-91.2);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#232323").s().p("AgbAdQgDgDAAgEQAAgEADgCIAqgrQAGgHAHAHQADACAAAFQAAADgDADIgpArQgDACgEAAQgEAAgDgCg");
	this.shape_25.setTransform(106.8,-6);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#232323").s().p("AgbAdQgDgDAAgEQAAgEADgDIApgqQAHgHAHAHQADADAAAEQAAAEgDACIgqArQgDADgDAAQgEAAgDgDg");
	this.shape_26.setTransform(109.9,65.7);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#232323").s().p("AgbAdQgDgDAAgEQAAgEADgDIAqgrQACgCAEAAQAEAAADACQADADAAAEQAAAEgDADIgpArQgEACgDAAQgFAAgCgCg");
	this.shape_27.setTransform(7.3,108.8);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#232323").s().p("AgbAdQgDgDAAgEQAAgEADgDIAqgqQAGgHAHAHQADADAAAEQAAAEgDACIgpArQgDADgEAAQgEAAgDgDg");
	this.shape_28.setTransform(-84.7,62.5);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#232323").s().p("AgbAcQgDgCAAgEQAAgEADgDIAqgqQAGgHAHAHQADACAAAFQAAAEgDACIgpAqQgDADgEAAQgEAAgDgDg");
	this.shape_29.setTransform(-103,-29.8);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#232323").s().p("AgbAdQgDgDAAgEQAAgEADgDIAqgqQACgDAEAAQAEAAADADQADACAAAEQAAAEgDADIgpArQgEACgDAAQgDAAgEgCg");
	this.shape_30.setTransform(-104.9,-100.2);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#232323").s().p("AAPAcIgqgqQgDgCAAgEQAAgEADgDQACgDAEAAQAEAAADADIAqApQADADAAAEQAAAEgDADQgCADgEAAQgEAAgDgDg");
	this.shape_31.setTransform(24,-93.7);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#232323").s().p("AAPAcIgrgqQgCgCAAgEQAAgEACgDQADgDAEAAQAEAAADADIAqApQADADAAAEQAAAEgDADQgDADgEAAQgDAAgDgDg");
	this.shape_32.setTransform(-108,30.2);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#232323").s().p("AAPAdIgqgqQgDgDAAgEQAAgEACgCQAHgHAHAGIAqAqQADADAAAEQAAAEgDADQgCACgEAAQgEAAgDgCg");
	this.shape_33.setTransform(-38.1,-111.3);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#232323").s().p("AAPAdIgqgqQgDgDAAgEQAAgEACgCQAHgHAHAGIAqAqQADADAAAEQAAAEgDACQgCADgEAAQgEAAgDgCg");
	this.shape_34.setTransform(73.1,81.5);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#232323").s().p("AAPAcIgqgqQgDgCAAgEQAAgEACgDQADgDAEAAQAEAAADADIAqApQADADAAAEQAAAEgDADQgDADgDAAQgEAAgDgDg");
	this.shape_35.setTransform(116.4,-56.4);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#232323").s().p("AgbAdQgDgDAAgEQAAgEADgDIAqgqQACgDAEAAQAEAAADADQADACAAAEQAAAEgDADIgpAqQgDADgEAAQgDAAgEgCg");
	this.shape_36.setTransform(104.2,-85.7);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#232323").s().p("AgbAcQgDgCAAgEQAAgEADgDIAqgqQAGgHAHAHQADACAAAEQAAAEgDADIgpAqQgDAEgEAAQgEAAgDgEg");
	this.shape_37.setTransform(55.6,-88.4);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AgbAdQgDgDAAgEQAAgEADgDIApgqQAHgHAHAHQADADAAADQAAAEgDADIgqAqQgDAEgEgBQgDAAgDgCg");
	this.shape_38.setTransform(42.7,-106.6);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AgbAcQgDgCAAgEQAAgEADgCIApgrQAHgHAHAHQADACAAAEQAAAFgDACIgqAqQgDADgDAAQgEAAgDgDg");
	this.shape_39.setTransform(112.2,24.1);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AgbAdQgDgDAAgFQAAgDADgDIApgrQADgCAEAAQAEAAADACQADADAAAEQAAAEgDADIgqArQgCACgEAAQgEAAgDgCg");
	this.shape_40.setTransform(91.3,79.3);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AgbAcQgDgCAAgEQAAgEADgDIAqgrQACgCAEAAQAEAAADACQADADAAAEQAAAEgDADIgpAqQgDADgEAAQgEAAgDgDg");
	this.shape_41.setTransform(-10.4,82.2);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AAPAcIgqgqQgDgCAAgEQAAgEADgDQACgDAEAAQAEAAADADIAqApQADADAAAEQAAAEgCADQgDADgEAAQgEAAgDgDg");
	this.shape_42.setTransform(-76,-102.4);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AAPAdIgqgqQgDgDAAgEQAAgEACgCQAHgHAHAGIAqAqQADADAAAEQAAAEgDACQgDADgDAAQgEAAgDgCg");
	this.shape_43.setTransform(-112.8,55.2);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AAPAcIgqgqQgDgCAAgEQAAgEADgDQACgDAEAAQAEAAADADIAqAqQADACAAAEQAAAEgCADQgDADgEAAQgEAAgDgDg");
	this.shape_44.setTransform(-117,-63.7);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AAPAcIgqgpQgDgDAAgEQAAgEADgDQACgDAEAAQAEAAADADIAqAqQADACAAAEQAAAEgCADQgDADgEAAQgEAAgDgDg");
	this.shape_45.setTransform(58.6,108.6);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AAPAdIgqgqQgDgDAAgEQAAgEACgCQAHgHAHAGIAqAqQADADAAAEQAAAEgDACQgCADgEAAQgEAAgDgCg");
	this.shape_46.setTransform(108.8,49.1);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AAPAcIgqgqQgDgCAAgEQAAgEADgDQADgDADAAQAEAAADADIArApQACADAAAEQAAAEgCADQgEADgDAAQgEAAgDgDg");
	this.shape_47.setTransform(125.2,-78.5);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AAPAcIgqgqQgDgCAAgEQAAgEADgDQACgDAEAAQAEAAADADIAqAqQADACAAAEQAAAEgDADQgCADgEAAQgEAAgDgDg");
	this.shape_48.setTransform(82.6,-97.9);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("AgbAdQgDgDAAgEQAAgEADgDIAqgqQACgDAEAAQAEAAADADQADACAAAEQAAAEgDADIgqArQgCACgEAAQgFAAgCgCg");
	this.shape_49.setTransform(-95,-77.3);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("AgbAdQgDgDAAgEQAAgEADgDIApgqQADgDAEAAQAEAAADADQADACAAAEQAAAEgDADIgqAqQgCADgEAAQgEAAgDgCg");
	this.shape_50.setTransform(-7.2,-100.4);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#0E0E0E").s().p("AunUiQgXgLgNgWQgNgUAAgaIgBjOQAAghgXgXQgYgXghAAIgrAAQhHgBg0gvQgzgvgHhHIiW7DQgEgpANgoQAMgnAbgfQAbggAkgRQAlgTApgCMAm3gCaQAqAAAnASQAmAQAeAfQAfAiAOArQAOArgGAuIj4dBQgKBPg8A0Qg8A0hPABI1BAAQgcAAgVAQImvFSQgYASgeAAQgUABgSgJgAzfxhQhBAFgrAxQgqAyAFBBICXbEQAEA0AmAjQAnAiA0ABIArAAQA1AAAlAlQAmAmAAA0IAADOQAAAZAXAKQAKAGAMgCQALAAAJgIIGulRQAkgcArABIVBAAQA9AAAugpQAvgoAIg9ID39BQAFgjgLghQgKghgYgaQgvgxhDgBIgKABIgBAAg");
	this.shape_51.setTransform(1.7,1.8);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#232323").s().p("AAPAcIgqgpQgDgDAAgEQAAgEADgDQAGgHAHAHIAqAqQADACAAAEQAAAEgCADQgDADgEAAQgEAAgDgDg");
	this.shape_52.setTransform(22.6,92.4);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().p("AgbAdQgDgDAAgEQAAgEADgDIApgqQAHgHAHAHQADADAAAEQAAAEgDACIgqArQgDADgDAAQgEAAgDgDg");
	this.shape_53.setTransform(-110.1,4.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.tryagaintext, new cjs.Rectangle(-145.7,-134,291.5,268.1), null);


(lib.titletext = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.landing_text();
	this.instance.parent = this;
	this.instance.setTransform(-390,-127);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.titletext, new cjs.Rectangle(-390,-127,780,253), null);


(lib.textf05 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.congratulation_text5();
	this.instance.parent = this;
	this.instance.setTransform(-84,-8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.textf05, new cjs.Rectangle(-84,-8,168,15), null);


(lib.textf04 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.congratulation_text4();
	this.instance.parent = this;
	this.instance.setTransform(-298,-66);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.textf04, new cjs.Rectangle(-298,-66,595,131), null);


(lib.textf03 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.congratulation_text3();
	this.instance.parent = this;
	this.instance.setTransform(-353,18);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.textf03, new cjs.Rectangle(-353,18,705,83), null);


(lib.textf02 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.congratulation_text2();
	this.instance.parent = this;
	this.instance.setTransform(-342,-2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.textf02, new cjs.Rectangle(-342,-2,684,83), null);


(lib.textf01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.congratulation_text1();
	this.instance.parent = this;
	this.instance.setTransform(-348,-12);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.textf01, new cjs.Rectangle(-348,-12,696,83), null);


(lib.text03startyour = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.fail_msg3();
	this.instance.parent = this;
	this.instance.setTransform(-291,-18);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.text03startyour, new cjs.Rectangle(-291,-18,582,35), null);


(lib.text02nowits = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.fail_msg2();
	this.instance.parent = this;
	this.instance.setTransform(-327,-42);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.text02nowits, new cjs.Rectangle(-327,-42,654,83), null);


(lib.text01you = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.fail_msg1();
	this.instance.parent = this;
	this.instance.setTransform(-313,-17);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.text01you, new cjs.Rectangle(-313,-17,626,33), null);


(lib.Symbol16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.congratulation_qr();
	this.instance.parent = this;
	this.instance.setTransform(-101,-114,0.6,0.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol16, new cjs.Rectangle(-101,-114,201.6,228), null);


(lib.Symbol15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.gift_bgpngcopy();
	this.instance.parent = this;
	this.instance.setTransform(-450,-800);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-450,-800,900,1600);


(lib.Symbol13copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{hide:0,show:6});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(14));

	// Layer 1
	this.instance = new lib.LLT();
	this.instance.parent = this;
	this.instance.setTransform(-102,-44);

	this.instance_1 = new lib.q2_b4();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-105,-116,0.9,0.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},6).wait(8));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-102,-44,203,88);


(lib.Symbol12copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"hide":0,"show":6});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(14));

	// Layer 1
	this.instance = new lib.ULT();
	this.instance.parent = this;
	this.instance.setTransform(-113,-45);

	this.instance_1 = new lib.q2_b3();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-175,-42);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},6).wait(8));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-113,-45,225,89);


(lib.Symbol11copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"hide":0,"show":6});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(14));

	// Layer 1
	this.instance = new lib.UMT();
	this.instance.parent = this;
	this.instance.setTransform(-136,-45);

	this.instance_1 = new lib.q2_b2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-120,-97);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},6).wait(8));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-136,-45,272,89);


(lib.Symbol10copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"hide":0,"show":6});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(14));

	// Layer 1
	this.instance = new lib.LMT();
	this.instance.parent = this;
	this.instance.setTransform(-125,-44);

	this.instance_1 = new lib.q2_b1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-58,-115,0.688,0.688);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},6).wait(8));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-125,-44,250,88);


(lib.Symbol9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.q2_instruction();
	this.instance.parent = this;
	this.instance.setTransform(-368,-15);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol9, new cjs.Rectangle(-368,-15,735,30), null);


(lib.Symbol8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.show_answer_text();
	this.instance.parent = this;
	this.instance.setTransform(-251,-14,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol8, new cjs.Rectangle(-251,-14,502,31), null);


(lib.Symbol6copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"hide":0,"show":6});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(13));

	// Layer 1
	this.instance = new lib.LMT();
	this.instance.parent = this;
	this.instance.setTransform(-125,-44);

	this.instance_1 = new lib.q1_answer2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-177,-47);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},6).wait(7));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-125,-44,250,88);


(lib.Symbol5copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"hide":0,"show":6});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(13));

	// Layer 1
	this.instance = new lib.ULT();
	this.instance.parent = this;
	this.instance.setTransform(-113,-45);

	this.instance_1 = new lib.q1_answer3();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-177,-47);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},6).wait(7));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-113,-45,225,89);


(lib.Symbol4copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"hide":0,"show":7});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(15));

	// Layer 1
	this.instance = new lib.LLT();
	this.instance.parent = this;
	this.instance.setTransform(-102,-44);

	this.instance_1 = new lib.q1_answer1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-177,-47);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},7).wait(8));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-102,-44,203,88);


(lib.Symbol3copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"hide":0,"show":6});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(13));

	// Layer 1
	this.instance = new lib.UMT();
	this.instance.parent = this;
	this.instance.setTransform(-136,-45);

	this.instance_1 = new lib.q1_answer4();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-177,-47);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},6).wait(7));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-136,-45,272,89);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.drag_drop_instruction();
	this.instance.parent = this;
	this.instance.setTransform(-362,-15);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-362,-15,723,30);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._4qsheader();
	this.instance.parent = this;
	this.instance.setTransform(-259,-128);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-259,-128,518,255);


(lib.q6_mc_drop = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(102,0,153,0.008)").s().p("AvvOIIAA8QIffAAIAAcQg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.q6_mc_drop, new cjs.Rectangle(-100.8,-90.4,201.6,180.9), null);


(lib.pose7_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.pose7();
	this.instance.parent = this;
	this.instance.setTransform(-82,-58);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.pose7_1, new cjs.Rectangle(-82,-58,163,115), null);


(lib.pose6_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.pose6();
	this.instance.parent = this;
	this.instance.setTransform(-86,-82);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.pose6_1, new cjs.Rectangle(-86,-82,172,164), null);


(lib.pose5_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.pose5();
	this.instance.parent = this;
	this.instance.setTransform(-58,-66);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.pose5_1, new cjs.Rectangle(-58,-66,116,132), null);


(lib.pose4_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.pose4();
	this.instance.parent = this;
	this.instance.setTransform(-59,-80);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.pose4_1, new cjs.Rectangle(-59,-80,117,159), null);


(lib.pose3_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.pose3();
	this.instance.parent = this;
	this.instance.setTransform(-38,-52);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.pose3_1, new cjs.Rectangle(-38,-52,75,104), null);


(lib.pose2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.pose2();
	this.instance.parent = this;
	this.instance.setTransform(-55,-62);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.pose2_1, new cjs.Rectangle(-55,-62,109,123), null);


(lib.pose1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.pose1();
	this.instance.parent = this;
	this.instance.setTransform(-72,-68);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.pose1_1, new cjs.Rectangle(-72,-68,144,135), null);


(lib.the_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.the();
	this.instance.parent = this;
	this.instance.setTransform(-49,-21);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.the_1, new cjs.Rectangle(-49,-21,98,42), null);


(lib.redelement = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.red_element();
	this.instance.parent = this;
	this.instance.setTransform(-384,-116);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFF4EB").s().p("AgpCPIAAhmIhlAAIAAhRIBlAAIAAhmIBSAAIAABmIBmAAIAABRIhmAAIAABmg");
	this.shape.setTransform(-291.4,-13.3,1.2,1.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFF4EB").s().p("AgpCPIAAhlIhlAAIAAhSIBlAAIAAhmIBSAAIAABmIBmAAIAABSIhmAAIAABlg");
	this.shape_1.setTransform(-327.5,11,1.2,1.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFF4EB").s().p("AgoCPIAAhmIhmAAIAAhRIBmAAIAAhmIBRAAIAABmIBmAAIAABRIhmAAIAABmg");
	this.shape_2.setTransform(-367,-61.9,1.2,1.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFF4EB").s().p("AgpCPIAAhmIhlAAIAAhRIBlAAIAAhmIBSAAIAABmIBmAAIAABRIhmAAIAABmg");
	this.shape_3.setTransform(-327.5,-37.6,1.2,1.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFF4EB").s().p("AgoCPIAAhmIhmAAIAAhSIBmAAIAAhlIBRAAIAABlIBmAAIAABSIhmAAIAABmg");
	this.shape_4.setTransform(-367,-13.3,1.2,1.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFF4EB").s().p("AgoCPIAAhmIhmAAIAAhRIBmAAIAAhmIBRAAIAABmIBmAAIAABRIhmAAIAABmg");
	this.shape_5.setTransform(-367,35.2,1.2,1.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.redelement, new cjs.Rectangle(-384.1,-116,767.2,231), null);


(lib.orangeelement = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.orange_element();
	this.instance.parent = this;
	this.instance.setTransform(-434,-75);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.orangeelement, new cjs.Rectangle(-434,-75,868,149), null);


(lib.know_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.know();
	this.instance.parent = this;
	this.instance.setTransform(-156,-42);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.know_1, new cjs.Rectangle(-156,-42,311,84), null);


(lib.greenbox = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.green_box();
	this.instance.parent = this;
	this.instance.setTransform(-390,-226);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.greenbox, new cjs.Rectangle(-390,-226,780,452), null);


(lib.bluebox = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.blue_box();
	this.instance.parent = this;
	this.instance.setTransform(-417,-184);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.bluebox, new cjs.Rectangle(-417,-184,833,368), null);


(lib._4qs_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib._4qs();
	this.instance.parent = this;
	this.instance.setTransform(-181,-134);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib._4qs_1, new cjs.Rectangle(-181,-134,329,267), null);


(lib.giftanimation = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.gift();
	this.instance.parent = this;
	this.instance.setTransform(-206,-206);

	this.instance_1 = new lib.gift2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-206,-206);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},19).to({state:[{t:this.instance}]},20).to({state:[{t:this.instance_1}]},19).to({state:[{t:this.instance}]},20).to({state:[{t:this.instance_1}]},19).to({state:[{t:this.instance}]},20).to({state:[{t:this.instance_1}]},19).wait(20));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-206,-206,411,411);


(lib.faceXX = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0E0E0E").s().p("ABZBkIjXiPQgMgIgCgNQgDgPAIgLQAHgMAOgDQAOgCAMAHIDXCQQALAHADAPQADANgIAMQgIALgNADIgIABQgKAAgIgGg");
	this.shape.setTransform(-30.5,-20.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0E0E0E").s().p("AhlB2QgOgBgKgLQgJgLACgOQABgOALgJIDFinQALgJAOABQAOABAJALQAJALgBAOQgBAOgLAJIjGCnQgJAIgLAAIgEAAg");
	this.shape_1.setTransform(-30.5,-20.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0E0E0E").s().p("ABZBlIjXiQQgMgIgCgOQgDgOAIgLQAIgMANgCQAOgEAMAIIDXCPQAMAIACAPQADAOgIALQgIALgNADIgIABQgKAAgIgFg");
	this.shape_2.setTransform(27.8,-20.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#0E0E0E").s().p("AhlB2QgOgBgJgLQgKgLACgOQABgOALgJIDFinQALgJAOABQAOABAJALQAJALgBAOQgBAOgLAJIjFCnQgKAIgLAAIgEAAg");
	this.shape_3.setTransform(27.8,-20.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#BB1F2E").s().p("AifBcQg2gGgUgxQgUguAggiQAggiCCgOQCBgOBHAXQA7ATAaAhIAPAeQAHA4grAYQgYANiPADIhPABQhNAAgpgFg");
	this.shape_4.setTransform(0,38.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F3967E").s().p("AAVA2QgIgBgFgHIgthBQgFgHABgJQABgIAGgGQAGgFAIABQAHABAFAHIAuBBQAFAHgBAIQgBAJgGAFQgFAFgGAAIgDAAg");
	this.shape_5.setTransform(-45,17.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#F3967E").s().p("AAWA2QgJgBgFgHIgthBQgFgHAAgJQABgIAHgGQAGgFAIABQAIABAFAHIAtBBQAGAHgBAIQgCAJgFAFQgGAFgGAAIgCAAg");
	this.shape_6.setTransform(-40.2,13.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#F3967E").s().p("AAVA2QgHgCgGgGIguhBQgFgHABgJQABgIAGgGQAHgFAIABQAIABAEAHIAuBBQAFAHAAAIQgCAJgGAFQgFAFgHAAIgCAAg");
	this.shape_7.setTransform(35.8,20.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#F3967E").s().p("AAVA2QgHgCgFgGIguhBQgFgHABgJQABgIAGgGQAGgFAIABQAIABAFAHIAtBBQAFAGAAAJQgBAJgHAFQgFAFgHAAIgCAAg");
	this.shape_8.setTransform(40.6,16);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#B07B1D").s().p("AgPB3QgGgDgDgGQgDgHADgGQASgrgBhRIgEhJQgBgHAEgGQAFgFAGgBQAHgBAFAEQAGAFABAHQAEAZAAA3QAABVgUAxQgEAKgKAAg");
	this.shape_9.setTransform(-1.7,5.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#9BB4C0").s().p("AjuJyQjAhJh2ioQh5itAAjUQAAkUDEjFQDEjEEVAAQEVAADFDEQDEDFAAEUQAADIhtClQhpCjiwBQQiFA+iTAAQh7AAhzgsg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.faceXX, new cjs.Rectangle(-67,-67,134,134), null);


(lib.facehappyanimationcopy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_173 = function() {
		//this.parent.gotoAndPlay("question2");
		this.parent.parent.showFail();
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(173).call(this.frame_173).wait(1));

	// Layer 7
	this.instance = new lib.q1_answer_emoji();
	this.instance.parent = this;
	this.instance.setTransform(-67,-67,0.5,0.5);

	this.instance_1 = new lib.q1_answer_emoji2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-67,-67,0.5,0.5);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},14).wait(15).to({_off:false},0).to({_off:true},14).wait(15).to({_off:false},0).to({_off:true},14).wait(15).to({_off:false},0).to({_off:true},14).wait(15).to({_off:false},0).to({_off:true},14).wait(15).to({_off:false},0).to({_off:true},14).wait(15));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(14).to({_off:false},0).to({_off:true},15).wait(14).to({_off:false},0).to({_off:true},15).wait(14).to({_off:false},0).to({_off:true},15).wait(14).to({_off:false},0).to({_off:true},15).wait(14).to({_off:false},0).to({_off:true},15).wait(14).to({_off:false},0).wait(15));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-67,-67,134,134);


(lib.facehappyanimation = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_173 = function() {
		this.parent.gotoAndPlay("question2");
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(173).call(this.frame_173).wait(1));

	// Layer 7
	this.instance = new lib.q1_answer_emoji();
	this.instance.parent = this;
	this.instance.setTransform(-67,-67,0.5,0.5);

	this.instance_1 = new lib.q1_answer_emoji2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-67,-67,0.5,0.5);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},14).wait(15).to({_off:false},0).to({_off:true},14).wait(15).to({_off:false},0).to({_off:true},14).wait(15).to({_off:false},0).to({_off:true},14).wait(15).to({_off:false},0).to({_off:true},14).wait(15).to({_off:false},0).to({_off:true},14).wait(15));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(14).to({_off:false},0).to({_off:true},15).wait(14).to({_off:false},0).to({_off:true},15).wait(14).to({_off:false},0).to({_off:true},15).wait(14).to({_off:false},0).to({_off:true},15).wait(14).to({_off:false},0).to({_off:true},15).wait(14).to({_off:false},0).wait(15));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-67,-67,134,134);


(lib.Symbol4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("ApXOkIAA9HISvAAIAAdHg");
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.titleanimation = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.titletext();
	this.instance.parent = this;
	this.instance.setTransform(0.5,0,0.002,0.002);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:0.1,regY:-0.1,scaleX:1.1,scaleY:1.1,x:0.4,y:-0.1},9).to({scaleX:0.9,scaleY:0.9,x:0.5},7).to({scaleX:1.05,scaleY:1.05},7).to({scaleX:0.95,scaleY:0.95,x:0.4},7).to({scaleX:1,scaleY:1,x:0.5},8).wait(22));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.3,-0.3,1.6,0.5);


(lib.textsuccessfulanimation = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_5
	this.instance = new lib.textf05();
	this.instance.parent = this;
	this.instance.setTransform(-0.5,487.6);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(53).to({_off:false},0).to({y:494,alpha:1},19,cjs.Ease.get(1)).wait(9));

	// Layer_4
	this.instance_1 = new lib.textf04();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-0.5,388.3);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(41).to({_off:false},0).to({y:397,alpha:1},19,cjs.Ease.get(1)).wait(21));

	// Layer 6
	this.instance_2 = new lib.Symbol16();
	this.instance_2.parent = this;
	this.instance_2.setTransform(0,220.3);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(29).to({_off:false},0).to({x:0.2,y:234.6,alpha:1},17).wait(35));

	// Layer_3
	this.instance_3 = new lib.textf03();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-0.6,-12);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(19).to({_off:false},0).to({y:4,alpha:1},19,cjs.Ease.get(1)).wait(43));

	// Layer_2
	this.instance_4 = new lib.textf02();
	this.instance_4.parent = this;
	this.instance_4.setTransform(0,-131.9);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(9).to({_off:false},0).to({y:-115.9,alpha:1},19,cjs.Ease.get(1)).wait(53));

	// Layer_1
	this.instance_5 = new lib.textf01();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-1.5,-253.1);
	this.instance_5.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({y:-237.1,alpha:1},19,cjs.Ease.get(1)).wait(62));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-349.5,-265.1,696,83);


(lib.textyouhavelearnedanimation = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_3
	this.instance = new lib.text03startyour();
	this.instance.parent = this;
	this.instance.setTransform(-0.3,87.9);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(29).to({_off:false},0).to({y:119.9,alpha:1},29,cjs.Ease.get(1)).wait(41));

	// Layer_2
	this.instance_1 = new lib.text02nowits();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,-32);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(14).to({_off:false},0).to({y:0,alpha:1},29,cjs.Ease.get(1)).wait(56));

	// Layer_1
	this.instance_2 = new lib.text01you();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-1.4,-153.2);
	this.instance_2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({y:-121.2,alpha:1},29,cjs.Ease.get(1)).wait(70));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-314.4,-170.2,626,33);


(lib.Symbol33 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.button = new lib.Symbol4();
	this.button.parent = this;
	this.button.setTransform(-0.2,-0.5,2.633,0.445,0,0,0,-0.1,0);
	new cjs.ButtonHelper(this.button, 0, 1, 2, false, new lib.Symbol4(), 3);

	this.timeline.addTween(cjs.Tween.get(this.button).wait(1));

	// Layer 1
	this.instance = new lib.btnstarthere3x();
	this.instance.parent = this;
	this.instance.setTransform(-136,-39,0.384,0.384);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol33, new cjs.Rectangle(-158,-42,316,83), null);


(lib.Symbol17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.button = new lib.Symbol4();
	this.button.parent = this;
	this.button.setTransform(-0.3,-0.5,0.854,0.445,0,0,0,-0.1,0);
	new cjs.ButtonHelper(this.button, 0, 1, 2, false, new lib.Symbol4(), 3);

	this.timeline.addTween(cjs.Tween.get(this.button).wait(1));

	// Layer 1
	this.instance = new lib.btn_home();
	this.instance.parent = this;
	this.instance.setTransform(-47,-47,0.95,0.95);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol17, new cjs.Rectangle(-51.5,-47,102.5,93.1), null);


(lib.Symbol14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.button = new lib.Symbol4();
	this.button.parent = this;
	this.button.setTransform(-0.2,-0.5,2.633,0.445,0,0,0,-0.1,0);
	new cjs.ButtonHelper(this.button, 0, 1, 2, false, new lib.Symbol4(), 3);

	this.timeline.addTween(cjs.Tween.get(this.button).wait(1));

	// Layer 1
	this.instance = new lib.btnplayagain3x();
	this.instance.parent = this;
	this.instance.setTransform(-136,-39,0.384,0.384);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol14, new cjs.Rectangle(-158,-42,316,83), null);


(lib.Symbol13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.button = new lib.Symbol4();
	this.button.parent = this;
	this.button.setTransform(-0.1,-0.5,1.638,1.383,0,0,0,-0.1,-0.3);
	new cjs.ButtonHelper(this.button, 0, 1, 2, false, new lib.Symbol4(), 3);

	this.timeline.addTween(cjs.Tween.get(this.button).wait(1));

	// Layer 1
	this.instance = new lib.q2_b4();
	this.instance.parent = this;
	this.instance.setTransform(-117,-129);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol13, new cjs.Rectangle(-117,-129,234,258), null);


(lib.Symbol12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.button = new lib.Symbol4();
	this.button.parent = this;
	this.button.setTransform(-0.1,-0.5,2.913,0.447,0,0,0,-0.1,-0.4);
	new cjs.ButtonHelper(this.button, 0, 1, 2, false, new lib.Symbol4(), 3);

	this.timeline.addTween(cjs.Tween.get(this.button).wait(1));

	// Layer 1
	this.instance = new lib.q2_b3();
	this.instance.parent = this;
	this.instance.setTransform(-175,-42);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol12, new cjs.Rectangle(-175,-42,350,84), null);


(lib.Symbol11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.button = new lib.Symbol4();
	this.button.parent = this;
	this.button.setTransform(-0.1,-0.6,1.982,1.038,0,0,0,-0.1,-0.4);
	new cjs.ButtonHelper(this.button, 0, 1, 2, false, new lib.Symbol4(), 3);

	this.timeline.addTween(cjs.Tween.get(this.button).wait(1));

	// Layer 1
	this.instance = new lib.q2_b2();
	this.instance.parent = this;
	this.instance.setTransform(-120,-97);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol11, new cjs.Rectangle(-120,-97,239,193.6), null);


(lib.Symbol10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.button = new lib.Symbol4();
	this.button.parent = this;
	this.button.setTransform(-0.1,-0.5,1.419,1.739,0,0,0,-0.1,-0.3);
	new cjs.ButtonHelper(this.button, 0, 1, 2, false, new lib.Symbol4(), 3);

	this.timeline.addTween(cjs.Tween.get(this.button).wait(1));

	// Layer 1
	this.instance = new lib.q2_b1();
	this.instance.parent = this;
	this.instance.setTransform(-85,-171);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol10, new cjs.Rectangle(-85.1,-171,170.3,341), null);


(lib.Symbol6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.button = new lib.Symbol4();
	this.button.parent = this;
	this.button.setTransform(-0.2,-0.5,2.633,0.445,0,0,0,-0.1,0);
	new cjs.ButtonHelper(this.button, 0, 1, 2, false, new lib.Symbol4(), 3);

	this.timeline.addTween(cjs.Tween.get(this.button).wait(1));

	// Layer 1
	this.instance = new lib.q1_b3();
	this.instance.parent = this;
	this.instance.setTransform(-158,-42);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-158,-42,316,83);


(lib.Symbol5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.button = new lib.Symbol4();
	this.button.parent = this;
	this.button.setTransform(-0.2,-0.5,2.633,0.445,0,0,0,-0.1,0);
	new cjs.ButtonHelper(this.button, 0, 1, 2, false, new lib.Symbol4(), 3);

	this.timeline.addTween(cjs.Tween.get(this.button).wait(1));

	// Layer 1
	this.instance = new lib.q1_b4();
	this.instance.parent = this;
	this.instance.setTransform(-158,-42);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-158,-42,316,83);


(lib.Symbol4_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.button = new lib.Symbol4();
	this.button.parent = this;
	this.button.setTransform(-0.2,-0.5,2.633,0.445,0,0,0,-0.1,0);
	new cjs.ButtonHelper(this.button, 0, 1, 2, false, new lib.Symbol4(), 3);

	this.timeline.addTween(cjs.Tween.get(this.button).wait(1));

	// Layer 1
	this.instance = new lib.q1_b2();
	this.instance.parent = this;
	this.instance.setTransform(-158,-42);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-158,-42,316,83);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.button = new lib.Symbol4();
	this.button.parent = this;
	this.button.setTransform(-0.2,-0.5,2.633,0.445,0,0,0,-0.1,0);
	new cjs.ButtonHelper(this.button, 0, 1, 2, false, new lib.Symbol4(), 3);

	this.timeline.addTween(cjs.Tween.get(this.button).wait(1));

	// Layer 1
	this.instance = new lib.q1_b1();
	this.instance.parent = this;
	this.instance.setTransform(-158,-42);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-158,-42,316,83);


(lib.oopstryagainanimation = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.tryagaintext();
	this.instance.parent = this;
	this.instance.setTransform(-46.4,84.2,0.1,0.1,0,0,0,-93.5,131);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(19).to({_off:false},0).to({regX:-93.2,regY:131.2,scaleX:1.1,scaleY:1.1,y:84.3},6).to({regX:-93.1,scaleX:0.9,scaleY:0.9},6).to({scaleX:1.05,scaleY:1.05},5).to({regX:-93.2,scaleX:1,scaleY:1,y:84.2},6).wait(35));

	// Layer_2
	this.instance_1 = new lib.faceXX();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-120.5,135.2,0.1,0.1,0,0,0,-0.5,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regX:0,scaleX:1.1,scaleY:1.1,x:-120.4},10).to({scaleX:1,scaleY:1,x:-120.5},9).wait(58));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-127.1,128.5,13.4,13.4);


(lib.Logoanimation = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_5
	this.instance = new lib._4qs_1();
	this.instance.parent = this;
	this.instance.setTransform(198.9,30.6,0.002,0.002,0,0,0,25,0);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(29).to({_off:false},0).to({regX:0.1,scaleX:1.1,scaleY:1.1,x:198.8},9).to({regY:0.1,scaleX:0.9,scaleY:0.9,x:198.9,y:30.7},10).to({regY:0,scaleX:1,scaleY:1,y:30.6},10).wait(22));

	// Layer_4
	this.instance_1 = new lib.know_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-136.4,-56.5,0.002,0.002);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(23).to({_off:false},0).to({scaleX:1.1,scaleY:1.1,y:-56.4},9).to({scaleX:0.9,scaleY:0.9},10).to({scaleX:1,scaleY:1,x:-136.5,y:-56.5},10).wait(28));

	// Layer_3
	this.instance_2 = new lib.the_1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-94.8,50.2,0.002,0.002,0,0,0,-25,0);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(18).to({_off:false},0).to({regX:0,scaleX:1.1,scaleY:1.1},9).to({scaleX:0.9,scaleY:0.9},10).to({scaleX:1,scaleY:1},10).wait(33));

	// Layer_2
	this.instance_3 = new lib.redelement();
	this.instance_3.parent = this;
	this.instance_3.setTransform(37.6,76.7,0.002,0.002,0,0,0,25,0);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(14).to({_off:false},0).to({regX:0,scaleX:1.1,scaleY:1.1},9).to({regX:0.1,regY:0.1,scaleX:0.9,scaleY:0.9},10).to({regX:0,regY:0,scaleX:1,scaleY:1},10).wait(37));

	// Layer_8
	this.instance_4 = new lib.orangeelement();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-25.1,-64.8,0.002,0.002,0,0,0,0,-25);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(10).to({_off:false},0).to({regX:0.1,regY:-0.1,scaleX:1.1,scaleY:1.1,x:-25.2},9).to({scaleX:0.9,scaleY:0.9,x:-25.1},10).to({scaleX:1,scaleY:1,x:-25.2},10).wait(41));

	// Layer_7
	this.instance_5 = new lib.bluebox();
	this.instance_5.parent = this;
	this.instance_5.setTransform(42.7,-7.3,0.002,0.002,0,0,0,25,0);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(5).to({_off:false},0).to({regX:0,regY:-0.1,scaleX:1.1,scaleY:1.1},9).to({regY:0,scaleX:0.9,scaleY:0.9,y:-7.2},10).to({scaleX:1,scaleY:1},10).wait(46));

	// Layer_1
	this.instance_6 = new lib.greenbox();
	this.instance_6.parent = this;
	this.instance_6.setTransform(54.5,0,0.002,0.002);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({scaleX:1.1,scaleY:1.1,x:54.4},9).to({scaleX:0.9,scaleY:0.9,x:54.5},10).to({scaleX:1,scaleY:1},10).wait(51));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(53.7,-0.4,1.6,0.9);


(lib.landing = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// title
	this.instance = new lib.titleanimation("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(6.2,143.4,1,1,0,0,0,0.3,0);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(24).to({_off:false},0).wait(36));

	// logo
	this.instance_1 = new lib.Logoanimation("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(-22.4,-240.6,0.833,0.833,0,0,0,0.2,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(60));

	// bg
	this.instance_2 = new lib.yellow_bg();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-450,-800);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(60));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-450,-800,900,1600);


(lib.execiseanimation = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_8
	this.instance = new lib.pose7_1();
	this.instance.parent = this;
	this.instance.setTransform(334.5,18.2);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(59).to({_off:false},0).to({x:358.5,alpha:1},19,cjs.Ease.get(1)).wait(18));

	// Layer_7
	this.instance_1 = new lib.pose6_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(178,-5.5);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(49).to({_off:false},0).to({x:202,alpha:1},19,cjs.Ease.get(1)).wait(28));

	// Layer_6
	this.instance_2 = new lib.pose5_1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(31,11.9);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(39).to({_off:false},0).to({x:55,alpha:1},19,cjs.Ease.get(1)).wait(38));

	// Layer_5
	this.instance_3 = new lib.pose4_1();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-85.9,2.9,1,1,0,0,0,-0.1,0.6);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(29).to({_off:false},0).to({x:-61.9,alpha:1},19,cjs.Ease.get(1)).wait(48));

	// Layer_4
	this.instance_4 = new lib.pose3_1();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-179.2,22.5);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(19).to({_off:false},0).to({x:-155.2,alpha:1},19,cjs.Ease.get(1)).wait(58));

	// Layer_3
	this.instance_5 = new lib.pose2_1();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-256.9,26.1);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(9).to({_off:false},0).to({x:-232.9,alpha:1},19,cjs.Ease.get(1)).wait(68));

	// Layer_1
	this.instance_6 = new lib.pose1_1();
	this.instance_6.parent = this;
	this.instance_6.setTransform(-400,8.6);
	this.instance_6.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({x:-376,alpha:1},19,cjs.Ease.get(1)).wait(77));

	// line
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#5C6265").p("EhGTAAAMCMnAAA");
	this.shape.setTransform(0,75.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(96));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-472,-59.4,923,136);


(lib.Symbol7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"hide":0,"show":7});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_83 = function() {
		this.parent.parent.resetDragEventListener();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(83).call(this.frame_83).wait(1));

	// Layer 2
	this.instance = new lib.oopstryagainanimation("synched",0,false);
	this.instance.parent = this;
	this.instance.setTransform(110.7,-58.9);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(7).to({_off:false},0).wait(77));

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(60,54,62,0.898)").s().p("EhGTB9AMAAAj5/MCMnAAAMAAAD5/g");
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(7).to({_off:false},0).wait(77));

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#3C363E").s().p("EhGTB9AMAAAj5/MCMnAAAMAAAD5/g");
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(7).to({_off:false},0).wait(77));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.main = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{opening:0,question1:60,question1_show_answer:71,question2:90,question2_show_answer:105,fail:127,win:193});

	// timeline functions:
	this.frame_39 = function() {
		this.parent.initStartHere();
	}
	this.frame_59 = function() {
		this.stop();
	}
	this.frame_61 = function() {
		this.stop();
		this.parent.initDragAndDrop();
	}
	this.frame_72 = function() {
		this.stop();
	}
	this.frame_91 = function() {
		this.stop();
		this.parent.current_question = 2;
		this.parent.initDragAndDrop();
	}
	this.frame_106 = function() {
		this.stop();
		this.show_answer_emoji.gotoAndPlay(1);
	}
	this.frame_173 = function() {
		this.parent.initPlayAgain();
	}
	this.frame_192 = function() {
		this.stop();
	}
	this.frame_247 = function() {
		this.parent.initPlayAgain2();
	}
	this.frame_341 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(39).call(this.frame_39).wait(20).call(this.frame_59).wait(2).call(this.frame_61).wait(11).call(this.frame_72).wait(19).call(this.frame_91).wait(15).call(this.frame_106).wait(67).call(this.frame_173).wait(19).call(this.frame_192).wait(55).call(this.frame_247).wait(94).call(this.frame_341).wait(1));

	// Layer 7
	this.mc_try_again = new lib.Symbol7();
	this.mc_try_again.parent = this;
	this.mc_try_again.setTransform(450,800);
	this.mc_try_again._off = true;

	this.timeline.addTween(cjs.Tween.get(this.mc_try_again).wait(60).to({_off:false},0).to({_off:true},45).wait(237));

	// Layer 4
	this.btn_home = new lib.Symbol17();
	this.btn_home.parent = this;
	this.btn_home.setTransform(847,424.5);

	this.timeline.addTween(cjs.Tween.get(this.btn_home).wait(342));

	// drag_drop
	this.q1b3 = new lib.Symbol6();
	this.q1b3.parent = this;
	this.q1b3.setTransform(265.9,654.6);

	this.q1b4 = new lib.Symbol5();
	this.q1b4.parent = this;
	this.q1b4.setTransform(634.1,654.6);

	this.q1b2 = new lib.Symbol4_1();
	this.q1b2.parent = this;
	this.q1b2.setTransform(634.1,518.1);

	this.q1b1 = new lib.Symbol3();
	this.q1b1.parent = this;
	this.q1b1.setTransform(265.9,518.1);

	this.q1_mc_drop1 = new lib.q6_mc_drop();
	this.q1_mc_drop1.parent = this;
	this.q1_mc_drop1.setTransform(640.8,1341,1.652,1.931,0,0,0,0,0.1);

	this.q1_mc_drop4 = new lib.q6_mc_drop();
	this.q1_mc_drop4.parent = this;
	this.q1_mc_drop4.setTransform(262.8,1341,1.652,1.931,0,0,0,0,0.1);

	this.q1_mc_drop3 = new lib.q6_mc_drop();
	this.q1_mc_drop3.parent = this;
	this.q1_mc_drop3.setTransform(640.8,967.5,1.652,1.931,0,0,0,0,0.1);

	this.q1_mc_drop2 = new lib.q6_mc_drop();
	this.q1_mc_drop2.parent = this;
	this.q1_mc_drop2.setTransform(262.8,967.5,1.652,1.931,0,0,0,0,0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.q1_mc_drop2},{t:this.q1_mc_drop3},{t:this.q1_mc_drop4},{t:this.q1_mc_drop1},{t:this.q1b1},{t:this.q1b2},{t:this.q1b4},{t:this.q1b3}]},60).to({state:[]},11).wait(271));

	// answer
	this.btn_start = new lib.Symbol33();
	this.btn_start.parent = this;
	this.btn_start.setTransform(449.9,1170.1);

	this.q1_answer1 = new lib.Symbol3copy();
	this.q1_answer1.parent = this;
	this.q1_answer1.setTransform(640.7,1344.1);

	this.q1_answer4 = new lib.Symbol5copy();
	this.q1_answer4.parent = this;
	this.q1_answer4.setTransform(259.6,1344.1);

	this.q1_answer3 = new lib.Symbol6copy();
	this.q1_answer3.parent = this;
	this.q1_answer3.setTransform(640.7,969.8);

	this.q1_answer2 = new lib.Symbol4copy();
	this.q1_answer2.parent = this;
	this.q1_answer2.setTransform(259.6,969.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.btn_start}]},38).to({state:[{t:this.q1_answer2},{t:this.q1_answer3},{t:this.q1_answer4},{t:this.q1_answer1}]},22).to({state:[]},11).wait(271));

	// Layer 9
	this.q2b4 = new lib.Symbol13();
	this.q2b4.parent = this;
	this.q2b4.setTransform(727.8,626.8);

	this.q2b3 = new lib.Symbol12();
	this.q2b3.parent = this;
	this.q2b3.setTransform(446.1,715.5);

	this.q2b2 = new lib.Symbol11();
	this.q2b2.parent = this;
	this.q2b2.setTransform(453.6,535.5);

	this.q2b1 = new lib.Symbol10();
	this.q2b1.parent = this;
	this.q2b1.setTransform(166,598.5);

	this.q2_mc_drop2 = new lib.q6_mc_drop();
	this.q2_mc_drop2.parent = this;
	this.q2_mc_drop2.setTransform(640.8,1341,1.652,1.931,0,0,0,0,0.1);

	this.q2_mc_drop3 = new lib.q6_mc_drop();
	this.q2_mc_drop3.parent = this;
	this.q2_mc_drop3.setTransform(262.8,1341,1.652,1.931,0,0,0,0,0.1);

	this.q2_mc_drop1 = new lib.q6_mc_drop();
	this.q2_mc_drop1.parent = this;
	this.q2_mc_drop1.setTransform(640.8,964.2,1.652,1.931,0,0,0,0,0.1);

	this.q2_mc_drop4 = new lib.q6_mc_drop();
	this.q2_mc_drop4.parent = this;
	this.q2_mc_drop4.setTransform(262.8,964.2,1.652,1.931,0,0,0,0,0.1);

	this.btn_play_again2 = new lib.Symbol14();
	this.btn_play_again2.parent = this;
	this.btn_play_again2.setTransform(450,1040.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.q2_mc_drop4},{t:this.q2_mc_drop1},{t:this.q2_mc_drop3},{t:this.q2_mc_drop2},{t:this.q2b1},{t:this.q2b2},{t:this.q2b3},{t:this.q2b4}]},90).to({state:[]},15).to({state:[{t:this.btn_play_again2}]},142).wait(95));

	// Layer 8
	this.q2_answer2 = new lib.Symbol11copy();
	this.q2_answer2.parent = this;
	this.q2_answer2.setTransform(651.1,1299.5);

	this.q2_answer3 = new lib.Symbol12copy();
	this.q2_answer3.parent = this;
	this.q2_answer3.setTransform(258.1,1299.5);

	this.q2_answer1 = new lib.Symbol10copy();
	this.q2_answer1.parent = this;
	this.q2_answer1.setTransform(644.5,915.8);

	this.q2_answer4 = new lib.Symbol13copy();
	this.q2_answer4.parent = this;
	this.q2_answer4.setTransform(252.1,915.8);

	this.show_answer_emoji = new lib.facehappyanimationcopy();
	this.show_answer_emoji.parent = this;
	this.show_answer_emoji.setTransform(445.2,425.3);

	this.btn_play_again = new lib.Symbol14();
	this.btn_play_again.parent = this;
	this.btn_play_again.setTransform(462.1,987.7);

	this.instance = new lib.textsuccessfulanimation("synched",0,false);
	this.instance.parent = this;
	this.instance.setTransform(451.1,458.5);

	this.instance_1 = new lib.giftanimation("synched",0,false);
	this.instance_1.parent = this;
	this.instance_1.setTransform(450.5,1337.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.q2_answer4},{t:this.q2_answer1},{t:this.q2_answer3},{t:this.q2_answer2}]},90).to({state:[{t:this.show_answer_emoji}]},15).to({state:[]},22).to({state:[{t:this.btn_play_again}]},46).to({state:[{t:this.instance_1},{t:this.instance}]},20).wait(149));

	// Layer 1
	this.instance_2 = new lib.landing("synched",0,false);
	this.instance_2.parent = this;
	this.instance_2.setTransform(899.9,1600,1,1,0,0,0,450,800);

	this.instance_3 = new lib.question1_1pngcopy();
	this.instance_3.parent = this;
	this.instance_3.setTransform(71,781);

	this.instance_4 = new lib.Symbol2("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(451.1,315.9);

	this.instance_5 = new lib.Symbol1("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(434.7,152.6);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3C363E").s().p("EhGTB9AMAAAj5/MCMnAAAMAAAD5/g");
	this.shape.setTransform(450,800);

	this.instance_6 = new lib.question1_showanswer();
	this.instance_6.parent = this;
	this.instance_6.setTransform(71,781);

	this.instance_7 = new lib.Symbol8();
	this.instance_7.parent = this;
	this.instance_7.setTransform(455.1,620.8);

	this.show_answer_emoji_1 = new lib.facehappyanimation();
	this.show_answer_emoji_1.parent = this;
	this.show_answer_emoji_1.setTransform(445.2,513.7);

	this.instance_8 = new lib.Symbol9();
	this.instance_8.parent = this;
	this.instance_8.setTransform(451.1,312.9);

	this.instance_9 = new lib.question2();
	this.instance_9.parent = this;
	this.instance_9.setTransform(71,781);

	this.instance_10 = new lib.question2_showanswer();
	this.instance_10.parent = this;
	this.instance_10.setTransform(43,591);

	this.instance_11 = new lib.execiseanimation("synched",0);
	this.instance_11.parent = this;
	this.instance_11.setTransform(450,1234.3,1,1,0,0,0,0,0.1);

	this.instance_12 = new lib._4qsheader_large();
	this.instance_12.parent = this;
	this.instance_12.setTransform(67,27);

	this.instance_13 = new lib.textyouhavelearnedanimation("synched",0,false);
	this.instance_13.parent = this;
	this.instance_13.setTransform(450,754.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("EhGTB9AMAAAj5/MCMnAAAMAAAD5/g");
	this.shape_1.setTransform(450,800);

	this.instance_14 = new lib.Symbol15("synched",0);
	this.instance_14.parent = this;
	this.instance_14.setTransform(146.3,742.7,1,1,0,0,0,-303.7,-57.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2}]}).to({state:[{t:this.shape},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3}]},60).to({state:[{t:this.shape},{t:this.instance_5},{t:this.show_answer_emoji_1},{t:this.instance_7,p:{y:620.8}},{t:this.instance_6}]},11).to({state:[{t:this.shape},{t:this.instance_5},{t:this.instance_9},{t:this.instance_8}]},19).to({state:[{t:this.shape},{t:this.instance_10},{t:this.instance_7,p:{y:532.4}},{t:this.instance_5}]},15).to({state:[{t:this.shape_1},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11}]},22).to({state:[{t:this.instance_14}]},66).wait(149));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.1,0,900,1600);


// stage content:
(lib.index = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_1 = function() {
		this.stop();
		createjs.Touch.enable(stage, true, true);
		var _this = this;
		this.first_init = true;
		this.current_question;
		this.current_scene;
		this.current_playing_audio = "";
		this.main_content.gotoAndPlay("opening");
		this.current_scene = "opening";
		this.main_content.btn_home.button.addEventListener("click", requestPlayAgain);
		this.first_init = true;
		
		this.initStartHere = function () {
			this.main_content.btn_start.button.addEventListener("click", requestStartGame);
		}
		
		function requestStartGame(evt) {
			_this.main_content.btn_start.button.removeEventListener("click", requestStartGame);
			_this.current_question = 1;
			_this.main_content.gotoAndPlay("question1");
			_this.current_scene = "question1";
			
			if (_this.first_init == true) {
				_this.initAudio();
				_this.first_init = false;
			}
		}
		
		this.initPlayAgain = function () {
			this.main_content.btn_play_again.button.addEventListener("click", requestPlayAgain);
		}
		
		this.initPlayAgain2 = function () {
			this.main_content.btn_play_again2.button.addEventListener("click", requestPlayAgain);
		}
		
		function requestPlayAgain() {
			clearTimeout(_this.myTimeout);
			
			if (_this.current_scene == "fail") {
				_this.main_content.btn_play_again.button.removeEventListener("click", requestPlayAgain);
			} else if (_this.current_scene == "win") {
				_this.main_content.btn_play_again2.button.removeEventListener("click", requestPlayAgain);
			}
			
			_this.main_content.gotoAndPlay("opening");
			_this.current_scene = "opening";
			
			
			if (_this.first_init == true) {
				_this.initAudio();
				_this.first_init = false;
			}
			
			_this.playAudio("audio_opening");
		}
		
		
		this.initAudio = function () {
			this.audio_opening = new Audio("Audio/opening.mp3");
			this.audio_opening.play();
			this.audio_opening.pause();	
			
			this.audio_correct = new Audio("Audio/correct.mp3");
			this.audio_correct.play();
			this.audio_correct.pause();	
			
			this.audio_try_again = new Audio("Audio/try_again.mp3");
			this.audio_try_again.play();
			this.audio_try_again.pause();	
			
			this.audio_wrong = new Audio("Audio/wrong.mp3");
			this.audio_wrong.play();
			this.audio_wrong.pause();	
			
			this.audio_win = new Audio("Audio/win.mp3");
			this.audio_win.play();
			this.audio_win.pause();	
			
			this.audio_game_over = new Audio("Audio/game_over.mp3");
			this.audio_game_over.play();
			this.audio_game_over.pause();	
		}
		
		this.playAudio = function (pSound) {
			this.current_playing_audio = this[pSound];
		
			if (this.current_playing_audio.currentTime != 0) {
				this.current_playing_audio.currentTime = 0;
			}
			this.current_playing_audio.play();
		}
		
		/*=========== drag and drop =============*/
		this.start_drag = false;
		this.landingX = "";
		this.landingY = "";
		this.total_drag_component = 4;
		this.total_drop_component = 4;
		this.chance_remain = 2;
		this.total_correct;
		this.question1_result;
		this.myTimeout;
		this.next_action;
		this.total_dropped;
		
		this.initDragAndDrop = function () {
			_this.total_correct = 0;
			_this.total_dropped = 0;
			_this.chance_remain = 2;
			_this.main_content.mc_try_again.gotoAndStop("hide");
			
			for (i = 1; i <= _this.total_drag_component; i++) {
				var obj = "q" + this.current_question + "b" + i;
				this.main_content[obj].name = obj;
				this.main_content[obj].oriChildIndex = this.main_content.getChildIndex(this.main_content[obj]);
				this.main_content[obj].oriX = this.main_content[obj].x;
				this.main_content[obj].oriY = this.main_content[obj].y;
				this.main_content[obj].visible = true;
				
				if (_this.current_question == 1) {
					this.main_content[obj].scaleSize = 1.5;
				} else {
					this.main_content[obj].scaleSize = 1.2;
				}
		
				this.main_content[obj].descreseScaleSize = 1;
				this.main_content[obj].allowDrag = true;
				this.main_content[obj].button.addEventListener("pressmove", handleDrag);
				this.main_content[obj].button.addEventListener("pressup", handleDrop);
			}
		
			for (i = 1; i <= _this.total_drop_component; i++) {
				this.main_content["q" + this.current_question + "_answer" + i].gotoAndStop("hide");
				this.main_content["q" + this.current_question + "_mc_drop" + i].name = "q" + this.current_question + "_mc_drop" + i;
			}
		}
		
		
		
		function handleDrag(evt) {
			if (evt.currentTarget.parent.allowDrag == true) {
				var p = stage.globalToLocal(evt.stageX, evt.stageY);
		
				if (_this.landingX == "" || _this.landingY == "") {
					_this.landingX = Math.floor(p.x);
					_this.landingY = Math.floor(p.y);
				}
		
				if (_this.landingX != Math.floor(p.x) || _this.landingY != Math.floor(p.y)) {
					_this.start_drag = true;
					evt.currentTarget.parent.scaleX = evt.currentTarget.parent.scaleSize;
					evt.currentTarget.parent.scaleY = evt.currentTarget.parent.scaleSize;
					evt.currentTarget.parent.x = p.x;
					evt.currentTarget.parent.y = p.y;
					_this.main_content.setChildIndex(evt.currentTarget.parent, _this.main_content.getNumChildren() - 1);
				}
			}
		}
		
		
		function handleDrop(evt) {
			var drop_success = false;
			_this.landingX = "";
			_this.landingY = "";
		
			if (_this.start_drag == true) {
				_this.start_drag = false;
				
				for (i = 1; i <= _this.total_drop_component; i++) {
					var border = _this.main_content["q" + _this.current_question + "_mc_drop" + i];
					var pt = evt.currentTarget.parent.localToLocal(0, 0, border);
					
					if (border.hitTest(pt.x, pt.y)) {
						drop_success = true;
						_this.total_dropped++;
						
						if (i == evt.currentTarget.parent.name.charAt(3)) {
							_this.total_correct++;
							_this.playAudio("audio_correct");
							_this.main_content[evt.currentTarget.parent.name].button.removeEventListener("pressmove", handleDrag);
							_this.main_content[evt.currentTarget.parent.name].button.removeEventListener("pressup", handleDrop);
							
							evt.currentTarget.parent.visible = false;
							evt.currentTarget.parent.x = evt.currentTarget.parent.oriX;
							evt.currentTarget.parent.y = evt.currentTarget.parent.oriY;
							_this.main_content.setChildIndex(evt.currentTarget.parent, evt.currentTarget.parent.oriChildIndex);
							evt.currentTarget.parent.scaleX = 1;
							evt.currentTarget.parent.scaleY = 1;
							_this.main_content["q" + _this.current_question + "_answer" + i].gotoAndStop("show");
							
							if (_this.total_dropped == 4) {
								if (_this.total_correct >= 3) {
									if (_this.current_question == 1) {
										_this.question1_result = "win";
										_this.next_action = "show question 2";
										_this.myTimeout = setTimeout(nextAction, 1500);
									} else {
										if (_this.question1_result == "win") {
											_this.next_action = "show win";
											_this.myTimeout = setTimeout(nextAction, 2000);
										} else {
											_this.next_action = "show fail";
											_this.myTimeout = setTimeout(nextAction, 1500);
										}
									}
								} else {
									if (_this.current_question == 1) {
										_this.question1_result = "lose";
										_this.next_action = "show question 2";
										_this.myTimeout = setTimeout(nextAction, 1500);
									} else {
										_this.next_action = "show fail";
										_this.myTimeout = setTimeout(nextAction, 1500);
									}
								}
							}
						} else {
							_this.chance_remain--;
							
							if (_this.chance_remain > 0) {
								evt.currentTarget.parent.visible = false;
								evt.currentTarget.parent.x = evt.currentTarget.parent.oriX;
								evt.currentTarget.parent.y = evt.currentTarget.parent.oriY;
								_this.main_content.setChildIndex(evt.currentTarget.parent, evt.currentTarget.parent.oriChildIndex);
								evt.currentTarget.parent.scaleX = 1;
								evt.currentTarget.parent.scaleY = 1;
								_this.main_content["q" + _this.current_question + "_answer" + evt.currentTarget.parent.name.charAt(3)].gotoAndStop("show");
							} else {
								evt.currentTarget.parent.x = evt.currentTarget.parent.oriX;
								evt.currentTarget.parent.y = evt.currentTarget.parent.oriY;
								_this.main_content.setChildIndex(evt.currentTarget.parent, evt.currentTarget.parent.oriChildIndex);
								evt.currentTarget.parent.scaleX = 1;
								evt.currentTarget.parent.scaleY = 1;	
							}
							
							for (i = 1; i <= _this.total_drag_component; i++) {
								_this.main_content["q" + _this.current_question + "b" + i].allowDrag = false;
								_this.main_content["q" + _this.current_question + "b" + i].button.removeEventListener("pressmove", handleDrag);
								_this.main_content["q" + _this.current_question + "b" + i].button.removeEventListener("pressup", handleDrop);
							}
							
		
							if (_this.chance_remain > 0) {
								_this.main_content.mc_try_again.gotoAndPlay("show");
								_this.playAudio("audio_try_again");
							} else {
								_this.playAudio("audio_try_again");
								
								if (_this.current_question == 1) {
									_this.question1_result = "lose";
									_this.next_action = "question1 show answer";
									_this.myTimeout = setTimeout(nextAction, 1500);
								} else {
									for (i = 1; i <= _this.total_drag_component; i++) {
										_this.main_content["q" + _this.current_question + "b" + i].allowDrag = false;
										_this.main_content["q" + _this.current_question + "b" + i].button.removeEventListener("pressmove", handleDrag);
										_this.main_content["q" + _this.current_question + "b" + i].button.removeEventListener("pressup", handleDrop);
									}							
									
									_this.next_action = "question2 show answer";
									_this.myTimeout = setTimeout(nextAction, 1500);
								}
							}
						}
					}
				}
				
				if (drop_success == false) {
					evt.currentTarget.parent.x = evt.currentTarget.parent.oriX;
					evt.currentTarget.parent.y = evt.currentTarget.parent.oriY;
					_this.main_content.setChildIndex(evt.currentTarget.parent, evt.currentTarget.parent.oriChildIndex);
					evt.currentTarget.parent.scaleX = 1;
					evt.currentTarget.parent.scaleY = 1;
				}
			}
		}
		
		function nextAction() {
			clearTimeout(_this.myTimeout);
		
			if (_this.next_action == "show question 2") {
				_this.current_question = 2;
				_this.main_content.gotoAndPlay("question2");
				_this.current_scene = "question2";
			}
			
			if (_this.next_action == "show win") {
				_this.main_content.gotoAndPlay("win");
				_this.current_scene = "win";
				_this.playAudio("audio_win");
			}
			
			if (_this.next_action == "show fail") {
				_this.showFail();
			}
			
			if (_this.next_action == "question1 show answer") {
				_this.main_content.gotoAndPlay("question1_show_answer");
				_this.current_scene = "question1_show_answer";
				_this.playAudio("audio_wrong");
			}
			
			if (_this.next_action == "question2 show answer") {
				_this.main_content.gotoAndPlay("question2_show_answer");
				_this.current_scene = "question2_show_answer";
				_this.playAudio("audio_wrong");
			}
		}
		
		
		
		this.showFail = function () {
			_this.main_content.gotoAndPlay("fail");
			_this.current_scene = "fail";
			_this.playAudio("audio_game_over");
		}
		
		
		this.resetDragEventListener = function() {
			for (i = 1; i <= _this.total_drag_component; i++) {
				_this.main_content["q" + _this.current_question + "b" + i].allowDrag = true;
				_this.main_content["q" + _this.current_question + "b" + i].button.addEventListener("pressmove", handleDrag);
				_this.main_content["q" + _this.current_question + "b" + i].button.addEventListener("pressup", handleDrop);
			}
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(1).call(this.frame_1).wait(5));

	// Layer 2
	this.main_content = new lib.main();
	this.main_content.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.main_content).wait(6));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(449.9,800,900,1600);
// library properties:
lib.properties = {
	id: '4BE6BE9F72F16949BD70B3137D5E1310',
	width: 900,
	height: 1600,
	fps: 60,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/_4qsheader.png", id:"_4qsheader"},
		{src:"images/_4qsheader_large.png", id:"_4qsheader_large"},
		{src:"images/_4qs.png", id:"_4qs"},
		{src:"images/blue_box.png", id:"blue_box"},
		{src:"images/btnplayagain3x.png", id:"btnplayagain3x"},
		{src:"images/btnstarthere3x.png", id:"btnstarthere3x"},
		{src:"images/btn_home.png", id:"btn_home"},
		{src:"images/congratulation_qr.png", id:"congratulation_qr"},
		{src:"images/congratulation_text1.png", id:"congratulation_text1"},
		{src:"images/congratulation_text2.png", id:"congratulation_text2"},
		{src:"images/congratulation_text3.png", id:"congratulation_text3"},
		{src:"images/congratulation_text4.png", id:"congratulation_text4"},
		{src:"images/congratulation_text5.png", id:"congratulation_text5"},
		{src:"images/drag_drop_instruction.png", id:"drag_drop_instruction"},
		{src:"images/fail_msg1.png", id:"fail_msg1"},
		{src:"images/fail_msg2.png", id:"fail_msg2"},
		{src:"images/fail_msg3.png", id:"fail_msg3"},
		{src:"images/gift.png", id:"gift"},
		{src:"images/gift2.png", id:"gift2"},
		{src:"images/gift_bgpngcopy.png", id:"gift_bgpngcopy"},
		{src:"images/green_box.png", id:"green_box"},
		{src:"images/know.png", id:"know"},
		{src:"images/landing_text.png", id:"landing_text"},
		{src:"images/LLT.png", id:"LLT"},
		{src:"images/LMT.png", id:"LMT"},
		{src:"images/orange_element.png", id:"orange_element"},
		{src:"images/pose1.png", id:"pose1"},
		{src:"images/pose2.png", id:"pose2"},
		{src:"images/pose3.png", id:"pose3"},
		{src:"images/pose4.png", id:"pose4"},
		{src:"images/pose5.png", id:"pose5"},
		{src:"images/pose6.png", id:"pose6"},
		{src:"images/pose7.png", id:"pose7"},
		{src:"images/q1_answer1.png", id:"q1_answer1"},
		{src:"images/q1_answer2.png", id:"q1_answer2"},
		{src:"images/q1_answer3.png", id:"q1_answer3"},
		{src:"images/q1_answer4.png", id:"q1_answer4"},
		{src:"images/q1_answer_emoji.png", id:"q1_answer_emoji"},
		{src:"images/q1_answer_emoji2.png", id:"q1_answer_emoji2"},
		{src:"images/q1_b1.png", id:"q1_b1"},
		{src:"images/q1_b2.png", id:"q1_b2"},
		{src:"images/q1_b3.png", id:"q1_b3"},
		{src:"images/q1_b4.png", id:"q1_b4"},
		{src:"images/q2_b1.png", id:"q2_b1"},
		{src:"images/q2_b2.png", id:"q2_b2"},
		{src:"images/q2_b3.png", id:"q2_b3"},
		{src:"images/q2_b4.png", id:"q2_b4"},
		{src:"images/q2_instruction.png", id:"q2_instruction"},
		{src:"images/question1_1pngcopy.png", id:"question1_1pngcopy"},
		{src:"images/question1_showanswer.png", id:"question1_showanswer"},
		{src:"images/question2.png", id:"question2"},
		{src:"images/question2_showanswer.png", id:"question2_showanswer"},
		{src:"images/red_element.png", id:"red_element"},
		{src:"images/show_answer_text.png", id:"show_answer_text"},
		{src:"images/the.png", id:"the"},
		{src:"images/ULT.png", id:"ULT"},
		{src:"images/UMT.png", id:"UMT"},
		{src:"images/yellow_bg.png", id:"yellow_bg"}
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
an.compositions['4BE6BE9F72F16949BD70B3137D5E1310'] = {
	getStage: function() { return exportRoot.getStage(); },
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



})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;