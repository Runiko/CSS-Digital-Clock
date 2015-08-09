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

	changeTime: function() {
		if (this.time >= this.max) {
			this.time = 0;
		} else {
			this.time++;
		}
		this.render();
		return this.time;
	},

	render: function() {
		this.onesEl.className = 'time-' + this.splitTime()[1];
		this.tensEl.className = 'time-' + this.splitTime()[0];
	}
}

function changeBackground() {
	var hex = '#' + hours.splitTime().join('') + minutes.splitTime().join('') + seconds.splitTime().join('');
	body.style.background = hex;
}

function checkTimes() {
	changeBackground();
	if (seconds.changeTime() == 0) {
		if (minutes.changeTime() == 0) {
			hours.changeTime();
		}
	}
	setTimeout(checkTimes, 1000);
}

function init() {
	seconds.render();
	minutes.render();
	hours.render();
	checkTimes();
}

var date    = new Date();
var seconds = new Digit('seconds', 60, date.getSeconds());
var minutes = new Digit('minutes', 60, date.getMinutes());
var hours   = new Digit('hours',   12, date.getHours() - 12);
var body    = document.getElementById('body');

init();