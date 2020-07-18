var windows = [];
var startMenuButtons = [];

var startMenuButtonTemplateName = 'start-menu-item-template';

function init(windowsIds) {
	clear();
	windowsIds.forEach(windowId => {
		_initWindow(windowId);
	});
}

function clear() {
	windows = [];
	startMenuItems = [];
}

function _initWindow(windowId) {
	let window = document.getElementById(windowId);
	let windowConfig = {
		windowElement: window,
		setActiveWindow: setActiveWindow
	}
	setWindowBehaviour(windowConfig);
	createStartMenuButton(window);
	windows.push(window);
}

function setActiveWindow(window) {

}

function setWindowBehaviour(config) {
	var element = config.windowElement;
	element.onmousedown = config.setActiveWindow;

	var hideButton = document.getElementById(element.id + "-hide");
	hideButton.onclick = hideWindow;
	var closeButton = document.getElementById(element.id + "-close");
	closeButton.onclick = closeWindow;
	var task = document.getElementById(element.id + "-task");
	task.onclick = config.setActiveWindow;
	var startButton = document.getElementById(element.id + "-start");
	startButton.onclick = config.setActiveWindow;

	function hideWindow(e) {
		e = e.currentTarget;
		var windowId = e.id.replace("-hide", "");
		var window = document.getElementById(windowId);
		window.style.display = "none";

		var task = document.getElementById(windowId + "-task");
		task.classList.remove("task-in-task-bar-active");
	}

	function closeWindow(e) {
		e = e.currentTarget;
		var windowId = e.id.replace("-close", "");
		var window = document.getElementById(windowId);
		window.style.display = "none";

		var task = document.getElementById(windowId + "-task");
		task.classList.remove("task-in-task-bar-active");
		task.style.display = "none";
	}
}

function createStartMenuButton(window) {
	const windowNameElement = window.getElementById(window.id + '-header-name');
	const windowName = windowNameElement.innerText;
	const windowIcon = `assets/icons/${windowName}.ico`;
	
	// TODO
	const startMenuButton = {};

	startMenuButtons.push(startMenuButton);
}