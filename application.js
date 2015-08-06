var secondOnes = document.getElementById("seconds-ones");
var secondTens = document.getElementById("seconds-tens");

var num = 0;
var inter = setInterval(changeTime, 1000);

function changeTime() {
	var timeClass = 'time-' + num;
  secondOnes.className = timeClass;
  secondTens.className = timeClass;
	num === 9 ? num = 0 : num++;
}