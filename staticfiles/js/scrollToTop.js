// scrollToTop.js

// Função para mostrar/ocultar o botão de voltar para o topo
window.onscroll = function () {
    var scrollButton = document.getElementById("scrollToTop");
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        scrollButton.style.display = "block"; // Mostrar o botão
    } else {
        scrollButton.style.display = "none"; // Esconder o botão
    }
};

// Função para rolar para o topo quando o botão for clicado
document.getElementById("scrollToTop").addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
