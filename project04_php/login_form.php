<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>로그인페이지</title>
    <link rel="stylesheet"  href="./css/common.css">
    <link rel="stylesheet"  href="./css/login.css">
    <script src="https://kit.fontawesome.com/b51af6ee40.js" crossorigin="anonymous"></script>
    
    <script  src="./js/login.js"></script>
    <script src="./js/lib/jquery-1.7.2.min.js"></script>
    <script src="./js/header.js"></script>
</head>
<body>
    <header>
        <?php include "header.php"; ?>
    </header>
    <section>
        <div id="main_img_bar"></div>
        <div id="main_content">
            <div id="login_box">
                <div id="login_title">
                    <span>로그인</span>
                </div>
                <div id="login_form">
                    <form action="login.php" method="post" name="login_form">
                        <ul>
                            <li>
                                <input type="text" name="id" placeholder="아이디" value="">
                            </li>
                            <li>
                                <input type="password" name="pass" placeholder="비밀번호" value="">
                            </li>
                            <li class="findId_Pw">
                                <a href="#none">아이디/비밀번호 찾기</a>
                            </li>
                        </ul>
                        <div id="login_btn">
                            <a href="#">
                                <img src="./img/login.png" onclick="check_input()" alt="">
                            </a>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>
    <footer>
        <?php include "footer.php"; ?>
    </footer>
</body>
</html>