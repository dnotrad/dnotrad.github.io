let burger = document.querySelector(".burger");
let mobileNav = document.querySelector(".nav-for-mobile__wrapper");

let contacts = document.querySelector(".contacts");

let scrollTo = () => {
    // e.preventDefault();
    // element.scrollIntoView();
    alert(5);
}

burger.addEventListener("click", () => {
    burger.classList.toggle("active");
    mobileNav.classList.toggle("active");
    document.body.classList.toggle("fixed");
})
