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
        dir: 'y', //움직이는 방향
        mirror: 2, //움직이는 반전된 반경
        radius: 10, //움직이는 반경 지름
        motionSpeed: 0.07 //속도

    })


    // 사진클릭
    $(function () {
        $('.photo_Top').flip({
            axis: 'y',
            reverse: true, // false는 역전환
            trigger: 'click'
        })
    });


});


$(function () {

    // // 툴팁

    // // 말풍선 div요소 준비
    // var tit_ho1 = $('<div class= "tit_ho1"> </div>').appendTo('body');
    // // appendTo = 요소 끝에다 넣는다는 뜻

    // // 말풍선 위치 설정
    // function updatetit_ho1Position(x, y) {
    //     tit_ho1.css({
    //         left: x + 15,
    //         top: y
    //     });
    // }

    // // 말풍선 페이드 인/아웃으로 보이게 안보이게
    // function showtit_ho1() {
    //     tit_ho1.stop(); // 이미 애니메이션이 진행중인 경우 중지
    //     tit_ho1.css('opacity', 0).show();
    //     tit_ho1.animate({
    //         opacity: 1
    //     }, 200);
    // }

    // function hidetit_ho1() {
    //     tit_ho1.stop();
    //     tit_ho1.animate({
    //         opacity: 0
    //     }, 200, function () {
    //         tit_ho1.hide()
    //     });
    // }

    // // 클래스 photo_Top클래스가 있는 요소에 대해 풍선 도움말 표시작업
    // $('.photo_Top').each(function () {
    //     var element = $(this);
    //     var text = element.attr('title');
    //     element.attr('title', ''); //도움말(title) 비워놓기

    //     element.hover(function (event) {
    //         // 말풍선 텍스트 업데이트
    //         tit_ho1.text(text);

    //         // 커서 위치에서 풍선 도움말 위치 설정
    //         updatetit_ho1Position(event.pageX, event.pageY);
    //         // x = 왼쪽 끝 
    //         // y = 탑 끝

    //         //말풍선보이기
    //         showtit_ho1();



    //     }, function () {
    //         //말풍선 감추기
    //         hidetit_ho1();
    //     })

    //     element.mousemove(function (event) {
    //         // mousemove 이벤트는 요소 안에서 마우스 포인터가 움직일 때 발생
    //         updatetit_ho1Position(event.pageX, event.pageY);

    //     });

    // });

    // // 툴팁2

    // // 말풍선 div요소 준비
    // var tit_ho2 = $('<div class= "tit_ho2"> </div>').appendTo('body');
    // // appendTo = 요소 끝에다 넣는다는 뜻

    // // 말풍선 위치 설정
    // function updatetit_ho2Position(x, y) {
    //     tit_ho2.css({
    //         left: x + 15,
    //         top: y
    //     });
    // }

    // // 말풍선 페이드 인/아웃으로 보이게 안보이게
    // function showtit_ho2() {
    //     tit_ho2.stop(); // 이미 애니메이션이 진행중인 경우 중지
    //     tit_ho2.css('opacity', 0).show();
    //     tit_ho2.animate({
    //         opacity: 1
    //     }, 200);
    // }

    // function hidetit_ho2() {
    //     tit_ho2.stop();
    //     tit_ho2.animate({
    //         opacity: 0
    //     }, 200, function () {
    //         tit_ho2.hide()
    //     });
    // }

    // // 클래스 photo_Top클래스가 있는 요소에 대해 풍선 도움말 표시작업
    // $('.secTitle').each(function () {
    //     var element = $(this);
    //     var text = element.attr('title');
    //     element.attr('title', ''); //도움말(title) 비워놓기

    //     element.hover(function (event) {
    //         // 말풍선 텍스트 업데이트
    //         tit_ho2.text(text);

    //         // 커서 위치에서 풍선 도움말 위치 설정
    //         updatetit_ho2Position(event.pageX, event.pageY);
    //         // x = 왼쪽 끝 
    //         // y = 탑 끝

    //         //말풍선보이기
    //         showtit_ho2();



    //     }, function () {
    //         //말풍선 감추기
    //         hidetit_ho2();
    //     })

    //     element.mousemove(function (event) {
    //         // mousemove 이벤트는 요소 안에서 마우스 포인터가 움직일 때 발생
    //         updatetit_ho2Position(event.pageX, event.pageY);

    //     });

    // });


    // 호버시 높이 반환
    $('.css_img .css_page').hover(function () {
        //innerHeight -> a요소의 높이 + 패딩
        var ah = $(this).find('a').innerHeight();
        var img = $(this).find('img');
        var imgh = $(this).find('img').innerHeight();

        img.stop().animate({
            top: ah - imgh
        }, 5000)

    }, function () {
        var img = $(this).find('img');
        img.stop().animate({
            top: 0
        }, 5000)
    })

    $('#section05Box .css_img .css_page').hover(function () {
        //innerHeight -> a요소의 높이 + 패딩
        var ah = $(this).find('a').innerHeight();
        var img = $(this).find('img');
        var imgh = $(this).find('img').innerHeight();

        img.stop().animate({
            top: ah - imgh
        }, 8000)

    }, function () {
        var img = $(this).find('img');
        img.stop().animate({
            top: 0
        }, 8000)
    })

    $('.Tablet_img .Tablet_page').hover(function () {
        //innerHeight -> a요소의 높이 + 패딩
        var ah = $(this).find('a').innerHeight();
        var img = $(this).find('img');
        var imgh = $(this).find('img').innerHeight();

        img.stop().animate({
            top: ah - imgh
        }, 7000)

    }, function () {
        var img = $(this).find('img');
        img.stop().animate({
            top: 0
        }, 7000)
    })

    $('#section05Box .mobile_img .mobile_page').hover(function () {
        //innerHeight -> a요소의 높이 + 패딩
        var ah = $(this).find('a').innerHeight();
        var img = $(this).find('img');
        var imgh = $(this).find('img').innerHeight();

        img.stop().animate({
            top: ah - imgh
        }, 10000)

    }, function () {
        var img = $(this).find('img');
        img.stop().animate({
            top: 0
        }, 10000)
    })





    //스크롤 이벤트
    // HTML/CSS

    // $(window).scroll(function () {
    //     var sct = $(this).scrollTop();
    //     if (sct >= 2950 && sct < 3950) {
    //         activateScene2();

    //     } else {
    //         no_activateScene2();

    //     }
    // });

    // function activateScene2() {
    //     var $content = $('.chart');

    //     //컨텐츠가 오른쪽에 나오도록

    //     $content.stop().animate({
    //         left: 0
    //     }, 1500, 'easeInOutQuint');
    // };

    // function no_activateScene2() {
    //     var $content = $('.chart');


    //     $content.stop().animate({
    //         left: '-120%'
    //     }, 1500, 'easeInOutQuint');
    // };

    /* 프로젝트 박스 */
    $('#section04Box').hide();
    $(window).scroll(function () {
        var sct = $(this).scrollTop();
        if (sct >= 2950 && sct < 3950) {
            $('#section04Box').stop().fadeIn(2000);

        } else {
            $('#section04Box').stop().fadeOut(2000);

        }
    });


    // 섹션5 반응형 스크롤이벤트
    $(window).scroll(function () {
        var sct = $(this).scrollTop();
        if (sct >= 3950 && sct < 4950) {
            activateScene3();

        } else {
            no_activateScene3();

        }
    });

    function activateScene3() {
        var $content = $('.chart1');

        //컨텐츠가 왼쪽에 나오도록

        $content.stop().animate({
            right: 0
        }, 1500, 'easeInOutQuint');
    };

    function no_activateScene3() {
        var $content = $('.chart1');


        $content.stop().animate({
            right: '-120%'
        }, 1500, 'easeInOutQuint');
    };


    /* 버튼 클릭시 메뉴 이동 */
    var banner = $('#sectionWrap03>#section03Box >#section03MainWrap > div');
    var button1 = $('ul.prevBox>li.prev');
    var button2 = $('ul.nextBox>li.next');
    var current = 0;



    function move(tg, start, end) {
        tg.css('left', start).stop().animate({
            left: end
        }, {
            duration: 500,
            ease: 'easeOutCubic'
        });

    }


    button1.click(function () {
        var prev = banner.eq(current);


        //현재 보여지는 이미지를 왼쪽으로 이동

        move(prev, 0, '100%');



        current++;

        // 조건문 배너 이미지가 끝까지 갔다면 초기화
        if (current == banner.size()) {
            current = 0
        }

        var next = banner.eq(current);


        // 다음 이미지는 현재 보여지도록 이동
        move(next, '-100%', 0);
        // 다음 넘버는 현재에서 보여지도록 addClass


        // 원래의 링크속성을 없애기
        return false;

    });

    button2.click(function () {
        var prev = banner.eq(current);


        move(prev, 0, '-100%');


        current--;

        if (current == -banner.size()) {
            current = 0
        }

        var next = banner.eq(current);


        move(next, '100%', 0);


        return false;

    });


    





    /* 섹션7 contact */
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
        $('#section07Box div p span').eq(0).text(hNum);
        $('#section07Box div p span').eq(1).text(mNum);
        $('#section07Box div p span').eq(2).text(sNum);

    }, 1000)


    // 사진클릭2
    $(function () {
        $('.card_box').flip({  
            axis: 'y',
            reverse: true, // false는 역전환
            trigger: 'hover'
        })
    });

    // $('.button').click(function(){
    //     $(this).parents('.card_box').flip({  
    //         axis: 'y',
    //         reverse: true, // false는 역전환
    //         trigger: 'hover'
    //     })
        
    // })

    
    

});

