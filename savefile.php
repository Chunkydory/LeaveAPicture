<?php
include 'chromephp-master/ChromePhp.php';
define ('MAX_FILES', 6);
define('UPLOAD_DIR', "drawings/");

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
	$count = fileCount();
	ChromePhp::log("count is: " . $count . " and maxfiles is: " . MAX_FILES);
	if($count >= MAX_FILES)
	{
		ChromePhp::log("count > maxfiles!");
		$firstFile = UPLOAD_DIR . "image_1.png";
		unlink(realpath($firstFile));
		
		for($i = 2; $i < ($count +1); $i++)
		{
			ChromePhp::log("i: " . $i);
			$oldFile = realpath(UPLOAD_DIR . "image_" . $i . ".png");
			$newFile = UPLOAD_DIR . "image_" . ($i - 1) . ".png";
			ChromePhp::log("oldfile: " . $oldFile . " newfile: " . $newFile);
			rename($oldFile, $newFile);
		}
		$name = "image_" . $count;
	}
	
	else 
	{
		$name = "image_" . ($count + 1);
	}
	
	echo $name;
	return $name;
}

$img = $_POST['hidden_data'];
$img = str_replace('data:image/png;base64,', '', $img);
$img = str_replace(' ', '+', $img);
$data = base64_decode($img);
$file = UPLOAD_DIR . fileName() . ".png";
$success = file_put_contents($file, $data);
print $success ? $file : 'Unable to save the file.';
?>

