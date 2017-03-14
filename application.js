var Digit = function(el){
	this.onesEl = document.getElementById(el + '-ones');
	this.tensEl = document.getElementById(el + '-tens');
}

Digit.prototype = {

	zeroPad: function () {
		return ('0' + this.time.toString()).slice(-2);
	},

	render: function(time) {
		this.time = time;
		this.onesEl.className = 'time-' + this.zeroPad()[1];
		this.tensEl.className = 'time-' + this.zeroPad()[0];
	}
}

function hexTimeBackground() {
	return '#' + hours.zeroPad() + minutes.zeroPad() + seconds.zeroPad();
}

function init() {
	var date = new Date();
	seconds.render(date.getSeconds());
	minutes.render(date.getMinutes());
	hours.render(date.getHours() - 12);
	body.style.background = hexTimeBackground();
	setTimeout(init, 1000);
}

var seconds = new Digit('seconds');
var minutes = new Digit('minutes');
var hours   = new Digit('hours');
var body    = document.getElementById('body');

init();
