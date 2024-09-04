const words = ['Web Designer', 'Data Analyst','Frontend Developer'];
let currentWordIndex = 0;
let currentCharIndex = 0;
const textElement = document.querySelector('.text');
const cursorElement = document.querySelector('.typed-cursor');

function type() {
    if (currentCharIndex < words[currentWordIndex].length) {
        textElement.textContent += words[currentWordIndex].charAt(currentCharIndex);
        currentCharIndex++;
        setTimeout(type, 100); // Adjust typing speed here
    } else {
        setTimeout(erase, 2000); // Pause before erasing
    }
}

function erase() {
    if (currentCharIndex > 0) {
        textElement.textContent = words[currentWordIndex].substring(0, currentCharIndex - 1);
        currentCharIndex--;
        setTimeout(erase, 50); // Adjust erasing speed here
    } else {
        currentWordIndex = (currentWordIndex + 1) % words.length;
        setTimeout(type, 500);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    setTimeout(type, 500); // Start typing after a short delay
});


//scroll


const scrollToTopBtn = document.getElementById("scrollToTopBtn");


window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
        scrollToTopBtn.classList.add("show");
    } else {
        scrollToTopBtn.classList.remove("show");
    }
});


scrollToTopBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});


//skill


document.addEventListener("DOMContentLoaded", function () {
    const progressBars = document.querySelectorAll('.skill-bar .progress');

    progressBars.forEach(bar => {
        const percentage = bar.getAttribute('data-percentage');
        bar.style.width = percentage + '%';
    });
});
