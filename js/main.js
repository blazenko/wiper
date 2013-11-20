
/** Returns a random number between min and max */
function getRandom (min, max) {
    return Math.random() * (max - min) + min;
}

/** Returns a random integer between min and max
 * Using Math.round() will give you a non-uniform distribution! */
function getRandomInt (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}



var gridX = [
	0,
	100 + ((Math.round(Math.random()*4) - 2) * 25),
	200 + ((Math.round(Math.random()*4) - 2) * 25),
	300 + ((Math.round(Math.random()*4) - 2) * 25),
	400 + ((Math.round(Math.random()*4) - 2) * 25),
	500 + ((Math.round(Math.random()*4) - 2) * 25),
	600 + ((Math.round(Math.random()*4) - 2) * 25),
	700 + ((Math.round(Math.random()*4) - 2) * 25),
	800
];

var gridY = [
	0,
	50 + ((Math.round(Math.random()*2) - 1) * 25),
	100 + ((Math.round(Math.random()*2) - 1) * 25),
	150 + ((Math.round(Math.random()*2) - 1) * 25),
	200 + ((Math.round(Math.random()*2) - 1) * 25),
	250
];

var interval = 1;
var zCnt = 100;

function init() {
	$('.wiper').css('font-size', '250px');
	$('.layer span').text('Bozo Matic: Laž je laž, ma koliko mi šutjeli o tome!');
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
			ease:Power0.easeInOut,
			delay:i*interval,
			onStart:function() {
				$(this.target).css('z-index', zCnt++);
			}
		});
	}
}

function fontSize() {
	var size;
	while ($('.bg-layer span').height() > 250) {
		size = parseInt($('.wiper').css('font-size')) - 1;
		$('.wiper').css('font-size', size + 'px');
	}
	$('.layer2 span').css('left', size / 350 + 'em' );
	
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

