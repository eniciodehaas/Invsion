navbar = document.getElementById("navbartext");
navbar_white = document.getElementById("navbar");
// navbarbuttons = document.getElementsByClassName("navbarbutton");
// for (let i = 0; i < navbarbuttons.length; i++) {
//     navbarbuttons[i].style.color = "red";
// }
document.body.onscroll = function() {
    console.log("scroll");
    var top = window.pageYOffset;
    console.log(top);
    if (top < 250) {
        navbar.classList.remove("navbartext-scrolled");
        navbar_white.classList.remove("navbar-scrolled");
    } else {
        navbar.classList.add("navbartext-scrolled");
        navbar_white.classList.add("navbar-scrolled");
    }
}