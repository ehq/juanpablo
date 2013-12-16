(function() {
    $(document).ready(function() {
        $(window).scroll(function() {

            var topOfWindow = $(window).scrollTop();

            $('.bar').each(function(){
                var imagePos = $(this).offset().top;

                if (imagePos < topOfWindow+700) {
                    $(this).addClass("pullUp");
                }
            });

            $('#creation figure').each(function(){
                var imagePos = $(this).offset().top;

                if (imagePos < topOfWindow+400) {
                    $(this).addClass("show");
                    $(this).addClass("slideUp");
                }
            });

            $('span.arrow_right').each(function(){
                var imagePos = $(this).offset().top;

                if (imagePos < topOfWindow+400) {
                    $(this).addClass("stretchRight");
                }
            });

            $('#hobbies figure').each(function(){
                var imagePos = $(this).offset().top;

                if (imagePos < topOfWindow+400) {
                    $(this).addClass("slideLeft");
                }
            });

            $('.eyes').each(function(){
                var imagePos = $(this).offset().top;

                if (imagePos < topOfWindow+400) {
                    $(this).addClass("floating");
                }
            });

            $('#hobbies header').each(function(){
                var imagePos = $(this).offset().top;

                if (imagePos < topOfWindow+400) {
                    $(this).addClass("show");
                }
            });

            $('button').each(function(){
                var imagePos = $(this).offset().top;

                if (imagePos < topOfWindow+400) {
                    $(this).addClass("shake");
                }
            });

            $('#contact a').each(function(){
                var imagePos = $(this).offset().top;

                if (imagePos < topOfWindow+800) {
                    $(this).addClass("flipInX");
                }
            });

            $('#contact a').hover(function(){
                $(this).removeClass("flipInX");
                $(this).toggleClass("bounce");
            });


        });

        $('#presentation header').addClass('show');

        $('.scrollTo').click(function(){
            // Scroll to the anchored section.
            $('html, body').animate({
                scrollTop: $( $.attr(this, 'href') ).offset().top
            }, 500);

            $('.scrollTo, p').removeClass('selected');
            $(this).addClass('selected');
            $(this).prev().addClass('selected');
            
            return false;
        });

    });
})(jQuery);
