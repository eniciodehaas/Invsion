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








// CAROUSEL

const track = document.querySelector('.carousel__track');
const slides = Array.from(track.children);
const nextButton = document.querySelector('.carousel__button--right');
const prevButton = document.querySelector('.carousel__button--left');
const dotsNav = document.querySelector('.carousel__nav');
const dots = Array.from(dotsNav.children);

const sildeWidth = slides[0].getBoundingClientRect().width;

const setSlidePosition = (slide , i) => {
    slide.style.left = sildeWidth * i + 'px';
};

slides.forEach(setSlidePosition);

const moveToSlide = (track, currentSlide, targetSlide) => {
    track.style.transform = 'translateX(-' + targetSlide.style.left + ')';
    currentSlide.classList.remove('current-slide');
    targetSlide.classList.add('current-slide');
}

const updateDots = (currentDot, targetDot) => {
    currentDot.classList.remove('current-slide');
    targetDot.classList.add('current-slide');
};

const hideShowArrows = (slides, prevButton, nextButton, targetIndex) => {
    if (targetIndex === 0) {
        nextButton.classList.remove('is-hidden');
        prevButton.classList.add('is-hidden');
    } else if (targetIndex === slides.length - 1) {
        nextButton.classList.add('is-hidden');
        prevButton.classList.remove('is-hidden');
    } else {
        nextButton.classList.remove('is-hidden');
        prevButton.classList.remove('is-hidden');
    }
}



prevButton.addEventListener('click', e => {
    const currentSlide = track.querySelector('.current-slide');
    const prevSlide = currentSlide.previousElementSibling;
    const currentDot = dotsNav.querySelector('.current-slide');
    const prevDot = currentDot.previousElementSibling;
    const prevIndex = slides.findIndex(slide => slide === prevSlide);

    moveToSlide(track, currentSlide, prevSlide);
    updateDots(currentDot, prevDot);
    hideShowArrows(slides, prevButton, nextButton, prevIndex);
});


nextButton.addEventListener('click', e => {
    const currentSlide = track.querySelector('.current-slide');
    const nextSlide = currentSlide.nextElementSibling;
    const currentDot = dotsNav.querySelector('.current-slide');
    const nextDot = currentDot.nextElementSibling;
    const nextIndex = slides.findIndex(slide => slide === nextSlide);
    
    moveToSlide(track, currentSlide, nextSlide);
    updateDots(currentDot, nextDot);
    hideShowArrows(slides, prevButton, nextButton, nextIndex);
});


dotsNav.addEventListener('click', e => {
    const targetDot = e.target.closest('button');

    if (!targetDot) return;

    const currentSlide = track.querySelector('.current-slide');
    const currentDot = dotsNav.querySelector('.current-slide');
    const targetIndex = dots.findIndex(dot => dot === targetDot);
    const targetSlide = slides[targetIndex];

    moveToSlide(track, currentSlide, targetSlide);
    updateDots(currentDot, targetDot);
    hideShowArrows(slides, prevButton, nextButton, targetIndex);
});