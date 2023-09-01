<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>게시판목록페이지</title>
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
        <h3>
            게시판 > 목록보기
        </h3>
        <ul id="board_list">
            <li>
                <span class="col1">번호</span>
                <span class="col2">제목</span>
                <span class="col3">글쓴이</span>
                <span class="col4">첨부</span>
                <span class="col5">등록일</span>
                <span class="col6">조회</span>
            </li>
<?php
    if(isset($_GET["page"])) //페이지번호 전달받기
        $page = $_GET["page"];
    else
        $page = 1;

    //db에서 전체 게시글 가져오기
    //board테이블에서 레코드 일련번호 num을 기준으로 내림차순으로 레코드를 가져와 $result에 저장.
    $con = mysqli_connect("localhost", DBuser, DBpass, DBname);
    $sql = "select * from board order by num desc";
    $result = mysqli_query($con, $sql);
    $total_record = mysqli_num_rows($result); //전체 글 수

    $scale = 10; //한 페이지에 표시되는 행의 개수

    //전체 페이지 수($total_page) 계산하기
    if($total_record % $scale === 0)
        $total_page = floor($total_record/$scale);
    else
        $total_page = floor($total_record/$scale) + 1;

    //표시할 페이지에 따라 $start 계산
    $start = ($page - 1) * $scale; //시작 레코드 번호
    $number = $total_record - $start; //글의 일련번호


    for($i=$start; $i<$start+$scale && $i < $total_record; $i++)
    {
        //글 목록의 항목 가져오기
        mysqli_data_seek($result, $i);

        $row = mysqli_fetch_array($result);

        $num   = $row["num"]; //레코드 일련번호
        $id   = $row["id"]; //글쓴이 아이디
        $name   = $row["name"]; //글쓴이 이름
        $subject   = $row["subject"]; //제목
        $regist_day   = $row["regist_day"]; //작성일
        $hit   = $row["hit"]; //조회수

        //첨부 파일 존재 시 아이콘 표시
        if($row["file_name"])
            $file_image = "<img src='./img/file.gif'>";

        else
            $file_image = "";
?>
        <li>
            <span class="col1"><?= $number?></span>
            <span class="col2"><a href="board_view.php?num=<?=$num?>&page=<?=$page?>"><?=$subject?></a></span>
            <span class="col3"><?=$name?></span>
            <span class="col4"><?=$file_image?></span>
            <span class="col5"><?=$regist_day?></span>
            <span class="col6"><?=$hit?></span>
        </li>
<?php
    $number--;
    }
    mysqli_close($con);
?>
        </ul>
        <ul id="page_num"> 
            <!-- 페이지 번호 표시 -->
            <?php
                if($total_page >=2 && $page >= 2)
                {
                    $new_page = $page-1;
                    echo "<li><a href='board_list.php?page=$new_page'>◀ 이전</a></li>";
                }
                else
                    echo "<li>&nbsp;</li>";

                //게시판 목록 하단에 페이지 링크 번호 출력
                for($i=1; $i<$total_page; $i++)
                {
                    if($page == $i) //현재 페이지번호는 링크 없앰
                    {
                        echo "<li><b> $i </b></li>";
                    }
                    else
                    {
                        echo "<li><a href='board_list.php?page=$i'> $i </a></li>";
                    }
                }
                if($total_page >=2 && $page != $total_page) //다음버튼
                {
                    $new_page = $page +1;
                    echo "<li><a href='board_list.php?page=$new_page'> 다음 ▶ </a></li>";
                }
                else
                    echo "<li>&nbsp;</li>"
            ?>
                </ul>
                <ul class="buttons">
                    <li><button onclick="location.href='board_list.php'">목록</button></li>
                    <li>
<?php
    if($userid){
?>
    <button onclick="location.href='board_form.php'">글쓰기</button>
<?php
    } else{
?>
        <a href="javascript:alert('로그인 후 이용해 주세요!')"><button>글쓰기</button></a>
<?php
    }
?>

                    </li>
                </ul>

        </ul>
    </div>      
    </section>
    <footer>
    <?php include "footer.php";?>
    </footer>

</body>
</html>