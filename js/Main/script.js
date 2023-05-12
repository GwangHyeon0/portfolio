$(function () {
    $('.type').typed({
        strings: ["Hello !" + "<br>" + " i'm Gwang Hyeon" + "<br>" + "Nice to meet you :)"],
        typeSpeed: 150,
        backDelay: 200,
        loop: true,
        showCursor: false
    })


    




});

$(document).ready(function () {


    // 1초마다 현재 시간값 재설정
    var timer = setInterval(function () {

        var now = new Date();
        var hr = now.getHours();
        var min = now.getMinutes();
        var sec = now.getSeconds();


        // 시간이 한자리 숫자일 때 앞에 0붙이기
        if (hr >= 10) {
            hNum = hr;
        } else {
            hNum = "0" + hr;
        };


        // 분이 한자리 숫자일 때 앞에 0붙이기
        if (min >= 10) {
            mNum = min;
        } else {
            mNum = "0" + min;
        };


        // 초가 한자리 숫자일 때 앞에 0붙이기
        if (sec >= 10) {
            sNum = sec;
        } else {
            sNum = "0" + sec;
        };


        // p태그 안에 시간 출력
        $('p span').eq(0).text(hNum);
        $('p span').eq(1).text(mNum);
        $('p span').eq(2).text(sNum);

    }, 1000)

    var now = new Date();
    var hr = now.getHours();

    // 시간에 따라 테마 화면 변경
    if (hr >= 5 && hr < 12) { //현재 시간이 5시보다 크거나 같고, 12시 보다는 작을 때
        $('#MainWrap').removeClass();
        $('#MainWrap').addClass('morning');
        $('nav li').removeClass();
        $('nav li').eq(0).addClass('on');
    } else if (hr >= 12 && hr < 18) { //현재 시간이 12시보다 크거나 같고, 18시 보다는 작을 때
        $('#MainWrap').removeClass();
        $('#MainWrap').addClass('afternoon');
        $('nav li').removeClass();
        $('nav li').eq(1).addClass('on');

    } else if (hr >= 18 && hr < 20) { //현재 시간이 18시보다 크거나 같고, 20시 보다는 작을 때
        $('#MainWrap').removeClass();
        $('#MainWrap').addClass('evening');
        $('nav li').removeClass();
        $('nav li').eq(2).addClass('on');
    } else { //나머지 시간
        $('#MainWrap').removeClass();
        $('#MainWrap').addClass('night');
        $('nav li').removeClass();
        $('nav li').eq(3).addClass('on');
    }


    //nav 버튼 클릭시 화면 테마 변경
    $('nav li').on('click', function () {
        var className = $(this).children('a').text();

        $('nav li').removeClass();
        $(this).addClass('on');
        $('#MainWrap').removeClass();
        $('#MainWrap').addClass(className);

    })


    // 둥실둥실

    $('#main_slogan').DB_springMove({
        dir:'y',         //움직이는 방향
        mirror:2,        //움직이는 반전된 반경
        radius:10,       //움직이는 반경 지름
        motionSpeed:0.07 //속도
        
    })


    // 사진클릭
    $(function(){
        $('.photo_Top').flip({
            axis:'y',
            reverse: true,		// false는 역전환
            trigger:'click'
        })
    });


});


$(function(){
    
    // 툴팁

    // 말풍선 div요소 준비
    var balloon = $('<div class= "balloon"> </div>').appendTo('body');
    // appendTo = 요소 끝에다 넣는다는 뜻

    // 말풍선 위치 설정
    function updateBalloonPosition(x,y){
        balloon.css({left:x+15,top:y});
    }

    // 말풍선 페이드 인/아웃으로 보이게 안보이게
    function showBalloon(){
        balloon.stop();     // 이미 애니메이션이 진행중인 경우 중지
        balloon.css('opacity',0).show();
        balloon.animate({opacity:1},200);
    }
    function hideBalloon(){
        balloon.stop();
        balloon.animate({opacity:0},200, function(){balloon.hide()});
    }

    // 클래스 photo_Top클래스가 있는 요소에 대해 풍선 도움말 표시작업
    $('.photo_Top').each(function(){
        var element = $(this);
        var text = element.attr('title');
        element.attr('title','');           //도움말(title) 비워놓기

        element.hover(function(event){
            // 말풍선 텍스트 업데이트
            balloon.text(text);

            // 커서 위치에서 풍선 도움말 위치 설정
            updateBalloonPosition(event.pageX, event.pageY);
            // x = 왼쪽 끝 
            // y = 탑 끝

            //말풍선보이기
            showBalloon();



        },function(){
            //말풍선 감추기
            hideBalloon(); 
        })

        element.mousemove(function(event){
            // mousemove 이벤트는 요소 안에서 마우스 포인터가 움직일 때 발생
            updateBalloonPosition(event.pageX, event.pageY);

        });

    });







});