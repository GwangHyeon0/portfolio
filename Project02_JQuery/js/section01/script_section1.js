$(function(){



    $(".tabArea .tab li a").on("click", function(){
        // 해당 요소를 클릭하는 내 자신의 index 번호를 가져온다. [0], [1]
        const num = $(".tabArea .tab li a").index($(this));
        // 기존에 적용되어 있는 on class 삭제
        $(".tabArea .tab li").removeClass("on");
        $(".tabArea .tabBox").removeClass("on");
    
        // 다음 요소 클릭시 on class 추가
        $('.tabArea .tab li:eq(' + num + ')').addClass("on");
        $('.tabArea .tabBox:eq(' + num + ')').addClass("on");
    
      });



      // 팝업 페이드인 아웃 부분
    var number = $('#popup_zone > #popImgWrap > #popImg > ul.pop_num >li')
    var currentNum1 = 0;

    popfade();

    function popfade() {
        $('#popup_zone  > #popImgWrap > #popImg> ul.popSlide > li:gt(0)').hide();
       popslide = setInterval(function () {
            var pn = number.eq(currentNum1);
            pn.removeClass('bl');
            currentNum1++;

            if (currentNum1 == number.size()) { currentNum1 = 0 }
            var pnn = number.eq(currentNum1);
            pnn.addClass('bl')

            $('#popup_zone  > #popImgWrap > #popImg> ul.popSlide > li:first')
                .fadeOut(1000)
                .next()
                .fadeIn(1000)
                .end()
                .appendTo('ul.popSlide');
        }, 4000);
    }



    // 팝업 스탑 플레이 버튼
    $('.pop_stop').click(function () {
        clearInterval(popslide);
        $('.pop_stop').hide();
        $('.pop_play').show();
    });

    $('.pop_play').click(function () {
      popfade();
        $('.pop_play').hide();
        $('.pop_stop').show();
    });



     // 호버 기능
     $('li.pop_next, li.pop_prev, ul.popSlide').on({mouseover:function(){
        clearInterval(popslide);
    }, mouseout:function(){
        popfade();
    }})


    $('.pop_prev').click(function () {
        var pn = number.eq(currentNum1);
            pn.removeClass('bl');
            currentNum1--;

            if (currentNum1 == -number.size()) { currentNum1 = 0 }
            var pnn = number.eq(currentNum1);
            pnn.addClass('bl')

            $('#popup_zone  > #popImgWrap > #popImg> ul.popSlide > li:first')
                .fadeOut(1000)
                .next()
                .fadeIn(1000)
                .end()
                .appendTo('ul.popSlide');
    })
    $('.pop_next').click(function () {
        var pn = number.eq(currentNum1);
            pn.removeClass('bl');
            currentNum1++;

            if (currentNum1 == number.size()) { currentNum1 = 0 }
            var pnn = number.eq(currentNum1);
            pnn.addClass('bl')

            $('#popup_zone  > #popImgWrap > #popImg> ul.popSlide > li:first')
                .fadeOut(1000)
                .next()
                .fadeIn(1000)
                .end()
                .appendTo('ul.popSlide');
    })








   



})