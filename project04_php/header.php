<?php
    include "define.php";

    session_start(); //세션 시작. 

    if (isset($_SESSION["userid"])) $userid = $_SESSION["userid"];
    else $userid = ""; //null. 즉 로그인 상태가 아니라면 

    if (isset($_SESSION["username"])) $username = $_SESSION["username"];
    else $username = "";

    if (isset($_SESSION["userlevel"])) $userlevel = $_SESSION["userlevel"];
    else $userlevel = "";

    if (isset($_SESSION["userpoint"])) $userpoint = $_SESSION["userpoint"];
    else $userpoint = "";

?>
    <div id="top">			
        <ul class="sns">
            <li><a href="#none" title="페이스북 바로가기"><i class="fa-brands fa-facebook"></i></a></li>
            <li><a href="#none" title="인스타 바로가기"><i class="fa-brands fa-instagram"></i></a></li>
            <li><a href="#none" title="유튜브 바로가기"><i class="fa-brands fa-youtube"></i></a></li>
            <li><a href="#none" title="360˚VR 체험하기"><i class="fa-solid fa-vr-cardboard"></i></a></li>
        </ul>
        <h1>
            <a href="index.php"><img src="./img/FC-SEOUL.png"  alt="logo"></a>
        </h1>
        <ul id="top_menu">
<?php
    if(!$userid){
      
?>
     <li><a href="#none">FAQ</a></li>
     <li> | </li>
     <li><a href="member_form.php">회원가입</a></li>
     <li> | </li>
     <li><a href="login_form.php">로그인</a></li>

<?php
} else {
    //$userid가 값을 가진 경우라면 로그인 상태 (사용자이름, 아이디,레벨,포인트,로그아웃)
    $logged = $username."님 ";

?>
    <li class="logged"><?= $logged ?></li>
    <li> | </li>
    <li><a href="logout.php">로그아웃</a></li>
    <li> | </li>
    <li><a href="member_modify_form.php">마이페이지</a></li>

<?php
}
?>

        </ul>
    </div>
    <!-- <div id="menu_bar">
        <ul>
            <li><a href="#">회사소개</a></li>
            <li><a href="#">제품소개</a></li>
            <li><a href="board_list.php">Notice</a></li>
            <li><a href="member_modify_form.php">마이페이지</a></li>
        </ul>
    </div> -->