
/** Returns a random number between min and max */
function getRandom (min, max) {
    return Math.random() * (max - min) + min;
}

/** Returns a random integer between min and max
 * Using Math.round() will give you a non-uniform distribution! */
function getRandomInt (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}



var gridX = [0, 50, 100, 150, 200, 250, 300, 350, 400, 450, 500, 550, 600, 650, 700, 750, 800];
var gridY = [0, 50, 100, 150, 200, 250];
var interval = 1500;

function init() {
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
		TweenLite.fromTo(lyr, 1, {clip:"rect("+gridY[y11]+"px,"+gridX[x21]+"px,"+gridY[y21]+"px,"+gridX[x11]+"px)"}, {clip:"rect("+gridY[y12]+"px,"+gridX[x22]+"px,"+gridY[y22]+"px,"+gridX[x12]+"px)", ease:Power4.easeInOut, delay:i*(interval/1000/$('.dancing-layer').length)});
	}
	setInterval(danceStep, interval);
}

function danceStep() {
	for (var i=0; i< $('.dancing-layer').length; i++) {
		var lyr = $('.dancing-layer').get(i);
		var x1 = getRandomInt(0, gridX.length-2);
		var x2 = getRandomInt(x1+1, gridX.length-1);
		var y1 = getRandomInt(0, gridY.length-2);
		var y2 = getRandomInt(y1+1, gridY.length-1);
		TweenLite.to(lyr, 1, {clip:"rect("+gridY[y1]+"px,"+gridX[x2]+"px,"+gridY[y2]+"px,"+gridX[x1]+"px)", ease:Power4.easeInOut, delay:i*(interval/1000/$('.dancing-layer').length)});
	}
}
$(init)

