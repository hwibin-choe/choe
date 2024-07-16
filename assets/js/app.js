window.onscroll = function () {
    if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
        document.getElementById("navbar").classList.add("scrolled");
    } else {
        document.getElementById("navbar").classList.remove("scrolled");
    }
};

// AOS
AOS.init({
    duration: 800,
});

let scrollTop = document.querySelector(".scroll-top");

function toggleScrollTop() {
    if (scrollTop) {
        window.scrollY > 100
            ? scrollTop.classList.add("active")
            : scrollTop.classList.remove("active");
    }
}

window.addEventListener("load", toggleScrollTop);
document.addEventListener("scroll", toggleScrollTop);

let skillsAnimation = document.querySelectorAll(".skills-animation");
skillsAnimation.forEach((item) => {
    new Waypoint({
        element: item,
        offset: "80%",
        handler: function (direction) {
            let progress = item.querySelectorAll(".progress .progress-bar");
            progress.forEach((el) => {
                el.style.width = el.getAttribute("aria-valuenow") + "%";
            });
        },
    });
});
