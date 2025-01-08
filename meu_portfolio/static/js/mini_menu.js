document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.querySelector(".mini_menu-toggle-btn");
    const miniMenu = document.querySelector(".mini_menu");
    const menuLinks = document.querySelectorAll(".mini_menu ul li a");


    toggleButton.addEventListener("click", () => {
        miniMenu.classList.toggle("show");
    });


    menuLinks.forEach(link => {
        link.addEventListener("click", () => {
            miniMenu.classList.remove("show");
        });
    });
});
