const kmpiheader = document.querySelector(".systemkmpi--header");
const kmpiall = document.querySelector(".systemkmpi");
const kmpibackground = document.querySelector(".systemkmpi--background-photo");
const headercolorswitch = ()=>
{
    kmpiheader.style.color="mediumaquamarine";
    kmpiheader.style.transform="scale(1.05)";
    kmpibackground.style.opacity="0.4";
}

const headerdefaultcolor = ()=>
{
    kmpiheader.style.color="#222222";
    kmpiheader.style.transform="scale(1)";
    kmpibackground.style.opacity="0.8";
}

kmpiall.addEventListener("mouseover",headercolorswitch);
kmpiall.addEventListener("mouseout",headerdefaultcolor);