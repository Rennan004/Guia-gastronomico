<?php

    //Obter a conexão com o banco de dados
    include('../../conexao/conn.php');

    $ID = $_REQUEST['ID'];

    $sql = "DELETE * FROM TIPO WHERE ID = $ID";

    $resultado = $pdo->query($sql);

    if($resultado){
        $dados = array(
            'tipo' => 'sucess',
            'mensagem' => 'Registro excluido com sucesso!'
        );
    }else{
        $dados = array(
            'tipo' => 'error',
            'mensagem' => 'Não foi possivel excluir o registro'
        );
    }


    //Retorna o objeto json para o DataTable
    echo json_encode($dados);