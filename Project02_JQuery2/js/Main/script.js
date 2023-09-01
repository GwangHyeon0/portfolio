
$(function(){

    $('#top_btn').hide();
    $(window).scroll(function(){
        if($(this).scrollTop()>1000){
            $('#top_btn').fadeIn();
        }else{
            $('#top_btn').fadeOut();
        }
    });

    $('#top_btn .quick_btn li.topgo a').click(function(){
        $('html,body').animate({scrollTop:0},800);
        return false;
    })


    $(window).scroll(function(){
        if($(this).scrollTop()>150){
            $('#banner .nav_wrap2').fadeIn();
        }else{
            $('#banner .nav_wrap2').fadeOut();
        }
    });

})



$(function(){

    $('#main_top_of_top .maintop_bannerWrap .button').on('click', function(){
        $('header').stop().animate({top:-80});
        $('section').stop().animate({top:-80});
        $('footer').stop().animate({top:-80});
    })

    // $('#main_top_of_top .maintop_bannerWrap .button').click(function(){
    //     $('#main_top_of_top').css('display','none');

    //     return false;

    // })



    // 2depth 투댑스


    // $('.nav .nav_bottom .navbar > li').hover(function(){
    //     $('.nav .nav_bottom .navbar li .navbar_dep2').stop().slideDown();
    //     $('.nav .nav_bottom .nav_bg').stop().slideDown();
    // }, function(){
    //     $('.nav .nav_bottom .navbar li .navbar_dep2').stop().slideUp();
    //     $('.nav .nav_bottom .nav_bg').stop().slideUp();
    // })

    // $('.nav2 .nav_bottom .navbar > li').hover(function(){
    //     $('.nav2 .nav_bottom .navbar li .navbar_dep2').stop().slideDown();
    //     $('.nav2 .nav_bottom .nav_bg').stop().slideDown();
    // }, function(){
    //     $('.nav2 .nav_bottom .navbar li .navbar_dep2').stop().slideUp();
    //     $('.nav2 .nav_bottom .nav_bg').stop().slideUp();
    // })

    $(".nav .nav_bottom .navbar > li").hover(
        function () {
          $(".nav .nav_bottom .navbar li .navbar_dep2").css({ opacity: 1 });
          $(".nav .nav_bottom .navbar li .navbar_dep2").addClass("active");
          $(".nav .nav_bottom .nav_bg").css({ opacity: 1 });
          $(".nav .nav_bottom .nav_bg").addClass("active");
        },
        function () {
          $(".nav .nav_bottom .navbar li .navbar_dep2").css({ opacity: 0 });
          $(".nav .nav_bottom .navbar li .navbar_dep2").removeClass("active");
          $(".nav .nav_bottom .nav_bg").css({ opacity: 0 });
          $(".nav .nav_bottom .nav_bg").removeClass("active");
        }
      );

      $(".nav2 .nav_bottom .navbar > li").hover(
        function () {
          $(".nav2 .nav_bottom .navbar li .navbar_dep2").css({ opacity: 1 });
          $(".nav2 .nav_bottom .navbar li .navbar_dep2").addClass("active");
          $(".nav2 .nav_bottom .nav_bg").css({ opacity: 1 });
          $(".nav2 .nav_bottom .nav_bg").addClass("active");
        },
        function () {
          $(".nav2 .nav_bottom .navbar li .navbar_dep2").css({ opacity: 0 });
          $(".nav2 .nav_bottom .navbar li .navbar_dep2").removeClass("active");
          $(".nav2 .nav_bottom .nav_bg").css({ opacity: 0 });
          $(".nav2 .nav_bottom .nav_bg").removeClass("active");
        }
      );

    //bannerSlide
    var slide1 = $('.play>ul.slide1');
    var slide2 = $('.play>ul.slide2');
    var slide3 = $('.play>ul.slide3');
    var slide4 = $('.play>ul.slide4');
    
    
    var slideListWidth1 = $('.play>ul>li').width();
    
    
    var setInterval01;
    var setInterval02;
    var setInterval03;
    var setInterval04;
    
    
    //slide1
    mainSlide1();

    function mainSlide1(){
        setInterval01 = setInterval(function(){
            slide1.stop().animate({left:-slideListWidth1},500, function(){
                $('ul.slide1>li:first').insertAfter('ul.slide1>li:last');
                slide1.css('left',0);
            });
        },2000);
    }

    $('.slide1, .prev1_1, .next1_1').hover(function(){
        clearInterval(setInterval01);
    }, function(){
        mainSlide1();
    })

    //오른쪽에서 왼쪽으로 이동
    function next1_1(){
        slide1.stop().animate({left:-slideListWidth1},500, function(){
            $('ul.slide1>li:first').insertAfter('ul.slide1>li:last');
            slide1.css('left',0);    
        })
    }

    //왼쪽에서 오른쪽으로 이동
    function prev1_1(){
        $('ul.slide1>li:last').insertBefore('ul.slide1>li:first');
        slide1.css('left',-slideListWidth1);
        slide1.animate({left:0},500);
    }
    
    $('.prev1_1').click(function(){
        prev1_1();
    })
    $('.next1_1').click(function(){
        next1_1();
    })
    
    
    
    //slide2
    mainSlide2();

    function mainSlide2(){
        setInterval02 = setInterval(function(){
            slide2.stop().animate({left:-slideListWidth1},500, function(){
                $('ul.slide2>li:first').insertAfter('ul.slide2>li:last');
                slide2.css('left',0);
            });
        },2000);
    }

    $('.slide2, .prev2_1, .next2_1').hover(function(){
        clearInterval(setInterval02);
    }, function(){
        mainSlide2();
    })

    //오른쪽에서 왼쪽으로 이동
    function next2_1(){
        slide2.stop().animate({left:-slideListWidth1},500, function(){
            $('ul.slide2>li:first').insertAfter('ul.slide2>li:last');
            slide2.css('left',0);    
        })
    }

    //왼쪽에서 오른쪽으로 이동
    function prev2_1(){
        $('ul.slide2>li:last').insertBefore('ul.slide2>li:first');
        slide2.css('left',-slideListWidth1);
        slide2.animate({left:0},500);
    }
    
    $('.prev2_1').click(function(){
        prev2_1();
    })
    $('.next2_1').click(function(){
        next2_1();
    })
    
    
    
    
    //slide3
    mainSlide3();

    function mainSlide3(){
        setInterval03 = setInterval(function(){
            slide3.stop().animate({left:-slideListWidth1},500, function(){
                $('ul.slide3>li:first').insertAfter('ul.slide3>li:last');
                slide3.css('left',0);
            });
        },2000);
    }

    $('.slide3, .prev3_1, .next3_1').hover(function(){
        clearInterval(setInterval03);
    }, function(){
        mainSlide3();
    })

    //오른쪽에서 왼쪽으로 이동
    function next3_1(){
        slide3.stop().animate({left:-slideListWidth1},500, function(){
            $('ul.slide3>li:first').insertAfter('ul.slide3>li:last');
            slide3.css('left',0);    
        })
    }

    //왼쪽에서 오른쪽으로 이동
    function prev3_1(){
        $('ul.slide3>li:last').insertBefore('ul.slide3>li:first');
        slide3.css('left',-slideListWidth1);
        slide3.animate({left:0},500);
    }

    $('.prev3_1').click(function(){
        prev3_1();
    })
    $('.next3_1').click(function(){
        next3_1();
    })



    
    //slide4
    mainSlide4();

    function mainSlide4(){
        setInterval04 = setInterval(function(){
            slide4.stop().animate({left:-slideListWidth1},500, function(){
                $('ul.slide4>li:first').insertAfter('ul.slide4>li:last');
                slide4.css('left',0);
            });
        },2000);
    }

    $('.slide4, .prev4_1, .next4_1').hover(function(){
        clearInterval(setInterval04);
    }, function(){
        mainSlide4();
    })

    //오른쪽에서 왼쪽으로 이동
    function next4_1(){
        slide4.stop().animate({left:-slideListWidth1},500, function(){
            $('ul.slide4>li:first').insertAfter('ul.slide4>li:last');
            slide4.css('left',0);    
        })
    }

    //왼쪽에서 오른쪽으로 이동
    function prev4_1(){
        $('ul.slide4>li:last').insertBefore('ul.slide4>li:first');
        slide4.css('left',-slideListWidth1);
        slide4.animate({left:0},500);
    }

    $('.prev4_1').click(function(){
        prev4_1();
    })
    $('.next4_1').click(function(){
        next4_1();
    })


    //  탭메뉴 시작
    var tab = $('.tabWrap .tab li');
    var content = $('.tab_content > div');

    content.hide().eq(0).show();

    tab.click(function(event){

        event.preventDefault();

        var target = $(this);
        var i = target.index();

        tab.removeClass('active');
        target.addClass('active');

        content.css('display','none');
        content.eq(i).css('display','block');


    })

});


$(function(){

    var roll_banner = $('#section05Wrap #section05Top .rolling_menu_wrap .rolling_menu li');
    var current_rolling = 0;
    var setInterval_rolling;

    roll_timer();

    function roll_timer(){
        setInterval_rolling = setInterval(function(){
            var prev = roll_banner.eq(current_rolling);

           roll_move(prev,0,'-100%');

            current_rolling++;

            if(current_rolling == roll_banner.size()){current_rolling=0}

            var next = roll_banner.eq(current_rolling);

            roll_move(next,'100%',0);
        },2000);
    }

    function roll_move(tg, start, end){
        tg.css('top', start).stop().animate({top:end},{duration:500, ease:'easeOutCubic'});
        
    }

    $('#section05Wrap #section05Top .rolling_menu_wrap .rolling_menu li').on({mouseover:function(){
        clearInterval(setInterval_rolling);
    }, mouseout:function(){
        roll_timer();
    }});


});