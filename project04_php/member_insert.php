<?php header("Content-Type:text/html;charset=utf-8"); ?>
<?php
    include "define.php";

    $id = $_POST["id"];
    $pass = $_POST["pass"];
    $name = $_POST["name"];
    $email1 = $_POST["email1"];
    $email2 = $_POST["email2"];

    $email = $email1."@".$email2; //이메일 주소를 합치기

    $regist_day = date("Y-m-d (H:i)"); //년-월-일-(시:분)

    $con = mysqli_connect("localhost", DBuser, DBpass, DBname);//서버접속

    $sql = "insert into members(id, pass, name, email, regist_day, level, point)";

    /* 추가 */
    $checkid = "select * from members where id='$id'";
    $result = mysqli_query($con, $checkid);//계정과 새로입력한 아이디값들을 실행
    $num_record = mysqli_num_rows($result);
    /* 추가끝 */

    $sql .= "values('$id', '$pass', '$name', '$email', '$regist_day',9,0)"; //레벨,포인트 기본으로 설정하기. 일반회원9, 최고권한1. 포인트기본0~
    // .=은 멤버접근 연산자

    if($num_record){
        echo("
            <script>
                window.alert('아이디가 중복되었습니다! 다른 아이디를 사용해 주세요.');
                history.go(-1); /*이전페이지로이동하기*/
            </script>
        ");
    } else{
        mysqli_query($con, $sql); //$sql에 저장된 명령을 Mysql에 연결하여 실행
    }

    mysqli_close($con); //서버연결끊기

    echo"
        <script>
            location.href = 'login_form.php'; /* 회원가입 후 로그인 페이지로 이동 */
        </script>
    ";
?>










    
?>