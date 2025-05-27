const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector("nav");
const overlay = document.querySelector(".overlay");

let lastScrollY = window.scrollY;
let isScrollingDown = false;

// Handle hamburger toggle
hamburger.addEventListener("click", () => {
    nav.classList.toggle("active");

    if (nav.classList.contains("active")) {
        hamburger.style.display = "none"; // Hide the button while nav is open
    } else {
        hamburger.style.display = "block"; // Show the button again
    }
});

// Close menu if overlay is clicked
overlay.addEventListener("click", () => {
    nav.classList.remove("active");
    hamburger.style.display = "block"; // Show button again
});

// Close menu if clicking outside nav
document.body.addEventListener("click", (event) => {
    if (
        nav.classList.contains("active") &&
        !nav.contains(event.target) &&
        event.target !== hamburger
    ) {
        nav.classList.remove("active");
        hamburger.style.display = "block";
    }
});

// 🆕 Scroll behavior: hide/show hamburger
window.addEventListener("scroll", () => {
    const currentScrollY = window.scrollY;

    // Don't hide if menu is open
    if (!nav.classList.contains("active")) {
        if (currentScrollY > lastScrollY && !isScrollingDown) {
            // Scroll down: hide
            hamburger.classList.add("hide");
            isScrollingDown = true;
        } else if (currentScrollY < lastScrollY && isScrollingDown) {
            // Scroll up: show
            hamburger.classList.remove("hide");
            isScrollingDown = false;
        }
    }

    lastScrollY = currentScrollY;
});
