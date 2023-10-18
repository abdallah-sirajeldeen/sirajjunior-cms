// const navbarBottom = document.querySelector('.navbar-bottom');
//
// let lastScrollTop = 0;
//
// window.addEventListener('scroll', function() {
//     let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
//
//     if (scrollTop > lastScrollTop) {
//         navbarBottom.style.top = "-50px"; // Hides navbar when scrolling down
//     } else {
//         navbarBottom.style.top = "0"; // Shows navbar when scrolling up
//     }
//
//     lastScrollTop = scrollTop;
// });
// Assuming you're using jQuery
$(document).ready(function() {
    var didScroll;
    var lastScrollTop = 0;
    var delta = 50; // adjust this value if you want more/less sensitivity
    var navbarHeight = $('header').outerHeight();
    console.log('navbarHeight: ' + navbarHeight);
    console.log('didScroll: ' + didScroll);

    $(window).scroll(function() {
        didScroll = true;
    });

    setInterval(function() {
        if (didScroll) {
            handleScroll();
            didScroll = false;
        }
    }, 250);

    function handleScroll() {
        var st = $(window).scrollTop();

        // Ensure there's a sufficient difference in scroll position
        console.log('diff' + Math.abs(lastScrollTop - st));
        if(Math.abs(lastScrollTop - st) <= delta) {
            return;
        }

        // If scrolled more than the header height
        console.log(st > lastScrollTop && st > navbarHeight)
        if (st > lastScrollTop && st > navbarHeight) {
            // Scroll Down
            $('#navbar-bottom').css('top', '-1px'); // hide navbar
        } else {
            // Scroll Up
            $('#navbar-bottom').css('top', '0'); // show navbar
        }

        lastScrollTop = st;
    }
});
