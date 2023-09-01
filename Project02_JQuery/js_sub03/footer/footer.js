



    $(function(){
        // $('#footer_select > #fSelect > li').mouseenter(function(){
        //     $(this).find('ul').slideDown()
        // });

        // $('#footer_select > #fSelect > li').click(function(){
        //     $(this).find('ul').slideUp()
        // });

        $('#footer_select > #fSelect > li').toggle(function () {
            $(this).find('ul').slideDown();
        }, function () {
            $(this).find('ul').slideUp();
        });

    });
   




