const kmpiheader = document.querySelector(".systemkmpi--header");
const kmpiall = document.querySelector(".systemkmpi");
const kmpibackground = document.querySelector(".systemkmpi--background-photo");
const kmpitext = document.querySelector(".systemkmpi--text");
const kmpibutton = document.querySelector(".systemkmpi--button-btn");
const kmpibuttonhref = document.querySelector(".systemkmpi--button-a");
const headercolorswitch = ()=>
{
    kmpiheader.style.color="darkcyan";
    kmpiheader.style.transform="scale(1.05)";
    kmpiall.style.opacity="0.8";
    kmpibutton.style.backgroundcolor="darkcyan";
    kmpibutton.style.transform="scale(1.03)";
    kmpibuttonhref.style.color="white";
}

const headerdefaultcolor = ()=>
{
    kmpiheader.style.color="mediumaquamarine";
    kmpiheader.style.transform="scale(1)";
    kmpiall.style.opacity="1";
    kmpibutton.style.backgroundcolor="mediumaquamarine";
    kmpibutton.style.transform="scale(1)";
    kmpibuttonhref.style.color="#222222";
}

kmpiall.addEventListener("mouseover",headercolorswitch);
kmpiall.addEventListener("mouseout",headerdefaultcolor);