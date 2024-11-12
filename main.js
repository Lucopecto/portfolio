// Background menu on scroll

const header = document.getElementById("menu");

window.addEventListener("scroll", () => {
    if (window.scrollY > 5) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});



const updateBackgroundPosition = (xPercent, yPercent) => {
    section.style.background = `radial-gradient(circle at ${xPercent}% ${yPercent}%, rgb(27, 48, 75), rgb(27, 38, 60), rgb(27, 28, 45))`;
};

const section = document.getElementById("welcome");

document.addEventListener("mousemove", (event) => {
    const xPercent = (event.clientX / window.innerWidth) * 100;
    const yPercent = (event.clientY / window.innerHeight) * 100;
    updateBackgroundPosition(xPercent, yPercent);
});

window.addEventListener("load", () => {
    const xPercent = (window.innerWidth / 2) * 100 / window.innerWidth;
    const yPercent = (window.innerHeight / 2) * 100 / window.innerHeight;
    updateBackgroundPosition(xPercent, yPercent);
});



// Sélectionner chaque titre
const typingText1 = document.getElementById("typing-text-1");
const typingText2 = document.getElementById("typing-text-2");
const typingText3 = document.getElementById("typing-text-3");

typingText2.classList.add("no-blink");
typingText3.classList.add("no-blink");

// Écouter la fin de chaque animation pour arrêter le clignotement
typingText1.addEventListener("animationend", () => {
    typingText1.classList.add("no-blink");
    typingText2.classList.remove("no-blink");
});

typingText2.addEventListener("animationend", () => {
    typingText2.classList.add("no-blink");
    typingText3.classList.remove("no-blink");
});