////////// Globals ////////////
var pixelX = new Array();
var pixelY = new Array();

var drawing;

var color = "black";
var pixWidth = 3;

context = document.getElementById('canvasDiv').getContext("2d");
/////// GUI stuff /////////
$("#black_clr").click(function()
{
	console.log("Clicked!");
	color = "black";
});

$("#red_clr").click(function()
{
	console.log("Clicked!");
	color = "red";
});

$("#green_clr").click(function()
{
	console.log("Clicked!");
	color = "green";
});

$("#blue_clr").click(function()
{
	console.log("Clicked!");
	color = "blue";
});

$("#size_one").click(function()
{
	pixWidth = 3;
	console.log("Clicked size_one");
});

$("#size_two").click(function()
{
	pixWidth = 10;
	console.log("Clicked size_two");
});

$("#size_three").click(function()
{
	pixWidth = 15;
	console.log("Clicked size_three");
});

$("#canvasDiv").mousedown(function(event)
{
	drawing = true;
	pixelX.push(event.pageX - this.offsetLeft);
	pixelY.push(event.pageY - this.offsetTop);
	draw();
	
});

$("#canvasDiv").mouseup(function()
{
	drawing = false;
	dragging = false;
	pixelX = [];
	pixelY = [];
});

$("#canvasDiv").mousemove(function(event)
{
	if(drawing)
	{
		dragging = true;
		pixelX.push(event.pageX - this.offsetLeft);
		pixelY.push(event.pageY - this.offsetTop);
		draw();
		pixelX = [];
		pixelY =[];
	}
});

function draw()
{
		for(var i = 0; i < pixelX.length; i++)
		{
			context.beginPath();
			context.moveTo(pixelX[i] - 1, pixelY[i] - 1 );
			//context.lineTo(pixelX[i], pixelY[i]);
			context.arc(pixelX[i],pixelY[i],pixWidth, 0, 2*Math.PI);
			context.closePath();
			context.fillStyle = color;
			context.fill();
			context.lineWidth = pixWidth;
			context.strokeStyle = color;
			context.stroke();
		}


	
}