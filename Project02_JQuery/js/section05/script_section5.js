$(function(){



 var banner = $('#section05_slideImg>ul>li');
    var button1 = $('#section05_prevWrap>ul>li.section05_prev');
    var button2 = $('#section05_nextWrap>ul>li.section05_next');
    var current = 0;
    var setIntervalId;

    timer();

    function timer(){
        setIntervalId = setInterval(function(){
            var prev = banner.eq(current);


            move(prev,0,'-100%');


            current++;

            if(current == banner.size()){current=0}

            var next = banner.eq(current);

            move(next,'100%',0);

        },4000);
    }

    function move(tg, start, end){
        tg.css('left', start).stop().animate({left:end},{duration:500, ease:'easeOutCubic'});
        
    }

    // 호버 기능
    $('.section05_prev, section05_next, #section05_slideImg>ul>li').on({mouseover:function(){
        clearInterval(setIntervalId);
    }, mouseout:function(){
     timer();
    }})


    button1.click(function(){
        var prev = banner.eq(current);


        //현재 보여지는 이미지를 왼쪽으로 이동

        move(prev,0,'100%');



            current++;
            
            // 조건문 배너 이미지가 끝까지 갔다면 초기화
            if(current == banner.size()){current=0}

            var next = banner.eq(current);

            
            // 다음 이미지는 현재 보여지도록 이동
            move(next,'-100%',0);
            // 다음 넘버는 현재에서 보여지도록 addClass


            // 원래의 링크속성을 없애기
            return false; 
            




    });

    button2.click(function(){
        var prev = banner.eq(current);


        move(prev,0,'-100%');


            current--;

            if(current == -banner.size()){current=0}

            var next = banner.eq(current);


            move(next,'100%',0);


            return false; 

    });







})