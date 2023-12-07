const images = ["../../imageFile/ShrimpOctopus.png", "../../imageFile/ShrimpOctopus_2.jpg"];
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

ImgElement.addEventListener('click', function() {
    window.location.href = '../../Bread/main.html';
});