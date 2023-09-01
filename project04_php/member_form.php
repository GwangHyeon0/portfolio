<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>회원가입페이지</title>
    <link rel="stylesheet" type="text/css" href="./css/common.css">
    <link rel="stylesheet" type="text/css" href="./css/member.css">
<script src="https://kit.fontawesome.com/b51af6ee40.js" crossorigin="anonymous"></script>
<script src="./js/lib/jquery-1.7.2.min.js"></script>
<script src="./js/header.js"></script>

    <script>
        function check_input(){
            /* 아무것도 입력하지 않았을 때 경고창 출력 */
            if(!document.member_form.id.value.trim()){
                alert("아이디를 입력하세요!");
                document.member_form.id.focus();
                return;
            }
            /*  */
            if(!document.member_form.pass.value.trim()){
                alert("비밀번호를 입력하세요!");
                document.member_form.pass.focus();
                return;
            }

            if(!document.member_form.pass_confirm.value.trim()){
                alert("비밀번호확인 입력하세요!");
                document.member_form.pass_confirm.focus();
                return;
            }

            if(!document.member_form.name.value.trim()){
                alert("이름을 입력하세요!");
                document.member_form.name.focus();
                return;
            }

            if(!document.member_form.email1.value.trim()){
                alert("이메일 주소를 입력하세요!");
                document.member_form.email1.focus();
                return;
            }

            if(!document.member_form.email2.value.trim()){
                alert("이메일 주소를 입력하세요!");
                document.member_form.email2.focus();
                return;
            }

            /* 비밀번호와 비밀번호 확인입력창에 입력된 데이터가 같은지 비교 */
            if(document.member_form.pass.value.trim() != //같지 않다면
                document.member_form.pass_confirm.value.trim()){
                    alert("비밀번호가 일치하지 않습니다. \n 다시 입력해 주세요!");
                document.member_form.pass.focus();
                document.member_form.pass.select();
                return;
            }
            document.member_form.submit();
        }

        function reset_form(){ //입력한 데이터 초기화
            document.member_form.id.value = '';
            document.member_form.pass.value = '';
            document.member_form.pass_confirm.value = '';
            document.member_form.name.value = '';
            document.member_form.email1.value = '';
            document.member_form.email2.value = '';
            document.member_form.id.focus();
            return;
        }

        //아이디가 중복되는지 검사
        function check_id(){
            window.open("member_check_id.php?id=" + document.member_form.id.value,
            "IDcheck",
            "left=700,top=300,width=350,height=200,scrollbars=no,resizable=yes"
            );
        }


    </script>
</head>
<body>
    <header>
        <?php include "header.php";  ?>
    </header> 
    <section>
        <div id="main_img_bar">
            <!-- 배너이미지 -->
        </div>
        <div id="main_content">
            <div id="join_box">
                <form action="member_insert.php" method="post" name="member_form">
                    <h2>회원 가입</h2>
                    <div class="form id">
                        <div class="col1">아이디</div>
                        <div class="col2">
                            <input type="text" name="id">
                        </div>
                        <div class="col3">
                            <a href="#"><img src="./img/check_id.gif" alt="중복확인" onClick="check_id()"></a>
                        </div>
                    </div>
                    <div class="clear"></div>
                    <div class="form">
                        <div class="col1">비밀번호</div>
                        <div class="col2">
                            <input type="password" name="pass">
                        </div>
                    </div>

                    <div class="clear"></div>

                    <div class="form">
                        <div class="col1">비밀번호확인</div>
                        <div class="col2">
                            <input type="password" name="pass_confirm">
                        </div>
                    </div>

                    <div class="clear"></div>

                    <div class="form">
                        <div class="col1">이름</div>
                        <div class="col2">
                            <input type="text" name="name">
                        </div>
                    </div>

                    <div class="clear"></div>

                    <div class="form email">
                        <div class="col1">이메일</div>
                        <div class="col2">
                        <input type="text" name="email1">@<input type="text" name="email2">
                        </div>
                    </div>

                    <div class="clear"></div>
                    <div class="bottom_line"></div>

                    <div class="buttons"> <!-- 저장하기버튼 -->
                       
                        <img id="save_button" src="./img/button_save.gif" alt="저장하기" onClick="check_input()">
                        <img id="reset_button" src="./img/button_reset.gif" alt="취소하기" onClick="reset_form()">
                    </div>

                </form>
            </div>
        </div>

    </section>
    <footer>
    <?php include "footer.php";  ?>
    </footer>
</body>
</html>