// Seconds
var secondOnes  = document.getElementById("seconds-ones");
var secondTens  = document.getElementById("seconds-tens");
// Minutes
var minutesOnes = document.getElementById('minutes-ones');
var minutesTens = document.getElementById('minutes-tens');
// Hours
var hoursOnes   = document.getElementById('hours-ones');
var hoursTens   = document.getElementById('hours-tens');

var date = new Date();

function singleDigit(time) {
	return time.length == 1 ? '0' + time : time;
}

function splitOnes(time) {
	return singleDigit(time.toString()).split('')[1];
}

function splitTens(time) {
	return singleDigit(time.toString()).split('')[0];
}

function setTime(date) {
	secondOnes.className  = 'time-' + splitOnes(date.getSeconds());
	secondTens.className  = 'time-' + splitTens(date.getSeconds());

	minutesOnes.className = 'time-' + splitOnes(date.getMinutes());
	minutesTens.className = 'time-' + splitTens(date.getMinutes());

	hoursOnes.className   = 'time-' + splitOnes(date.getHours());
	hoursTens.className   = 'time-' + splitTens(date.getHours());
	return splitOnes(date.getSeconds());
}


var num = setTime(date);
var inter = setInterval(changeTime, 1000);

function changeTime() {
	var timeClass = 'time-' + num;
  	secondOnes.className = timeClass;
	num === 9 ? num = 0 : num++;
}