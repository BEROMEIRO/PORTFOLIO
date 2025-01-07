console.log('portfolio-filter.js carregado');

function filterPortfolio(category) {
    console.log('Filtrando categoria:', category);
    const projects = document.querySelectorAll('.project');

    projects.forEach(project => {
        if (category === 'all' || project.classList.contains(category)) {

            project.classList.remove('hidden');
            project.classList.add('visible');
            setTimeout(() => project.classList.add('visible'), 50);
        } else {

            project.classList.remove('visible');
            project.classList.add('hidden');
            setTimeout(() => project.classList.add('hidden'), 300);
        }
    });
}
