function initClock() {
	setInterval(function () {  
		date = new Date(),
		h = date.getHours(),
		m = date.getMinutes(),
		h = (h < 10) ? '0' + h : h,
		m = (m < 10) ? '0' + m : m,
		document.getElementById('clock-time').innerHTML = h + ':' + m;  
	}, 1000);
}