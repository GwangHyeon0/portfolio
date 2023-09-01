$(function(){
    //모니터 화면에 hover했을 때 자동 스크롤

    // .width(), .height() = 요소의 크기 
    // .innerWidth(), .innerHeight() = 요소의 크기 + 패딩
    // .outerWidth(), .outerHeight() = 요소의 크기 + 패딩 + 테두리
    // .outerWidth(true), .outerHeight(true) = 요소의 크기 + 패딩 + 테두리 + 마진
    // 


    $('.css_img .main_page').hover(function(){
        //innerHeight -> a요소의 높이 + 패딩
        var ah = $(this).find('a').innerHeight();
        var img = $(this).find('img');
        var imgh = $(this).find('img').innerHeight();

        img.stop().animate({top:ah-imgh},5000)

    }, function(){
        var img = $(this).find('img');
        img.stop().animate({top:0},5000)
    })



 







})