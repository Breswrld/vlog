const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector("nav");
const overlay = document.querySelector(".overlay");

hamburger.addEventListener("click", () => {
    nav.classList.toggle("active");
    if (nav.classList.contains("active")) {
        hamburger.style.display = "none"; // Hide the button
    } else {
        hamburger.style.display = "block"; // Show the button
    }
});

overlay.addEventListener("click", () => {
    nav.classList.remove("active");
    hamburger.style.display = "block"; // Ensure button is shown
});
document.body.addEventListener("click", (event) => {
    if (nav.classList.contains("active") && !nav.contains(event.target) && event.target !== hamburger) {
        nav.classList.remove("active");
        hamburger.style.display = "block";
    }
});
