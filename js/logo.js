const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".navigation");
const all = document.querySelector(".content__box");
const footersmall = document.querySelector(".footer");
const footerbig = document.querySelector(".footer__bigger");
const addedfooter = document.querySelector(".footeradd");
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
//addedfooter.addEventListener("click",gback);
footersmall.addEventListener("click", gback);
footerbig.addEventListener("click", gback);
