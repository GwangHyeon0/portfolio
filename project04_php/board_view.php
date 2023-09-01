<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>게시판읽기페이지</title>
    <link rel="stylesheet" type="text/css" href="./css/common.css">
    <link rel="stylesheet" type="text/css" href="./css/board.css">
</head>
<body>
<header>
	<?php include "header.php";?>
</header>  
<section>
    <div id="main_img_bar"></div>
    <div id="board_box">
        <h3 class="title">게시판 > 내용보기</h3>
<?php
    //board_list.php에서 레코드 일련번호와 페이지번호 전달받기
    $num = $_GET["num"];
    $page = $_GET["page"];

    //db에서 해당 글 검색하여 글 정보 가져오기
	$con = mysqli_connect("localhost", DBuser, DBpass, DBname);
	$sql = "select * from board where num=$num";
	$result = mysqli_query($con, $sql);


    //$result에서 데이터 가져오기
    $row = mysqli_fetch_array($result);
    $id           = $row["id"];
    $name         = $row["name"];
    $regist_day   = $row["regist_day"];
    $subject      = $row["subject"];
    $content      = $row["content"];
    $file_name    = $row["file_name"];
    $file_type    = $row["file_type"];
    $file_copied  = $row["file_copied"];
    $hit          = $row["hit"];

    //공백과 줄바꿈 코드 변경
    $content = str_replace(" ","&nbsp;", $content);
    $content = str_replace("\n","<br>", $content);

    //조회수 증가와 DB업데이트
    $new_hit = $hit  + 1;
    $sql = "update board set hit=$new_hit where num=$num";
	mysqli_query($con, $sql);
?>

        <ul id="view_content">
            <li>
                <span>제목 : <?= $subject?> </span>
                <span><?= $name?> | <?= $regist_day?> </span>
            </li>
            <li>
                <?php
                    if($file_name){ /* 첨부 파일 정보 출력 */
                        $real_name = $file_copied;
                        $file_path = "./data/".$real_name;
                        $file_size = filesize($file_path);

                        echo "▼ 첨부파일 : $file_name($file_size Byte) &nbsp;&nbsp;&nbsp;&nbsp; <a href='download.php?num=$num&real_name=$real_name&file_name=$file_name&file_type=$file_type'>[저장]</a> ";
                    }
                ?>
                <?= $content ?> <!-- 글내용 -->
            </li>
        </ul>
        <ul class="buttons">
            <li><button onclick="location.href='board_list.php?page=<?=$page?>'">목록</button></li>
            <li><button onclick="location.href='board_modify_form.php?num=<?=$num?>&page=<?=$page?>'">수정</button></li>
            <li><button onclick="location.href='board_delete.php?num=<?=$num?>&page=<?=$page?>'">삭제</button></li>
            <li><button onclick="location.href='board_form.php'">글쓰기</button></li>
        </ul>
    </div>
</section>

<footer>
	<?php include "footer.php";?>
</footer>
</body>
</html>