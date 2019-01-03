$( document ).ready(function() {


// Sticky Navbar
var NavbarSticky = (function() {
    // Variables
    var $nav = $('.navbar-sticky');
    // Methods
    function init($this) {
        var scrollTop = $(window).scrollTop(); // our current vertical position from the top
        // if we've scrolled more than the navigation, change its position to fixed to stick to top,
        // otherwise change it back to relative
        if (scrollTop > (navOffsetTop)) {

            $this.addClass('sticky');

            $("#logo-nav").hide();
            $("#logo-nav-row").show();

            $("#btn-contact-slim").show();
            $("#btn-contact").hide();

            $("ul.nav > li.nav-item").show();


        } else {
            $this.removeClass('sticky');

            $("#logo-nav").show();
            $("#logo-nav-row").hide();

            $("#btn-contact").show();
            $("#btn-contact-slim").hide();

            $("ul.nav > li.nav-item").hide();

            
        }
    }

    // Events
    if ($nav.length) {
        var navOffsetTop = $nav.offset().top;
        // Init sticky navbar
        init($nav);
        // re-calculate stickyness on scroll
        $(window).on({
            'scroll': function() {
                init($nav);
            }
        })
    }
})();

});