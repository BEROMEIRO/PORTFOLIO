const menuToggle = document.getElementById('menu-toggle');
const header = document.getElementById('header');
const mainContent = document.getElementById('main');

menuToggle.addEventListener('click', function () {

    header.classList.toggle('open');

    mainContent.classList.toggle('menu-open');
});
