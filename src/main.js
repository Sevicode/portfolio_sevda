const header = document.querySelector
    ('.main-header');

window.addEventListener('scroll', () => {
    const scrollPos = window.scrollY;
    if (scrolPos > 10) {
        header.classList.add('scrolled');

    } else {
        header.classList.remove('scrolled')
    }
})