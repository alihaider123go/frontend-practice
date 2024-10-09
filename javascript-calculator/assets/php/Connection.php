<?php
$nm=$_POST['name'];
$em=$_POST['email'];
$se=$_POST['select'];
$tx=$_POST['text'];

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "form123";

$conn = mysqli_connect ($servername,$username,$password,$dbname);

if($conn)
{
    //echo "connection ok";
}
else{
    echo "connection Failed ".mysqli_connect_error();
}
$query="insert into bootstrap values ('id','$nm','$em','$se','$tx')";
$data=mysqli_query($conn,$query);

if($data)
{
    echo "Data Inserted into Database";
}
else
{
    echo "Failed insert data into Database";
}

?>