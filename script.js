document.addEventListener("DOMContentLoaded", () => {
    const burgerBtn = document.getElementById("burger-btn");
    const navMenu = document.getElementById("nav-menu");
    const navLinks = document.querySelectorAll(".nav-links a");

    // Відкриття/закриття меню при кліку на бургер
    burgerBtn.addEventListener("click", () => {
        burgerBtn.classList.toggle("active");
        navMenu.classList.toggle("active");
    });

    // Закриття меню при кліку на будь-яке посилання (щоб меню ховалося після переходу на секцію)
    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            burgerBtn.classList.remove("active");
            navMenu.classList.remove("active");
        });
    });
});