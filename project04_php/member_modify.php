<?php
    include "define.php";

    $id = $_GET["id"];
    $pass = $_POST["pass"];
    $name = $_POST["name"];
    $email1 = $_POST["email1"];
    $email2 = $_POST["email2"];

    $email = $email1."@".$email2;

    $con = mysqli_connect("localhost", DBuser, DBpass, DBname);

    $sql = "update members set pass='$pass', name='$name', email='$email'";

    $sql .= " where id='$id'"; //멤버접근연산자

    mysqli_query($con, $sql); //$sql에 저장된 명령을 실행

    mysqli_close($con);

    echo ("
        <script>
            location.href = 'index.php';
        </script>
    ");


?>