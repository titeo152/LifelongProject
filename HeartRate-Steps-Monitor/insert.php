<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>Untitled Document</title>
</head>

<body>
<?php
include("connect.php");
date_default_timezone_set ('Asia/Ho_Chi_Minh');
$datetime=date("Y-m-d H:i:s");
$kq=mysql_query("select *from smartband ORDER BY id DESC");
$first= mysql_fetch_array($kq);

$heartbeat=$_GET['heartbeat'];
$steps=$_GET['steps'];
$currentdate=date('Y-m-d');
if( isset($_GET['steps'])&& isset($_GET['heartbeat']) ){
$teo="SELECT DATE(datetime) AS date FROM smartband WHERE id=".$first['id'];
$ti=mysql_query($teo);
$d=mysql_fetch_array($ti);
$date1=date_create($currentdate);
$date2=date_create($d['date']);
$diff=date_diff($date1,$date2);
$result=$diff->format("%R%a");

if($result!=0){
	echo 'teo';
	$newday="INSERT INTO smartband(heartbeat,steps,datetime) VALUES ('$heartbeat','$steps','$datetime')";
	$newday2=mysql_query($newday);
}
else{
	echo 'ti';
	$sameday=mysql_query("UPDATE smartband SET heartbeat='$heartbeat',steps='$steps',datetime='$datetime' WHERE id=".$first['id']);
}
}
?>
</body>
</html>