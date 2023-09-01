



    $(function(){
        $('#footer_select > #fSelect > li').mouseenter(function(){
            $(this).find('ul').slideDown()
        });

        $('#footer_select > #fSelect > li').click(function(){
            $(this).find('ul').slideUp()
        });

    });
   




