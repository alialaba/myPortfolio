
"use strict"
//NAVBAR TOGGLING

const menuButton = document.querySelector("#menu-toggle");
const mainNav = document.querySelector("#main-nav");
const body = document.querySelector("body");
const heroSection = document.querySelector("#hero-section");
const headerLogo = document.querySelector("#header__logo");






const observer = new IntersectionObserver((entries)=>{
    // console.log(entries[0])
    headerLogo.classList.toggle("logo-hidden", !entries[0].isIntersecting);

},{
    threshold: 0,
    rootMargin: "0px 0px 100% 0px"

})

observer.observe(heroSection)


// console.log(workViusals)

menuButton.addEventListener("click", ()=>{
    const isOpen = menuButton.getAttribute("aria-expanded") === "true";
    menuButton.setAttribute("aria-expanded", String(!isOpen))
    mainNav.setAttribute("aria-hidden", String(isOpen))
    mainNav.classList.toggle("is-open")
    
})



  document.addEventListener("click", (e)=>{
     if(!mainNav.contains(e.target) && !menuButton.contains(e.target)) {
       const isOpen = menuButton.getAttribute("aria-expanded") === "true";
    menuButton.setAttribute("aria-expanded", "false")
    mainNav.setAttribute("aria-hidden", String(isOpen))
    mainNav.classList.remove("is-open")
     }
    
  })




/*

const btnNavEl = document.querySelector(".btn-nav-toggle");
const headerEl = document.querySelector(".header");

btnNavEl.addEventListener('click', () => {
    // e.preventDefault()
    headerEl.classList.toggle('nav-open')


})

//TABS

const openTab = (evt, tabName) => {
    let i, tabs, tabcontents;
    tabcontents = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabcontents.length; i++) {
        // console.log(tabcontent)
        tabcontents[i].style.display = "none";
    }
    tabs = document.getElementsByClassName("tab");
    for (i = 0; i < tabs.length; i++) {
        tabs[i].className = tabs[i].className.replace(" active", "")
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}


window.addEventListener("load", (event) => {
    // event.preventDefault();
    document.getElementById("tools-1").style.display = "block";
    document.getElementById("tools-2").style.display = "none";
    document.getElementById("tools-3").style.display = "none";
    document.getElementById("tools-4").style.display = "none";
    document.getElementById("tools-5").style.display = "none";
    document.getElementById("tools-6").style.display = "none";
})

//Elements
const devGreeting = document.getElementById("dev-greet");

//time

const now = new Date();
const currentHours = now.getHours();
const userLocale = navigator.language;
new Intl.DateTimeFormat(userLocale).format(now)

const displayGreeting = () => {
    if (currentHours >= 0 && currentHours <= 11) {
        devGreeting.textContent = "Good Morning ☀️";
    } else if (currentHours >= 12 && currentHours < 16) {
        devGreeting.textContent = "Good Afternoon ✌️ ";
    } else if (currentHours > 16 && currentHours < 21) {
        devGreeting.textContent = "Good Evening ✨️";
    } else {
        devGreeting.textContent = "Good Night";
    }
}

window.addEventListener("onload", () => {
    // if (onload) {
    //     displayGreeting()
    // } else {
    //     devGreeting.textContent = "Ali.dev";
    // }
})
setInterval(function () { displayGreeting(); }, 1000);

/*********STICY NAVIGATION *************/
const sectionHeroEl = document.querySelector(".hero-section");

const obs = new IntersectionObserver(
    function (entries) {
        const ent = entries[0];
        if (ent.isIntersecting === false) {
            document.body.classList.add("sticky");
        }
        if (ent.isIntersecting === true) {
            document.body.classList.remove("sticky");
        }

    },
    {
        //in the viewport
        root: null,
        threshold: 0,
        rootMargin: "-80px"
    }
);
obs.observe(sectionHeroEl);



