$(function(){

    // 탭 슬라이드
    var slide1 = $('#section03_Slidetab>div.slidetab');
    var slide2 = $('#section03_Slidetab>div#tabcont > div.tab_content > ul');
    //.width()메서드는 선택한 요소의 너비를 반환
    //.height()메서드는 선택한 요소의 높이를 반환
    var slideTabWidth1 = $('#section03_Slidetab>div.slidetab>div').width();
    var slideTabWidth2 = $('#section03_Slidetab>div#tabcont > div.tab_content > ul> li').width();
   
    var setInterval01;
   
    mainTabSlide1();
   
    function mainTabSlide1() {
        setInterval01 = setInterval(function () {
            slide1.stop().animate({ left: -slideTabWidth1 }, 1500, function () {
                $('#section03_Slidetab>div.slidetab>div:first').insertAfter('#section03_Slidetab>div.slidetab>div:last');
            
                slide1.css('left', 0);
   
   
   
   
            });
   
            slide2.stop().animate({ left: -slideTabWidth2 }, 1500, function () {
                $('#section03_Slidetab>div#tabcont > div.tab_content > ul> li:first').insertAfter('#section03_Slidetab>div#tabcont > div.tab_content > ul> li:last');
            
                slide2.css('left', 0);
   
   
   
   
            });
   
   
        }, 4000);
    }
   
    //hover기능
    
    var menu2 = $('.tab_content ul li '); //썸네일 이미지
   
    menu2.find('.hover').hide();
   
    menu2.hover(function(){
       var tg = $(this);
       var ti = tg.find('.hover');
       ti.stop().fadeIn(300);
       clearInterval(setInterval01);
    }, function(){
        var tg = $(this);
       var ti = tg.find('.hover');
       ti.stop().fadeOut(300);
       mainTabSlide1();
    });
   
    $(' .section03_prev, .section03_next').hover(function () {
        clearInterval(setInterval01);
    }, function () {
        mainTabSlide1();
    })
   
   
     //오른쪽에서 왼쪽으로 이동
     function next1_1() {
        $('#section03_Slidetab>div.slidetab>div:first').insertAfter('#section03_Slidetab>div.slidetab>div:last');
        slide1.css('left', -slideTabWidth1);
        slide1.animate({ left: 0 }, 1500);
   
        $('#section03_Slidetab>div#tabcont > div.tab_content > ul> li:first').insertAfter('#section03_Slidetab>div#tabcont > div.tab_content > ul> li:last');
        slide2.css('left', -slideTabWidth2);
        slide2.animate({ left: 0 }, 1500);
    }
   
    //왼쪽에서 오른쪽으로 이동
    function prev1_1() {
        $('#section03_Slidetab>div.slidetab>div:last').insertBefore('#section03_Slidetab>div.slidetab>div:first');
        slide1.css('left', -slideTabWidth1);
        slide1.animate({ left: 0 }, 1500);
   
        $('#section03_Slidetab>div#tabcont > div.tab_content > ul> li:last').insertBefore('#section03_Slidetab>div#tabcont > div.tab_content > ul> li:first');
        slide2.css('left', -slideTabWidth2);
        slide2.animate({ left: 0 }, 1500);
   
    }
   
    $('.section03_prev').click(function () {
        prev1_1();
    })
    $('.section03_next').click(function () {
        next1_1();
    })
   
    //stop, play 버튼
    $('.section03_stop').click(function () {
        clearInterval(setInterval01);
        $('.section03_stop').hide();
        $('.section03_play').show();
    });
   
    $('.section03_play').click(function () {
        mainTabSlide1();
        $('.section03_play').hide();
        $('.section03_stop').show();
    });
   
   
   
       
   })