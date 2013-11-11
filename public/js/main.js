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
        });

        $('header').addClass('show');

        // Docs sidebar list functionality.
        $('.scrollDown, .scrollUp').click(function(){
          // Scroll to the anchored section.
          $('html, body').animate({
            scrollTop: $( $.attr(this, 'href') ).offset().top
          }, 500);
          return false;
        });

    });
})(jQuery);
