// Window Scroll Functions
window.onscroll = function () {
    if (this.scrollY >= 200) {

        document.getElementById("arrow-up").style.opacity = 1;
        document.getElementById("arrow-up").style.visibility = "visible";

    } else {
        document.getElementById("arrow-up").style.opacity = 0;
        document.getElementById("arrow-up").style.visibility = "hidden";

    }
};

document.getElementById("arrow-up").onclick = function () {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
};

// Remove the loading spinner after page load
window.addEventListener("load", function () {
    setTimeout(function () {
        document.body.style.overflow = "auto";
        document.querySelector(".loader").style.display = "none"
    }, 1000);
});
