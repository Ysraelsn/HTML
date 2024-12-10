let menuBtn = document.querySelector(".menu-btn")
let navLinks = document.querySelector(".nav-links")

menuBtn.addEventListener("click",function(){
    navLinks.classList.toggle("active");
    
});

window.addEventListener("scroll",()=>{
    navLinks.classList.remove("active");
})

document.addEventListeneri("click",(event) =>{
    if(!event.target.closest('.nav-links') && !event.target.closest('.menu-btn')){
        navLinks.classList.remove("active")
    }
})