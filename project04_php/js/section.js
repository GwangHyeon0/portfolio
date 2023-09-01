
$(function(){

    var banner1 = $('section #section01 #section01Wrap .section01_Match .section01_Match_bot ul.match_slideWrap > li');
    var button1_1 = $('section #section01 #section01Wrap .section01_Match .section01_Match_top .Match_prevWrap a');
    var button1_2 = $('section #section01 #section01Wrap .section01_Match .section01_Match_top .Match_nextWrap a');
    var current1 = 0;


    timer1();

    function timer1(){
        setIntervalId1 = setInterval(function(){
            var prev1 = banner1.eq(current1);


            move1(prev1,0,'-100%');


            current1++;

            if(current1 == banner1.size()){current1=0}

            var next1 = banner1.eq(current1);

            move1(next1,'100%',0);

        },4000);
    }

    function move1(tg, start, end){
        tg.css('left', start).stop().animate({left:end},{duration:500, ease:'easeOutCubic'});
        
    }

    // 호버 기능
    $('section #section01 #section01Wrap .section01_Match .section01_Match_bot ul.match_slideWrap > li').on({mouseover:function(){
        clearInterval(setIntervalId1);
    }, mouseout:function(){
        timer1();
    }})

     // 호버 기능
     $('section #section01 #section01Wrap .section01_Match .section01_Match_top .Match_prevWrap a').on({mouseover:function(){
        clearInterval(setIntervalId1);
    }, mouseout:function(){
        timer1();
    }})

     // 호버 기능
     $('section #section01 #section01Wrap .section01_Match .section01_Match_top .Match_nextWrap a').on({mouseover:function(){
        clearInterval(setIntervalId1);
    }, mouseout:function(){
        timer1();
    }})


    button1_1.click(function(){
        var prev1 = banner1.eq(current1);


        //현재 보여지는 이미지를 왼쪽으로 이동

        move1(prev1,0,'100%');



        current1++;
            
            // 조건문 배너 이미지가 끝까지 갔다면 초기화
            if(current1 == banner1.size()){current1=0}

            var next1 = banner1.eq(current1);

            
            // 다음 이미지는 현재 보여지도록 이동
            move1(next1,'-100%',0);
            // 다음 넘버는 현재에서 보여지도록 addClass


            // 원래의 링크속성을 없애기
            return false; 
            




    });

    button1_2.click(function(){
        var prev1 = banner1.eq(current1);


        move1(prev1,0,'-100%');


            current1--;

            if(current1 == -banner1.size()){current1=0}

            var next1 = banner1.eq(current1);


            move1(next1,'100%',0);


            return false; 

    });

})

$(function(){

    var banner2 = $('section #section02 #section02Wrap #section02_Right .section02_Slidebox .section02_SlideWrap li');
    var button2_1 = $('section #section02 #section02Wrap #section02_Right .section02_prevWrap li a');
    var button2_2 = $('section #section02 #section02Wrap #section02_Right .section02_nextWrap li a');
    var current2 = 0;
    var setIntervalId2;
    var li = $('.section02_SlideNum > li');

    timer2();

    function timer2(){
        setIntervalId2 = setInterval(function(){
            var prev2 = banner2.eq(current2);
            var lin = li.eq(current2);

            move2(prev2,0,'-100%');
            lin.removeClass('bl'); //넘버

            current2++;

            if(current2 == banner2.size()){current2=0}

            var next2 = banner2.eq(current2);
            var linn = li.eq(current2);

            move2(next2,'100%',0);
            linn.addClass('bl')
        },2000);
    }

    function move2(tg, start, end){
        tg.css('left', start).stop().animate({left:end},{duration:500, ease:'easeOutCubic'});
        
    }


    // 호버 기능
    $('section #section02 #section02Wrap #section02_Right .section02_prevWrap li a').on({mouseover:function(){
        clearInterval(setIntervalId2);
    }, mouseout:function(){
        timer2();
    }})

    $('section #section02 #section02Wrap #section02_Right .section02_nextWrap li a').on({mouseover:function(){
        clearInterval(setIntervalId2);
    }, mouseout:function(){
        timer2();
    }})


    //stop, play 버튼
    $('.section02_stop_play .section02_stop').click(function () {
        clearInterval(setIntervalId2);
        $('.section02_stop_play .section02_stop').hide();
        $('.section02_stop_play .section02_play').show();
    });

    $('.section02_stop_play .section02_play').click(function () {
        timer2();
        $('.section02_stop_play .section02_play').hide();
        $('.section02_stop_play .section02_stop').show();
    });


   
    button2_1.click(function(){
        var prev2 = banner2.eq(current2);
        var lin = li.eq(current2);

        move2(prev2,0,'100%');
            lin.removeClass('bl'); //넘버

            current2--;

            if(current2 == -banner2.size()){current2=0}

            var next2 = banner2.eq(current2);
            var linn = li.eq(current2);

            move2(next2,'-100%',0);
            linn.addClass('bl');

            return false; 

    });


    button2_2.click(function(){
        var prev2 = banner2.eq(current2);
        var lin = li.eq(current2);

        //현재 보여지는 이미지를 왼쪽으로 이동

        move2(prev2,0,'-100%');

        // 넘버는 현재 보여지는 넘버는 안보이게
            lin.removeClass('bl'); //넘버

            current2++;
            
            // 조건문 배너 이미지가 끝까지 갔다면 초기화
            if(current2 == banner2.size()){current2=0}

            var next2 = banner2.eq(current2);
            var linn = li.eq(current2);
            
            // 다음 이미지는 현재 보여지도록 이동
            move2(next2,'100%',0);
            // 다음 넘버는 현재에서 보여지도록 addClass
            linn.addClass('bl');

            // 원래의 링크속성을 없애기
            return false; 
            
    });


    



});
