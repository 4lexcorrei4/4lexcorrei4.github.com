$(document).ready(function() {
    /* HOMEPAGE MENU */
    $('.experience-section').waypoint(function(direction) {
        if (direction == "down") {
            $('header .menu').css('position', 'fixed');
            $('header .menu').css('background-color', 'rgba(255, 255, 255, 0.9)');
            $('header .menu li a').css('color', 'black');
        } else {
            $('header .menu').css('position', 'relative');
            $('header .menu').css('background-color', 'rgba(255, 255, 255, 0)');
            $('header .menu li a').css('color', 'white');
        }
    }, {
      offset: '60px;'
    });
    
    /* Navigation scroll */
    $(function() {
        $('a[href*=#]:not([href=#])').click(function() {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html,body').animate({
                        scrollTop: target.offset().top
                    }, 1000);
                    return false;
                }
            }
        });
    });
    
    
    /* Mobile navigation */
    /*$('.js--nav-icon').click(function() {
        var nav = $('.js--main-nav');
        var icon = $('.js--nav-icon i');
        
        nav.slideToggle(200);
        
        if (icon.hasClass('ion-navicon-round')) {
            icon.addClass('ion-close-round');
            icon.removeClass('ion-navicon-round');
        } else {
            icon.addClass('ion-navicon-round');
            icon.removeClass('ion-close-round');
        }        
    });*/
});