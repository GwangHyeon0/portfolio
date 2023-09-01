    
    <div id="main_content">
        <div id="latest">
            <h4>최근 게시글</h4>
            <p class="notice_plus"><a href="board_list.php"> + </a></p>
            <ul class="cf">
            <!-- 최근 게시글 5,4,3,2,1 내림차순으로 DB에서 불러오기 -->   
<?php
    $con = mysqli_connect("localhost", DBuser, DBpass, DBname);
    //mysqli_connect()은 MariaDB Server에 연결하는 함수
    $sql = "select * from board order by num desc limit 5";
    //게시판 DB 테이블 board에 저장되어 있는 최근 게시글 5개를 내림차순으로 정렬
    $result = mysqli_query($con, $sql);

    if (!$result) //게시글이 생성되지 않았다면
        echo "게시판 DB 테이블(board)이 생성 전이거나 아직 게시글이 없습니다!";
    else{
        while( $row = mysqli_fetch_array($result))
        /* mysqli_fetch_array()는 더이상 배열의 형태로 반환할 데이터가 없을때까지 반환 */
        {
            $regist_day = substr($row["regist_day"],0,10);


?>
                <li>
                   <span><?= $row["subject"] ?></span> <!-- 제목 -->
                   <span><?= $row["name"] ?></span> <!-- 이름 -->
                   <span><?= $regist_day ?></span> <!-- 작성일 -->
                </li>
<?php
        }
    }
?>
            </ul>
        </div>
        <div id="point_rank">
            <h4>포인트랭킹</h4>
            <ul>
            <!-- 포인트 랭킹 표시하기 -->
<?php
    $rank = 1; /* 최상위권한1, 일반권한9 */
    /* 포인트가 상위인 회원의 정보 가져오기 */
    $sql = "select * from members order by point desc limit 5"; /* 0번째부터 5개 내림차순 출력 */
    $result = mysqli_query($con, $sql); /*DB에 등록된 포인트 정보 */

    if(!$result) /* 가입된 회원이 없다면 */
        echo "회원 DB 테이블(members)이 생성 전이거나 아직 가입된 회원이 없습니다!";
    else
    {
        while( $row = mysqli_fetch_array($result) )
        {
            $name = $row["name"]; //members테이블에서 가져온 name,id,point필드 값
            $id = $row["id"];
            $point = $row["point"];

            $name = mb_substr($name,0,1)." * ".mb_substr($name,2,1);
            /* 한글 문자열 추출: 회원 이름 x * x이런식으로 표시 */

?>          
            <li>
                <span><?= $rank ?></span>
                <span><?= $name ?></span>
                <span><?= $id ?></span>
                <span><?= $point ?></span>
            </li>
<?php
        $rank++;
        }
    }
    mysqli_close($con); //MySQL 연결
?>
               
            </ul>
        </div>
    </div>