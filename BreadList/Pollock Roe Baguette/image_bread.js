const images = ["../../imageFile/Pollock Roe Baguette.png", "../../imageFile/Pollock Roe Baguette_2.png"];
let currentImageIndex = 0;

function showImage(index) {
    if (index >= 0 && index < images.length) {
        const galleryImage = document.getElementById("gallery-image");
        galleryImage.src = images[index];
        currentImageIndex = index;
        updateImageCounter();
    }
}

function showNextImage() {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    showImage(currentImageIndex);
}

function updateImageCounter() {
    const imageCounter = document.getElementById("image-counter");
    imageCounter.textContent = `${currentImageIndex + 1}/${images.length}`;
    imageCounter.style.color = 'white';
}

// 초기 이미지 표시
showImage(currentImageIndex);

const ImgElement = document.querySelector('.end_lock');
const EndPhrase = document.querySelector('.end_phrase');

// 메인 홈페이지 이동
EndPhrase.addEventListener('click', function () {
    window.location.href = '../../Bread/main.html';

    EndPhrase.style.backgroundColor = 'black';
    EndPhrase.style.color = 'white';
});