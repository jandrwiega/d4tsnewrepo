//KMPI
const kmpiheader = document.querySelector(".systemkmpi--all--header");
const kmpicontent = document.querySelector(".systemkmpi--all--content");
const kmpibutton = document.querySelector(".systemkmpi--all--button");
const kmpiall = document.querySelector(".systemkmpi");
const kmpibackground = document.querySelector(".systemkmpi--photo");

const headercolorswitch = ()=>
{
kmpiall.style.backgroundImage="url(data/kmpi2.png)";
kmpiall.style.transition=" all .5s ease-in-out";
kmpicontent.style.color="silver";
kmpicontent.style.transition="all .5s .2s ease-in-out";
kmpiheader.style.transform="scale(1.03)";
kmpiheader.style.transition=".5s ease-in-out";
}

const headerdefaultcolor = ()=>
{
  kmpiall.style.backgroundImage="url(data/kmpi.jpg)";
  kmpicontent.style.color="black";
  kmpiheader.style.transform="scale(1)";
}

kmpiall.addEventListener("mouseover",headercolorswitch);
kmpiall.addEventListener("mouseout",headerdefaultcolor);