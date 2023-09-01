$(function(){

    //  탭메뉴 시작

    var city_tab = $('#city ul li');
    var city_content = $('#cityBox #citycity');

    city_content.hide().eq(0).show();

    city_tab.click(function(event){
        event.preventDefault();

        var target = $(this);
        var i = target.index();

        city_tab.removeClass('active');
        target.addClass('active');

        city_content.css('display','none');
        city_content.eq(i).css('display','block');

    })





    /* 클릭 버튼시작 */
    var banner1 = $('#sliderMenu #sliderDateWrap > ul');
    var button1_1 = $('.sliderPrev-Wrap li.sliderPrev a');
    var button1_2 = $('.sliderNext-Wrap li.sliderNext a');
    var current1 = 0;



    function move(tg, start, end) {
        tg.css('left', start).stop().animate({
            left: end
        }, {
            duration: 500,
            ease: 'easeOutCubic'
        });

    }


    button1_1.click(function () {
        var prev = banner1.eq(current1);


        //현재 보여지는 이미지를 왼쪽으로 이동

        move(prev, 0, '100%');



        current1++;

        // 조건문 배너 이미지가 끝까지 갔다면 초기화
        if (current1 == banner1.size()) {
            current1 = 0
        }

        var next = banner1.eq(current1);


        // 다음 이미지는 현재 보여지도록 이동
        move(next, '-100%', 0);
        // 다음 넘버는 현재에서 보여지도록 addClass


        // 원래의 링크속성을 없애기
        return false;

    });

    button1_2.click(function () {
        var prev = banner1.eq(current1);


        move(prev, 0, '-100%');


        current1--;

        if (current1 == -banner1.size()) {
            current1 = 0
        }

        var next = banner1.eq(current1);


        move(next, '100%', 0);


        return false;

    });

})


$(function(){


//  탭메뉴 시작

var showtime_tab = $('#sliderMenu #sliderDateWrap .sliderDate li');
var showtime_content = $('#showtimes .showtimesUl');

showtime_content.hide().eq(0).show();

showtime_tab.click(function(event){
    event.preventDefault();

    var target = $(this);
    var i = target.index();

    showtime_tab.removeClass('active');
    target.addClass('active');

    showtime_content.css('display','none');
    showtime_content.eq(i).css('display','block');

})


var showtime_tab2 = $('#sliderMenu #sliderDateWrap .sliderDate2 li');
var showtime_content2 = $('#showtimes #showtimesUlWrap .showtimesUl');

showtime_content2.hide();

showtime_tab2.click(function(event){
    event.preventDefault();

    var target = $(this);
    var i = target.index();

    showtime_tab2.removeClass('active');
    target.addClass('active');

    showtime_content2.css('display','none');
    showtime_content2.eq(i).css('display','block');

})


})