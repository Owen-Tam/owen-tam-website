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

$(window).scroll(function() {
    var scrollTop = $(this).scrollTop();

        $('.fade').css({
        opacity: function() {
            var elementHeight = $(this).height(),
            opacity = ((elementHeight - scrollTop) / elementHeight);
            return opacity+2.3;
        }
    });
});
window.addEventListener("load", function() {
    const loader = document.querySelector(".loader");
    loader.className += " hidden";
});

const progressBar = document.getElementsByClassName('progress-bar')[0]
setInterval(()=> {
    const computedStyle = getComputedStyle(progressBar)
    const width = parseFloat(computedStyle.getPropertyValue('--width')) || 0
    progressBar.style.setProperty('--width', width + .11)
}, 5)