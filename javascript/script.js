let screen_text = document.querySelector("#display p");

// Clear Button
function ac() {
	screen_text.textContent = "0";
}

// Plus-Minus
function plus_minus() {
	let number = screen_text.textContent;
	if (number > 0) {
		screen_text.textContent = -number
	} else {
		screen_text.textContent = Math.abs(number);
	}
}

// Backspace
function backspace() {
	let number = screen_text.textContent;
	let newNum = number.slice(0, -1);
	if (newNum === "") {
		screen_text.textContent = "0";
	} else {
		screen_text.textContent = newNum;
	}
}

// Numbers
function numbers() {
	let current = screen_text.textContent;
	if (current.length >= 15) {
		return;
	}
	let number = event.target.id;
	if (number === "zero") {
		number = 0;
	}
	if (screen_text.textContent === "0") {
		screen_text.textContent = "";
	}
	screen_text.textContent += number;

	if (current.length % 5 === 0) {
		screen_text.style.fontSize = 60 - (current.length + 10) + "px";
	}
}