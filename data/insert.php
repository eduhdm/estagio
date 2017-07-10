<?php
include "connectdb.php";
$data=json_decode(file_get_contents("php://input"));

$id=$dbhandle->real_escape_string($data->id);
$nome=$dbhandle->real_escape_string($data->nome);
$email=$dbhandle->real_escape_string($data->email);
$senha=$dbhandle->real_escape_string($data->senha);
$pokemon=$dbhandle->real_escape_string($data->pokemon);


$query="INSERT INTO usuario VALUES($id,
	'".$nome."',
	'".$email."',
	'".$senha."',
	'".$pokemon."')";

$dbhandle->query($query);

?>