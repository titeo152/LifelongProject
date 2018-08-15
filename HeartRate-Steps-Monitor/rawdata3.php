<?php 
header('Content-Type: application/json');
include("connect.php");
$row= array();
$heartbeat=mysql_query("select heartbeat from smartband ORDER BY id DESC ");
$a= mysql_fetch_array($heartbeat,MYSQL_ASSOC);
$threshold=mysql_query("select threshold from threshold ORDER BY id DESC ");
$d= mysql_fetch_array($threshold,MYSQL_ASSOC);
if ($a['heartbeat'] <= $d['threshold']){
	$row[]= array('teo'=>'safe');
	die(json_encode($row));
}
else{
	$row[]= array('teo'=>'not safe');
	die(json_encode($row));
	}

?>