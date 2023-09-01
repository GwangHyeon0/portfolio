<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>아이디중복체크</title>
    <link rel="stylesheet" type="text/css" href="./css/common.css" />
    <link rel="stylesheet" type="text/css" href="./css/member.css" />

</head>
<body>
    <div id="checkId_Wrap">
        <h3 class="checkId">아이디 중복체크</h3>
        <!-- 중복 확인을 위해 사용자가 입력한 아이디를 get방식으로 전달받음. -->
        <p>
            <?php
                include "define.php";
    
                $id = $_GET["id"]; //아이디 전달 받기. 
    
                if(!$id){ //값을 입력하지 않았다면
                    echo("<li>아이디를 입력해 주세요!</li>");
                }
                else{
                    $con = mysqli_connect("localhost", DBuser, DBpass, DBname);
                    
                    $sql = "select * from members where id='$id'";
                    /* 사용자가 아이디를 입력하면 members테이블에 동일한 아이디가 있는 지 검사 */
    
                    $result =  mysqli_query($con, $sql);
    
                    $num_record = mysqli_num_rows($result);
    
                    if($num_record){ //값을 가지고 있다면 DB에 동일한 아이디가 있다는 것
                        echo "<li>".$id."아이디는 중복됩니다.</li>";
                        echo "<li>다른 아이디를 사용해 주세요.</li>";
                    }
                    else{ //값이없거나 동일한 아이디가 존재하지 않는다면
                        echo "<li>".$id."아이디는 사용 가능합니다.</li>";
                        
                    }
                    mysqli_close($con);
                }
            ?>
        </p>
        <div id="close">
                <img src="./img/close.png"  onclick="javascript:self.close()"  alt="닫기">
        </div>
    </div>
</body>
</html>