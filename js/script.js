$(document).ready(function() {
    /* MENU */
    $('.mobile-menu-open').click(function() {
        $('menu').toggle(250);
        $('menu').css('display', 'block');
        $('.mobile-menu-open').css('display', 'none');
        $('.mobile-menu-close').css('display', 'block');
    })
    
    $('.mobile-menu-close').click(function() {
        $('menu').css('display', 'none');
        $('.mobile-menu-open').css('display', 'block');
        $('.mobile-menu-close').css('display', 'none');
    })
    /*$('.change-menu').waypoint(function(direction) {
        if (direction == "down" && ($('.mobile-menu-open').css('display') == 'none' && $('.mobile-menu-close').css('display') == 'none')) {
            $('.sticky-menu').css('display', 'block');
        } else if ($('.mobile-menu-open').css('display') == 'none' && $('.mobile-menu-close').css('display') == 'none') {
            $('.sticky-menu').css('display', 'none');
        }
    }, {
      offset: '60px;'
    });*/
    
    $('.option-experience-btn').click(function() {
        var wasopen = 0;
        if ($('.option-education').css('display') == 'block')
            wasopen = 1;
        $('.option-education').css('display', 'none');
        if ($('.option-experience').css('display') == 'none') {
            if (!wasopen)
                $('.option-experience').toggle(250);
            else {
                $('.option-experience').addClass('animated fadeInLeft');
            }
            $('.option-experience').css('display', 'block');
        } else {
            $('.option-experience').css('display', 'none');
        }
    })
    
    $('.option-education-btn').click(function() {
        var wasopen = 0;
        if ($('.option-experience').css('display') == 'block')
            wasopen = 1;
        $('.option-experience').css('display', 'none');
        if ($('.option-education').css('display') == 'none') {
            if (!wasopen)
                $('.option-education').toggle(250);
            else {
                $('.option-education').addClass('animated fadeInLeft');
            }
            $('.option-education').css('display', 'block');
        } else {
            $('.option-education').css('display', 'none');
        }
    })
    
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