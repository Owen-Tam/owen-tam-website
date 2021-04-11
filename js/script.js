const hamburger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');
const links = document.querySelectorAll(".nav-links li");


hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("open");
    hamburger.classList.toggle("toggle");

    links.forEach(link => {
        link.classList.toggle("fade");
    });
});


window.addEventListener("load", function() {
    const loader = document.querySelector(".loader");
    loader.className += " hidden";
});
gsap.registerPlugin(ScrollTrigger);

// gsap.from(".banner-h", {x:-200, duration: 1, ease: "power1"});
// gsap.from(".banner-p", {x:200, duration: 1, ease: "power1"});
// gsap.from(".banner-btn", {x:-200, duration: 1, ease: "power1"});
// gsap.from(".services-p", {
//     scrollTrigger :{
//         trigger: ".services-p",
//         pinSpacing: "none",
//         toggleActions: "play pause resume pause"
//     }, x:200, duration: 0.7, ease: "power1"});
// gsap.from(".services-h", {
//     scrollTrigger :{
//         trigger: ".services-h",
//         toggleActions: "play pause resume pause"
//     }, x:-200, duration: 0.7, ease: "power1"});
// gsap.from(".projects-p", {
//     scrollTrigger :{
//         trigger: ".projects-p",
//         toggleActions: "play pause resume pause"
//     }, x:200, duration: 0.7, ease: "power1"});
// gsap.from(".projects-h", {
//     scrollTrigger :{
//         trigger: ".projects-h",
//         toggleActions: "play pause resume pause"
//     }, x:-200, duration: 0.7, ease: "power1"});
    