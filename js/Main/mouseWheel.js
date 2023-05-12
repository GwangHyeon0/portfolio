$(function () {


    // top버튼
    $('.headerTop >div').hide();
    $(window).scroll(function () {
        if ($(this).scrollTop() > 900) {
            $('.headerTop >div').fadeIn();

        } else {
            $('.headerTop >div').fadeOut();
        }
    });


})




$(function () {
    var options = {
        'alwaysTop': false, //true이면 고정, 항상따라다니도록false
        'default_x': '.header', //가로축, 레이아웃이 가운데 정렬일때 레이어가 붙는 아이디 값
        'initTop': 300, //초기의 스크롤의 위치
        'speed': 500 //속도
    }

    $('#floatdiv').Floater(options); //레이러를 항상 화면에 떠있거나 따라다니도록 처리

    //페이지 위치


    $('#btn01').click(function () {
        $('html,body').animate({
            scrollTop: $('#MainWrap').offset().top

        }, 800);
    });
    $('#btn02').click(function () {
        $('html,body').animate({
            scrollTop: $('#sectionWrap01').offset().top
        }, 800);
    });
    $('#btn03').click(function () {
        $('html,body').animate({
            scrollTop: $('#sectionWrap02').offset().top
        }, 800);
    });
    $('#btn04').click(function () {
        $('html,body').animate({
            scrollTop: $('#sectionWrap03').offset().top
        }, 800);
    });
    $('#btn05').click(function () {
        $('html,body').animate({
            scrollTop: $('#sectionWrap04').offset().top
        }, 800);
    });
    $('#btn06').click(function () {
        $('html,body').animate({
            scrollTop: $('#sectionWrap05').offset().top
        }, 800);
    });
    $('#btn07').click(function () {
        $('html,body').animate({
            scrollTop: $('#sectionWrap06').offset().top
        }, 800);
    });

    $('#btn08').click(function () {
        $('html,body').animate({
            scrollTop: $('#sectionWrap07').offset().top

        }, 800);
    });

    var menu = $('.headerTop>.headerFix>ul>li');
    var contents = $('#wrap>div');
    var btn = $('#floatdiv ul li');


    //메뉴 클릭시 페이지로 이동
    menu.click(function (event) {
        event.preventDefault();
        var tg = $(this);
        var i = tg.index();
        var section = contents.eq(i);
        var tt = section.offset().top; //section을 top으로 이동한 값을 tt

        $('html,body').stop().animate({
            scrollTop: tt

        });

    });

    //스크롤 이동시 메뉴와 버튼 활성화
    $(window).scroll(function () {
        var sct = $(window).scrollTop();
        contents.each(function () {
            var tg = $(this);
            var i = tg.index();
            if (tg.offset().top <= sct) {
                menu.removeClass('on');
                menu.eq(i).addClass('on');

                menu.removeClass('active');
                menu.eq(i).addClass('active');


                btn.removeClass('active');
                btn.eq(i).addClass('active');




            }
        })
    })



    floatDiv();


    //마우스 휠 이벤트
    function floatDiv() {
        var contents = $('#wrap>div');

        //스크롤 이동시 컨텐츠 영역들 탑으로 이동
        $(window).scroll(function () {
            var sct = $(window).scrollTop();

            contents.each(function () {
                var tg = $(this);
                var i = tg.index();


                //스트롤탑의 위치가 top보다 크거나 같다면 tg를 특정좌표로 이동
                if (tg.offset().top <= sct) {
                    switch (i) {
                        case 0:
                            skillsProgressbar();
                            break;
                    }
                }
            });
        });

        //마우스 휠 이벤트
        $('#wrap>div.scroll_menu').each(function () {
            $(this).on('mousewheel DOMMouseScroll', function (e) {
                e.preventDefault();
                var delta = 0;
                if (!event) event = window.event;

                if (event.wheelDelta) {

                    delta = event.wheelDelta / 120; /* 익스,크롬,오페라 */
                } else if (event.detail) delta = -event.detail / 3; /* /3대신에 -40을 사용하기도함. 사파리 및 크롬에서 wheelDelta 는 마우스 휠의 경우 120대신 3을 사용 */

                var moveTop = null;
                //마우스 휠을 위에서 아래로
                if (delta < 0) {
                    if ($(this).next() != undefined) {
                        moveTop = $(this).next().offset().top;

                    }
                } else { //마우스 휠을 아래에서 위로
                    if ($(this).prev() != undefined) {
                        moveTop = $(this).prev().offset().top;
                    }
                }
                //화면이동 0.5초
                $('html,body').stop().animate({
                    scrollTop: moveTop + 'px'

                }, {
                    duration: 500
                })


            })
        })

    };


    /* skills */
    function skillsProgressbar() {
        var htmlNum = 80;
        var cssNum = 77;
        var javascriptNum = 75;
        var jqueryNum = 81;
        var photoshopNum = 86;
        var illustratorNum = 74;
        var max = 100;
        var duration = 1500;

        //그래프 처음 위치 초기화
        $('.bar').css('right', '100%');

        //html
        $('#html_bar').stop().animate({
            'right': 100 - (htmlNum / max * 100) + '%',
        }, {
            'duration': duration,
            'easing': 'easeInOutQuart',
            'progress': function (animation, progress, msRemaining) {
                $('#html_cnt').text(Math.round(htmlNum * progress)); //반올림
            }
        });

        //css
        $('#css_bar').stop().animate({
            'right': 100 - (cssNum / max * 100) + '%',
        }, {
            'duration': duration,
            'easing': 'easeInOutQuart',
            'progress': function (animation, progress, msRemaining) {
                $('#css_cnt').text(Math.round(cssNum * progress)); //반올림
            }
        });

        //javascript
        $('#javascript_bar').stop().animate({
            'right': 100 - (javascriptNum / max * 100) + '%',
        }, {
            'duration': duration,
            'easing': 'easeInOutQuart',
            'progress': function (animation, progress, msRemaining) {
                $('#javascript_cnt').text(Math.round(javascriptNum * progress)); //반올림
            }
        });

        //jquery
        $('#jquery_bar').stop().animate({
            'right': 100 - (jqueryNum / max * 100) + '%',
        }, {
            'duration': duration,
            'easing': 'easeInOutQuart',
            'progress': function (animation, progress, msRemaining) {
                $('#jquery_cnt').text(Math.round(jqueryNum * progress)); //반올림
            }
        });

        //photoshop
        $('#photoshop_bar').stop().animate({
            'right': 100 - (photoshopNum / max * 100) + '%',
        }, {
            'duration': duration,
            'easing': 'easeInOutQuart',
            'progress': function (animation, progress, msRemaining) {
                $('#photoshop_cnt').text(Math.round(photoshopNum * progress)); //반올림
            }
        });

        //illustrator
        $('#illustrator_bar').stop().animate({
            'right': 100 - (illustratorNum / max * 100) + '%',
        }, {
            'duration': duration,
            'easing': 'easeInOutQuart',
            'progress': function (animation, progress, msRemaining) {
                $('#illustrator_cnt').text(Math.round(illustratorNum * progress)); //반올림
            }
        });



    }



});