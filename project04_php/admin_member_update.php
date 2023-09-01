<?php
    include "define.php";

    session_start();

    //회원레벨 가져오기 : 
    if(isset($_SESSION["userlevel"])) $userlevel = $_SESSION["userlevel"];
    else $userlevel = "";

    //관리자가 아닌경우 경고창 띄우기
    //1이 아니면 관리자가 아니므로 '관리자가 아닙니다!라는 메시지창 띄움)
    if($userlevel != 1)
    {
        echo("
            <script>
                alert('관리자가 아닙니다. 회원정보 수정은 관리자만 가능합니다.!');
                history.go(-1)
            </script>
        ");
        exit;
    }

    //관리자 입력 데이터 가져오기
    $num   = $_GET["num"];
    $level = $_POST["level"]; //관리자가 입력한 데이터 레벨
    $point = $_POST["point"];

    //회원 정보 업데이트
    $con = mysqli_connect("localhost", DBuser, DBpass, DBname);
    $sql = "update members set level=$level, point=$point where num=$num";
    mysqli_query($con, $sql);
    mysqli_close($con);

    echo ("
    <script>
        location.href = 'admin.php';
    </script>
    ");
?>