const pageHeader = document.querySelector(".page-header");

window.addEventListener("scroll", function() {
    pageHeader.classList.toggle("page-header--sticky", window.scrollY > 80);
});

let menu = document.querySelector('#menu-icon');
let nav = document.querySelector('.nav');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    nav.classList.toggle('open');
};

window.onscroll = () => {
    menu.classList.remove('bx-x');
    nav.classList.remove('open');
};

const sr = ScrollReveal({
    origin: 'top',
    distance: '85px',
    duration: 2500,
    reset: true
})

sr.reveal ('.intro__inner', {delay: 300});