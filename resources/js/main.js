$(document).ready(function() {
    searchClick(false);
    $('.carousel').carousel({
        interval: 2000
    });
    $('.content-introduce-detail__content').hover(
        function() {
            $(this).addClass('active');
        },
        function() {
            $(this).removeClass('active');
        }
    );
});

// press esc to exit search form
$(document).on('keydown', function(e) {
    if (e.keyCode === 27) {
        $('.search-function').show();
        $('.search-function__input').hide();
    }
});

// change bg navrbar after scroll
$(function() {
    $(document).scroll(function() {
        var $nav = $(".navbar-fixed-top");
        $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    });
});

function searchClick(e) {
    if (e === true) {
        $('.search-function').hide();

        if ($(window).width() >= 1900) {
            $('.nav').addClass('display-none');
            $('.navbar-brand').addClass('display-none');
            $('.collapse').addClass('padding-1rem');
            $('.form-inline').css('width', '100%');
            $('.form-inline').css('left', '34rem');
            $('.search-function__input').css('width', '100%');
            $('input').css('width', '49%');
        }

        $('.search-function__input').show();
        $('input').focus();
    } else {
        $('.search-function').show();

        if ($(window).width() >= 1900) {
            $('.nav').removeClass('display-none');
            $('.navbar-brand').removeClass('display-none');
            $('.collapse').removeClass('padding-1rem');
            $('.form-inline').css('width', '');
            $('.form-inline').css('left', '');
            $('.search-function__input').css('width', '');
            $('input').css('width', '');
        }

        $('.search-function__input').hide();
    }
}