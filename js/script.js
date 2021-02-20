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
            return opacity+2.7;
        }
    });
});
  