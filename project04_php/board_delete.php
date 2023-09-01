<!-- 관리자만 게시판 삭제가능하도록 -->
<?php
include "define.php";

session_start();
if (isset($_SESSION["userlevel"])) $userlevel = $_SESSION["userlevel"];
else $userlevel = "";

if ( $userlevel != 1 )
{
    echo("
        <script>
        alert('관리자가 아닙니다! 삭제는 관리자만 가능합니다!');
        history.go(-1)
        </script>
    ");
            exit;
}

//글 내용 보기 페이지 board_view.php 파일에서 하단 삭제를 클릭하면 글삭제 board_delete.php 페이지로이동

    //레코드번호와 페이지 번호 전달받기
    //글 내용 보기 페이지(board_view.php)로부터 GET 방식으로 전달받은 레코드 번호($_GET[“num”])와 
    //페이지 번호($_GET[“page”])를 $num, $page에 저장.
    $num   = $_GET["num"];
    $page   = $_GET["page"];


    //삭제할 첨부 파일명 가져오기
    $con = mysqli_connect("localhost", DBuser, DBpass, DBname);
    $sql = "select * from board where num = $num";//$num을 이용해 해당 레코드 정보를 가져와 
    $result = mysqli_query($con, $sql); //$result에 저장
    $row = mysqli_fetch_array($result); 

    $copied_name = $row["file_copied"]; //첨부파일명을 구하여 $copied_name에 저장



    // 첨부파일 삭제
	if ($copied_name)
	{
		$file_path = "./data/".$copied_name;
		unlink($file_path); //서버에 저장된 첨부파일 삭제
    }

    //DB에서 해당 레코드 삭제
    $sql = "delete from board where num = $num";
    mysqli_query($con, $sql);
    mysqli_close($con);

    echo "
        <script>
        //페이지 이동
            location.href = 'board_list.php?page=$page';
        </script>
    ";
?>