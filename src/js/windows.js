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



function setWindow(element) {
	element.onmousedown = setWindowOnTop;

	var hideButton = document.getElementById(element.id + "-hide");
	hideButton.onclick = hideWindow;
	var closeButton = document.getElementById(element.id + "-close");
	closeButton.onclick = closeWindow;

	var task = document.getElementById(element.id + "-task");
	task.onclick = setWindowOnTop;

	var startButton = document.getElementById(element.id + "-start");
	startButton.onclick = setWindowOnTop;

	function setWindowOnTop(e) {
		e = e.currentTarget;

		if (e.id.includes("task")) {
			eId = e.id.replace("-task", "");
			e = document.getElementById(eId);
		}

		if (e.id.includes("start")) {
			hideStartMenu();
			eId = e.id.replace("-start", "");
			e = document.getElementById(eId);
		}

		var windowElements = document.getElementsByClassName("Window");
		var windows = Array.from(windowElements);

		e.style.zIndex = 200;

		if (e.style.display === "none") {
			e.style.display = "block";
		}
		
		windows.forEach(element => {
			if (element.id != e.id) {
				element.style.zIndex = 100;
			}
		});

		setActiveTaskInTaskBar(e);
	}

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

	function setActiveTaskInTaskBar(e) {
		var task = document.getElementById(e.id + "-task");
		var allTasksElements = document.getElementsByClassName("task-in-task-bar");
		var allTasks = Array.from(allTasksElements);

		if (!task) return;

		if (task.style.display == "none") task.style.display = "block"

		task.classList.add("task-in-task-bar-active");

		allTasks.forEach(element => {
			if (task.id != element.id) {
				element.classList.remove("task-in-task-bar-active");
			}
		});
	}

	function hideStartMenu() {
		var startMenu = document.getElementById("start-window");
		startMenu.style.display = "none";
	}
}

function setStartMenu() {
	document.getElementById("start-button").onclick = changeStartMenuVisibility;

	function changeStartMenuVisibility(e) {
		var startMenu = document.getElementById("start-window");
		var display = startMenu.style.display;
		if (display == "none" || display == "") {
			startMenu.style.display = "block"
		} else {
			startMenu.style.display = "none";
		}
	}
}