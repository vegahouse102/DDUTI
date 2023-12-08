const video_Link = {
    STARTUP: "../MediaFile/startup.mp4"
}

const image_Link = {
    STARTUP: "../imageFile/Start Up.jpg"
}



function page2_Call() {
    setTimeout(() => {
        page2_Window_Create();
    }, 5000);
}



// page2 윈도우 생성
function page2_Window_Create() {
    const media_Window = document.createElement('div');
    media_Window.classList.add('media_play');

    // Media Window 창에 대입
    Window_First_Sentence(media_Window);
    Window_Second_Senence(media_Window);
    Window_Third_MediaClass(media_Window);
    Window_Fourth_Sentence(media_Window);

    contentDiv_2.appendChild(media_Window);

    // Media 재생
    const video_Load = media_Window.querySelector('video');
    media_Window.style.left = '100vw';
    setTimeout(() => {
        media_Window.style.transition = 'left 2.0s ease-in-out';
        media_Window.style.left = '0vw';

        setTimeout(() => {
            video_Load.play();
        }, 1600);
    }, 100);

    // 비디오 종료시 다음
    video_Load.addEventListener('ended', () => {
        media_Window.style.left = '-100vw';
        setTimeout(() => {
            media_Window.style.transition = 'none';
            media_Window.remove();
        }, 2200);
        page_count = 3;
        watch_Count_Page();
    });
}

// Media창 첫 번째 문구
function Window_First_Sentence(m_window) {
    const media_Sentence = document.createElement('div');
    media_Sentence.classList.add('media_First_Sentence');

    const md_sentence = '성심당 MEDIA';
    
    // 영문자만 볼드처리하는 함수
    const boldEnglishText = (text) => {
        const newText = text.replace(/[a-zA-Z]+/g, (match) => {
            return `<span class="bold-text">${match}</span>`;
        });
        return newText;
    };

    media_Sentence.innerHTML = boldEnglishText(md_sentence);
    m_window.appendChild(media_Sentence);
}

// Media창 두 번째 문구
function Window_Second_Senence(m_window) {
    const media_Sentence = document.createElement('div');
    media_Sentence.classList.add('media_Second_Sentence');

    media_Sentence.innerHTML = 'SUNGSIMDANG MEDIA';
    m_window.appendChild(media_Sentence);
}

// Media창 세 번째 Class
function Window_Third_MediaClass(m_window) {
    const mediaClass = document.createElement('div');
    mediaClass.classList.add('media_Third');

    const element_Media = document.createElement('div');
    element_Media.classList.add('media_Detail');

    // video 태그 생성 및 설정
    const videoElement = document.createElement('video');
    videoElement.src = video_Link.STARTUP; // 동영상 파일 경로 입력
    videoElement.autoplay = false; // 자동 재생 설정
    videoElement.muted = 'mute';
    videoElement.setAttribute('controls', true);

    // JavaScript로 비디오 크기 설정
    videoElement.style.width = '100vw';
    videoElement.style.height = '60vh';

    // div에 video 태그 추가
    element_Media.appendChild(videoElement);
    mediaClass.appendChild(element_Media);
    m_window.appendChild(mediaClass);
}

// Media창 네 번째 문구
function Window_Fourth_Sentence(m_window) {
    const media_Sentence = document.createElement('div');
    media_Sentence.classList.add('media_Fourth_Sentence');

    media_Sentence.innerHTML = '성심당 창업 60주년 기념 전시';
    m_window.appendChild(media_Sentence);
}