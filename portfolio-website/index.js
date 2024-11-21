let navToggle = document.querySelector('.burger');
let links = document.querySelector('.links');

function toggleHamburger() {
    navToggle.classList.toggle('active');
    links.classList.toggle('activate');
}

navToggle.addEventListener('click', toggleHamburger);
