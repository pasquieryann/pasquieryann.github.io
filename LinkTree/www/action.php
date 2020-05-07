CREATE TABLE `newsletter_signups` (
 `id` int(11) NOT NULL AUTO_INCREMENT,
 `name` text NOT NULL,
 `mail` text NOT NULL,
 PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=5 DEFAULT CHARSET=latin1

<?php

$host="localhost";
$username="root";
$password="";
$databasename="sample";

$connect=mysql_connect($host,$username,$password);
$db=mysql_select_db($databasename);

if(isset($_POST['subscribe']))
{
 $name=$_POST["name"];
 $email=$_POST["mail"];
 
 mysql_query("insert into short_urls values('','$name','$email')");
 echo "You are successfully subscribed!";
}
?>