$(function () {

    // 헤더 슬라이드
    var current1 = 0;
    var headerImg = $('#slide_menu >div');
    var tim;

    //동그라미 작은 버튼
    var sub_Btn = $('#slide_bottom_left > ul.circle > li')



    headerset();

    function headerset() {
        tim = setInterval(function () {

            var prev1 = headerImg.eq(current1);
            move1(prev1, 0, '-100%');
            sub_Btn.removeClass('on');

            current1++;

            if (current1 == headerImg.size()) {
                current1 = 0;
            }

            var next1 = headerImg.eq(current1)
            move1(next1, '100%', 0);
            sub_Btn.eq(current1).addClass('on');
          
            
        }, 3000);
    }
    

    
    function move1(tgg, start, end) {
        tgg.css('top', start).stop().animate({
            top: end
        }, 800);
    }


    //stop, play 버튼
    $('.header_stop').click(function () {
        clearInterval(tim);
        $('.header_stop').hide();
        $('.header_play').show();
    });

    $('.header_play').click(function () {
        headerset();
        $('.header_play').hide();
        $('.header_stop').show();
    });


	
	
	//버튼을 클릭 했을 때



    //hover했을 때 멈추기

    
    // $('#slide_menu >div').hover(function () {
    //     clearInterval(tim);
    // }, function () {
    //     headerset();
    // });

    

    //헤더
    $('#nav_fix #nav ul li').hover(function(){
      $('#nav').find('#slideBox').css('display','block');
        
    }, function(){
        $('#nav').find('#slideBox').css('display','none');
    

    })

    

    
    
    
    
    
    
    
    
    
});


