<!DOCTYPE html>
<head>
<link rel="stylesheet" type="text/css" href="style.css">
<body>
	<h1>Leave a drawing</h1>
		<?php
		echo '<div id="image_bar"><div id=barText>Other people have left:</div>
				<img src="drawings/image_1.png" alt="image one">
				<img src="drawings/image_2.png" alt="image one">
				<img src="drawings/image_3.png" alt="image one">
				<img src="drawings/image_4.png" alt="image one">
				<img src="drawings/image_5.png" alt="image one">
				<img src="drawings/image_6.png" alt="image one">
			</div>'
	?>
	
	<div id="drawingField">
		<div id=menu_bar>
			<div id="black_clr"></div><div id="red_clr"></div><div id="green_clr"></div><div id="blue_clr"></div>
			<div class="sizeBlock"><div id="size_one"></div></div><div class="sizeBlock"><div id="size_two"></div></div><div class="sizeBlock"><div id="size_three"></div></div>
			<input id="saveButton" type="button" onclick="saveFile()" value="Leave it!" />
		</div>
	
		<form method="post" accept-charset="utf-8" name="form1">
			<input name="hidden_data" id='hidden_data' type="hidden"/>
		</form>
		<canvas id="canvasDiv" width="800" height="640"></canvas>
	</div>
	<script src="jquery-2.1.1.min.js"></script>
	<script type="text/javascript" src="gui.js"></script>
	<script type="text/javascript" src="drawser.js"></script>
	
</body>
</head>