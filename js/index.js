//make the canvas as big as the screen

var c = document.getElementById("game");
		c.width = window.innerWidth - 20;
		c.height = window.innerHeight - 20;
		
var ctx = c.getContext("2d");
var stage = 0;
		
//background color
ctx.fillStyle = "#FF8C00";
ctx.fillRect(0,0,c.width,c.height);
		
//initial text
ctx.fillStyle = "#000000";
ctx.font = "30px Arial";
ctx.fillText("Hello.",250,200);

ctx.moveTo(0,c.height);
ctx.lineTo(c.width,0);
ctx.stroke();

//create triangle 
ctx.beginPath();
ctx.moveTo(0,50);
ctx.lineTo(0,0);
ctx.lineTo(50,0);
ctx.closePath();
ctx.strokeStyle = "black";
ctx.fillStyle = "black";
ctx.stroke();
ctx.fill();

//set up animation
var requestAnimationFrame = window.requestAnimationFrame || 
	window.mozRequestAnimationFrame || 
	window.webkitRequestAnimationFrame || 
	window.msRequestAnimationFrame;

	//make page close
	var size = 1;
	var ySize = 1;
	
	var timer = 0;
function closePage(){
	ctx.fillStyle = "#000000";
	ctx.fillRect(0,0,size,ySize);
	size = size + 10;
	ySize = ySize + 8;
	
	timer = timer + 1;
	
	if(timer >= 350){
		ctx.fillStyle = "#FFFFFF";
		ctx.font = "30px Arial";
		ctx.fillText("There's not really an ending", c.width/2 + 50, c.height/2 + 50);
	}
	requestAnimationFrame(closePage);
}

function clicked(event){
		if(event.clientX >= 0 && event.clientY >= 0 && event.clientX <= 50 && event.clientY <= 50){
			closePage();
		}
	}
	
function up(event){
	
}