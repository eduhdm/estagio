<?php

    include "connectdb.php";
    $data=json_decode(file_get_contents("php://input"));

    $id=$dbhandle->real_escape_string($data->id);
    $nome=$dbhandle->real_escape_string($data->nome);
    $email=$dbhandle->real_escape_string($data->email);
    $senha=$dbhandle->real_escape_string($data->senha);
    $pokemon=$dbhandle->real_escape_string($data->pokemon);

    $query="UPDATE usuario SET nome = '".$nome."',
        email = '".$email."',
        senha = '".$senha."' ,
        pokemon = '".$pokemon."' 
    WHERE id=$id ";
    $dbhandle->query($query);

?>
