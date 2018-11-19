let nav = document.getElementById("topNavBar");

window.addEventListener('scroll', () => {
    if (pageYOffset - 4 * nav.clientHeight > 0) {
        if (nav.classList.contains('navbar-primary')) {
            nav.classList.toggle('navbar-primary');
        }
    }

    else if (pageYOffset - 4 * nav.clientHeight < 0) {
        if (!nav.classList.contains('navbar-primary')) {
            nav.classList.toggle('navbar-primary');
        }
    }
})