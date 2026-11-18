
// PRELOADER

window.addEventListener("load", () => {
    const loader = document.getElementById("loader");

    if (loader) {
        setTimeout(() => {
            loader.classList.add("hide");
        }, 2000);
    }
});

// MOBILE NAVBAR

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("show");

    menuToggle.textContent =
        navLinks.classList.contains("show") ? "✕" : "☰";
});


// CLOSE MOBILE MENU AFTER CLICK

document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("show");
        menuToggle.textContent = "☰";
    });
});


// DRINKS FILTER

const filterButtons = document.querySelectorAll(".filter-btn");
const menuCards = document.querySelectorAll(".menu-card");

filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        filterButtons.forEach(btn => {
            btn.classList.remove("active");
        });

        button.classList.add("active");

        const filter = button.dataset.filter;

        menuCards.forEach(card => {

            if (
                filter === "all" ||
                card.dataset.category === filter
            ) {

                card.classList.remove("hidden");

                card.style.animation = "none";

                void card.offsetWidth;

                card.style.animation = "menuShow .4s ease";

            } else {

                card.classList.add("hidden");

            }

        });

    });

});


// SCROLL REVEAL ANIMATION

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("active");

            observer.unobserve(entry.target);

        }

    });

}, {
    threshold: 0.12
});


document.querySelectorAll(".reveal").forEach(element => {
    observer.observe(element);
});


// BACK TO TOP

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if (window.scrollY > 400) {
        topBtn.classList.add("show");
    } else {
        topBtn.classList.remove("show");
    }

});


topBtn.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});
