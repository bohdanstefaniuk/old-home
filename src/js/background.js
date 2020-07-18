function getRandomInt() {
	return Math.floor(Math.random() * (11 - 1)) + 1;
};

function setRandomBackground() {
	var bodyElem = document.getElementById('background');
	bodyElem.style.cssText = 'background-image: url(\'assets/images/backgrounds/' + getRandomInt() + '.gif\');';
}