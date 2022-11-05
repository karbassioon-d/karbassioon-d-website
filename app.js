
//show on scroll
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});

//card flip animations
const hiddenElements = document.querySelectorAll('.sectionFull');
hiddenElements.forEach((el) => observer.observe(el));


const card = document.querySelector('.card__inner');
card.addEventListener('click', function() {
    card.classList.toggle('is-flipped');
})


//typing animation
var typed = new Typed(".auto-type", {
    strings: ["I'm a Front-End Developer.", "Welcome to my website!"],
    typeSpeed: 35,
    backSpeed: 25,
    loop: true,
    showCursor: false
})
