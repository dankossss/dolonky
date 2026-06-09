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

// --- ЛОГІКА СЛАЙДЕРА ГАЛЕРЕЇ ---
document.addEventListener("DOMContentLoaded", () => {
    const slides = document.querySelectorAll(".slide");
    const dots = document.querySelectorAll(".dot");
    const prevBtn = document.getElementById("prev-btn");
    const nextBtn = document.getElementById("next-btn");
    
    let currentIdx = 0;

    // Функція, яка оновлює видимість слайдів та крапок
    function showSlide(index) {
        // Якщо індекс виходить за рамки — скидаємо по колу
        if (index >= slides.length) currentIdx = 0;
        else if (index < 0) currentIdx = slides.length - 1;
        else currentIdx = index;

        // Перемикаємо класи для слайдів
        slides.forEach(slide => slide.classList.remove("active"));
        slides[currentIdx].classList.add("active");

        // Перемикаємо класи для крапок
        dots.forEach(dot => dot.classList.remove("active"));
        dots[currentIdx].classList.add("active");
    }

    // Кліки на стрілочки
    if (nextBtn) {
        nextBtn.addEventListener("click", () => {
            showSlide(currentIdx + 1);
        });
    }

    if (prevBtn) {
        prevBtn.addEventListener("click", () => {
            showSlide(currentIdx - 1);
        });
    }

    // Кліки на крапки нижче слайдера
    dots.forEach(dot => {
        dot.addEventListener("click", (e) => {
            const targetIdx = parseInt(e.target.getAttribute("data-index"));
            showSlide(targetIdx);
        });
    });
});