let burger = document.querySelector(".burger");
let mobileNav = document.querySelector(".nav-for-mobile__wrapper");

burger.addEventListener("click", () => {
    burger.classList.toggle("active");
    mobileNav.classList.toggle("active");
})
