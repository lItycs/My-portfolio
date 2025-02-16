document.addEventListener("DOMContentLoaded", function () {
    function createStar() {
        const star = document.createElement("div");
        star.classList.add("star");
        document.querySelector(".stars").appendChild(star);

        // Випадкова позиція по ширині
        star.style.left = Math.random() * 100 + "vw";

        // Випадковий розмір (1px - 4px)
        const size = Math.random() * 3 + 1;
        star.style.width = size + "px";
        star.style.height = size + "px";

        // Випадкова яскравість (від 0.3 до 1)
        const opacity = Math.random() * 0.7 + 0.3;
        star.style.setProperty("--opacity", opacity);

        // Випадковий нахил (від -45° до 45°)
        const rotate = (Math.random() - 0.5) * 90; // Від -45° до 45°
        star.style.setProperty("--rotate", rotate + "deg");

        // Випадковий зсув у бік (від -150px до 150px)
        const xMove = (Math.random() - 0.5) * 300;
        star.style.setProperty("--x-move", xMove + "px");

        // **Баланс швидкостей: 80-90% повільні, 10-20% швидкі**
        const isFast = Math.random() < 0.1; // 10% швидких зірок
        const duration = isFast ? Math.random() * 0.7 + 0.9 : Math.random() * 2 + 3; // 0.8-1.5s (швидкі), 2-4s (повільні)
        star.style.animationDuration = duration + "s";

        // Видаляємо зірку після завершення анімації
        setTimeout(() => {
            star.remove();
        }, duration * 1000);
    }

    // Створюємо нову зірку кожні 100 мс
    setInterval(createStar, 100);
});


document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(event) {
        event.preventDefault(); // Забороняємо стандартну дію посилання
        const targetId = this.getAttribute('href'); // Отримуємо ID секції
        document.querySelector(targetId).scrollIntoView({
            behavior: 'smooth' // Додаємо плавне прокручування
        });
    });
});

const hiddenElements = document.querySelectorAll('.hidden');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.2 });

hiddenElements.forEach(element => observer.observe(element));


document.addEventListener("DOMContentLoaded", function () {
    const burger = document.querySelector(".burger");
    const navLinks = document.querySelector(".nav-links");

    burger.addEventListener("click", function () {
        navLinks.classList.toggle("active");
    });
});
