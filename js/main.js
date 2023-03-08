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

// Counter The Wrods in Textarea when I Write
let charCount = document.getElementById("charCount")

let input = document.getElementById("myInput");

let max_length = input.getAttribute("maxlength")

input.oninput = function () {
    charCount.innerHTML = max_length - this.value.length;

    if (charCount.innerHTML == 0) {

        charCount.style.color = "red";

    } else if (charCount.innerHTML <= 50) {
        charCount.style.color = "orange"
    } else {
        charCount.style.color = "green"
    }

    if (input.value == "") {
        charCount.style.display = "none";
    } else {
        charCount.style.display = "block";
    }
}
