<?php 
header('Content-Type: application/json');
include("connect.php");
date_default_timezone_set ('Asia/Ho_Chi_Minh');
$date= date("Y-m-d H:i:s ");
$row=array();
$kq=mysql_query("select *from smartband ORDER BY id DESC");
$d= mysql_fetch_array($kq,MYSQL_ASSOC);
$row[]=array(
'heartbeat'=>$d['heartbeat'],
'steps'=>$d['steps'],
'datetime'=>$d['datetime']
);
die (json_encode($row));
?>