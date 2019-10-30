var numOfSquares = 6;
var color = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var message = document.getElementById("message");
var h1 = document.querySelector("h1");
var reset = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init(); 

function init(){
	//mode buttons event listeners
		for(var i=0; i<modeButtons.length; i++){
		modeButtons[i].addEventListener("click", function(){
			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");
			this.classList.add("selected");
			this.textContent === "Easy" ? numOfSquares = 3: numOfSquares = 6;
			resetGame();

		});
	}
	//gives background color to each square from the color array
	for(var i=0; i < squares.length; i++){
		//add click listeners
		squares[i].addEventListener("click", function(){
			var clickedColor = this.style.backgroundColor;
			if(clickedColor === pickedColor){
				message.textContent = "Correct"; 
				changeColor(clickedColor);
				h1.style.backgroundColor = pickedColor;
				reset.textContent = "Play Again?"

			}
			else{
				this.style.backgroundColor = "#232323";
				message.textContent = "Try Again";
			}
		})
	}
	resetGame();
}


function resetGame(){
	color = generateRandomColors(numOfSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	reset.textContent = "New Colors"
	message.textContent = "";
	for(var i=0; i < squares.length; i++){
		if(color[i]){
			squares[i].style.display = "block";
			squares[i].style.backgroundColor = color[i];
		}
		else{
			squares[i].style.display = "none";
		}
	} 
	h1.style.backgroundColor = "RGB(203, 92, 76)";
}

function changeColor(color){
	for(var i=0; i<squares.length; i++){
		squares[i].style.backgroundColor = color;
	}
}

function pickColor(){
	var random = Math.floor(Math.random() * color.length);
	return color[random];
}

function generateRandomColors(num){
	var arr = []
	for(var i = 0; i<num; i++){
		arr.push(randomColor());
	}
	return arr; 
}

function randomColor(){
	var red = Math.floor(Math.random()*256); 
	var green = Math.floor(Math.random()*256);
	var blue = Math.floor(Math.random()*256);
	return "rgb(" + red + ", " + green + ", " + blue + ")"; 
}


reset.addEventListener("click", resetGame);

//github testing
