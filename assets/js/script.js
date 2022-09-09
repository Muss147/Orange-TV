$(window).scroll(function() {
    if ($(window).scrollTop() > 75) {
        $('header nav.navbar-dark').addClass('border-bottom border-light border-1');
        $('header nav.navbar-white').addClass('border-bottom border-dark border-1');
    }
    else {
        $('header nav.navbar-dark').removeClass(' border-bottom border-light border-1');
        $('header nav.navbar-white').removeClass(' border-bottom border-dark border-1');
    }
});
