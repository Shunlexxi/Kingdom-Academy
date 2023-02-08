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


// img-slider
var images = [
    'assests/sch-building1.jpg',
    'assests/sch-building2.jpg',
    'assests/sch-classroom.jpg'
];

var num = 0;

function next() {
    var slider = document.getElementById('slider');
    num++;

    if(num >= images.length)
    {
        num = 0;
    }

    slider.src = images[num];
}

function prev() {
    var slider = document.getElementById('slider');
    num--;
    if(num < 0){
        num = images.length - 1;
    }
    slider.src = images[num];
}