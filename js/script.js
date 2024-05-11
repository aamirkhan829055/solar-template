

// Headers

jQuery(function ($) {
    $(window).on('scroll', function () {
        if ($(this).scrollTop() >= 500) {
            $('.navbar').addClass('fixed-top');
        } else if ($(this).scrollTop() == 0) {
            $('.navbar').removeClass('fixed-top');
        }
    });

    function adjustNav() {
        var winWidth = $(window).width(),
            dropdown = $('.dropdown'),
            dropdownMenu = $('.dropdown-menu');

        if (winWidth >= 500) {
            dropdown.on('mouseenter', function () {
                $(this).addClass('show')
                    .children(dropdownMenu).addClass('show');
            });

            dropdown.on('mouseleave', function () {
                $(this).removeClass('show')
                    .children(dropdownMenu).removeClass('show');
            });
        } else {
            dropdown.off('mouseenter mouseleave');
        }
    }

    $(window).on('resize', adjustNav);

    adjustNav();
});

// Owl Carousel slider

$(function () {
    var owl = $(".owl-carousel");
    owl.owlCarousel({
        items: 9,
        margin: 10,
        loop: true,
        nav: true,
        dots: false,
        autoplay: true,
        autoplayTimeout: 1500,
        autoplayHoverPause: true,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },

            991: {
                items: 3
            },
            1200: {
                items: 4
            }

        }
    });
});


// Owl Carousel slider


$(function () {

    var owl = $(".owl-carousel-22");
    owl.owlCarousel({
        items: 9,
        margin: 10,
        loop: true,
        nav: true,
        dots: false,
        autoplay: true,
        autoplayTimeout: 1500,
        autoplayHoverPause: true,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        responsive: {
            0: {
                items: 2
            },
            600: {
                items: 2
            },

            991: {
                items: 3
            },
            1200: {
                items: 4
            }

        }
    });
});



// moveto top

window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    const myBtn = document.getElementById("myBtn");
    const windowHeight = window.innerHeight;
    const bodyHeight = document.body.scrollHeight;
    const scrollPosition = window.scrollY;
    const footerThreshold = bodyHeight - windowHeight;

    if (scrollPosition > 20 && scrollPosition < footerThreshold) {
        myBtn.style.display = "block";
        // myBtn.style.borderTop = "3px solid red";
    } else {
        myBtn.style.display = " block";
        // myBtn.style.borderTop = "3px solid blue";
    }
}

function topFunction() {
    const scrollToTop = () => {
        const c = document.documentElement.scrollTop || document.body.scrollTop;
        if (c > 0) {
            window.requestAnimationFrame(scrollToTop);
            window.scrollTo(0, c - c / 8);
        }
    };
    scrollToTop();
}
