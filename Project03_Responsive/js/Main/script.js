$(function () {

    $('.nav>li').hover(function () {
        $(this).find('.sub_box').stop().slideDown();


    }, function () {
        $(this).find('.sub_box').stop().slideUp();


    })


    $('.ani_box .ani').toggle(function () {
        //햄버거버튼을 x로 변경
        $('.ani_box').addClass('act');
    }, function () {
        //x를 햄버거 버튼으로 변경
        $('.ani_box ').removeClass('act');
    })

    $(function () {
        $('.ani_box .ani').click(function () {
            $('.Nav2_box').toggleClass('active');
            if ($('.Nav2_box').hasClass('active')) {
                $('.Nav2_box').addClass('active');
                $('.ani_box').addClass('act');
                $('.nav2_sub div').stop().css('left', '100%');
            } else {
                $('.Nav2_box').removeClass('active');
                $('.ani_box').removeClass('act');
            }
        });
    });

    //nav2 클릭했을 때 나타나게
    // $('.ani_box, .nav_menu').click(function(){
    //     $('.Nav2_box').css('display','block');
    //     $('.ani_box').addClass('act');
    // })

    // $('.ani_box').click(function(){
    //     $('.Nav2_box').css('display','none');
    //     $('.ani_box').removeClass('act');
    // })


    /* company */
    $('.Nav2_box .nav2 #company').click(function () {
        $('.nav2_sub .company').stop().animate({
            left: '30'
        });

    })

    $('.nav2_sub .company h3 a').click(function () {
        $('.nav2_sub .company').stop().animate({
            left: '100%'
        });

    })

    /* audi_Service */
    $('.Nav2_box .nav2 #audi_Service').click(function () {
        $('.nav2_sub .audi_Service').stop().animate({
            left: '30'
        });

    })

    $('.nav2_sub .audi_Service h3 a').click(function () {
        $('.nav2_sub .audi_Service').stop().animate({
            left: '100%'
        });

    })

    /* audi_Experience */
    $('.Nav2_box .nav2 #audi_Experience').click(function () {
        $('.nav2_sub .audi_Experience').stop().animate({
            left: '30'
        });

    })

    $('.nav2_sub .audi_Experience h3 a').click(function () {
        $('.nav2_sub .audi_Experience').stop().animate({
            left: '100%'
        });

    })

    /* audi_Sustainability */
    $('.Nav2_box .nav2 #audi_Sustainability').click(function () {
        $('.nav2_sub .audi_Sustainability').stop().animate({
            left: '30'
        });

    })

    $('.nav2_sub .audi_Sustainability h3 a').click(function () {
        $('.nav2_sub .audi_Sustainability').stop().animate({
            left: '100%'
        });

    })


    $('.gnb').toggle(function () {
        $(this).find('.banner_gnb ul').stop().slideDown();
        $(this).find('.banner_gnb .a6 i').css('transform', 'rotateX(180deg)');
    }, function () {
        $(this).find('.banner_gnb ul').stop().slideUp();
        $(this).find('.banner_gnb .a6 i').css('transform', 'rotateX(0)');
    })



   
  


           if (matchMedia("screen and (min-width: 1440px)").matches) {
        // 1번째 이미지
        $(window).scroll(function () {
            var sct = $(this).scrollTop();
            if (sct >= 500 && sct < 2000) {
                activateScene2();

            } else {
                no_activateScene2();

            }
        });

        function activateScene2() {
            var $content = $('.chart1');

            //컨텐츠가 오른쪽에 나오도록
            $content.stop().animate({
                left: 0
            }, 1000, 'easeInOutQuint');
        };

        function no_activateScene2() {
            var $content = $('.chart1');
            $content.stop().animate({
                left: '-100%'
            }, 1000, 'easeInOutQuint');

        };
        ////////////////////////////////////////////

        // 2번째 이미지


        $(window).scroll(function () {
            var sct = $(this).scrollTop();
            if (sct >= 1200 && sct < 3000) {
                activateScene3();

            } else {
                no_activateScene3();
            }
        });

        function activateScene3() {
            var $content = $('.chart2');

            //컨텐츠가 오른쪽에 나오도록
            $content.stop().animate({
                right: 0
            }, 1000, 'easeInOutQuint');
        };

        function no_activateScene3() {
            var $content = $('.chart2');
            $content.stop().animate({
                right: '-100%'
            }, 1000, 'easeInOutQuint');


        };
        /////////////////////////////////////


        // 3번째 이미지


        $(window).scroll(function () {
            var sct = $(this).scrollTop();
            if (sct >= 2000 && sct < 4000) {
                activateScene4();

            } else {
                no_activateScene4();
            }
        });


        function activateScene4() {
            var $content = $('.chart3');

            //컨텐츠가 오른쪽에 나오도록
            $content.stop().animate({
                left: 0
            }, 1000, 'easeInOutQuint');
        };

        function no_activateScene4() {
            var $content = $('.chart3');
            $content.stop().animate({
                left: '-100%'
            }, 1000, 'easeInOutQuint');


        };

    } else if (matchMedia("screen and (min-width: 1024px)").matches) {
        // 1번째 이미지
        $(window).scroll(function () {
            var sct = $(this).scrollTop();
            if (sct >= 500 && sct < 2000) {
                activateScene2();

            } else {
                no_activateScene2();

            }
        });

        function activateScene2() {
            var $content = $('.chart1');

            //컨텐츠가 오른쪽에 나오도록
            $content.stop().animate({
                left: 0
            }, 1000, 'easeInOutQuint');
        };

        function no_activateScene2() {
            var $content = $('.chart1');
            $content.stop().animate({
                left: '-100%'
            }, 1000, 'easeInOutQuint');

        };
        ////////////////////////////////////////////

        // 2번째 이미지


        $(window).scroll(function () {
            var sct = $(this).scrollTop();
            if (sct >= 500 && sct < 2000) {
                activateScene3();

            } else {
                no_activateScene3();
            }
        });

        function activateScene3() {
            var $content = $('.chart2');

            //컨텐츠가 오른쪽에 나오도록
            $content.stop().animate({
                right: 0
            }, 1000, 'easeInOutQuint');
        };

        function no_activateScene3() {
            var $content = $('.chart2');
            $content.stop().animate({
                right: '-100%'
            }, 1000, 'easeInOutQuint');


        };
        /////////////////////////////////////


        // 3번째 이미지


        $(window).scroll(function () {
            var sct = $(this).scrollTop();
            if (sct >= 1500 && sct < 4000) {
                activateScene4();

            } else {
                no_activateScene4();
            }
        });


        function activateScene4() {
            var $content = $('.chart3');

            //컨텐츠가 오른쪽에 나오도록
            $content.stop().animate({
                left: 0
            }, 1000, 'easeInOutQuint');
        };

        function no_activateScene4() {
            var $content = $('.chart3');
            $content.stop().animate({
                left: '-100%'
            }, 1000, 'easeInOutQuint');


        };
    } else if (matchMedia("screen and (min-width: 760px)").matches){
        // 1번째 이미지
        $(window).scroll(function () {
            var sct = $(this).scrollTop();
            if (sct >= 100 && sct < 2000) {
                activateScene2();

            } else {
                no_activateScene2();

            }
        });

        function activateScene2() {
            var $content = $('.chart1');

            //컨텐츠가 오른쪽에 나오도록
            $content.stop().animate({
                left: 0
            }, 1000, 'easeInOutQuint');
        };

        function no_activateScene2() {
            var $content = $('.chart1');
            $content.stop().animate({
                left: 0
            }, 1000, 'easeInOutQuint');

        };
        ////////////////////////////////////////////

        // 2번째 이미지


        $(window).scroll(function () {
            var sct = $(this).scrollTop();
            if (sct >= 1000 && sct < 3000) {
                activateScene3();

            } else {
                no_activateScene3();
            }
        });

        function activateScene3() {
            var $content = $('.chart2');

            //컨텐츠가 오른쪽에 나오도록
            $content.stop().animate({
                right: 0
            }, 1000, 'easeInOutQuint');
        };

        function no_activateScene3() {
            var $content = $('.chart2');
            $content.stop().animate({
                right: 0
            }, 1000, 'easeInOutQuint');


        };
        /////////////////////////////////////


        // 3번째 이미지


        $(window).scroll(function () {
            var sct = $(this).scrollTop();
            if (sct >= 2000 && sct < 4000) {
                activateScene4();

            } else {
                no_activateScene4();
            }
        });


        function activateScene4() {
            var $content = $('.chart3');

            //컨텐츠가 오른쪽에 나오도록
            $content.stop().animate({
                left: 0
            }, 1000, 'easeInOutQuint');
        };

        function no_activateScene4() {
            var $content = $('.chart3');
            $content.stop().animate({
                left: 0
            }, 1000, 'easeInOutQuint');


        };
    } else if (matchMedia("screen and (min-width: 701px)").matches){
        // 1번째 이미지
        $(window).scroll(function () {
            var sct = $(this).scrollTop();
            if (sct >= 100 && sct < 2000) {
                activateScene2();

            } else {
                no_activateScene2();

            }
        });

        function activateScene2() {
            var $content = $('.chart1');

            //컨텐츠가 오른쪽에 나오도록
            $content.stop().animate({
                left: 0
            }, 1000, 'easeInOutQuint');
        };

        function no_activateScene2() {
            var $content = $('.chart1');
            $content.stop().animate({
                left: 0
            }, 1000, 'easeInOutQuint');

        };
        ////////////////////////////////////////////

        // 2번째 이미지


        $(window).scroll(function () {
            var sct = $(this).scrollTop();
            if (sct >= 500 && sct < 3000) {
                activateScene3();

            } else {
                no_activateScene3();
            }
        });

        function activateScene3() {
            var $content = $('.chart2');

            //컨텐츠가 오른쪽에 나오도록
            $content.stop().animate({
                right: 0
            }, 1000, 'easeInOutQuint');
        };

        function no_activateScene3() {
            var $content = $('.chart2');
            $content.stop().animate({
                right: 0
            }, 1000, 'easeInOutQuint');


        };
        /////////////////////////////////////


        // 3번째 이미지


        $(window).scroll(function () {
            var sct = $(this).scrollTop();
            if (sct >= 1500 && sct < 4000) {
                activateScene4();

            } else {
                no_activateScene4();
            }
        });


        function activateScene4() {
            var $content = $('.chart3');

            //컨텐츠가 오른쪽에 나오도록
            $content.stop().animate({
                left: 0
            }, 1000, 'easeInOutQuint');
        };

        function no_activateScene4() {
            var $content = $('.chart3');
            $content.stop().animate({
                left: 0
            }, 1000, 'easeInOutQuint');


        };
    } else if (matchMedia("screen and (min-width: 666px)").matches){
        // 1번째 이미지
        $(window).scroll(function () {
            var sct = $(this).scrollTop();
            if (sct >= 100 && sct < 2000) {
                activateScene2();

            } else {
                no_activateScene2();

            }
        });

        function activateScene2() {
            var $content = $('.chart1');

            //컨텐츠가 오른쪽에 나오도록
            $content.stop().animate({
                left: 0
            }, 1000, 'easeInOutQuint');
        };

        function no_activateScene2() {
            var $content = $('.chart1');
            $content.stop().animate({
                left: 0
            }, 1000, 'easeInOutQuint');

        };
        ////////////////////////////////////////////

        // 2번째 이미지


        $(window).scroll(function () {
            var sct = $(this).scrollTop();
            if (sct >= 500 && sct < 3000) {
                activateScene3();

            } else {
                no_activateScene3();
            }
        });

        function activateScene3() {
            var $content = $('.chart2');

            //컨텐츠가 오른쪽에 나오도록
            $content.stop().animate({
                right: 0
            }, 1000, 'easeInOutQuint');
        };

        function no_activateScene3() {
            var $content = $('.chart2');
            $content.stop().animate({
                right: 0
            }, 1000, 'easeInOutQuint');


        };
        /////////////////////////////////////


        // 3번째 이미지


        $(window).scroll(function () {
            var sct = $(this).scrollTop();
            if (sct >= 1500 && sct < 4000) {
                activateScene4();

            } else {
                no_activateScene4();
            }
        });


        function activateScene4() {
            var $content = $('.chart3');

            //컨텐츠가 오른쪽에 나오도록
            $content.stop().animate({
                left: 0
            }, 1000, 'easeInOutQuint');
        };

        function no_activateScene4() {
            var $content = $('.chart3');
            $content.stop().animate({
                left: 0
            }, 1000, 'easeInOutQuint');


        };
    } else if (matchMedia("screen and (min-width: 651px)").matches){
        // 1번째 이미지
        $(window).scroll(function () {
            var sct = $(this).scrollTop();
            if (sct >= 100 && sct < 2000) {
                activateScene2();

            } else {
                no_activateScene2();

            }
        });

        function activateScene2() {
            var $content = $('.chart1');

            //컨텐츠가 오른쪽에 나오도록
            $content.stop().animate({
                left: 0
            }, 1000, 'easeInOutQuint');
        };

        function no_activateScene2() {
            var $content = $('.chart1');
            $content.stop().animate({
                left: 0
            }, 1000, 'easeInOutQuint');

        };
        ////////////////////////////////////////////

        // 2번째 이미지


        $(window).scroll(function () {
            var sct = $(this).scrollTop();
            if (sct >= 500 && sct < 3000) {
                activateScene3();

            } else {
                no_activateScene3();
            }
        });

        function activateScene3() {
            var $content = $('.chart2');

            //컨텐츠가 오른쪽에 나오도록
            $content.stop().animate({
                right: 0
            }, 1000, 'easeInOutQuint');
        };

        function no_activateScene3() {
            var $content = $('.chart2');
            $content.stop().animate({
                right: 0
            }, 1000, 'easeInOutQuint');


        };
        /////////////////////////////////////


        // 3번째 이미지


        $(window).scroll(function () {
            var sct = $(this).scrollTop();
            if (sct >= 1500 && sct < 4000) {
                activateScene4();

            } else {
                no_activateScene4();
            }
        });


        function activateScene4() {
            var $content = $('.chart3');

            //컨텐츠가 오른쪽에 나오도록
            $content.stop().animate({
                left: 0
            }, 1000, 'easeInOutQuint');
        };

        function no_activateScene4() {
            var $content = $('.chart3');
            $content.stop().animate({
                left: 0
            }, 1000, 'easeInOutQuint');


        };
    } else if (matchMedia("screen and (min-width: 580px)").matches){
        // 1번째 이미지
        $(window).scroll(function () {
            var sct = $(this).scrollTop();
            if (sct >= 100 && sct < 2000) {
                activateScene2();

            } else {
                no_activateScene2();

            }
        });

        function activateScene2() {
            var $content = $('.chart1');

            //컨텐츠가 오른쪽에 나오도록
            $content.stop().animate({
                left: 0
            }, 1000, 'easeInOutQuint');
        };

        function no_activateScene2() {
            var $content = $('.chart1');
            $content.stop().animate({
                left: 0
            }, 1000, 'easeInOutQuint');

        };
        ////////////////////////////////////////////

        // 2번째 이미지


        $(window).scroll(function () {
            var sct = $(this).scrollTop();
            if (sct >= 500 && sct < 3000) {
                activateScene3();

            } else {
                no_activateScene3();
            }
        });

        function activateScene3() {
            var $content = $('.chart2');

            //컨텐츠가 오른쪽에 나오도록
            $content.stop().animate({
                right: 0
            }, 1000, 'easeInOutQuint');
        };

        function no_activateScene3() {
            var $content = $('.chart2');
            $content.stop().animate({
                right: 0
            }, 1000, 'easeInOutQuint');


        };
        /////////////////////////////////////


        // 3번째 이미지


        $(window).scroll(function () {
            var sct = $(this).scrollTop();
            if (sct >= 1500 && sct < 4000) {
                activateScene4();

            } else {
                no_activateScene4();
            }
        });


        function activateScene4() {
            var $content = $('.chart3');

            //컨텐츠가 오른쪽에 나오도록
            $content.stop().animate({
                left: 0
            }, 1000, 'easeInOutQuint');
        };

        function no_activateScene4() {
            var $content = $('.chart3');
            $content.stop().animate({
                left: 0
            }, 1000, 'easeInOutQuint');


        };
    } else if (matchMedia("screen and (min-width: 501px)").matches){
        // 1번째 이미지
        $(window).scroll(function () {
            var sct = $(this).scrollTop();
            if (sct >= 100 && sct < 2000) {
                activateScene2();

            } else {
                no_activateScene2();

            }
        });

        function activateScene2() {
            var $content = $('.chart1');

            //컨텐츠가 오른쪽에 나오도록
            $content.stop().animate({
                left: 0
            }, 1000, 'easeInOutQuint');
        };

        function no_activateScene2() {
            var $content = $('.chart1');
            $content.stop().animate({
                left: 0
            }, 1000, 'easeInOutQuint');

        };
        ////////////////////////////////////////////

        // 2번째 이미지


        $(window).scroll(function () {
            var sct = $(this).scrollTop();
            if (sct >= 500 && sct < 3000) {
                activateScene3();

            } else {
                no_activateScene3();
            }
        });

        function activateScene3() {
            var $content = $('.chart2');

            //컨텐츠가 오른쪽에 나오도록
            $content.stop().animate({
                right: 0
            }, 1000, 'easeInOutQuint');
        };

        function no_activateScene3() {
            var $content = $('.chart2');
            $content.stop().animate({
                right: 0
            }, 1000, 'easeInOutQuint');


        };
        /////////////////////////////////////


        // 3번째 이미지


        $(window).scroll(function () {
            var sct = $(this).scrollTop();
            if (sct >= 1500 && sct < 4000) {
                activateScene4();

            } else {
                no_activateScene4();
            }
        });


        function activateScene4() {
            var $content = $('.chart3');

            //컨텐츠가 오른쪽에 나오도록
            $content.stop().animate({
                left: 0
            }, 1000, 'easeInOutQuint');
        };

        function no_activateScene4() {
            var $content = $('.chart3');
            $content.stop().animate({
                left: 0
            }, 1000, 'easeInOutQuint');


        };
    } else if (matchMedia("screen and (min-width: 441px)").matches){
        // 1번째 이미지
        $(window).scroll(function () {
            var sct = $(this).scrollTop();
            if (sct >= 100 && sct < 2000) {
                activateScene2();

            } else {
                no_activateScene2();

            }
        });

        function activateScene2() {
            var $content = $('.chart1');

            //컨텐츠가 오른쪽에 나오도록
            $content.stop().animate({
                left: 0
            }, 1000, 'easeInOutQuint');
        };

        function no_activateScene2() {
            var $content = $('.chart1');
            $content.stop().animate({
                left: 0
            }, 1000, 'easeInOutQuint');

        };
        ////////////////////////////////////////////

        // 2번째 이미지


        $(window).scroll(function () {
            var sct = $(this).scrollTop();
            if (sct >= 500 && sct < 3000) {
                activateScene3();

            } else {
                no_activateScene3();
            }
        });

        function activateScene3() {
            var $content = $('.chart2');

            //컨텐츠가 오른쪽에 나오도록
            $content.stop().animate({
                right: 0
            }, 1000, 'easeInOutQuint');
        };

        function no_activateScene3() {
            var $content = $('.chart2');
            $content.stop().animate({
                right: 0
            }, 1000, 'easeInOutQuint');


        };
        /////////////////////////////////////


        // 3번째 이미지


        $(window).scroll(function () {
            var sct = $(this).scrollTop();
            if (sct >= 1500 && sct < 4000) {
                activateScene4();

            } else {
                no_activateScene4();
            }
        });


        function activateScene4() {
            var $content = $('.chart3');

            //컨텐츠가 오른쪽에 나오도록
            $content.stop().animate({
                left: 0
            }, 1000, 'easeInOutQuint');
        };

        function no_activateScene4() {
            var $content = $('.chart3');
            $content.stop().animate({
                left: 0
            }, 1000, 'easeInOutQuint');


        };
    } else if (matchMedia("screen and (min-width: 391px)").matches){
        // 1번째 이미지
        $(window).scroll(function () {
            var sct = $(this).scrollTop();
            if (sct >= 100 && sct < 2000) {
                activateScene2();

            } else {
                no_activateScene2();

            }
        });

        function activateScene2() {
            var $content = $('.chart1');

            //컨텐츠가 오른쪽에 나오도록
            $content.stop().animate({
                left: 0
            }, 1000, 'easeInOutQuint');
        };

        function no_activateScene2() {
            var $content = $('.chart1');
            $content.stop().animate({
                left: 0
            }, 1000, 'easeInOutQuint');

        };
        ////////////////////////////////////////////

        // 2번째 이미지


        $(window).scroll(function () {
            var sct = $(this).scrollTop();
            if (sct >= 500 && sct < 3000) {
                activateScene3();

            } else {
                no_activateScene3();
            }
        });

        function activateScene3() {
            var $content = $('.chart2');

            //컨텐츠가 오른쪽에 나오도록
            $content.stop().animate({
                right: 0
            }, 1000, 'easeInOutQuint');
        };

        function no_activateScene3() {
            var $content = $('.chart2');
            $content.stop().animate({
                right: 0
            }, 1000, 'easeInOutQuint');


        };
        /////////////////////////////////////


        // 3번째 이미지


        $(window).scroll(function () {
            var sct = $(this).scrollTop();
            if (sct >= 1500 && sct < 4000) {
                activateScene4();

            } else {
                no_activateScene4();
            }
        });


        function activateScene4() {
            var $content = $('.chart3');

            //컨텐츠가 오른쪽에 나오도록
            $content.stop().animate({
                left: 0
            }, 1000, 'easeInOutQuint');
        };

        function no_activateScene4() {
            var $content = $('.chart3');
            $content.stop().animate({
                left: 0
            }, 1000, 'easeInOutQuint');


        };
    } else if (matchMedia("screen and (min-width: 371px)").matches){
        // 1번째 이미지
        $(window).scroll(function () {
            var sct = $(this).scrollTop();
            if (sct >= 100 && sct < 2000) {
                activateScene2();

            } else {
                no_activateScene2();

            }
        });

        function activateScene2() {
            var $content = $('.chart1');

            //컨텐츠가 오른쪽에 나오도록
            $content.stop().animate({
                left: 0
            }, 1000, 'easeInOutQuint');
        };

        function no_activateScene2() {
            var $content = $('.chart1');
            $content.stop().animate({
                left: 0
            }, 1000, 'easeInOutQuint');

        };
        ////////////////////////////////////////////

        // 2번째 이미지


        $(window).scroll(function () {
            var sct = $(this).scrollTop();
            if (sct >= 500 && sct < 3000) {
                activateScene3();

            } else {
                no_activateScene3();
            }
        });

        function activateScene3() {
            var $content = $('.chart2');

            //컨텐츠가 오른쪽에 나오도록
            $content.stop().animate({
                right: 0
            }, 1000, 'easeInOutQuint');
        };

        function no_activateScene3() {
            var $content = $('.chart2');
            $content.stop().animate({
                right: 0
            }, 1000, 'easeInOutQuint');


        };
        /////////////////////////////////////


        // 3번째 이미지


        $(window).scroll(function () {
            var sct = $(this).scrollTop();
            if (sct >= 1500 && sct < 4000) {
                activateScene4();

            } else {
                no_activateScene4();
            }
        });


        function activateScene4() {
            var $content = $('.chart3');

            //컨텐츠가 오른쪽에 나오도록
            $content.stop().animate({
                left: 0
            }, 1000, 'easeInOutQuint');
        };

        function no_activateScene4() {
            var $content = $('.chart3');
            $content.stop().animate({
                left: 0
            }, 1000, 'easeInOutQuint');


        };
    } else {
        // 1번째 이미지
        $(window).scroll(function () {
            var sct = $(this).scrollTop();
            if (sct >= 100 && sct < 2000) {
                activateScene2();

            } else {
                no_activateScene2();

            }
        });

        function activateScene2() {
            var $content = $('.chart1');

            //컨텐츠가 오른쪽에 나오도록
            $content.stop().animate({
                left: 0
            }, 1000, 'easeInOutQuint');
        };

        function no_activateScene2() {
            var $content = $('.chart1');
            $content.stop().animate({
                left: 0
            }, 1000, 'easeInOutQuint');

        };
        ////////////////////////////////////////////

        // 2번째 이미지


        $(window).scroll(function () {
            var sct = $(this).scrollTop();
            if (sct >= 500 && sct < 3000) {
                activateScene3();

            } else {
                no_activateScene3();
            }
        });

        function activateScene3() {
            var $content = $('.chart2');

            //컨텐츠가 오른쪽에 나오도록
            $content.stop().animate({
                right: 0
            }, 1000, 'easeInOutQuint');
        };

        function no_activateScene3() {
            var $content = $('.chart2');
            $content.stop().animate({
                right: 0
            }, 1000, 'easeInOutQuint');


        };
        /////////////////////////////////////


        // 3번째 이미지


        $(window).scroll(function () {
            var sct = $(this).scrollTop();
            if (sct >= 1500 && sct < 4000) {
                activateScene4();

            } else {
                no_activateScene4();
            }
        });


        function activateScene4() {
            var $content = $('.chart3');

            //컨텐츠가 오른쪽에 나오도록
            $content.stop().animate({
                left: 0
            }, 1000, 'easeInOutQuint');
        };

        function no_activateScene4() {
            var $content = $('.chart3');
            $content.stop().animate({
                left: 0
            }, 1000, 'easeInOutQuint');


        };
    }


    // 스크롤 이벤트






    /////////////////////////

    // 탭메뉴
    var tab = $('.tab>li');
    var content = $('.tab_con>div');

    content.hide().eq(0).show();

    //탭메뉴를 클릭 했을 때 해당 컨텐츠가 보여지도록~~

    tab.click(function (e) {
        e.preventDefault();

        var tg = $(this);
        var i = tg.index() /* 선택 되어진 인덱스 번호가 i */

        // 활성화 된 버튼에 컬러주기
        tab.removeClass('active');
        tg.addClass("active");

        // 탭 메뉴에 클릭한 대상의 순번 i의 컨텐츠 영역만 보여지도록
        content.css("display", "none");
        content.eq(i).css("display", "block");



    });


    // 배너 바텀 텍스트 애니메이트
    var slide1 = $('#swiperWrap>ul.imgWrap');

    //.width()메서드는 선택한 요소의 너비를 반환
    //.height()메서드는 선택한 요소의 높이를 반환
    var slideListWidth1 = $('#swiperWrap>ul.imgWrap>li').width();

    var setInterval01;

    mainSlide1();

    function mainSlide1() {
        setInterval01 = setInterval(function () {
            slide1.stop().animate({
                left: -slideListWidth1
            }, 1500, function () {
                $('ul.imgWrap>li:first').insertAfter('ul.imgWrap>li:last');
                slide1.css('left', 0);
            });
        }, 3000);
    }

    $('#swiperWrap>ul.imgWrap, .prev, .next').hover(function () {
        clearInterval(setInterval01);
    }, function () {
        mainSlide1();
    })


    //오른쪽에서 왼쪽으로 이동
    function next1() {
        slide1.stop().animate({
            left: -slideListWidth1
        }, 1500, function () {
            $('ul.imgWrap>li:first').insertAfter('ul.imgWrap>li:last');
            slide1.css('left', 0);
        })
    }

    //왼쪽에서 오른쪽으로 이동
    function prev1() {
        $('ul.imgWrap>li:last').insertBefore('ul.imgWrap>li:first');
        slide1.css('left', -slideListWidth1);
        slide1.animate({
            left: 0
        }, 1500);
    }

    $('.prev').click(function () {
        prev1();
    })
    $('.next').click(function () {
        next1();
    })



    $('.ft_1dep >li').toggle(function () {
        //햄버거버튼을 x로 변경
        $(this).find('.ft_2dep').stop().slideDown();
        $(this).find('i').css('transform', 'rotateX(180deg)');
    }, function () {
        //x를 햄버거 버튼으로 변경
        $(this).find('.ft_2dep').stop().slideUp();
        $(this).find(' i').css('transform', 'rotateX(0)');
    })





    //탑으로
    $('#footer .ft_Top .top_btn').click(function () {
        $('html,body').animate({
            scrollTop: 1100
        }, 1200);
        return false;
    });


})