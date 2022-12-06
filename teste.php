<?php


include("src/conexao/conn.php");

// $sql = "SELECT COUNT(*) AS QTD FROM USUARIO";
$sql = "SELECT
(SELECT COUNT(*) FROM USUARIO) AS USUARIOQTD,
(SELECT COUNT(*) FROM RESTAURANTE) AS RESTAURANTEQTD)";
$resultado = $pdo->query($sql);


if($resultado){
    while($row = $resultado->fetch(PDO::FETCH_ASSOC)){
        $dados[] = array_map(null, $row);
    }
}
var_dump($dados);

// print_r($resultado);
