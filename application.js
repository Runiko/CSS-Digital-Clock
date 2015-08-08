var Digit = function(el, max, time){
	this.onesEl = document.getElementById(el + '-ones');
	this.tensEl = document.getElementById(el + '-tens');
	this.max    = max;
	this.time   = time; // Double digit time (not split)
	this.ones   = this.splitTime()[1];
	this.tens   = this.splitTime()[0];
}

Digit.prototype = {
	singleDigit: function (time) {
		return time.length == 1 ? '0' + time : time;
	},

	splitTime: function () {
		return this.singleDigit(this.time.toString()).split('');
	}
}

var date = new Date();

var seconds = new Digit('seconds', 60, date.getSeconds());
var minutes = new Digit('minutes', 60, date.getMinutes());
var hours   = new Digit('hours',   12, date.getHours());

function setTime() {
	seconds.onesEl.className  = 'time-' + seconds.ones;
	seconds.tensEl.className  = 'time-' + seconds.tens;

	minutes.onesEl.className = 'time-' + minutes.ones;
	minutes.tensEl.className = 'time-' + minutes.tens;

	hours.onesEl.className   = 'time-' + hours.ones;
	hours.tensEl.className   = 'time-' + hours.tens;
}
setTime();

var num = seconds.ones;
var inter = setInterval(changeTime, 1000);

function changeTime() {
	num === 9 ? num = 0 : num++;
  	seconds.onesEl.className = 'time-' + num;
}