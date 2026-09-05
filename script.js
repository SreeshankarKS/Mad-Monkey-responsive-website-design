const menuButton = document.getElementById("menuBtn");
const navigation = document.getElementById("navigation");

menuButton.addEventListener("click", () => {
    navigation.classList.toggle("show");
});


/* ================================
   NAVIGATION ACTIVE STATE
================================ */

const navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach((link) => {

    link.addEventListener("click", () => {

        navLinks.forEach((item) => {
            item.classList.remove("active");
        });

        link.classList.add("active");

    });

});


/* ================================
   CATEGORY ACTIVE STATE
================================ */

const categories = document.querySelectorAll(".category");

categories.forEach((category) => {

    category.addEventListener("click", () => {

        categories.forEach((item) => {
            item.classList.remove("active");
        });

        category.classList.add("active");

    });

});