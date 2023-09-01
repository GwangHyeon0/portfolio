<meta charset="utf-8">
<?php
    include "define.php";
    //사이트 게시판에 글을 쓰려면 로그인한 상태여야 함.

    session_start();

    if(isset($_SESSION["userid"])) $userid = $_SESSION["userid"];
    else $userid = "";
    if(isset($_SESSION["username"])) $username = $_SESSION["username"];
    else $username = "";

    if (!$userid)
    {
        echo("
            <script>
            alert('게시판 글쓰기는 로그인 후 이용해 주세요!');
            history.go(-1)
            </script>
        ");
        exit;
    }

    $subject = $_POST["subject"];
    $content = $_POST["content"];

    $subject =  htmlspecialchars($subject, ENT_QUOTES);
    $content =  htmlspecialchars($content, ENT_QUOTES);

    $regist_day = date("Y-m-d (H:i)");

    //업로드 폴더 설정
    $upload_dir = './data/';

	$upfile_name	 = $_FILES["upfile"]["name"];		// 업로드 파일명
	$upfile_tmp_name = $_FILES["upfile"]["tmp_name"];	// 실제 서버에 저장되는 임시 파일명
	$upfile_type     = $_FILES["upfile"]["type"];		// 업로드 파일의 형식
	$upfile_size     = $_FILES["upfile"]["size"];		// 업로드 파일의 크기
	$upfile_error    = $_FILES["upfile"]["error"];		// 오류 발생

    if ($upfile_name && !$upfile_error)
    {
        $file = explode(".", $upfile_name);
        $file_name = $file[0];
        $file_ext = $file[1];

        //실제 업로드 파일명 구하기
        //date()함수로 실제 업로드할 파일명을 구한 다음 확장자와 붙여서 $copied_file_name에 저장.

        $new_file_name = date("Y_m_d_H_i_s");
        $new_file_name = $new_file_name;
        $copied_file_name = $new_file_name.".".$file_ext;
        $uploaded_file = $upload_dir.$copied_file_name;

        //업로드 파일의 크기 제한하기
        //1메가바이트를 초과하면 경고 메세지 출력
        if($upfile_size > 1000000){
            echo("
                <script>
                    alert('업로드 파일 크기가 지정된 용량(1MB)를 초과합니다. <br> 파일 크기를 확인해 주세요!');
                    history.go(-1)
                </script>
            ");
            exit;
        }

        //업로드 파일을 ./data폴더에 저장
        //move_uploaded_file( )함수로 서버에 임시 저장된  $upfile_tmp_name을 $uploaded_file의 값인 경로/파일명 형태로 저장. 업로드 파일명이 중복되는것을 막아줌.
        if(!move_uploaded_file($upfile_tmp_name, $uploaded_file))
        {
            echo("
                <script>
                    alert('파일을 지정한 디렉토리에 복사하는데 실패했습니다.');
                    history.go(-1)
                </script>
            ");
            exit;
        }
    }
    else
    {
        $upfile_name        = "";
        $upfile_type        = "";
        $copied_file_name   = "";
    }
    
    //DB에 게시글 저장
    $con = mysqli_connect("localhost", DBuser, DBpass, DBname);

    $sql = "insert into board (id, name, subject, content, regist_day, hit,  file_name, file_type, file_copied) ";
	$sql .= "values('$userid', '$username', '$subject', '$content', '$regist_day', 0, ";
	$sql .= "'$upfile_name', '$upfile_type', '$copied_file_name')";
	mysqli_query($con, $sql);

    //포인트 부여
    //게시글을 쓰면 포인트 100점 부여. 부여되는 포인트는 $point_up을 100으로 설정.

    $point_up = 100;

    $sql = "select point from members where id='$userid'";
    $result = mysqli_query($con, $sql);
    $row = mysqli_fetch_array($result);
    $new_point = $row["point"] + $point_up;

    //포인트를 업데이트
    $sql = "update members set point = $new_point where id='$userid'";
	mysqli_query($con, $sql);

    //db연결 끊기
    mysqli_close($con);

    //글쓰기가 완료되면 리스트페이지로 이동

    echo("
        <script>
            location.href='board_list.php';
        </script>
    ");


?>