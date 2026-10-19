const menuBtn = document.getElementById("menu-btn"); 
const navlinks = document.getElementById("nav-links"); 
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
    navlinks.classList.toggle("open");

    const isOpen = navlinks.classList.contains("open");
    menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navlinks.addEventListener("click", (e) => {
    navlinks.classList.remove("open");
    menuBtnIcon.setAttribute("class", "ri-menu-line");
});

const scrollRevealOption = {
    origin: "bottom", 
    distance: "50px",
    duration: 1000,
};

scrollReveal().reveal(".header_image img", {
    ...scrollRevealOption,
    origin: "right",
});

scrollReveal().reveal(".header_content p", {
    ...scrollRevealOption,
    delay: 500,
});

scrollReveal().reveal(".header_content h1", {
    ...scrollRevealOption,
    delay:  1000,
});

scrollReveal().reveal(".header_btns", {
    ...scrollRevealOption,
    delay:  1500,
});