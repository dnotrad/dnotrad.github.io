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

// anim-item

let animItems = document.querySelectorAll(".anim-item");
// ПОЛУЧИТЬ РАССТОЯНИЕ ЭЛЕМЕНТА ОТ НАЧАЛА СТРАНИЦЫ
function offset(el) {
    var rect = el.getBoundingClientRect(),
    scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
}

if (animItems.length > 0) {
    window.addEventListener("scroll", animOnScroll)
    function animOnScroll(){
        for ( i = 0; i < animItems.length; i++ ){
            const animItem = animItems[i];
            const animItemHeightFromTop = offset(animItem).top;
            const animItemHeight = animItem.offsetHeight;
            let koef = window.innerHeight - animItemHeight / 4;
            if(animItemHeight > window.innerHeight){
                koef = (3/4) * window.innerHeight;
            } 

            if( window.pageYOffset > animItemHeightFromTop - koef){
                animItem.classList.add("active");
            }else animItem.classList.remove("active");
        }
    }
}
animOnScroll();