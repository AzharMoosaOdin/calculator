let screen_text = document.querySelector("#display p");
let storedValue = 0;
let currentNumber = 0;
let btn = document.querySelectorAll("#zero, [id='1'], [id='2'], [id='3'], [id='4'], [id='5'], [id='6'], [id='7'], [id='8'], [id='9']");
let operators = document.querySelectorAll("#add, #subtract, #multiply, #divide, #equals")
let topBtn = document.querySelectorAll("#clear, #plus-minus, #delete");
let answer = 0;
let whichOp = 0;

// Clear Button
function ac() {
	screen_text.textContent = "0";
	storedValue = 0;
 	currentNumber = 0;
 	whichOp = 0;
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
function numbers(id) {
	let current = screen_text.textContent;
	if (current.length >= 15) {
		return;
	}
	let number = id;
	if (screen_text.textContent === "0") {
		screen_text.textContent = "";
	}
	if (id === "zero") {
		number = 0;
	}
	screen_text.textContent += number;

	if (current.length % 5 === 0) {
		screen_text.style.fontSize = 60 - (current.length + 10) + "px";
	}
	
}

function add() {
	answer = currentNumber + storedValue;
	console.log(answer);
	storedValue = answer;
	whichOp = 0;
}

function subtract() {
	answer = currentNumber - storedValue;
	if (whichOp === 1) {
		answer = -answer;
	}
	console.log(answer);
	storedValue = answer;
	whichOp = 1;
}

function multiply() {
	if (storedValue === 0) {
		storedValue = 1;
	}
	answer = currentNumber * storedValue;
	console.log(answer);
	storedValue = answer;
	whichOp = 2;
}

function divide() {
	if (storedValue === 0) {
		storedValue = 1;
	}
	answer = currentNumber / storedValue;
	if (!isFinite(answer)) {
		screen_text.textContent = "ERROR";
	}
	console.log(answer);
	storedValue = answer;
	whichOp = 3;
}


function equals() {
	if (whichOp === 0) {
		screen_text.textContent = parseInt(screen_text.textContent) + answer;
		currentNumber = parseInt(screen_text.textContent) + answer;;
		storedValue = 0
		whichOp = 4
	} else if (whichOp === 1) {
		screen_text.textContent = answer - parseInt(screen_text.textContent);
		currentNumber = answer - parseInt(screen_text.textContent)  ;
		storedValue = 0
		whichOp = 4
	} else if (whichOp === 2) {
		screen_text.textContent = answer * parseInt(screen_text.textContent);
		currentNumber = parseInt(screen_text.textContent) * answer;;
		storedValue = 0
		whichOp = 4
	} else if (whichOp === 3) {
		screen_text.textContent = answer / parseFloat(screen_text.textContent);
		currentNumber = 0;
		storedValue = parseFloat(screen_text.textContent) / answer;
		whichOp = 4
	}
}

function operate(operation) {
	currentNumber = parseInt(screen_text.textContent);
	if (operation === "add") {
		add();
		screen_text.textContent = "0";
	} else if (operation === "subtract") {
		subtract();
		screen_text.textContent = "0";
	} else if (operation === "multiply") {
		multiply();
		screen_text.textContent = "0";
	} else if (operation === "divide") {
		divide();
		screen_text = "0";
	}
	else if (operation === "equals") {
		equals();
	}
}

// AC, Backspace & +/-
function topButtons(btn) {
	if (btn === "clear") {
		ac();
	} else if (btn === "plus-minus") {
		plus_minus();
	} else if (btn === "delete") {
		backspace();
	} 
}

// EventListener for Numbers
for (let i = 0; i < 10; i++) {
	btn[i].addEventListener('click', () => {
  	numbers(btn[i].id);
	});
}

// EventListener for Operations
for (let i = 0; i < 5; i++) {
	operators[i].addEventListener('click', () => {
  	operate(operators[i].id);
	});
}

// EventListener for AC, +/- , Backspace
for (let i = 0; i < 3; i++) {
	topBtn[i].addEventListener('click', () => {
	topButtons(topBtn[i].id);
	})
}

















