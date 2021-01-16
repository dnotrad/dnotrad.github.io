let header = document.querySelector(".header");
let burger = header.querySelector(".burger");
let mobileNav = document.querySelector(".nav-for-mobile__wrapper");

// HEADER OPACITY
let currentScroll = window.pageYOffset;
document.addEventListener("scroll", () => {
    if( (window.pageYOffset > 100) && (window.pageYOffset > currentScroll) ) {
        header.classList.add("hide");
        currentScroll = window.pageYOffset;
    }else {
        header.classList.remove("hide");
        currentScroll = window.pageYOffset;
    }
})

// BURGER
let isBurgerOpen = false;
let addClassesForBurger = () => {
    burger.classList.add("active");
    mobileNav.classList.add("active");
    document.body.classList.add("fixed");
    header.classList.add("shadowOff");
    isBurgerOpen = true;
}
let removeClassesForBurger = () => {
    burger.classList.remove("active");
    mobileNav.classList.remove("active");
    document.body.classList.remove("fixed");
    header.classList.remove("shadowOff");
    isBurgerOpen = false;
}
let toogleClassesForBurger = () => {
    if(!isBurgerOpen) addClassesForBurger();
    else removeClassesForBurger();
}
burger.addEventListener("click", toogleClassesForBurger);

// SCROLL
let links = document.querySelectorAll(".nav__link");

links.forEach( (link) => {
    link.addEventListener("click", (e) => {
        removeClassesForBurger();
    })
} )
