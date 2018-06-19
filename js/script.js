  $(function() {

            var Page = (function() {
                var $nav = $('#slider').find('#nav-dots > span'),
                    slitslider = $('#slider').slitslider({
                        onBeforeChange: function(slide, pos) {

                            $nav.removeClass('nav-dot-current');
                            $nav.eq(pos).addClass('nav-dot-current');

                        }
                    }),

                    init = function() {

                        initEvents();

                    },
                    initEvents = function() {

                        $nav.each(function(i) {

                            $(this).on('click', function(event) {

                                var $dot = $(this);

                                if (!slitslider.isActive()) {

                                    $nav.removeClass('nav-dot-current');
                                    $dot.addClass('nav-dot-current');

                                }

                                slitslider.jump(i + 1);
                                return false;

                            });

                        });

                    };

                return {
                    init: init
                };

            })();

            Page.init();
        });

  $(function() {

            var Page = (function() {
                var $nav = $('#slider2').find('#nav-dots > span'),
                    slitslider = $('#slider2').slitslider({
                        onBeforeChange: function(slide, pos) {

                            $nav.removeClass('nav-dot-current');
                            $nav.eq(pos).addClass('nav-dot-current');

                        }
                    }),

                    init = function() {

                        initEvents();

                    },
                    initEvents = function() {

                        $nav.each(function(i) {

                            $(this).on('click', function(event) {

                                var $dot = $(this);

                                if (!slitslider.isActive()) {

                                    $nav.removeClass('nav-dot-current');
                                    $dot.addClass('nav-dot-current');

                                }

                                slitslider.jump(i + 1);
                                return false;

                            });

                        });

                    };

                return {
                    init: init
                };

            })();

            Page.init();
        });

//  $(function() {
//
//            var Page = (function() {
//                var $nav = $('#slider3').find('#nav-dots > span'),
//                    slitslider = $('#slider3').slitslider({
//                        onBeforeChange: function(slide, pos) {
//
//                            $nav.removeClass('nav-dot-current');
//                            $nav.eq(pos).addClass('nav-dot-current');
//
//                        }
//                    }),
//
//                    init = function() {
//
//                        initEvents();
//
//                    },
//                    initEvents = function() {
//
//                        $nav.each(function(i) {
//
//                            $(this).on('click', function(event) {
//
//                                var $dot = $(this);
//
//                                if (!slitslider.isActive()) {
//
//                                    $nav.removeClass('nav-dot-current');
//                                    $dot.addClass('nav-dot-current');
//
//                                }
//
//                                slitslider.jump(i + 1);
//                                return false;
//
//                            });
//
//                        });
//
//                    };
//
//                return {
//                    init: init
//                };
//
//            })();
//
//            Page.init();
//        });


$('.toggle_menu, .close_menu').on('click', function(){
    $('.top_menu').toggleClass('active');
});

$('.menu__item a').on('click', function(){
     event.preventDefault();

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 500);
      $('.top_menu').toggleClass('active');
});
