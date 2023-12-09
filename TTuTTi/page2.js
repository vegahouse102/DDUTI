const video_Link = {
    TV_1: "../MediaFile/TV_1.mp4",
    TV_2: "../MediaFile/TV_2.mp4",
    TV_3: "../MediaFile/TV_3.mp4"
}

const image_Link = {
    STARTUP: "../imageFile/Start Up.jpg"
}

const video_Array = [];
let video_Array_Count = 0;



function page2_Call() {
    setTimeout(() => {
        page2_Window_Create();
    }, 5000);
}



// page2 윈도우 생성
function page2_Window_Create() {
    const media_Window = document.createElement('div');
    media_Window.classList.add('media_play');
    media_Window.style.left = '100vw';

    // Media Window 창에 대입
    Window_First_Sentence(media_Window);
    Window_Second_Senence(media_Window);
    Window_Third_MediaClass(media_Window);
    Window_Fourth_Sentence(media_Window);

    contentDiv_2.appendChild(media_Window);

    // Media 재생
    setTimeout(() => {
        media_Window.style.transition = 'left 2.0s ease-in-out';
        media_Window.style.left = '0vw';
        playNextVideo(media_Window);
    }, 2200);
}

function playNextVideo(m_media_Window) {
    // 비디오 재생
    const currentVideo = video_Array[video_Array_Count];
    if (video_Array_Count == 0) {
        setTimeout(() => {
            currentVideo.style.left = '7.5vw';
            setTimeout(() => {
                currentVideo.play();
            }, 2000);
        }, 2000);
    }
    else {
        currentVideo.style.left = '7.5vw';
        setTimeout(() => {
            currentVideo.play();
        }, 2000);
    }
  
    // 비디오 종료 시 다음 활동
    currentVideo.addEventListener('ended', function() {
      currentVideo.style.left = '-100vw';
      video_Array_Count++;
  
      // 마지막 비디오가 아니면 다음 비디오 재생
      if (video_Array_Count < video_Array.length) {
        setTimeout(() => {
            playNextVideo(m_media_Window);
        }, 2000);
      }
      // 마지막이라면 다음 페이지 불러오기
      else {
        setTimeout(() => {
            m_media_Window.style.left = '-100vw';
            setTimeout(() => {
                m_media_Window.remove();
                video_Array.length = 0;
                page_count = 3;
                watch_Count_Page();
                video_Array_Count = 0;
            }, 2200);
        }, 2000);
      }
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
    for (let index = 0; index < 3; index++) {
        const videoElement = document.createElement('video');
        videoElement.src = video_Link[`TV_${index + 1}`];

        Video_Setting(videoElement);

        video_Array.push(videoElement);
        element_Media.appendChild(videoElement);
    }

    // div에 video 태그 추가
    mediaClass.appendChild(element_Media);
    m_window.appendChild(mediaClass);
}

// video 세부 설정
function Video_Setting(m_video) {
    m_video.autoplay = false; // 자동 재생 설정
    m_video.muted = 'mute';
    m_video.setAttribute('controls', true);

    // JavaScript로 비디오 크기 설정
    m_video.style.position = 'absolute';
    m_video.style.width = '85vw';
    m_video.style.height = '55vh';
    m_video.style.left = '0vw';
    m_video.style.top = '17vh';

    m_video.style.left = '100vw';
    m_video.style.transition = 'left 2.0s ease-in-out';
}

// Media창 네 번째 문구
function Window_Fourth_Sentence(m_window) {
    const media_Sentence = document.createElement('div');
    media_Sentence.classList.add('media_Fourth_Sentence');

    media_Sentence.innerHTML = '성심당 창업 60주년 기념 전시';
    m_window.appendChild(media_Sentence);
}