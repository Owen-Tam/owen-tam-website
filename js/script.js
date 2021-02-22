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

