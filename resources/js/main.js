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
        $('.search-function__input').show();
        $('input').focus();
    } else {
        $('.search-function').show();
        $('.search-function__input').hide();
    }
}