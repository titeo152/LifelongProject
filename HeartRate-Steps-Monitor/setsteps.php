<?php
include("connect.php");
$setsteps= $_GET['setsteps'];
if (isset($setsteps)){
	$d= mysql_query("UPDATE setsteps set steps2='$setsteps'");
} 
?>