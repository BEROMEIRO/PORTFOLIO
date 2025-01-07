// footerFixed.js

// Função para tornar o footer fixo e mantê-lo na parte inferior
window.addEventListener('load', function () {
    const footer = document.querySelector("footer");
    footer.style.position = "fixed";
    footer.style.bottom = "0";
    footer.style.width = "100%";
});
