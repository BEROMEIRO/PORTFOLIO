// portfolio-filter.js
console.log('portfolio-filter.js carregado');

function filterPortfolio(category) {
    console.log('Filtrando categoria:', category); // Para debug
    const projects = document.querySelectorAll('.project');

    projects.forEach(project => {
        if (category === 'all' || project.classList.contains(category)) {
            project.style.display = 'block';
        } else {
            project.style.display = 'none';
        }
    });
}