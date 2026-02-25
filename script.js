/* Smooth Scroll */
function scrollToSection(id){
    document.getElementById(id).scrollIntoView({behavior:"smooth"});
}

/* Active Nav Highlight */
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll",()=>{
    let current="";
    sections.forEach(section=>{
        const sectionTop = section.offsetTop - 150;
        if(pageYOffset >= sectionTop){
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link=>{
        link.classList.remove("active");
        if(link.getAttribute("href") === "#"+current){
            link.classList.add("active");
        }
    });
});

/* Scroll Reveal Animation */
const cards = document.querySelectorAll(".project-card");

window.addEventListener("scroll",()=>{
    cards.forEach(card=>{
        const cardTop = card.getBoundingClientRect().top;
        if(cardTop < window.innerHeight - 100){
            card.classList.add("show");
        }
    });
});

/* Contact Form Validation */
document.getElementById("contactForm").addEventListener("submit",function(e){
    e.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();

    if(name === "" || email === "" || message === ""){
        alert("Please fill all fields!");
        return;
    }

    document.getElementById("successMessage").style.display="block";
    this.reset();
});

(function () {

    const sliderTrack = document.querySelector('#projects .slider-track');
    const nextBtn = document.querySelector('#projects .next');
    const prevBtn = document.querySelector('#projects .prev');

    if (!sliderTrack) return; // Safety check

    let sliderCards = sliderTrack.querySelectorAll('.project-card');
    let sliderIndex = 1;

    // Clone first & last
    const firstClone = sliderCards[0].cloneNode(true);
    const lastClone = sliderCards[sliderCards.length - 1].cloneNode(true);

    sliderTrack.appendChild(firstClone);
    sliderTrack.insertBefore(lastClone, sliderCards[0]);

    sliderCards = sliderTrack.querySelectorAll('.project-card');

    const gap = 20;
    let cardWidth = sliderCards[0].offsetWidth + gap;

    sliderTrack.style.transform = `translateX(-${cardWidth * sliderIndex}px)`;

    nextBtn.addEventListener('click', () => {
        if (sliderIndex >= sliderCards.length - 1) return;
        sliderIndex++;
        sliderTrack.style.transition = "0.5s ease";
        sliderTrack.style.transform = `translateX(-${cardWidth * sliderIndex}px)`;
    });

    prevBtn.addEventListener('click', () => {
        if (sliderIndex <= 0) return;
        sliderIndex--;
        sliderTrack.style.transition = "0.5s ease";
        sliderTrack.style.transform = `translateX(-${cardWidth * sliderIndex}px)`;
    });

    sliderTrack.addEventListener('transitionend', () => {
        if (sliderCards[sliderIndex].isEqualNode(firstClone)) {
            sliderTrack.style.transition = "none";
            sliderIndex = 1;
            sliderTrack.style.transform = `translateX(-${cardWidth * sliderIndex}px)`;
        }

        if (sliderCards[sliderIndex].isEqualNode(lastClone)) {
            sliderTrack.style.transition = "none";
            sliderIndex = sliderCards.length - 2;
            sliderTrack.style.transform = `translateX(-${cardWidth * sliderIndex}px)`;
        }
    });

    window.addEventListener('resize', () => {
        cardWidth = sliderCards[0].offsetWidth + gap;
        sliderTrack.style.transition = "none";
        sliderTrack.style.transform = `translateX(-${cardWidth * sliderIndex}px)`;
    });

    // ===== AUTO SLIDE =====
let autoSlide = setInterval(() => {
    nextBtn.click();
}, 3000); // 3000 = 3 seconds (change if you want)

// Pause on hover
const sliderContainer = document.querySelector('#projects .slider-container');

sliderContainer.addEventListener('mouseenter', () => {
    clearInterval(autoSlide);
});

sliderContainer.addEventListener('mouseleave', () => {
    autoSlide = setInterval(() => {
        nextBtn.click();
    }, 1500);
});


})();


