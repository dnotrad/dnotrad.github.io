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
burger.addEventListener("click", () => {
    burger.classList.toggle("active");
    mobileNav.classList.toggle("active");
    document.body.classList.toggle("fixed");
    header.classList.toggle("shadowOff");
    
})

