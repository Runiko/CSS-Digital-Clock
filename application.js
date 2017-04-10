let militaryTime = true;

let Digit = function(el){
	this.onesEl = document.getElementById(el + '-ones');
	this.tensEl = document.getElementById(el + '-tens');
}

Digit.prototype = {
	zeroPad () {
		return ('0' + this.time.toString()).slice(-2);
	},

	render (time) {
		this.time = time;
		this.onesEl.className = 'time-' + this.zeroPad()[1];
		this.tensEl.className = 'time-' + this.zeroPad()[0];
	}
}

function hexTimeBackground() {
	return '#' + hours.zeroPad() + minutes.zeroPad() + seconds.zeroPad();
}

function checkHour(date) {
	let currentHour = date.getHours()
	return militaryTime && (currentHour > 12) ? (currentHour - 12) : currentHour;
}

function init() {
	let date = new Date();
	seconds.render(date.getSeconds());
	minutes.render(date.getMinutes());
	hours.render(checkHour(date));
	body.style.background = hexTimeBackground();
	setTimeout(init, 1000);
}

let seconds = new Digit('seconds');
let minutes = new Digit('minutes');
let hours   = new Digit('hours');
let body    = document.getElementById('body');

init();
