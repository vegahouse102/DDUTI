let page_count = 2;

const body_Background = {
    BACKGROUND : "url('../imageFile/background.jpg')",
    MAP : "url('../imageFile/map.png')"
};

// newDiv 내용물을 출력하기 위한 div class 가져옴
const content_body = document.querySelector('body');
const contentDiv = document.querySelector('.page1');
const contentDiv_2 = document.querySelector('.page2');
const contentDiv_3 = document.querySelector('.page3');
const contentDiv_4 = document.querySelector('.page4');

// 성심당 이야기를 넣을 페이지 추가
const newDiv = [];

function watch_Count_Page() {
    if (page_count == 1) {
        content_body.style.backgroundImage = body_Background.BACKGROUND;
        page1_Call();
    }
    if (page_count == 2) {
        page4_Call();
    }
    if (page_count == 3) {
        content_body.style.backgroundImage = 'none';
        page3_Call();
    }
    if (page_count == 4) {
        page2_Call();
    }
}

watch_Count_Page();