function dragElement(elmnt) {
	var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
	if (document.getElementById(elmnt.id + "-header")) {
	  document.getElementById(elmnt.id + "-header").onmousedown = dragMouseDown;
	} else {
	  elmnt.onmousedown = dragMouseDown;
	}
  
	function dragMouseDown(e) {
	  e = e || window.event;
	  e.preventDefault();
	  pos3 = e.clientX;
	  pos4 = e.clientY;
	  document.onmouseup = closeDragElement;
	  document.onmousemove = elementDrag;
	}
  
	function elementDrag(e) {
	  e = e || window.event;
	  e.preventDefault();
	  pos1 = pos3 - e.clientX;
	  pos2 = pos4 - e.clientY;
	  pos3 = e.clientX;
	  pos4 = e.clientY;
	  SetTop(elmnt, pos2);
	  SetLeft(elmnt, pos1);

	  
	}
  
	function closeDragElement() {
	  document.onmouseup = null;
	  document.onmousemove = null;
	}

	function SetTop(element, offset) {
		var positionTop = element.offsetTop - offset;
		var documentHeight = document.documentElement.clientHeight;
		if (positionTop < 0) {
			element.style.top = (0) + "px";
		}
		else if (positionTop > documentHeight - 58) {
			element.style.top = (documentHeight - 58) + "px";
		}
		else {
			element.style.top = (positionTop) + "px";
		}
	}

	function SetLeft(element, offset) {
		var positionLeft = element.offsetLeft - offset;
		if (positionLeft < 0) {
			element.style.left = (0) + "px";
		} 
		else if (positionLeft + element.offsetWidth> window.screen.width) {
			element.style.left = (window.screen.width-element.offsetWidth) + "px";
		}
		else {
			element.style.left = (positionLeft) + "px";
		}
	}
  }