<?php 

    // session_start();

    // if(!isset($_SESSION['TIPO']) && !isset($_SESSION['NOME'])){
    //     $dados = array(
    //         'tipo' => 'error',
    //         'mensagem' => 'Você não está autenticado para utilizar o sistema, realize o login.'
    //     );
    // } else {
    //     $dados = array(
    //         'tipo' => 'success',
    //         'mensagem' => utf8_encode($_SESSION['NOME']),
    //         'tipo_usuario' => $_SESSION['TIPO']
    //     );
    // }

    echo json_encode($dados);