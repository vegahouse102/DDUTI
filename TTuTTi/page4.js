const page4_Image = {
    BREAD_SELECT: "../imageFile/Bread_Select.PNG",
    FIND_ZONES: "../imageFile/Find_Zones.PNG"
}

// 타이머 재기
var time_Set;



function page4_Call() {
    setTimeout(() => {
        Page4_Create();
    }, 200);
}



// page4 스크린 만들기
function Page4_Create() {
    const page4_Div = document.createElement('div');
    page4_Div.classList.add('page4_class');

    page4_Div.style.left = '100%';
    setTimeout(() => {
        page4_Div.style.transition = 'left 1.2s ease-in-out';
        page4_Div.style.left = '0%';
    }, 100);

    Page4_Text_Vol_1(page4_Div);
    Page4_Text_Vol_2(page4_Div);
    Page4_Image_Game(page4_Div);
    Page4_Text_Vol_3(page4_Div);

    contentDiv_4.appendChild(page4_Div);

    Next_Page_TimeSet(page4_Div);
}



// 첫번째 문구
function Page4_Text_Vol_1(m_div) {
    const page4_Text = document.createElement('div');
    page4_Text.classList.add('page4_Text_1');

    page4_Text.innerHTML = '성심당 빵집에서 달콤한 시간을 즐겨보세요.';

    m_div.appendChild(page4_Text);
}

// 두번째 문구
function Page4_Text_Vol_2(m_div) {
    const page4_Text = document.createElement('div');
    page4_Text.classList.add('page4_Text_2');

    page4_Text.innerHTML = '게임에 참가하면서 성심당의 다양한 빵들을 경험하세요.';

    m_div.appendChild(page4_Text);
}

// 세번째 문구
function Page4_Text_Vol_3(m_div) {
    const page4_Text = document.createElement('div');
    page4_Text.classList.add('page4_Text_3');

    page4_Text.innerHTML = '이미지를 클릭하여 빵집 게임을 시작해보세요!';

    m_div.appendChild(page4_Text);
}

// 이미지 부분
function Page4_Image_Game(m_div) {
    const Image_Group = document.createElement('div');
    Image_Group.classList.add('page4_Image_Group');

    const image_1 = new Image();
    const image_2 = new Image();
    image_1.src = page4_Image.BREAD_SELECT;
    image_2.src = page4_Image.FIND_ZONES;

    image_1.addEventListener('click', function() {
        Game_Screen_Create(1, m_div);
        Next_Page_Stop();
    });
    image_2.addEventListener('click', function() {
        Game_Screen_Create(2, m_div);
        Next_Page_Stop();
    });

    Image_Group.appendChild(image_1);
    Image_Group.appendChild(image_2);

    m_div.appendChild(Image_Group);
}



// 게임 플레이 화면
function Game_Screen_Create(m_index, m_div) {
    const game_Screen = document.createElement('div');
    game_Screen.classList.add('page4_Game_Screen');

    // 백그라운드 생성
    const game_bg = document.createElement('div');
    game_bg.classList.add('page4_Game_Background');

    // 게임 스크린
    const game_Play = document.createElement('div');
    game_Play.classList.add('page4_Game_Play');
    game_Screen.appendChild(game_Play);
    setTimeout(() => {
        game_Play.style.top = '5%';
    }, 100);

    // 게임 플레이 진행
    setTimeout(() => {
        const iframe = document.createElement('iframe');

        iframe.frameBorder = '0';
        iframe.allowFullscreen = true;
        iframe.id = 'frame';

        // 빵 맞추기
        if (m_index == 1) {
            iframe.width = '27.2%';
            iframe.height = '37%';
            iframe.src = 'https://xd.adobe.com/embed/1c65ce91-db23-4c02-80da-0428e74525be-4936/';
            iframe.style.left = '8.5%';
            iframe.style.top = '-5.5%';
        }
        // 빵 구역 맞추기
        else if (m_index == 2) {
            iframe.width = '31%';
            iframe.height = '37%';
            iframe.src = 'https://xd.adobe.com/embed/7d6c24ec-7865-4661-98cf-8b6486d0f5bb-283f/';
            iframe.style.left = '3.0%';
            iframe.style.top = '-5.5%';
        }

        game_Play.appendChild(iframe);
    }, 800);

    // 1초 후에 크기를 변경하여 위로 올라가는 애니메이션 효과 (배경)
    setTimeout(function() {
        game_bg.style.height = '100%';
    }, 100);

    // 배경 클릭 시 종료
    game_bg.addEventListener('click', function() {
        this.style.height = '0';
        game_Play.style.top = '105%';
        
        setTimeout(() => {
            game_Screen.remove();
            Next_Page_TimeSet(m_div);
        }, 1000);
    });

    game_Screen.appendChild(game_bg);
    m_div.appendChild(game_Screen);
}



// 다음 페이지 시간 활성화
function Next_Page_TimeSet(m_div) {
    time_Set = setTimeout(() => {
        m_div.style.left = '-100%';
        content_body.style.backgroundImage = 'none';
        setTimeout(() => {
            m_div.remove();
            page_count = 3;
            watch_Count_Page();
        }, 1600);
    }, 6000);
}

// 페이지 종료
function Next_Page_Stop() {
    clearInterval(time_Set);
}