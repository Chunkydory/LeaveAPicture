<?php

$maxFiles = 5;
$upload_dir = "drawings/";

function fileCount()
{
    // integer starts at 0 before counting
    $i = 0; 
    $dir = 'drawings/';
    if ($handle = opendir($dir)) {
        while (($file = readdir($handle)) !== false){
            if (!in_array($file, array('.', '..')) && !is_dir($dir.$file)) 
                $i++;
        }
    }
    // returns amount of files in directory
	return $i;
}

function fileName()
{	
	if(fileCount() >= $maxFiles)
	{
		$firstFile = realpath($upload_dir . "image_1.png");
		unlink($firstFile);
		
		for($i = 1; $i < $maxFiles; $i++)
		{
			$oldFile = realpath($upload_dir . "image_" . $i . ".png");
			$newFile = realpath($upload_dir . "image_" . $i - 1 . ".png");
			rename($oldFile, $newFile);
		}
	}
	$count = fileCount();
	$name = "image_" . ($count + 1);
	echo $name;
	return $name;
}

function checkAmount()
{
	if(fileCount() >= $maxFiles)
	{
		$firstFile = realpath($upload_dir . "image_1.png");
		unlink($firstFile);
		
		for($i = 2; $i < $maxFiles; $i++)
		{
			$oldFile = realpath($upload_dir . "image_" . $i . ".png");
			$newFile = realpath($upload_dir . "image_" . ($i - 1) . ".png");
			rename($oldFile, $newFile);
		}
	}
}

$img = $_POST['hidden_data'];
$img = str_replace('data:image/png;base64,', '', $img);
$img = str_replace(' ', '+', $img);
$data = base64_decode($img);
$file = $upload_dir . fileName() . ".png";
$success = file_put_contents($file, $data);

print $success ? $file : 'Unable to save the file.';
?>

