<?php

    //// Declarar as variáveis necessárias para a conexão com o banco de dados........
    //$hostname = "sql103.epizy.com"; //Nome do servidor que se encontra nosso banco de dados
    //$dbname = "epiz_31505642_BANCO_TCC"; //Nome do nosso banco de dados
    //$username = "epiz_31505642"; //Nome do usuário para acesso ao banco de daddos
    //$password = "1159626"; //Senha de acesso ao nosso banco de daddos
//
    //try {
    //    $pdo = new PDO('mysql:host='.$hostname.';dbname='.$dbname, $username, $password);
    //    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    //    // echo 'Conexão com banco de dados, realizado com sucesso!!!';
    //}catch(PDOException $e) {
    //    echo 'Erro: '.$e->getMessage();
    //}

        // Declarar as variáveis necessárias para a conexão com o banco de dados........
        $hostname = "localhost"; //Nome do servidor que se encontra nosso banco de dados
        $dbname = "tcc"; //Nome do nosso banco de dados
        $username = "root"; //Nome do usuário para acesso ao banco de daddos
        $password = ""; //Senha de acesso ao nosso banco de daddos
    
        try {
            $pdo = new PDO('mysql:host='.$hostname.';dbname='.$dbname, $username, $password);
            $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            // echo 'Conexão com banco de dados, realizado com sucesso!!!';
        }catch(PDOException $e) {
            echo 'Erro: '.$e->getMessage();
        }