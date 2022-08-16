<?php

    // Obter a nossa conexão com o banco de dados
    include('../../conexao/conn.php');

    // Obter os dados enviados do formulário via $_REQUEST
    $requestData = $_REQUEST;

    // Verificação de campo obrigatórios do formulário
    if(empty($requestData['NOME'])){
        // Caso a variável venha vazia eu gero um retorno de erro do mesmo
        $dados = array(
            "tipo" => 'error',
            "mensagem" => 'Existe(m) campo(s) obrigatório(s) não preenchido(s).'
        );
    } else {
        // Caso não exista campo em vazio, vamos gerar a requisição
        $ID = isset($requestData['ID']) ? $requestData['ID'] : '';
        $operacao = isset($requestData['operacao']) ? $requestData['operacao'] : '';

        // Verifica se é para cadastra um nvo registro
        if($operacao == 'insert'){
            // Prepara o comando INSERT para ser executado
            try{
                $stmt = $pdo->prepare('INSERT INTO RESTAURANTE (NOME, DESCRICAO, CEP, LOGRADOURO, BAIRRO, NUMERO, HORARIO, TELEFONE1, TELEFONE2, FACEBOOK, INSTRAGAM, IFOOD, FOTO) VALUES (:a, :b, :c, :d, :e, :f, :g, :h, :i, :j, :k, :l, :m)');
                $stmt->execute(array(
                    //':a' => utf8_decode($requestData['RESTAURANTE'])
                    ':a' => $requestData['NOME']
                    ':b' => $requestData['DESCRICAO']
                    ':c' => $requestData['CEP']
                    ':d' => $requestData['LOGRADOURO']
                    ':e' => $requestData['BAIRRO']
                    ':f' => $requestData['NUMERO']
                    ':g' => $requestData['HORARIO']
                    ':h' => $requestData['TELEFONE1']
                    ':i' => $requestData['TELEFONE2']
                    ':j' => $requestData['FACEBOOK']
                    ':k' => $requestData['INSTRAGAM']
                    ':l' => $requestData['IFOOD']
                    ':m' => $requestData['FOTO']
                ));
                $dados = array(
                    "tipo" => 'success',
                    "mensagem" => 'Registro salvo com sucesso.'
                );
            } catch(PDOException $e) {
                $dados = array(
                    "tipo" => 'error',
                    "mensagem" => 'Não foi possível salvar o registro: .'.$e
                );
            }
        } else {
            // Se minha variável operação estiver vazia então devo gerar os scripts de update
            try{
                $stmt = $pdo->prepare('UPDATE RESTAURANTE SET NOME = :a, DESCRICAO = :b, CEP = :c, LOGRADOURO = :d, BAIRRO = :e, NUMERO = :f, HORARIO = :g, TELEFONE1 = :h, TELEFONE2 = :i, FACEBOOK = :j,
                INSTAGRAM = :k, IFOOD = :l, FOTO = :m WHERE ID = :id');
                $stmt->execute(array(
                    ':id' => $ID,
                     //':a' => utf8_decode($requestData['RESTAURANTE'])
                     ':a' => ($requestData['NOME'])
                     ':b' => $requestData['DESCRICAO']
                     ':c' => $requestData['CEP']
                     ':d' => $requestData['LOGRADOURO']
                     ':e' => $requestData['BAIRRO']
                     ':f' => $requestData['NUMERO']
                     ':g' => $requestData['HORARIO']
                     ':h' => $requestData['TELEFONE1']
                     ':i' => $requestData['TELEFONE2']
                     ':j' => $requestData['FACEBOOK']
                     ':k' => $requestData['INSTRAGAM']
                     ':l' => $requestData['IFOOD']
                     ':m' => $requestData['FOTO']
                ));
                $dados = array(
                    "tipo" => 'success',
                    "mensagem" => 'Registro atualizado com sucesso.'
                );
            } catch (PDOException $e) {
                $dados = array(
                    "tipo" => 'error',
                    "mensagem" => 'Não foi possível efetuar o alteração do registro.'.$e
                );
            }
        }
    }

    // Converter um array ded dados para a representação JSON
    echo json_encode($dados);