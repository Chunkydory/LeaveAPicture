////////// Globals ////////////
var pixelX = new Array();
var pixelY = new Array();

var drawing;

var color = "black";

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
	color = "red";
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
});

$("#canvasDiv").mousemove(function(event)
{
	if(drawing)
	{
		dragging = true;
		pixelX.push(event.pageX - this.offsetLeft);
		pixelY.push(event.pageY - this.offsetTop);
	}
	draw();
});

function draw()
{
	if(drawing)
	{
		context.strokeStyle = color;
		context.beginPath();
		if(dragging)
		{
			context.moveTo(pixelX[pixelX.length - 2], pixelY[pixelY.length - 2]);
		}
		else
		{
			context.moveTo(pixelX[pixelX.length - 1] - 1, pixelY[pixelY.length - 1]);
		}
		console.log(pixelX[pixelX.length - 1] + " -- " + pixelY[pixelY.length - 1]);

		context.lineTo(pixelX[pixelX.length - 1], pixelY[pixelX.length - 1]);
		context.stroke();
		context.closePath();
	}
}