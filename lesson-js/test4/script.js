$('document').ready(function(){
        $('.flip').click(function(){
                $('.panel').slideToggle(2000);
                $('.stop').click(function(){
                    $('.panel').stop();
                })
            });
    });