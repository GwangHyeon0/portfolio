$(function(){

    $('#top_btn > ul.quick').hide();
    $(window).scroll(function(){
        if($(this).scrollTop()>1500){
            $('#top_btn > ul.quick').fadeIn();
        }else{
            $('#top_btn > ul.quick').fadeOut();
        }
    });


    //탑으로
    $('#top_btn > ul.quick > li.quick_top').click(function(){
        $('html,body').animate({scrollTop:945}, 400);
        return false;
    });
})