const toggle = document.querySelector('.toggle');
const menu = document.querySelector('.menu');

function toggleMenu() {
    if (menu.classList.contains("opened")) {
        menu.classList.remove("opened");
        toggle.querySelector("a").innerHTML = "<i class='fas fa-bars'></i>";

    }else {
        menu.classList.add("opened");
        toggle.querySelector("a").innerHTML = "<i class='fas fa-times'></i>";
    }
}

toggle.addEventListener('click', toggleMenu, false);


window.addEventListener("load", function() {
    const loader = document.querySelector(".loader");
    loader.className += " hidden";
});
gsap.registerPlugin(ScrollTrigger);

var tl = gsap.timeline();
var tl2 = gsap.timeline();
tl.from(".banner-title .stag", {duration: 1, opacity: 0, x: -150, stagger: 0.2});
tl.from(".banner-title .underline", {duration: 1.5, width: 0, ease: Elastic.easeOut});
gsap.from(".contact-contact", {scrollTrigger: ".contact-contact", duration: 1, y: -50, opacity: 0 });
gsap.from(".stagge", {scrollTrigger: ".contact-contact", duration: 1, opacity:0, x: -50, stagger: 0.2, delay: 0.9});
