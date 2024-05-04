function moveOver(a) {
    document.getElementById(a).style.backgroundColor = "red";
    document.getElementById(a).style.color = "white";
}
function moveOut(b) {
    document.getElementById(b).style.backgroundColor = null;
    document.getElementById(b).style.color = null;
}
const slides = document.querySelectorAll('.slide');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

let activeSlide = 0;

function showSlide(slideIndex) {
    slides.forEach(slide => slide.style.display = 'none');
    slides[slideIndex].style.display = 'block';
}

showSlide(activeSlide);

prevBtn.addEventListener('click', () => {
    activeSlide = (activeSlide - 1 + slides.length) % slides.length;
    showSlide(activeSlide);
});

nextBtn.addEventListener('click', () => {
    activeSlide = (activeSlide + 1) % slides.length;
    showSlide(activeSlide);
});
