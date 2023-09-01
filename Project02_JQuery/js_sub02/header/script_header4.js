$(function () {

    // 헤더 슬라이드
    var current1 = 0;
    var headerImg = $('#slide_menu >div');
    var tim;

    //동그라미 작은 버튼
    var sub_Btn = $('#slide_bottom_left > ul.circle > li')

    function init(){
		/* 브라우저가 열리자마자 실행 */
		
			$("html, body").animate({ scrollTop: 0 }, "slow");
			 $('header>#slideWrap').stop().animate({top:0});
			 $('section').stop().animate({top:0});
		
	};



    headerset();

    function headerset() {
        tim = setInterval(function () {

            var prev1 = headerImg.eq(current1);
            move1(prev1, 0, '-100%');
            sub_Btn.removeClass('on');

            current1++;

            if (current1 == headerImg.size()) {
                current1 = 0;
            }

            var next1 = headerImg.eq(current1)
            move1(next1, '100%', 0);
            sub_Btn.eq(current1).addClass('on');


        }, 3000);
    }



    function move1(tgg, start, end) {
        tgg.css('top', start).stop().animate({
            top: end
        }, 800);
    }


    //stop, play 버튼
    $('.header_stop').click(function () {
        clearInterval(tim);
        $('.header_stop').hide();
        $('.header_play').show();
    });

    $('.header_play').click(function () {
        headerset();
        $('.header_play').hide();
        $('.header_stop').show();
    });


    //////////////////////////////



    // Close 버튼 클릭시 발생하는 이벤트
    $('#slideWrap #slide_bottom ').find('.header_colse').on('click', function () {
        $('header #slideWrap').stop().animate({ top: -180 });
        $('#headerTap').stop().animate({ top: 0 });
        $('header #main_cont2').stop().animate({ top:-180 });

    })

    ////////////////////////////////////////




    /*  스크롤 이벤트 */
    // $(window).scroll(function () {
    //     if ($(this).scrollTop() > 10) {     //스크롤의 위치가 180보다 클 때
    //         $('header #slideWrap').stop().animate({ top: -180 });
    //         $('#headerTap').stop().animate({ top: 0 });
    //         $('header #main_cont2').stop().animate({ top: -180 });

    //     } else { //스크롤의 위치가 180보다 작을 때
    //         $('header #slideWrap').stop().animate({ top: 0 });
    //         $('#headerTap').stop().animate({ top:180 });
    //         $('header #main_cont2').stop().animate({ top: 0 });
    //     }
    // });

    //////////////////////////////////




    //슬라이드 헤더

    //menu1
    $("nav >#navMenu > ul > li").on("mouseenter focusin", function () {

        $(this).find(".sub1").addClass("active");
    });
    $("nav>#navMenu  > ul > li").on("mouseleave focusout", function () {

        $(this).find(".sub1").removeClass("active");
    });


    $("nav>#navMenu  > ul > li").click(function () {
        $(this).find(".sub1").removeClass("active");
    });



    //menu2
    $("nav>#navMenu  > ul > li").on("mouseenter focusin", function () {

        $(this).find(".sub2").addClass("active");
    });
    $("nav>#navMenu  > ul > li").on("mouseleave focusout", function () {

        $(this).find(".sub2").removeClass("active");
    });

    $("nav>#navMenu  > ul > li").click(function () {
        $(this).find(".sub2").removeClass("active");
    });



    //menu3
    $("nav>#navMenu  > ul > li").on("mouseenter focusin", function () {

        $(this).find(".sub3").addClass("active");
    });
    $("nav>#navMenu  > ul > li").on("mouseleave focusout", function () {

        $(this).find(".sub3").removeClass("active");
    });

    $("nav>#navMenu  > ul > li").click(function () {
        $(this).find(".sub3").removeClass("active");
    });


    ///////////////////////////



    // 배너 바텀 텍스트 애니메이트
    var slide1 = $('#swiperWrap>ul.swiper');

    //.width()메서드는 선택한 요소의 너비를 반환
    //.height()메서드는 선택한 요소의 높이를 반환
    var slideListWidth1 = $('#swiperWrap>ul.swiper>li').width();

    var setInterval01;

    mainSlide1();

    function mainSlide1() {
        setInterval01 = setInterval(function () {
            slide1.stop().animate({ left: -slideListWidth1 }, 1500, function () {
                $('ul.swiper>li:first').insertAfter('ul.swiper>li:last');
                slide1.css('left', 0);
            });
        }, 5000);
    }

    $('#swiperWrap>ul.swiper, .text_prev, .text_next').hover(function () {
        clearInterval(setInterval01);
    }, function () {
        mainSlide1();
    })

    //오른쪽에서 왼쪽으로 이동
    function next1_1() {
        slide1.stop().animate({ left: -slideListWidth1 }, 1500, function () {
            $('ul.swiper>li:first').insertAfter('ul.swiper>li:last');
            slide1.css('left', 0);
        })
    }

    //왼쪽에서 오른쪽으로 이동
    function prev1_1() {
        $('ul.swiper>li:last').insertBefore('ul.swiper>li:first');
        slide1.css('left', -slideListWidth1);
        slide1.animate({ left: 0 }, 1500);
    }

    $('.text_prev').click(function () {
        prev1_1();
    })
    $('.text_next').click(function () {
        next1_1();
    })

    //stop, play 버튼
    $('.text_stop').click(function () {
        clearInterval(setInterval01);
        $('.text_stop').hide();
        $('.text_play').show();
    });

    $('.text_play').click(function () {
        mainSlide1();
        $('.text_play').hide();
        $('.text_stop').show();
    });




    // 배너 페이드인 아웃 부분
    var number = $('#bannerText_wrap > ul.slideNumber >li')
    var currentNum = 0;

    Bannerfade();

    function Bannerfade() {
        $('#slideBanner >ul.bannerImg_Wrap > li:gt(0)').hide();
        bannerslide = setInterval(function () {
            var pn = number.eq(currentNum);
            pn.removeClass('bl');
            currentNum++;

            if (currentNum == number.size()) { currentNum = 0 }
            var pnn = number.eq(currentNum);
            pnn.addClass('bl')

            $('#slideBanner >ul.bannerImg_Wrap > li:first')
                .fadeOut(1000)
                .next()
                .fadeIn(1000)
                .end()
                .appendTo('ul.bannerImg_Wrap');
        }, 5000);
    }



    // 배너 스탑 플레이 버튼
    $('.banner_stop').click(function () {
        clearInterval(bannerslide);
        $('.banner_stop').hide();
        $('.banner_play').show();
    });

    $('.banner_play').click(function () {
        Bannerfade();
        $('.banner_play').hide();
        $('.banner_stop').show();
    });



});

/* 배너 페이드 인 아웃*/
// function slideSwitch() {
//     var $active = $('#slideBanner .bannerImg_Wrap li.bannerActive');
//     if ($active.length == 0) $active = $('#slideBanner .bannerImg_Wrap li:last');

//     // 슬라이드 이미지가 마지막이라면 첫번째 이미지가 보여지게 하고, 아니면
//     //  다음 이미지가 보여지도록
//     var $next = $active.next().length ? $active.next() : $('#slideBanner .bannerImg_Wrap li:first');

//     $next.animate({ opacity: 0.0 }, 1500).addClass('bannerActive').stop().animate({ opacity: 1 }, 1500, function () {
//         $active.removeClass('bannerActive');
//     });

// }

// $(function () {
//     setInterval('slideSwitch()', 3000);      //호출
// });





