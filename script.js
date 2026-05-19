document.addEventListener("DOMContentLoaded", function() {
    console.log("Portfolio Loaded");

    const sections = document.querySelectorAll("section");

    sections.forEach(section => {
        section.addEventListener("mouseover", function() {
            section.style.transform = "scale(1.02)";
            section.style.transition = "0.3s ease";
        });

        section.addEventListener("mouseout", function() {
            section.style.transform = "scale(1)";
        });
    });
});