<?php
header('Content-Type: application/json');
include("connect.php");


$b= $_GET['threshold'];
$b= (int)$b;
if(isset($b)){
	$c=mysql_query("UPDATE threshold set threshold='$b'");
}


?>
