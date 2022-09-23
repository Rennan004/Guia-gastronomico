<?php

    // Obter a nossa conexão com o banco de dados
    include('../../conexao/conn.php');

    // Obter os dados enviados do formulário via $_REQUEST
    $requestData = $_REQUEST;
    $DIRETORIO = "fotos/";

    // Verificação de campo obrigatórios do formulário
    if(empty($requestData['NOME'])){
        // Caso a variável venha vazia eu gero um retorno de erro do mesmo
        
        $dados = array(
            "tipo" => 'error',
            "mensagem" => 'Existe(m) campo(s) obrigatório(s) não preenchido(s).'
        );
    } else {
        if(isset($_FILES['FOTO'])){
            $FOTO = $_FILES['FOTO'];
            $QTD_FT = count($FOTO['name']);
            for($i = 0 ; $i < $QTD_FT; $i++){
                $nome_arquivo[$i] = $FOTO['name'][$i];
                $novo_nome[$i] = uniqid();
                $EXTENSION[$i] = strtolower(pathinfo($nome_arquivo[$i],PATHINFO_EXTENSION));
                if($EXTENSION[$i] != 'jpg' && $EXTENSION[$i] != 'png' && $EXTENSION[$i] != 'jpeg'){
                    $dados = array(
                        "tipo" => 'error',
                        "mensagem" => 'O arquivo precisa ser do tipo jpg ou png'
                    );
                } else {
                    $salvar[$i]  = move_uploaded_file($FOTO["tmp_name"][$i], $DIRETORIO.$novo_nome[$i].".".$EXTENSION[$i]);
                    if(!$salvar[$i]){
                        $dados = array(
                            "tipo" => 'error',
                            "mensagem" => 'Falha ao enviar o arquivo'
                        );
                    }
                }
            
        }
            }

        // Caso não exista campo em vazio, vamos gerar a requisição
        $ID = isset($requestData['ID']) ? $requestData['ID'] : '';
        $operacao = isset($requestData['operacao']) ? $requestData['operacao'] : '';

        // Verifica se é para cadastra um nvo registro
        if($operacao == 'insert'){
            // Prepara o comando INSERT para ser executado
            try{
                $stmt = $pdo->prepare('INSERT INTO RESTAURANTE (NOME, DESCRICAO, CEP, LOGRADOURO, BAIRRO, NUMERO, HORARIO, TELEFONE1, TELEFONE2, FACEBOOK, INSTAGRAM, IFOOD) VALUES (:a, :b, :c, :d, :e, :f, :g, :h, :i, :j, :k, :l)');
                $stmt->execute(array(
                    //':a' => utf8_decode($requestData['RESTAURANTE'])
                    ':a' => $requestData['NOME'],
                    ':b' => $requestData['DESCRICAO'],
                    ':c' => $requestData['CEP'],
                    ':d' => $requestData['LOGRADOURO'],
                    ':e' => $requestData['BAIRRO'],
                    ':f' => $requestData['NUMERO'],
                    ':g' => $requestData['HORARIO'],
                    ':h' => $requestData['TELEFONE1'],
                    ':i' => $requestData['TELEFONE2'],
                    ':j' => $requestData['FACEBOOK'],
                    ':k' => $requestData['INSTAGRAM'],
                    ':l' => $requestData['IFOOD'],
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
                INSTAGRAM = :k, IFOOD = :l WHERE ID = :id');
                $stmt->execute(array(
                    ':id' => $ID,
                     //':a' => utf8_decode($requestData['RESTAURANTE'])
                     ':a' => $requestData['NOME'],
                     ':b' => $requestData['DESCRICAO'],
                     ':c' => $requestData['CEP'],
                     ':d' => $requestData['LOGRADOURO'],
                     ':e' => $requestData['BAIRRO'],
                     ':f' => $requestData['NUMERO'],
                     ':g' => $requestData['HORARIO'],
                     ':h' => $requestData['TELEFONE1'],
                     ':i' => $requestData['TELEFONE2'],
                     ':j' => $requestData['FACEBOOK'],
                     ':k' => $requestData['INSTAGRAM'],
                     ':l' => $requestData['IFOOD'],
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