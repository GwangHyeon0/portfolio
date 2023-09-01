$(function () {


    //슬라이드 헤더

    //menu1
    $("nav >#navMenu > ul > li").on("mouseenter focusin", function () {

        $(this).find(".sub1").addClass("active");
    });
    $("nav>#navMenu  > ul > li").on("mouseleave focusout", function () {

        $(this).find(".sub1").removeClass("active");
    });


    $("nav>#navMenu  > ul > li").click(function () {
        $(this).find(".sub1").removeClass("active");
    });



    //menu2
    $("nav>#navMenu  > ul > li").on("mouseenter focusin", function () {

        $(this).find(".sub2").addClass("active");
    });
    $("nav>#navMenu  > ul > li").on("mouseleave focusout", function () {

        $(this).find(".sub2").removeClass("active");
    });

    $("nav>#navMenu  > ul > li").click(function () {
        $(this).find(".sub2").removeClass("active");
    });



    //menu3
    $("nav>#navMenu  > ul > li").on("mouseenter focusin", function () {

        $(this).find(".sub3").addClass("active");
    });
    $("nav>#navMenu  > ul > li").on("mouseleave focusout", function () {

        $(this).find(".sub3").removeClass("active");
    });

    $("nav>#navMenu  > ul > li").click(function () {
        $(this).find(".sub3").removeClass("active");
    });





    // 호버시 스크롤
    // $(function(){
    //     $('#cont_menu > ul.menu > li').mouseenter(function(){
    //         $(this).find('ul').slideDown();
    //     });

    //     $('#cont_menu > ul.menu > li').click(function(){
    //         $(this).find('ul').slideUp();
    //     });

    // });

    $('#cont_menu > ul.menu > li').toggle(function () {
        $(this).find('ul').slideDown();
    }, function () {
        $(this).find('ul').slideUp()
    });



    
    $('#headerTap_lang > ul.selectBox > li').toggle(function () {
        $(this).find('ul').slideDown(600);
    }, function () {
        $(this).find('ul').slideUp(600);
    });
    
    // $(function(){
    //     $('#headerTap_lang > ul.selectBox > li').mouseenter(function(){
    //         $(this).find('ul').slideDown(600)
    //     });

    //     $('#headerTap_lang > ul.selectBox > li').click(function(){
    //         $(this).find('ul').slideUp(600)
    //     });

    // });
    



});





