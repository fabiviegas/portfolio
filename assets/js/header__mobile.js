const HAMBURGUER = document.querySelector('.navbar__hamburguer');
const MENU = document.querySelector('.navbar__overlay');
const CLOSE = document.querySelector('.overlay__close');
const ANCHORS = document.querySelectorAll('.mobile__anchor');

HAMBURGUER.addEventListener('click', () => {
    MENU.classList.toggle('open');
})

CLOSE.addEventListener('click', () => {
    MENU.classList.toggle('open');
})

ANCHORS.forEach(anchor => {
    anchor.addEventListener('click', () => {
        MENU.classList.toggle('open');
    })
});