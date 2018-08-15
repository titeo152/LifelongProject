<?php 
include("connect.php");
$username=$_POST['username'];
$password=$_POST['password'];
$a= mysql_num_rows(mysql_query(" select * from login where username= '$username' and password= '$password'"));
echo $a;
?>