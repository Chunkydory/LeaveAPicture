////////// Globals ////////////

var drawing;

var pixelX = new Array();
var pixelY = new Array();

var color = "black";
var pixWidth = 3;

var pencil = true;
var marker = false;

var clicked = false;

canvas = document.getElementById('canvasDiv');
context = canvas.getContext("2d");

canvas.addEventListener('mousedown', function(e) 
{
	drawing = true;
});

canvas.addEventListener('mouseup', function(e) 
{
	drawing = false;
			pixelX = [];
		pixelY = [];
});

canvas.addEventListener('mousemove', function(e) 
{
	if(drawing)
	{
		pixelX.push(event.pageX - this.offsetLeft);
		pixelY.push(event.pageY - this.offsetTop);
		//draw(event.pageX - this.offsetLeft, event.pageY - this.offsetTop);
	}
	
	draw(pixelX, pixelY);
});

function draw(x, y)
{
		for(var i = 0; i < x.length; i++)
		{
			context.beginPath();
			context.lineWidth = pixWidth;
			context.lineJoin = "round";
			context.lineCap = "round";
			context.strokeStyle = color;
		
			context.moveTo(x[i-1],y[i-1]);
			context.lineTo(x[i],y[i]);
			context.stroke();
			context.closePath();
		}
;
		
	//console.log(x + " " + y);
}

function saveFile()
	{
	var button = document.getElementById('saveButton');
		if(!clicked)
		{
			console.log("saving file...");
			var canvasData = canvas.toDataURL("image/png");
			document.getElementById('hidden_data').value = canvasData;
			var fd = new FormData(document.forms["form1"]);
	
			var xhr = new XMLHttpRequest();
			xhr.open('POST','savefile.php', true);
		
			xhr.upload.onprogress = function(e) {
				if(e.lengthComputable) {
					var percentComplete = (e.loaded/e.total) * 100;
					console.log(percentComplete + '% uploaded');
					alert('Succesfully uploadded');
				}
			};
		
			xhr.onload = function() {
		
			};
			xhr.send(fd);
			clicked = true;
			button.value = "Thanks!";
		}
		
		else if(clicked)
		{
			
		}
	};