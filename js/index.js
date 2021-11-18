//NAVBAR TOGGLING

const btnNavEl = document.querySelector(".btn-nav-toggle");
const headerEl = document.querySelector(".header");

btnNavEl.addEventListener('click', () => {
    // e.preventDefault()
    headerEl.classList.toggle('nav-open')
    console.log()
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
})