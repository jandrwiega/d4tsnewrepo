const footerphone = document.querySelector(".footer__phone");
const footeremail = document.querySelector(".footer__email");
const footeradress = document.querySelector(".footer__adress");

const footerphoneblack = document.querySelector(".footer__phone--photo");
const footeremailblack = document.querySelector(".footer__email--photo");
const footeradressblack = document.querySelector(".footer__adress--photo");

const footerphonecolor = document.querySelector(".footer__phone--photo-color");
const footeremailcolor = document.querySelector(".footer__email--photo-color");
const footeradresscolor = document.querySelector(".footer__adress--photo-color");

footerphone.addEventListener("mouseover",()=>
{
footerphoneblack.style.display="none";
footerphonecolor.style.display="block";
});
footerphone.addEventListener("mouseout",()=>
{
    footerphoneblack.style.display="block";
    footerphonecolor.style.display="none";
});

footeremail.addEventListener("mouseover",()=>
{
footeremailblack.style.display="none";
footeremailcolor.style.display="block";
});
footeremail.addEventListener("mouseout",()=>
{
    footeremailblack.style.display="block";
    footeremailcolor.style.display="none";
});

footeradress.addEventListener("mouseover",()=>
{
footeradressblack.style.display="none";
footeradresscolor.style.display="block";
});
footeradress.addEventListener("mouseout",()=>
{
    footeradressblack.style.display="block";
    footeradresscolor.style.display="none";
});