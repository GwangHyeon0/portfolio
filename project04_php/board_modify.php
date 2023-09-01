<?php
    include "define.php";

    //레코드 번호, 페이지번호, 내용 전달받기
    $num = $_GET["num"];
    $page = $_GET["page"];

    $subject = $_POST["subject"];    //수정된 글 제목
    $content = $_POST["content"];    //수정된 글 내용

    $con = mysqli_connect("localhost", DBuser, DBpass, DBname);
    
    $sql = "update board set subject='$subject', content='$content'";
    $sql .= " where num=$num";

    mysqli_query($con,$sql);

    mysqli_close($con);

    echo("
        <script>
            location.href = 'board_list.php?page=$page';
        </script>
    ")

?>