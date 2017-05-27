var resume = {

    startSlideshow: function() {

        $(function() {
            $('#slides').slidesjs({
                width: 940,
                height: 300,
                play: {
                    active: false,
                    effect: "fade",
                    interval: 5000,
                    auto: true,
                    swap: true,
                    pauseOnHover: false,
                    restartDelay: 2500
                },
                pagination: {
                    active: false
                },
                navigation: {
                    active: false
                }
            });

        });
    },

    createLightBox: function() {
        $(".portfolioRow a").magnificPopup({
            type: "image",
            gallery: {
                enabled: true,
                preload: [0, 2],
                navigateByImgClick: true
            }
        });
    },

    setupNav: function() {
        $("#nav").onePageNav({
            currentClass: "active",
            changeHash: false,
            scrollSpeed: 1000,
            scrollThreshold: 0.5,
            filter: "",
            easing: "swing"
        });
        $(".navbar-brand").click(function() {
            return $("html").ScrollTo({
                duration: 1000
            }), false;
        });
    },

    stickyNav: function() {

        $('#stickyNav').sticky();

        $(window).load(function() { 
            $('#stickyNav').css({width: $('#navbarContainer').width()});
        });
        
        $(window).resize(function() {
            var setToWidth = $('#navbarContainer').width();
            $('#stickyNav').css({width: setToWidth});
        });
    },

    closeMenu: function() {
        $('#nav li').click(function() {
            $(this).parent().parent().removeClass('in');
        });
    },

    progressBars: function() {
        $('.progress .progress-bar').progressbar({
            transition_delay: 500
        });
    },

    loadThumbnailHover: function() {
        $(".portfolioRow").sliphover();
    },

    initWow: function() {
        new WOW().init({
            offset: 1000
        });
    }

};

$(document).ready(function() {

    Pace.on('done', function() {
        $('.loading').fadeOut(200);
        $('.pace-progress').fadeOut(1500);
    });

    resume.initWow();
    resume.startSlideshow();
    resume.createLightBox();
    resume.setupNav();
    resume.stickyNav();
    resume.closeMenu();

    $('#slides').waypoint(function() {
        resume.progressBars();
    });

    $(".portfolioRow").imagesLoaded(function() {
        resume.loadThumbnailHover();
    });

});