$(function(){

    var banner2 = $('#section06Box .img_box .mobile_img .mobile1 a');
    var button1_1 = $('#sectionWrap06 #section06Box .slideBox  .img_box .prevBox2 >li.prev2');
    var button1_2 = $('#sectionWrap06 #section06Box .slideBox  .img_box .nextBox2 >li.next2');
    var current2 = 0;


    timer1();

    function timer1(){
        setIntervalId1 = setInterval(function(){
            var prev = banner2.eq(current2);


            move1(prev,0,'-100%');


            current2++;

            if(current2 == banner2.size()){current2=0}

            var next = banner2.eq(current2);

            move1(next,'100%',0);

        },4000);
    }

    function move1(tg, start, end){
        tg.css('left', start).stop().animate({left:end},{duration:500, ease:'easeOutCubic'});
        
    }

    // 호버 기능
    $('#section06Box .img_box .mobile_img .mobile1 a').on({mouseover:function(){
        clearInterval(setIntervalId1);
    }, mouseout:function(){
        timer1();
    }})

     // 호버 기능
     $('#sectionWrap06 #section06Box .slideBox  .img_box .prevBox2 >li.prev2').on({mouseover:function(){
        clearInterval(setIntervalId1);
    }, mouseout:function(){
        timer1();
    }})

     // 호버 기능
     $('#sectionWrap06 #section06Box .slideBox  .img_box .nextBox2 >li.next2').on({mouseover:function(){
        clearInterval(setIntervalId1);
    }, mouseout:function(){
        timer1();
    }})


    button1_1.click(function(){
            var prev = banner2.eq(current2);


            move1(prev,0,'100%');
    
    
                current2--;
    
                if(current2 == -banner2.size()){current2=0}
    
                var next = banner2.eq(current2);
    
    
                move1(next,'-100%',0);
    
    
                return false; 


    });

    button1_2.click(function(){
        var prev = banner2.eq(current2);


        //현재 보여지는 이미지를 왼쪽으로 이동

        move1(prev,0,'-100%');



        current2++;
            
            // 조건문 배너 이미지가 끝까지 갔다면 초기화
            if(current2 == banner2.size()){current2=0}

            var next = banner2.eq(current2);

            
            // 다음 이미지는 현재 보여지도록 이동
            move1(next,'100%',0);
            // 다음 넘버는 현재에서 보여지도록 addClass


            // 원래의 링크속성을 없애기
            return false; 

    });



})

