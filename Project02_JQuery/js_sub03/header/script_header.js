$(function(){

    $('#navWrap ul.dep1Wrap li.dep1').hover(function(){
        $('#navWrap').find('.sub_shadow').stop().slideDown();
    }, function(){
        $('#navWrap').find('.sub_shadow').stop().slideUp();
    })

    $('#navWrap ul.dep1Wrap li.dep1').hover(function(){
        $(this).stop().animate({height:450});
    }, function(){
        $(this).stop().animate({height:50});
    })



    
})