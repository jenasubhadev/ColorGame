// alert("connected");
var squaresSwitch = 0; 
var heading = document.getElementById("headingBackground");
var colors = [];
var pickedColor;
var square = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var resetButton = document.querySelector("#reset");
var h1 = document.querySelector("h1");
var modeButtons = document.querySelectorAll(".mode");

init();

function init(){
	for (var i = 0; i<modeButtons.length; i++){
		modeButtons[i].addEventListener("click",function(){
			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");
			this.classList.add("selected");
			if(this == modeButtons[1]){
				squaresSwitch = 0;
			}
			else{
				squaresSwitch = 1;
			}
			reset();	
		});
	}

	for (var i = 0; i < square.length; i++){
	
		square[i].addEventListener("click",function(){

			var clickedColor = this.style.backgroundColor;

			if(clickedColor === pickedColor){
				messageDisplay.textContent = "Correct";
				resetButton.textContent = "Play Again"
				changeColors(clickedColor);
				heading.style.backgroundColor = clickedColor;
			}
			else {
				this.style.backgroundColor = "#232323";
				messageDisplay.textContent = "Try Again";
			}	
			
		});
	}
	reset();
}


function reset(){
	messageDisplay.textContent = " ";
	if(squaresSwitch == 0){
		colors = generateRandomColors(6);
	}
	else{
		colors = generateRandomColors(3);
	}
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for (var i = 0; i < square.length; i++){
		if(colors[i]){
			square[i].style.display = "block";
			square[i].style.backgroundColor = colors[i];
		}
		else{
			square[i].style.display = "none";
		}
	}

	if(resetButton.textContent === "Play Again"){
		resetButton.textContent = "New Colors";
	}
	h1.style.backgroundColor = "steelblue";
}

resetButton.addEventListener("click",function(){

	reset();
});

function changeColors(color){
	for (var i = 0; i < square.length; i++){
		square[i].style.backgroundColor = color;
	}
}		    

function pickColor(){
	var random = Math.floor(Math.random() * colors.length)
	return colors[random];
}

function generateRandomColors(num){
	var arr = [];
	for( var i = 0; i < num; i++){
		arr.push(randomColor())
	}

	return arr;
}

function randomColor(){
	var r = Math.floor(Math.random()* 256)
	var g = Math.floor(Math.random()* 256)
	var b = Math.floor(Math.random()* 256)
	return "rgb(" + r + ", " + g + ", " + b +")";
}