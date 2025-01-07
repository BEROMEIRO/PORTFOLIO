const scrollToTopButton = document.getElementById('scrollToTop');

function checkSectionVisibility() {
    const sections = ['home', 'about', 'portfolio', 'services', 'contact'];
    let isInHome = false;

    sections.forEach((sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            const rect = section.getBoundingClientRect();
            if (sectionId === 'home' && rect.top >= 0 && rect.bottom >= 0) {
                isInHome = true;
            }
        }
    });

    if (isInHome) {
        scrollToTopButton.classList.remove('active');
    } else {
        scrollToTopButton.classList.add('active');
    }
}

scrollToTopButton.addEventListener('click', function () {
    const homeSection = document.getElementById('home');
    if (homeSection) {
        homeSection.scrollIntoView({ behavior: 'smooth' });
    }
});


const navigationLinks = document.querySelectorAll('a[href^="#"]');

navigationLinks.forEach((link) => {
    link.addEventListener('click', function (event) {
        event.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth' });
        }
    });
});
window.addEventListener('scroll', checkSectionVisibility);
document.addEventListener('DOMContentLoaded', checkSectionVisibility);