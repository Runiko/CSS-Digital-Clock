var Digit = function(el, max, time){
	this.onesEl = document.getElementById(el + '-ones');
	this.tensEl = document.getElementById(el + '-tens');
	this.max    = max - 1;
	this.time   = time; // Double digit time (not split)
}

Digit.prototype = {
	padSingleDigit: function (time) {
		return time.length == 1 ? '0' + time : time;
	},

	splitTime: function () {
		return this.padSingleDigit(this.time.toString()).split('');
	},

	render: function(time) {
		this.time = time;
		this.onesEl.className = 'time-' + this.splitTime()[1];
		this.tensEl.className = 'time-' + this.splitTime()[0];
	}
}

function hexTimeBackground() {
	var hex = '#' + hours.splitTime().join('') + minutes.splitTime().join('') + seconds.splitTime().join('');
	body.style.background = hex;
}

function init() {
	var date = new Date();
	body.style.background = hexTimeBackground();
	seconds.render(date.getSeconds());
	minutes.render(date.getMinutes());
	hours.render(date.getHours() - 12);
	setTimeout(init, 1000);
}

var date    = new Date();
var seconds = new Digit('seconds', 60, date.getSeconds());
var minutes = new Digit('minutes', 60, date.getMinutes());
var hours   = new Digit('hours',   12, date.getHours() - 12);
var body    = document.getElementById('body');

init();
