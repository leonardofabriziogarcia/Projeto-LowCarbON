<?php
    $email = $_POST ['email'];
    $password = $_POST ['password'];
    $user_name = $_POST ['user_name'];

    // CONEXAO COM BANCO DE DADOS

    $conn = new mysqli('localhost', 'admin', '12345678', 'lowcarbon');
    if ($conn->connect_error){
        die('Falha na conexão: ' . $conn->connect_error);
    }else{
        $stmt = $conn->prepare("insert into cadastro(email, password, user_name) values(?, ? , ?");
        $stmt->bind_param("sss", $email, $password, $user_name);
        $stmt->execute();
        echo "Cadastro com sucesso!";
        $stmt->close();
        $conn->close();
    }
?>