let carouselItems = document.querySelectorAll('.gambar-carousel');
let currentActive = 0;

// ngubah gambar
function changeActive(index) {
    carouselItems[currentActive].classList.remove('active');
    carouselItems[index].classList.add('active');
    currentActive = index;
}

// berubah 5 detik sekali
setInterval(() => {
    let nextIndex = (currentActive + 1) % carouselItems.length;
    changeActive(nextIndex);
}, 3000);

// siku kanan/kiri
document.querySelector('.kiri').addEventListener('click', () => {
    let prevIndex = (currentActive - 1 + carouselItems.length) % carouselItems.length;
    changeActive(prevIndex);
});

document.querySelector('.kanan').addEventListener('click', () => {
    let nextIndex = (currentActive + 1) % carouselItems.length;
    changeActive(nextIndex);
});
