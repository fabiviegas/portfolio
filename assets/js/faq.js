// FAQ
const PROJ = document.querySelectorAll('.btn__title');

PROJ.forEach(projList => {
    projList.addEventListener('click', e => {
        projList.classList.toggle('active');
    })
})
