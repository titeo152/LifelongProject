
<?php
header('Content-Type: application/json');
include("connect.php");
$kq=mysql_query("select steps,DATE(datetime) AS date,steps2,heartbeat,datetime from smartband,setsteps  WHERE WEEKOFYEAR(datetime)=WEEKOFYEAR(NOW());");
$row=array();
while($d= mysql_fetch_array($kq,MYSQL_ASSOC)){
$row[]=array(
'datetime2'=>$d['datetime'],
'datetime'=>$d['date'],
'steps'=>$d['steps'],
'steps2'=>$d['steps2'],
'heartbeat'=>$d['heartbeat']
);
}

die(json_encode($row));
?>
