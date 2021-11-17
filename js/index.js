//NAVBAR TOGGLING

const btnNavEl = document.querySelector(".btn-nav-toggle");
const headerEl = document.querySelector(".header");

btnNavEl.addEventListener('click', () => {
    // e.preventDefault()
    headerEl.classList.toggle('nav-open')
    console.log()
})

//TABS

const openTab=(evt, tabName)=>{
    let i, tab ,tabcontent;
    

}