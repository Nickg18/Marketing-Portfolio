let navToggle = document.querySelector('.burger');

function toggleHamburger() {
    navToggle.classList.toggle('active');
}

navToggle.addEventListener('click', toggleHamburger);
