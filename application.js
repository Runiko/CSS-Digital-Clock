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

let Clock = function (el) {
	this.secondsEl = new Digit('seconds');
	this.minutesEl = new Digit('minutes');
	this.hoursEl   = new Digit('hours');
	this.bodyEl = document.getElementById(el);
	this.bodyEl.style.background = this.randomColorBackground();
	this.update();

	setInterval(() => {
		this.update();
	}, 1000);
}

Clock.prototype = {
	update () {
		let date = new Date();
		this.secondsEl.render(date.getSeconds());
		this.minutesEl.render(date.getMinutes());
		this.hoursEl.render(this.checkHour(date));
		if (date.getSeconds() % 5 === 0) {
			this.bodyEl.style.background = this.randomColorBackground();
		}
	},

	hexTimeBackground () {
		return '#' + hoursEl.zeroPad() + minutesEl.zeroPad() + secondsEl.zeroPad();
	},

	randomColorBackground () {
		return "#" + Math.floor(Math.random()*16777215).toString(16);
	},

	checkHour (date) {
		let currentHour = date.getHours();
		return currentHour > 12 ? currentHour - 12 : currentHour;
	}
}

new Clock('body');
