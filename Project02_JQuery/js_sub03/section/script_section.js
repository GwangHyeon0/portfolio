$(function () {

    $('.tab_sub').hide();

    $('.tabMenu>#tabNav>li').click(function(){

        $(this).find('.tab_sub').slideDown();

        $('.tabMenu>#tabNav>li.active').removeClass('active');
        $(this).addClass('active');
    
    })

    $('.tabMenu>#tabNav>li').mouseleave(function(){
            $(this).find('.tab_sub').slideUp();
        })
      




        // 공유하기 버튼 눌렀을 때
    $('#sub_util> ul> li.share').click(function(){
        $(this).find('ul').slideDown();

    })
        
    $('#sub_util> ul> li.share').mouseleave(function(){
        $(this).find('ul').slideUp();
    })

    $('#sub_util02> ul> li.share').click(function(){
        $(this).find('ul').slideDown();

    })
        
    $('#sub_util02> ul> li.share').mouseleave(function(){
        $(this).find('ul').slideUp();
    })



    //탭메뉴
    $(".tabArea .tab li a").on("click", function(){
        // 해당 요소를 클릭하는 내 자신의 index 번호를 가져온다. [0], [1]
        const num = $(".tabArea .tab li a").index($(this));
        // 기존에 적용되어 있는 on class 삭제
        $(".tabArea .tab li").removeClass("on");
        $(".tabArea .tabBox").removeClass("on");
    
        // 다음 요소 클릭시 on class 추가
        $('.tabArea .tab li:eq(' + num + ')').addClass("on");
        $('.tabArea .tabBox:eq(' + num + ')').addClass("on");

    


})

});

