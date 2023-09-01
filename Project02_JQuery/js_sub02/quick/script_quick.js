$(function(){

    $('#top_btn > ul.quick_btn').hide();
    $(window).scroll(function(){
        if($(this).scrollTop()>500){
            $('#top_btn > ul.quick_btn').fadeIn();
        }else{
            $('#top_btn > ul.quick_btn').fadeOut();
        }
    });

    $('#top_btn > ul.quick_btn > li.quick_top').click(function(){
        $('html,body').animate({scrollTop:500}, 700);
        return false;
    });
})