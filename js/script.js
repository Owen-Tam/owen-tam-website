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

gsap.from(".banner-h", {x:-200, duration: 1, ease: "power1"});
gsap.from(".banner-p", {x:200, duration: 1, ease: "power1"});
gsap.from(".banner-btn", {x:-200, duration: 1, ease: "power1"});
gsap.from(".about-title", {
    scrollTrigger :{
        trigger: ".about-title",
    }, x:-100, duration: 1, ease: "power1"});
gsap.from(".about-text", {
    scrollTrigger :{
        trigger: ".about-text",
        toggleActions: "play pause resume pause"
    }, x:100, duration: 1, ease: "power1"});    
gsap.from(".about-resume", {
    scrollTrigger :{
        trigger: ".about-text",
        toggleActions: "play pause resume pause"
    }, x:-100, duration: 1, ease: "power1"});  
gsap.from(".buttons", {
    scrollTrigger :{
        trigger: ".buttons",
        toggleActions: "play pause resume pause"
    }, x:100, duration: 1, ease: "power1"});  
gsap.from(".about-email", {
    scrollTrigger :{
        trigger: ".buttons",
        toggleActions: "play pause resume pause"
    }, x:200, duration: 1, ease: "power1"});
gsap.from(".services-f", {
    scrollTrigger :{
        trigger: ".services-f",
        toggleActions: "play pause resume pause"
    }, x:-200, duration: 0.5, ease: "power1"});  
gsap.from(".services-s", {
    scrollTrigger :{
        trigger: ".services-s",
        toggleActions: "play pause resume pause"
    }, y:200, duration: 0.5, ease: "power1"});
gsap.from(".services-t", {
    scrollTrigger :{
        trigger: ".services-t",
        toggleActions: "play pause resume pause"
    }, x:200, duration: 0.5, ease: "power1"});  

      