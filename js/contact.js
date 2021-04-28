const hamburger = document.querySelector(".burger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("open");
  hamburger.classList.toggle("toggle");

  links.forEach(link => {
    link.classList.toggle("fade");
  });
});

window.addEventListener("load", function () {
  const loader = document.querySelector(".loader");
  loader.className += " hidden";
});

// gsap.registerPlugin(ScrollTrigger);
// gsap.from(".contact-p", {x:-200, duration: 0.7, ease: "power1"});
// gsap.from(".contact-h", {x:200, duration: 0.7, ease: "power1"});
