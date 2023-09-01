$(function(){
    
    $('#main_top_of_top .maintop_bannerWrap .button').click(function(){
        $('#main_top_of_top').css('display','none');

        return false;

    })

    $('.ani_box').toggle(function () {
        //햄버거버튼을 x로 변경
        $('.ani_box').addClass('act');
        $('.nav .nav_Box02').css('display','block');
        // $('body').css('overflow-Y','hidden');

    }, function () {
        //x를 햄버거 버튼으로 변경
        $('.ani_box').removeClass('act');
        $('.nav .nav_Box02').css('display','none');
        // $('body').css('overflow-Y','scroll');


    })



    var banner1 = $('.nav .nav_Box01 li .sub_box ul.dep2_2-5 li.bg_player .player_slideWrap .player_memberWrap li');
    var button1_1 = $('.nav .nav_Box01 li .sub_box ul.dep2_2-5 li.bg_player .player_slideWrap .player_prevWrap .player_prev');
    var button1_2 = $('.nav .nav_Box01 li .sub_box ul.dep2_2-5 li.bg_player .player_slideWrap .player_nextWrap .player_next');
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
    $('.nav .nav_Box01 li .sub_box ul.dep2_2-5 li.bg_player .player_slideWrap .player_memberWrap li').on({mouseover:function(){
        clearInterval(setIntervalId1);
    }, mouseout:function(){
        timer1();
    }})

     // 호버 기능
     $('.nav .nav_Box01 li .sub_box ul.dep2_2-5 li.bg_player .player_slideWrap .player_prevWrap .player_prev').on({mouseover:function(){
        clearInterval(setIntervalId1);
    }, mouseout:function(){
        timer1();
    }})

     // 호버 기능
     $('.nav .nav_Box01 li .sub_box ul.dep2_2-5 li.bg_player .player_slideWrap .player_nextWrap .player_next').on({mouseover:function(){
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



    // shop 슬라이드
    var banner2 = $('.nav .nav_Box01 li .sub_box ul.dep2_2-7 li .shop_slideWrap .shop_mainWrap .shop_mainBox >div');
    var button2_1 = $('.nav .nav_Box01 li .sub_box ul.dep2_2-7 li .shop_slideWrap .shop_prevWrap .shop_prev');
    var button2_2 = $('.nav .nav_Box01 li .sub_box ul.dep2_2-7 li .shop_slideWrap .shop_nextWrap .shop_next');
    var current2 = 0;
   
   
    timer2();
   
    function timer2(){
        setIntervalId2 = setInterval(function(){
            var prev2 = banner2.eq(current2);
   
   
            move2(prev2,0,'-100%');
   
   
            current2++;
   
            if(current2 == banner2.size()){current2=0}
   
            var next2 = banner2.eq(current2);
   
            move2(next2,'100%',0);
   
        },4000);
    }
   
    function move2(tg, start, end){
        tg.css('left', start).stop().animate({left:end},{duration:500, ease:'easeOutCubic'});
        
    }
   
    // 호버 기능
    $('.nav .nav_Box01 li .sub_box ul.dep2_2-7 li .shop_slideWrap .shop_mainWrap .shop_mainBox >div').on({mouseover:function(){
        clearInterval(setIntervalId2);
    }, mouseout:function(){
        timer2();
    }})
   
     // 호버 기능
     $('.nav .nav_Box01 li .sub_box ul.dep2_2-7 li .shop_slideWrap .shop_prevWrap .shop_prev').on({mouseover:function(){
        clearInterval(setIntervalId2);
    }, mouseout:function(){
        timer2();
    }})
   
     // 호버 기능
     $('.nav .nav_Box01 li .sub_box ul.dep2_2-7 li .shop_slideWrap .shop_nextWrap .shop_next').on({mouseover:function(){
        clearInterval(setIntervalId2);
    }, mouseout:function(){
        timer2();
    }})
   
   
    button2_1.click(function(){
        var prev2 = banner2.eq(current2);
   
   
        //현재 보여지는 이미지를 왼쪽으로 이동
   
        move2(prev2,0,'100%');
   
   
   
        current2++;
            
            // 조건문 배너 이미지가 끝까지 갔다면 초기화
            if(current2 == banner2.size()){current2=0}
   
            var next2 = banner2.eq(current2);
   
            
            // 다음 이미지는 현재 보여지도록 이동
            move2(next2,'-100%',0);
            // 다음 넘버는 현재에서 보여지도록 addClass
   
   
            // 원래의 링크속성을 없애기
            return false; 
            
   
   
   
   
    });
   
    button2_2.click(function(){
        var prev2 = banner2.eq(current2);
   
   
        move2(prev2,0,'-100%');
   
   
            current2--;
   
            if(current2 == -banner2.size()){current2=0}
   
            var next2 = banner2.eq(current2);
   
   
            move2(next2,'100%',0);
   
   
            return false; 
   
    });


    $('.nav .nav_Box01>li')>hover(function(){
        $('.nav .nav_Box01 li > .sub_box').stop().slideDown();
        $('.nav .nav_Box01 > .dep2_bg').stop().slideDown();
    }, function(){
        $('.nav .nav_Box01 li > .sub_box').stop().slideUp();
        $('.nav .nav_Box01 > .dep2_bg').stop().slideUp();

    })




});



