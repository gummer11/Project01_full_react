const imageContainerEl = document.querySelector('.images');
const images = document.querySelectorAll('.images img');
const prevBtn = document.querySelector('.fa-chevron-left');
const nextBtn = document.querySelector('.fa-chevron-right');
let idx = 0;
let interval = setInterval(generateNextImage, 3000);

function generateNextImage() {
    idx++;
    changeImage();
}

function changeImage() {
    if (idx > images.length - 1) {
        idx = 0;
    } else if (idx < 0) {
        idx = images.length - 1;
    }
    imageContainerEl.style.transform = `translateX(${-idx * 700}px)`;
}

function resetInterval() {
    clearInterval(interval);
    interval = setInterval(generateNextImage, 3000);
}

nextBtn.addEventListener('click', () => {
    idx++;
    changeImage();
    resetInterval();
})

prevBtn.addEventListener('click', () => {
    idx--;
    changeImage();
    resetInterval();
})