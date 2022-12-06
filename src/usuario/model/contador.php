<?php


include("../../conexao/conn.php");

 $sql = "SELECT COUNT(ID) AS QTD FROM USUARIO";

$resultado = $pdo->query($sql);


if($resultado){
    while($row = $resultado->fetch(PDO::FETCH_ASSOC)){
        $dados[] = array_map(null, $row);
    }
}



echo json_encode($dados);