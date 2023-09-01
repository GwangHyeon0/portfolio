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



    


})

