// script.js
document.getElementById('menuIcon').addEventListener('click', function () {
    const sidebar = document.getElementById('sidebar');
    const mainContent = document.querySelector('.main-content');


    sidebar.classList.toggle('active');
    mainContent.classList.toggle('active');
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    });
});


document.addEventListener("click", function (event) {
    let sidebar = document.querySelector(".sidebar"); // Change to your actual sidebar class
    let menuButton = document.querySelector(".menu-button"); // Change to your actual menu button class

    // Check if the click is outside the sidebar and not on the menu button
    if (!sidebar.contains(event.target) && !menuButton.contains(event.target)) {
        sidebar.style.display = "none"; // Hides the sidebar
    }
});

