const $menu = document.getElementById("menu")
const $nav = document.getElementById("nav")
const $pizza = document.getElementById("pizza")

function toggleNav() {
    $nav.classList.toggle("active");
}

$menu.addEventListener("click", toggleNav);

function elementInView($el) {
    let bottomOfWindow = window.scrollY + window.innerHeight;
    let bottomOfElement = $el.offsetTop + $el.offsetHeight;


    if (bottomOfWindow >= bottomOfElement) {
    return true;
    }
    return false;
}

function onScroll() {
    if (elementInView($pizza)) {
        $pizza.classList.add("show");
    }
}

document.addEventListener("scroll", onScroll);

//Links from research:
//https://codepen.io/jr-cologne/pen/zdYdmx
//https://dev.to/ljcdev/easy-hamburger-menu-with-js-2do0
//https://www.w3schools.com/cssref/pr_scroll-behavior.asp
//https://www.w3schools.com/jsref/prop_element_classlist.asp