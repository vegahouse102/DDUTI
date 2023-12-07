const other_images = [
  "../../imageFile/bomunsan_echo.jpg",
  "../../imageFile/echo.jpg",
  "../../imageFile/fried_soboro.png",
  "../../imageFile/leek_bread.png",
  "../../imageFile/soboro.jpg",
  "../../imageFile/sweetbread.png",
];  // 뷰에 표시할 이미지

const duplicated_images = [...other_images];

const menuImages_1 = document.querySelector('.other_menu_array');
const menuImages_2 = document.querySelector('.other_menu_array2')
let currentIndex_1 = 4;
let currentIndex_2 = 0;
const interval = 3000; // 이미지 슬라이드 간격 (3초)

let menu1_x = 0;
let menu2_x = 200;

function updateImages() {
  // 이미지 업데이트
  menuImages_1.innerHTML = '';
  other_images.forEach(imageSrc => {
    const img = document.createElement('img');
    img.src = imageSrc;
    menuImages_1.appendChild(img);
  });

  menuImages_2.innerHTML = '';
  duplicated_images.forEach(imageSrc => {
    const img = document.createElement('img');
    img.src = imageSrc;
    menuImages_2.appendChild(img);
  });

  menuImages_2.style.transform = `translateX(${menu2_x}%)`;
}

function slideImages() {
  currentIndex_1++;
  currentIndex_2++;

  menu1_x = 200 - currentIndex_1 * 50;
  menu2_x = 200 - currentIndex_2 * 50;

  menuImages_1.style.transform = `translateX(${menu1_x}%)`;
  menuImages_2.style.transform = `translateX(${menu2_x}%)`;

  // 이미지 뷰가 일정 x축에 도달 시, 위치 초기화
  if (menu1_x == -400) {
    menuImages_1.style.transition = 'none';
    menuImages_1.style.transform = `translateX(200%)`;
    currentIndex_1 = 0;
  }
  if (menu2_x == -400) {
    menuImages_2.style.transition = 'none';
    menuImages_2.style.transform = `translateX(200%)`;
    currentIndex_2 = 0;
  }

  if (currentIndex_1 == 1) {
    menuImages_1.style.transition = 'transform 1.5s ease';
  }
  if (currentIndex_2 == 1) {
    menuImages_2.style.transition = 'transform 1.5s ease';
  }
}

updateImages();  
setInterval(slideImages, interval); // 이미지 자동 슬라이딩