(function() {

    $(document).ready(function() {
        function goToLayer(layerId) {
            var $current = $('.layer.current');
            var $next = $(layerId);

            $current.removeClass('current');
            $next.addClass('current');
            
            // If the target layer is after the current one...
            if ($next.prevAll('#' + $current.attr('id')).length !== 0) {
                $current.css({"top":"-100%"});
                $next.css({"top":"0"});
            } else {
                $current.css({"top":"100%"});
                $next.css({"top":"0"});
            }
        }

        function nextLayer() {
            var $current = $('.layer.current');
            var $next = $current.next('.layer');

            if ($next.length === 0) {
                return;
            }

            $current.removeClass('current');
            $next.addClass('current');
            
            $current.css({"top":"-100%"});
            $next.css({"top":"0"});
        }

        function prevLayer() {
            var $current = $('.layer.current');

            var $prev = $current.prev('.layer');

            if ($prev.length === 0) {
                return;
            }

            $current.removeClass('current');
            $prev.addClass('current');

            $current.css({"top":"100%"});
            $prev.css({"top":"0"});
        }

        $("body").keydown(function(e) {
          if(e.keyCode == 38) { // up
            prevLayer();
          }
          if(e.keyCode == 40) { // down
            nextLayer();
          }
        });

        $('.scrollDown').click(function() {
            nextLayer();
        });

        $('.scrollUp').click(function() {
            prevLayer();
        });

        $('.scrollTo').click(function() {
            var layerId = $(this).attr('href');

            goToLayer(layerId);
            
            return false;
        });

    });
})(jQuery);
