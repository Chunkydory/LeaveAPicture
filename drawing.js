
var colorPurple = "#cb3594";
var colorGreen = "#659b41";
var colorYellow = "#ffcf33";
var colorBrown = "#986928";

var curColor = colorPurple;
var clickColor = new Array();

var clickX = new Array();
var clickY = new Array();
var clickDrag = new Array();
var paint;

context = document.getElementById('canvasDiv').getContext("2d");
$('#canvasDiv').mousedown(function(e)
{
	paint = true;
	addClick(e.pageX - this.offsetLeft, e.pageY - this.offsetTop);
	redraw();
});

$('#canvasDiv').mousemove(function(e)
{
	if(paint)
	{
		addClick(e.pageX - this.offsetLeft, e.pageY - this.offsetTop, true);
		redraw();
	}
});

$('#canvasDiv').mouseup(function(e) 
{
	paint = false;
});

$('#canvasDiv').mouseleave(function(e)
{
	paint = false;
});

function addClick(x, y, dragging)
{
	clickX.push(x);
	clickY.push(y);
	clickDrag.push(dragging);
	clickColor.push(curColor);
}

function redraw()
{
	context.clearRect(0,0, context.canvas.width, context.canvas.height);
	
	context.lineJoin = "round";
	context.lineWidth = 5;
	
	for (var i=0; i < clickX.length; i++)
	{
		context.beginPath();
		if(clickDrag[i] && i)
		{
			context.moveTo(clickX[i-1], clickY[i-1]);
		}
		else
		{
			context.moveTo(clickX[i]-1, clickY[i]);
		}
		context.lineTo(clickX[i], clickY[i]);
		context.closePath();
		context.strokeStyle = clickColor[i];
		context.stroke();
	}
}