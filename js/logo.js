const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".navigation");
const all = document.querySelector(".content");
const blankleft = document.querySelector(".blank__content--left");
const blankright = document.querySelector(".blank__content--right");
const change = () =>
{
    hamburger.classList.toggle("hamburger--active");
    nav.classList.toggle("navigation--active");
}
hamburger.addEventListener("click", change);

const gback = () =>
{
    hamburger.classList.remove("hamburger--active");
    nav.classList.remove("navigation--active");
}
all.addEventListener("click", gback);
blankleft.addEventListener("click", gback);
blankright.addEventListener("click", gback);