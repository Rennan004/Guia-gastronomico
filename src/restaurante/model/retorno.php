<?php


// Obter a nossa conexão com o banco de dados
include('../../conexao/conn.php');

// Obter os dados enviados do formulário via $_REQUEST
$requestData = $_REQUEST;


$dados = array(
    "NOME" => 'NOME',
    "DESCRICACO" => 'DESCRICACO',
    "FOTO" => 'FOTO'
)

echo json_encode($dados);