////////// Globals ////////////
var pixelX = new Array();
var pixelY = new Array();

var drawing;

var color = "black";
var pixWidth = 5;

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
	pixWidth = 6;
	console.log("Clicked size_two");
});

$("#size_three").click(function()
{
	pixWidth = 10;
	console.log("Clicked size_three");
});

$("#canvasDiv").mousedown(function(event)
{
	drawing = true;
	pixelX.push(event.pageX - this.offsetLeft);
	pixelY.push(event.pageY - this.offsetTop);
	
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


/*
$("#canvasDiv").mousemove(function(event)
{
	if (drawing)
	{
		context.beginPath();
		context.moveTo((event.pageX - this.offsetLeft) - 1, (event.pageY - this.offsetTop) - 1);
		context.lineTo((event.pageX - this.offsetLeft), (event.pageY - this.offsetTop));
		context.lineWidth = pixWidth;
		context.strokeStyle = color;
		context.stroke();
	}
});
*/
function draw()
{
	if(drawing)
	{
		context.beginPath();
		if(dragging)
		{
			context.moveTo(pixelX[pixelX.length - 2], pixelY[pixelY.length - 2]);
		}
		else
		{
			context.moveTo(pixelX[pixelX.length - 1] - 1, pixelY[pixelY.length - 1] - 1);
		}
		//console.log(pixelX[pixelX.length - 1] + " -- " + pixelY[pixelY.length - 1]);
		context.lineTo(pixelX[pixelX.length - 1], pixelY[pixelY.length - 1]);

		//context.rect(pixelX[pixelX.length - 1], pixelY[pixelY.length - 1], pixWidth, pixWidth);
		context.closePath();
		context.lineWidth = pixWidth;
		context.strokeStyle = color;
		context.stroke();
	}
}