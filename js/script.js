/* MENU */
document.getElementById('mobile-menu-open').click(function() {
    document.getElementById('menu').toggle(250);
    document.getElementById('menu').css('display', 'block');
    document.getElementById('mobile-menu-open').css('display', 'none');
    document.getElementById('mobile-menu-close').css('display', 'block');
});

document.getElementById('mobile-menu-close').click(function() {
    document.getElementById('menu').css('display', 'none');
    document.getElementById('mobile-menu-open').css('display', 'block');
    document.getElementById('mobile-menu-close').css('display', 'none');
});

/*document.getElementById('page-beggining').waypoint(function(direction) {
    if (direction == 'down') {
        document.getElementById('menu').style.backgroundColor = 'rgba(255, 255, 255, 0.9)';
    } else {
        document.getElementById('menu').style.backgroundColor = 'rgba(255, 255, 255, 0)';
    }
    /*if (direction == "down" && ($('.mobile-menu-open').css('display') == 'none' && $('.mobile-menu-close').css('display') == 'none')) {
        $('.sticky-menu').css('display', 'block');
    } else if ($('.mobile-menu-open').css('display') == 'none' && $('.mobile-menu-close').css('display') == 'none') {
        $('.sticky-menu').css('display', 'none');
    }*/
    /*if (direction == "down") {
        $('.menu').css('background-color', 'rgba(255, 255, 255, 0.9)');
    } else {
        $('.menu').css('background-color', 'rgba(255, 255, 255, 0)');
    }*/
/*}, {
  offset: '60px;'
});*/

/* Navigation scroll */
/*$(function() {
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
});*/


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