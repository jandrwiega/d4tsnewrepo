const firstdiv = document.querySelector("#headerdiv1");
const firstheader = document.querySelector("#header1");

const secdiv = document.querySelector("#headerdiv2");
const secheader = document.querySelector("#header2");

const firdtdiv = document.querySelector("#headerdiv3");
const firdtheader = document.querySelector("#header3");

const headercolorchange1 = ()=>
{
    firstheader.style.color="white";
}
const headercolordefault1 = ()=>
{
    firstheader.style.color="black";
}

const headercolorchange2 = ()=>
{
    secheader.style.color="white";
}
const headercolordefault2 = ()=>
{
    secheader.style.color="black";
}

const headercolorchange3 = ()=>
{
    firdtheader.style.color="white";
}
const headercolordefault3 = ()=>
{
    firdtheader.style.color="black";
}

firstdiv.addEventListener("mouseover",headercolorchange1);
firstdiv.addEventListener("mouseout", headercolordefault1);
secdiv.addEventListener("mouseover",headercolorchange2);
secdiv.addEventListener("mouseout", headercolordefault2);
firdtdiv.addEventListener("mouseover",headercolorchange3);
firdtdiv.addEventListener("mouseout", headercolordefault3);