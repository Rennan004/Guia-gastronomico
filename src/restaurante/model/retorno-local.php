<?php

include("../../conexao/conn.php");

$ID = $_REQUEST['ID'];

$sql = "SELECT * FROM RESTAURANTE WHERE ID = $ID";

$resultado = $pdo->query($sql);

if($resultado){
    while($row = $resultado->fetch(PDO::FETCH_ASSOC)){
        $dados[] = array_map(null, $row);
    }
}

echo json_encode($dados);