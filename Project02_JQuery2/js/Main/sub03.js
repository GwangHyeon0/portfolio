$(function(){

    //  탭메뉴 시작

    var cinema = $('#step-movieTab .tabUl li');
    var cinema_content = $('.tab_container > div');

    cinema_content.hide().eq(0).show();

    cinema.click(function(event){
        event.preventDefault();

        var target = $(this);
        var i = target.index();

        cinema.removeClass('active');
        target.addClass('active');

        cinema_content.css('display','none');
        cinema_content.eq(i).css('display','block');


    })



    //  탭메뉴 시작2

    var step_time = $('.timeTabWrap li');
    var step_time_content = $('#step-lastWrap > div');

    step_time_content.hide().eq(0).show();

    step_time.click(function(event){
        event.preventDefault();

        var target = $(this);
        var i = target.index();

        step_time.removeClass('active');
        target.addClass('active');

        step_time_content.css('display','none');
        step_time_content.eq(i).css('display','block');


    })




})