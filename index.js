const hamburger = document.querySelector('.hamburger');
const Menu = document.querySelector('.menu');
const navlinks = document.querySelectorAll(".nav-link");
const closeBtn = document.querySelector(".close_btn");
console.log(closeBtn);


function open() {
    hamburger.classList.toggle('active');
    Menu.classList.toggle("active");
}
/**
function close() {
    console.log('working');
    hamburger.classList.remove('active');
    Menu.classList.remove('active');
}**/

hamburger.addEventListener("click", open);
closeBtn.addEventListener("click", open);
navlinks.forEach(link => {
  link.addEventListener('click', open);   
});
