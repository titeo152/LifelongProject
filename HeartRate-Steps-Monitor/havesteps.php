<?php
include ("connect.php");
$d= mysql_query(" SELECT steps from setsteps ORDER BY Id DESC ");
$e= mysql_fetch_array($d);
echo $e['steps'];
?>
