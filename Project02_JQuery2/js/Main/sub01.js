$(function(){

    $('#section01 .btn-more').click(function(){
        $(this).css('display','none');
        $('section #section02').css('display','block');
        $('#section02 .btn-less').css('display','block');
    });


    $('#section02 .btn-less').click(function(){
        $(this).css('display','none');
        $('section #section02').css('display','none');
        $('#section01 .btn-more').css('display','block');
    });


})