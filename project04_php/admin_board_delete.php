<?php
    include "define.php";

    session_start();

    //회원레벨 가져오기 
    if(isset($_SESSION["userlevel"])) $userlevel = $_SESSION["userlevel"];
    else $userlevel = "";

    if($userlevel != 1){
        echo("
        <script>
            alert('관리자가 아닙니다. 게시판 삭제는 관리자만 가능합니다.!');
            history.go(-1);
        </script>

        ");
        exit;
    }

    // 체크박스 선택 여부 판단
    if(isset($_POST["item"]))
        $num_item = count($_POST["item"]);
    else{
        echo("
        <script>
            alert('삭제할 게시글을 선택해주세요!');
            history.go(-1);
        </script>
    ");
    }
        
    $con = mysqli_connect("localhost", DBuser, DBpass, DBname);
    
    for($i=0; $i<count($_POST["item"]); $i++){
        $num = $_POST["item"][$i];
        
        //업로드된 첨부파일명 가져오기
        $sql = "select * from board where num=$num";
        $result = mysqli_query($con, $sql);
        $row = mysqli_fetch_array($result);

        $copied_name = $row["file_copied"];

        //첨부파일 삭제
        if($copied_name){
            $file_path="./data/".$copied_name;
            unlink($file_path);
        }

        //게시글 삭제
        $sql = "delete from board where num=$num";
        $result = mysqli_query($con, $sql);
    }
    mysqli_close($con);

    echo ("
        <script>
            location.href = 'admin.php';
        </script>
    ");

?>