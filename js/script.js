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


startupButton = document.getElementById("startupButton");
updateButton = document.getElementById("updateButton");
starterButton = document.getElementById("starterButton");
premiumButton = document.getElementById("premiumButton");
deluxeButton = document.getElementById("deluxeButton");

startup = document.getElementById("startup");
update = document.getElementById("update");
starter = document.getElementById("starter");
premium = document.getElementById("premium");
deluxe = document.getElementById("deluxe");



startupButton.addEventListener("click", function(){
    startup.classList.remove("display-none");
    update.classList.add("display-none");
    starter.classList.add("display-none");
    premium.classList.add("display-none");
    deluxe.classList.add("display-none");
});

updateButton.addEventListener("click", function(){
    startup.classList.add("display-none");
    update.classList.remove("display-none");
    starter.classList.add("display-none");
    premium.classList.add("display-none");
    deluxe.classList.add("display-none");
});

starterButton.addEventListener("click", function(){
    startup.classList.add("display-none");
    update.classList.add("display-none");
    starter.classList.remove("display-none");
    premium.classList.add("display-none");
    deluxe.classList.add("display-none");
});

premiumButton.addEventListener("click", function(){
    startup.classList.add("display-none");
    update.classList.add("display-none");
    starter.classList.add("display-none");
    premium.classList.remove("display-none");
    deluxe.classList.add("display-none");
});

deluxeButton.addEventListener("click", function(){
    startup.classList.add("display-none");
    update.classList.add("display-none");
    starter.classList.add("display-none");
    premium.classList.add("display-none");
    deluxe.classList.remove("display-none");
});