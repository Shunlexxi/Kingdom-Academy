const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".navMenu");

//changing hamburger & navMenu upon clicking
hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})

//removing hamburger & nav link from active to normal state
document.querySelectorAll(".navLink").forEach(n => 
    n.addEventListener("click", () => {
        hamburger.classList.remove("active")
        hamburger.classList.remove("active")
    }))