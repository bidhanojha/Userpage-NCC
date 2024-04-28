// accessing elements from index.html
const body = document.querySelector('body');
const nav = document.querySelector('nav');
const main = document.querySelector('main');
const navElements = document.querySelector('#nav-elements-small');
const navMenu = document.querySelector('#nav-menu')
const xMark = document.querySelector('#xmark');


// event listeners to add the navbar on small screens
navMenu.addEventListener('click', () => {
    xMark.classList.remove('opacity-0');
    navElements.classList.remove('translate-x-full');
})


// event listeners to remove the navbar on small screens
xMark.addEventListener('click', () => {
    xMark.classList.add('opacity-0');
    navElements.classList.add('translate-x-full');
})

