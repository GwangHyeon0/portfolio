$(function () {

    // 헤더 슬라이드
    var current1 = 0;
    var headerImg = $('#slide_menu >div');
    var tim;

    //동그라미 작은 버튼
    var sub_Btn = $('#slide_bottom_left > ul.circle > li')



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


    
    // Close 버튼 클릭시 발생하는 이벤트
    $('#slideWrap #slide_bottom ').find('.header_colse').on('click', function(){
        $('header #slideWrap').stop().animate({top:-220});
        $('#headerTap').stop().animate({top:-220});
        $('header #main_cont2').stop().animate({top:-220});
    })


    /*  스크롤 이벤트 */
    $(window).scroll(function(){
        if($(this).scrollTop()>1){     //스크롤의 위치가 100보다 클 때
            $('header #slideWrap').stop().animate({top:-220});
        $('#headerTap').stop().animate({top:-220});
        $('header #main_cont2').stop().animate({top:-220});
        }else { //스크롤의 위치가 100보다 작을 때
            $('header #slideWrap').stop().animate({top:0});
        $('#headerTap').stop().animate({top:0});
        $('header #main_cont2').stop().animate({top:0});
        }
    });






    //슬라이드 헤더


    //menu1
    $("nav >#navMenu > ul > li").on("mouseenter focusin", function () {

        $(this).find(".sub1").addClass("active");
    });
    $("nav>#navMenu  > ul > li").on("mouseleave focusout", function () {

        $(this).find(".sub1").removeClass("active");
    });

    //menu2
    $("nav>#navMenu  > ul > li").on("mouseenter focusin", function () {

        $(this).find(".sub2").addClass("active");
    });
    $("nav>#navMenu  > ul > li").on("mouseleave focusout", function () {

        $(this).find(".sub2").removeClass("active");
    });



    //menu3
    $("nav>#navMenu  > ul > li").on("mouseenter focusin", function () {

        $(this).find(".sub3").addClass("active");
    });
    $("nav>#navMenu  > ul > li").on("mouseleave focusout", function () {

        $(this).find(".sub3").removeClass("active");
    });

    


   












});