$(function(){

    var banner3 = $('#section06Box .img_box .mobile_img .mobile2 a');
    var button2_1 = $('#sectionWrap06 #section06Box .slideBox  .img_box .prevBox2 >li.prev2');
    var button2_2 = $('#sectionWrap06 #section06Box .slideBox  .img_box .nextBox2 >li.next2');
    var current2 = 0;


    timer2();

    function timer2(){
        setIntervalId2 = setInterval(function(){
            var prev = banner3.eq(current2);


            move2(prev,0,'-100%');


            current2++;

            if(current2 == banner3.size()){current2=0}

            var next = banner3.eq(current2);

            move2(next,'100%',0);

        },4000);
    }

    function move2(tg, start, end){
        tg.css('left', start).stop().animate({left:end},{duration:500, ease:'easeOutCubic'});
        
    }

    // 호버 기능
    $('#section06Box .img_box .mobile_img .mobile2 a').on({mouseover:function(){
        clearInterval(setIntervalId2);
    }, mouseout:function(){
        timer2();
    }})

     // 호버 기능
     $('#sectionWrap06 #section06Box .slideBox  .img_box .prevBox2 >li.prev2').on({mouseover:function(){
        clearInterval(setIntervalId2);
    }, mouseout:function(){
        timer2();
    }})

     // 호버 기능
     $('#sectionWrap06 #section06Box .slideBox  .img_box .nextBox2 >li.next2').on({mouseover:function(){
        clearInterval(setIntervalId2);
    }, mouseout:function(){
        timer2();
    }})


    button2_1.click(function(){
        
        var prev = banner3.eq(current2);


        move2(prev,0,'100%');


            current2--;

            if(current2 == -banner3.size()){current2=0}

            var next = banner3.eq(current2);


            move2(next,'-100%',0);


            return false; 
            




    });

    button2_2.click(function(){
        var prev = banner3.eq(current2);


        //현재 보여지는 이미지를 왼쪽으로 이동

        move2(prev,0,'-100%');



        current2++;
            
            // 조건문 배너 이미지가 끝까지 갔다면 초기화
            if(current2 == banner3.size()){current2=0}

            var next = banner3.eq(current2);

            
            // 다음 이미지는 현재 보여지도록 이동
            move2(next,'100%',0);
            // 다음 넘버는 현재에서 보여지도록 addClass


            // 원래의 링크속성을 없애기
            return false; 

    });



})


function openPop(){
    window.open("../","_blank", "width=680, height=800");
  }

  function openPop2(){
    window.open("file:///D:/%EB%B3%B5%EA%B4%91%ED%98%84/01-HTML5-CSS-%ED%95%99%EC%8A%B5%EC%9E%90%EC%9A%A9/%ED%8F%AC%ED%8A%B8%ED%8F%B4%EB%A6%AC%EC%98%A4_%EC%A0%9C%EC%9E%91/Project03_Responsive/index.html","_blank", "width=390, height=800");
  }