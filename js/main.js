document.addEventListener('DOMContentLoaded', function () {
    var header = document.querySelector('header');
    var lastScrollY = window.scrollY;

    window.addEventListener('scroll', function () {
        if (window.scrollY > lastScrollY) {
            header.classList.add('show');
        } else {
            header.classList.remove('show');
        }
        lastScrollY = window.scrollY;
    });
});
