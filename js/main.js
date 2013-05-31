
/** Returns a random number between min and max */
function getRandom (min, max) {
    return Math.random() * (max - min) + min;
}

/** Returns a random integer between min and max
 * Using Math.round() will give you a non-uniform distribution! */
function getRandomInt (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}



var gridX = [0, 100, 300, 400, 650, 800];
var gridY = [0, 50, 100, 125, 175, 200, 250];
var interval = 1;
var zCnt = 100;

function init() {
	$('body').css('font-size', '150px');
	$('.layer').text('This is the title of not too many words, no matter!');
	drawGrid();
	fontSize();
	for (var i=0; i< $('.dancing-layer').length; i++) {
		var lyr = $('.dancing-layer').get(i);
		var x11 = getRandomInt(0, gridX.length-2);
		var x21 = getRandomInt(x11+1, gridX.length-1);
		var y11 = getRandomInt(0, gridY.length-2);
		var y21 = getRandomInt(y11+1, gridY.length-1);
		var x12 = getRandomInt(0, gridX.length-2);
		var x22 = getRandomInt(x12+1, gridX.length-1);
		var y12 = getRandomInt(0, gridY.length-2);
		var y22 = getRandomInt(y12+1, gridY.length-1);
		TweenLite.fromTo(lyr, interval/2, {
			clip:"rect("+gridY[y11]+"px,"+gridX[x21]+"px,"+gridY[y21]+"px,"+gridX[x11]+"px)"
		}, {
			clip:"rect("+gridY[y12]+"px,"+gridX[x22]+"px,"+gridY[y22]+"px,"+gridX[x12]+"px)",
			ease:Power4.easeInOut,
			delay:i*interval
		});
	}
	setInterval(danceStep, interval * 1000 * $('.dancing-layer').length);
}

function danceStep() {
	for (var i=0; i< $('.dancing-layer').length; i++) {
		var lyr = $('.dancing-layer').get(i);
		var x1 = getRandomInt(0, gridX.length-2);
		var x2 = getRandomInt(x1+1, gridX.length-1);
		var y1 = getRandomInt(0, gridY.length-2);
		var y2 = getRandomInt(y1+1, gridY.length-1);
		TweenLite.to(lyr, interval/2, {
			clip:"rect("+gridY[y1]+"px,"+gridX[x2]+"px,"+gridY[y2]+"px,"+gridX[x1]+"px)",
			ease:Power4.easeInOut,
			delay:i*interval,
			onStart:function() {
				$(this.target).css('z-index', zCnt++);
			}
		});
	}
}

function fontSize() {
	while ($('.bg-layer').height() > 245) {
		$('body').css('font-size', parseInt($('body').css('font-size')) - 1 + 'px');
	}
}

function drawGrid() {
	for (var i=0; i<gridX.length ; i++) {
		var line = $("<div class='line line-v'></div>").appendTo($('.bg-layer')).css('left', gridX[i]);
	}
	for (var i=0; i<gridY.length ; i++) {
		var line = $("<div class='line line-h'></div>").appendTo($('.bg-layer')).css('top', gridY[i]);
	}
	
}

$(init)

