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
        page2_Call();
    }
    if (page_count == 3) {
        content_body.style.backgroundImage = 'none';
        page3_Call();
    }
    if (page_count == 4) {
        content_body.style.backgroundImage = 'none';
        page4_Call();
    }
}

watch_Count_Page();

document.addEventListener('wheel', function(event) {
    // wheel 이벤트 발생 시 실행되는 함수
    if (event.ctrlKey) {
        // Ctrl 키가 눌린 상태에서 휠을 움직일 때
        if (event.deltaY > 0) {
            console.log('Ctrl + 휠을 아래로 스크롤했습니다.');
            // 여기에 원하는 동작을 추가할 수 있습니다.
        } else if (event.deltaY < 0) {
            console.log('Ctrl + 휠을 위로 스크롤했습니다.');
            // 여기에 원하는 동작을 추가할 수 있습니다.
        }
    }
});